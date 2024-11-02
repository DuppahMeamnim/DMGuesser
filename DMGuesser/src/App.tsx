import "./App.css";
import "@mantine/core/styles.css";
import NumberBox from "./NumberBox/NumberBox";
import { MantineProvider, Box } from "@mantine/core";
import { useStore } from "./useStore";
import { useEffect } from "react";

export default function App() {
  const guesses = useStore((state) => state.guesses);
  const setGuesses = useStore((state) => state.setGuesses);

  const word = useStore((state) => state.word);
  const setWord = useStore((state) => state.setWord);

  const currentGuess = useStore((state) => state.currentGuess);
  const setCurrentGuess = useStore((state) => state.setCurrentGuess);

  const won = () => guesses[currentGuess - 1] === word

  const lost = () => currentGuess === 4

  const allGuesses = () => guesses.slice(0, currentGuess).join('').split('')

  const exactGuesses = () =>
  (word.split('')
    // if any guesses include letter in position/index
    .filter((letter: string, i: number) => {
      return guesses
        .slice(0, currentGuess)
        .map((word: string) => word[i])
        .includes(letter)
    })
  )

  const inexactGuesses = () => {
    return word
      .split('')
      .filter((letter: string) => allGuesses().includes(letter))
  }

  const init = () => {
    setWord(Math.floor(Math.random() * 101).toString())
    setGuesses(new Array(4).fill(''))
    setCurrentGuess(0)
  }

  const submitGuess = () => {
    if (allGuesses().includes(guesses[currentGuess])) {
      setCurrentGuess(currentGuess + 1)
    }
  }

  const handleKeyup = (e: KeyboardEvent) => {
    if (won() || lost()) {
      return
    }

    if (e.key === 'Enter') {
      return submitGuess()
    }
    if (e.key === 'Backspace') {
      const newGuesses = [...guesses]

      newGuesses[currentGuess] = newGuesses[currentGuess].slice(
        0,
        newGuesses[currentGuess].length - 1
      )

      setGuesses(newGuesses)
      return
    }

    if (guesses[currentGuess].length < 3 && e.key.match(/^[0-9]$/)) {
      const newGuesses = [...guesses];
      newGuesses[currentGuess] += e.key

      setGuesses(newGuesses)
    }
  }

  useEffect(() => init(), [])

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    return () => {
      window.removeEventListener("keyup", handleKeyup)
    }
  }, [handleKeyup])

  return <MantineProvider> {
    <Box
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#828267",  // Light yellowish-white color
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {
        guesses.map((_: string, i: number) => (
          (
            <NumberBox
              key={i}
              word={word}
              guess={guesses[i]}
              isGuessed={i < currentGuess} />
          )))
      }
    </Box>
  } </MantineProvider >;
}
