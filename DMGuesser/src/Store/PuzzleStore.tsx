export default function PuzzleStore() {
    let guesses: string[] = []
    let word: string = ''
    let currentGuess: number = 0

    const won = () => {
        return guesses[currentGuess - 1] === word
    }
    const lost = () => {
        return currentGuess === 6
    }
    const allGuesses = () => {
        return guesses.slice(0, currentGuess).join('').split('')
    }
    const exactGuesses = () => {
        return (
            word
                .split('')
                // if any guesses include letter in position/index
                .filter((letter, i) => {
                    return guesses
                        .slice(0, currentGuess)
                        .map((word) => word[i])
                        .includes(letter)
                })
        )
    }
    const inexactGuesses = () => {
        return word
            .split('')
            .filter((letter) => allGuesses().includes(letter))
    }
    const init = () => {
        word = Math.floor(Math.random() * 101).toString()
        guesses = new Array(4).fill('')
        currentGuess = 0
    }
    const submitGuess = () => {
        if (allGuesses().includes(guesses[currentGuess])) {
            currentGuess += 1
        }
    }
    const handleKeyup = (e: any) => {
        if (won() || lost()) {
            return
        }

        if (e.key === 'Enter') {
            return submitGuess()
        }
        if (e.key === 'Backspace') {
            guesses[currentGuess] = guesses[currentGuess].slice(
                0,
                guesses[currentGuess].length - 1
            )
            return
        }

        if (guesses[currentGuess].length < 3 && e.key.match(/^[0-9]$/)) {
            guesses[currentGuess] += e.key
        }
    }
}