export type Guess = "higher" | "lower";

export function isGuessRight(
  knownValue: number,
  challengerValue: number,
  guess: Guess,
): boolean {
  if (knownValue === challengerValue) {
    return true;
  }
  if (guess === "higher") {
    return challengerValue > knownValue;
  }

  return knownValue > challengerValue;
}
