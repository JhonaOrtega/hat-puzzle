// final second solution

export function secondHatPuzzleSolution(selectedHats: String[]): boolean[] {
    let guesses: boolean[] = [true, true, true];

    for (let index = 0; index < selectedHats.length; index++) {
        const frontViewArray = selectedHats.slice(index + 1, selectedHats.length);
        const frontViewBlues = frontViewArray.filter(color => color === 'B').length;
        const frontViewYellow = frontViewArray.filter(color => color === 'Y').length;

        if (index == 0 && frontViewYellow != 2) {
            guesses[index] = false;
        } else if (index == 1 && (guesses[index - 1] == false && frontViewYellow == 0)) {
            guesses[index] = false;
        }
    }

    return guesses;
}