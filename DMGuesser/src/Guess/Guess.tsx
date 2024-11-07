import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useStore } from "../useStore";
import NumberBox from "../NumberBox/NumberBox";
import { Box } from "@mantine/core";
import { motion } from 'framer-motion';
import { useMediaQuery } from "@mantine/hooks";
import damageData from "../DamageData/damageData";
import Popup from "./WinLosePopup";

interface GuessProps {
  damageData: damageData;
}

const Guess = forwardRef(({ damageData }: GuessProps, ref) => {
  const guesses = useStore((state) => state.guesses);
  const setGuesses = useStore((state) => state.setGuesses);

  const word = useStore((state) => state.word);
  const setWord = useStore((state) => state.setWord);

  const currentGuess = useStore((state) => state.currentGuess);
  const setCurrentGuess = useStore((state) => state.setCurrentGuess);

  const hasGameEnded = useStore((state) => state.hasGameEnded);
  const setHasGameEnded = useStore((state) => state.setHasGameEnded);

  const openModal = useStore((state) => state.openModal);
  const setOpenModal = useStore((state) => state.setOpenModal);

  const prevGuessesLength = useRef(guesses.length);
  const isNewItemAdded = guesses.length > prevGuessesLength.current;

  const hasWon = (): boolean => guesses[0] === word;
  const hasLost = (): boolean => currentGuess === 3;

  const init = (): void => {
    setWord(damageData.word);
    setGuesses(new Array(1).fill(''));
    setCurrentGuess(0);
  };

  const submitGuess = (): void => {

    if (guesses[0].length === 3) {
      setCurrentGuess(currentGuess + 1);

      const bWon: boolean = hasWon();
      const bLost: boolean = hasLost();

      if (bWon || bLost) {
        setHasGameEnded(true);
        setTimeout(() => setOpenModal(true), 500);
        if (bWon) {
          console.log("WON");
        } else if (bLost) {
          console.log("LOST");
        }
      } else {
        const newGuesses: string[] = [...guesses];
        newGuesses.unshift('');
        setGuesses(newGuesses);
      }
    }
  };

  const removeNumberFromGuess = (): void => {
    const newGuesses = [...guesses];
    newGuesses[0] = newGuesses[0].slice(0, newGuesses[0].length - 1);
    setGuesses(newGuesses);
  };

  const addNumberToGuess = (key: string): void => {
    const newGuesses = [...guesses];
    newGuesses[0] += key;
    setGuesses(newGuesses);
  };

  const handleKeyup = (e: KeyboardEvent) => {
    if (hasGameEnded) return;

    if (e.key === 'Enter') {
      submitGuess();
      return;
    }

    if (e.key === 'Backspace') {
      removeNumberFromGuess();
    }

    if (guesses[0].length < 3 && e.key.match(/^[0-9]$/)) {
      addNumberToGuess(e.key);
    }
  };

  const NumKeyPressed = (numKey: string): void => {
    if (hasGameEnded) return;

    if (numKey === 'Backspace') {
      removeNumberFromGuess();
    } else if (guesses[0].length < 3 && numKey.match(/^[0-9]$/)) {
      addNumberToGuess(numKey);
    }
  };

  useImperativeHandle(ref, () => ({
    NumKeyPressed,
  }));

  useEffect(() => init(), []);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    prevGuessesLength.current = guesses.length;
  }, [guesses.length]);

  const isMobile = useMediaQuery('(max-width: 1100px)');

  return (
    <Box h={400} w={500} mt={isMobile ? "5dvh" : "2dvh"} style={{ position: 'static' }}>
      <Popup word={word} hasGameEnded={hasGameEnded} openModal={openModal} hasWon={hasWon()} currentGuess={currentGuess} />
      {guesses.map((_, i) => (
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
            isGuessed={i !== 0 || hasGameEnded}
            onClick={submitGuess}
          />
        </motion.div>
      ))}
    </Box>
  );
});

export default Guess;
