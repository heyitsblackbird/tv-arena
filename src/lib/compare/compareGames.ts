export function compareGames(gameA: number, gameB: number) {
    const leader: "a" | "b" | "tie" = gameA > gameB ? "a" : gameA < gameB ? "b" : "tie";
    const difference = Math.abs(gameA - gameB);

    const smaller = Math.min(gameA, gameB);
    const percentMore = smaller === 0 ? 0 : (difference / smaller) * 100;

    const total = gameA + gameB;
    const shareA = total === 0 ? 0.5 : gameA / total;
    const shareB = total === 0 ? 0.5 : gameB / total;

    return { leader, difference, percentMore, shareA, shareB };
}
