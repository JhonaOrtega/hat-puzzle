import { computePersonsQueue, firstHatPuzzleSolution } from "./first-solution-hat-puzzle";
import { secondHatPuzzleSolution } from "./second-solution-hat-puzzle";

export const availableHats: string[] = ['B', 'B', 'B', 'Y', 'Y'];

function main(): void {
  let selectedHats;
  let guesses1;
  let guesses2;

  try {
    selectedHats = computePersonsQueue(3);
    guesses1 = firstHatPuzzleSolution(selectedHats);
    guesses2 = secondHatPuzzleSolution(selectedHats);
    console.log("Selected hats: ", selectedHats);
    console.log("Guesses from first solution: ", guesses1);
    console.log("Guesses from second solution: ", guesses2);

    if (selectedHats.length != 3) {
      throw new Error('The algorithm only works with 3 participants');
    }
  } catch (error) {
    console.error("Error occurred: ", error)
  }
}

main();
