import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "csv-parse/sync";
import { stringify } from "csv-stringify/sync";
import { getAppToken } from "@/lib/twitch/getAppToken";

type GameRow = {
  slug: string;
  name: string;
  publisher: string;
  steam_appid: string;
  twitch_game_id: string;
};

const FILE = "data/games.csv";

async function main() {
  const clientId = process.env.TWITCH_CLIENT_ID;
  if (!clientId) {
    throw new Error("Missing TWITCH Credentials in .env!");
  }

  const rows: GameRow[] = parse(readFileSync(FILE, "utf8"), { columns: true });
  const token = await getAppToken();
  const notFound: string[] = [];

  for (const row of rows) {
    if (row.twitch_game_id) continue;

    const response = await fetch(
      `https://api.twitch.tv/helix/games?name=${encodeURIComponent(row.name)}`,
      {
        headers: {
          "Client-Id": clientId,
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Twitch lookup failed for ${row.name}: ${response.status}`,
      );
    }
    const data = await response.json();
    const id = data.data[0]?.id;
    if (id) {
      row.twitch_game_id = id;
    } else {
      notFound.push(row.name);
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  writeFileSync(FILE, stringify(rows, { header: true }));
  console.log(`Found ${rows.length - notFound.length} of ${rows.length}`);
  console.log("Not found:", notFound);
}

main();