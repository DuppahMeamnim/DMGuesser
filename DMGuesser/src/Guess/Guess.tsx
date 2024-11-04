import { useEffect, useRef } from "react";
import { useStore } from "../useStore";
import NumberBox from "../NumberBox/NumberBox";
import { Box } from "@mantine/core";
import { motion } from 'framer-motion'
import damageData from "../DamageData/damageData";

export default function Guess(damageData: damageData) {

    const guesses = useStore((state) => state.guesses);
    const setGuesses = useStore((state) => state.setGuesses);

    const word = useStore((state) => state.word);
    const setWord = useStore((state) => state.setWord);

    const currentGuess = useStore((state) => state.currentGuess);
    const setCurrentGuess = useStore((state) => state.setCurrentGuess);

    const hasGameEnded = useStore((state) => state.hasGameEnded);
    const setHasGameEnded = useStore((state) => state.setHasGameEnded)

    const prevGuessesLength = useRef(guesses.length);
    const isNewItemAdded = guesses.length > prevGuessesLength.current;

    const hasWon = (): boolean => guesses[0] === word

    const hasLost = (): boolean => currentGuess === 3

    const init = (): void => {
        console.log("WORD: " + damageData.word)
        setWord(damageData.word)
        setGuesses(new Array(1).fill(''))
        setCurrentGuess(0)
    }

    const submitGuess = (): void => {
        console.log(word)
        if (guesses[0].length == 3) {
            setCurrentGuess(currentGuess + 1)

            const bWon: boolean = hasWon()
            const bLost: boolean = hasLost()

            if (bWon || bLost) {
                setHasGameEnded(true)

                if (bWon) {
                    console.log("WON")
                } else if (bLost) {
                    console.log("LOST")
                }
            } else {
                const newGuesses: string[] = [...guesses]
                newGuesses.unshift('')

                setGuesses(newGuesses)
            }

        }
    }

    const removeNumberFromGuess = (): void => {
        const newGuesses = [...guesses]
        newGuesses[0] = newGuesses[0].slice(
            0,
            newGuesses[0].length - 1
        )

        setGuesses(newGuesses)
    }

    const addNumberToGuess = (key: string): void => {
        const newGuesses = [...guesses];
        newGuesses[0] += key

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

        if (guesses[0].length < 3 && e.key.match(/^[0-9]$/)) {
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

    useEffect(() => {
        prevGuessesLength.current = guesses.length;
    }, [guesses.length]);

    return (
        <Box
            h={400}
            w={500}
            style={{
                position: 'static',
            }}
        >
            {guesses.map((_: string, i: number) => (
                <motion.div
                    key={i}
                    initial={isNewItemAdded && (i === 1 ? { opacity: 0, y: -20 } : i !== 0 ? { opacity: 1, y: -20 } : {})}
                    animate={isNewItemAdded && (i !== 0 ? { opacity: 1, y: 0 } : i !== 0 ? { opacity: 1, y: 0 } : {})}
                    transition={{ duration: 0.4 }}
                >
                    <NumberBox
                        key={i}
                        word={word}
                        guess={guesses[i]}
                        isGuessed={i !== 0 || hasGameEnded} />
                </motion.div>
            ))
            }
        </Box >
    );
}
