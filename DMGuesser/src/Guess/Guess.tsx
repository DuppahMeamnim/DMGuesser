import { useEffect } from "react";
import { useStore } from "../useStore";
import NumberBox from "../NumberBox/NumberBox";

export default function Guess() {
    const guesses = useStore((state) => state.guesses);
    const setGuesses = useStore((state) => state.setGuesses);

    const word = useStore((state) => state.word);
    const setWord = useStore((state) => state.setWord);

    const currentGuess = useStore((state) => state.currentGuess);
    const setCurrentGuess = useStore((state) => state.setCurrentGuess);

    const hasGameEnded = useStore((state) => state.hasGameEnded);
    const setHasGameEnded = useStore((state) => state.setHasGameEnded)

    const hasWon = (): boolean => guesses[currentGuess] === word

    const hasLost = (): boolean => currentGuess === 3

    const init = (): void => {
        setWord("0" + Math.floor(Math.random() * 100).toString())
        setGuesses(new Array(4).fill(''))
        setCurrentGuess(0)
    }

    const submitGuess = (): void => {
        if (guesses[currentGuess].length == 3) {
            setCurrentGuess(currentGuess + 1)

            const bWon = hasWon()
            const bLost = hasLost()

            if (bWon || bLost) {
                setHasGameEnded(true)

                if (bWon) {
                    console.log("WON")
                } else if (bLost) {
                    console.log("LOST")
                }
            }
        }
    }

    const removeNumberFromGuess = (): void => {
        const newGuesses = [...guesses]
        newGuesses[currentGuess] = newGuesses[currentGuess].slice(
            0,
            newGuesses[currentGuess].length - 1
        )

        setGuesses(newGuesses)
    }

    const addNumberToGuess = (key: string): void => {
        const newGuesses = [...guesses];
        newGuesses[currentGuess] += key

        setGuesses(newGuesses)
    }

    const handleKeyup = (e: KeyboardEvent) => {
        if (hasGameEnded) return

        if (e.key === 'Enter') {
            submitGuess()
            return
        }

        if (e.key === 'Backspace') {
            removeNumberFromGuess()
        }

        if (guesses[currentGuess].length < 3 && e.key.match(/^[0-9]$/)) {
            addNumberToGuess(e.key)
        }
    }


    useEffect(() => init(), [])

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup)

        return () => {
            window.removeEventListener("keyup", handleKeyup)
        }
    }, [handleKeyup])


    return (
        guesses.map((_: string, i: number) => (
            (
                <NumberBox
                    key={i}
                    word={word}
                    guess={guesses[i]}
                    isGuessed={i < currentGuess} />
            )))
    );
}
