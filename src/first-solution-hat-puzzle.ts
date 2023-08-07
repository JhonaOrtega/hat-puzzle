import { availableHats } from ".";

export function computePersonsQueue(hatNumbers: number): string[] {
    const selectedHats: string[] = [];
    const copyAvailableHats = availableHats.slice();

    if (hatNumbers > availableHats.length) {
        throw new Error("The number of participants exceed the number of hats available");
    }
    for (let index = 0; index < hatNumbers; index++) {
        const randomIndex = Math.floor(Math.random() * copyAvailableHats.length);
        const value = copyAvailableHats.splice(randomIndex, 1)[0];
        selectedHats.push(value);
    }
    return selectedHats;
}

export function firstHatPuzzleSolution(line: string[]): boolean[] {
    let responseBoolean: boolean[] = [];

    // rules for the 3rd in line
    if (line[1] == 'Y' && line[2] == 'Y') {
        responseBoolean.push(true);
    } else responseBoolean.push(false);
    //rules for the 2nd in line
    // yellow hat                                        blue hat
    if (responseBoolean[0] == true || (line[2] == 'Y' && responseBoolean[0] === false)) {
        responseBoolean.push(true);
    } else responseBoolean.push(false);
    //rules for the 1st in line
    //         yellow hat                         yellow hat                                             blue hat
    if (responseBoolean[0] === true || responseBoolean[1] === true || (responseBoolean[0] === false && responseBoolean[1] === false)) {
        responseBoolean.push(true)
    } else responseBoolean.push(false);
    return responseBoolean;
}

// First code that I came up with, I wrote the possible responses (false or true) that the array of person could have.

// True responses
// last position: if it sees 2 Y
// mid position: if the last position response is true OR if the last position is false and he sees a Y
// first position: if the last position response is true OR the mid position response is true OR the responses of both are false


// False responses
// last position: if it doesnt see 2 Y
// mid position  if last position is false and it doesnt see a Y
// first position: no posible false response combination

// After seein this I decided to create a second solution using the false responses as the conditional trying to simplify the code, which is the code in src/second-solution-hat-puzzle.ts