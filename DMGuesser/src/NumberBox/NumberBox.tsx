import { Flex, Paper, Text } from "@mantine/core";
import { ChevronDown, ChevronsDown, ChevronsUp, ChevronUp, Crosshair, CornerDownLeft } from "react-feather";
import { motion } from 'framer-motion'
import { useMediaQuery } from "@mantine/hooks";

interface NumberBoxProps {
  word: string;
  guess: string;
  isGuessed: boolean;
  onClick: () => void;
}

<script src=""></script>

export default function NumberBox({ word, guess, isGuessed, onClick }: NumberBoxProps) {

  const GetSquareColor = (isOutline: boolean): string => {
    const wordInt: number = parseInt(word, 10)
    const guessInt: number = parseInt(guess, 10)

    if (!isGuessed) return isOutline ? "#c4c4c4" : "#020202"

    if (wordInt == guessInt) {
      return "green"
    }

    if (Math.abs(wordInt - guessInt) < 25) {
      return "yellow"
    }

    return "red"
  }

  const GetSquareIcon = () => {
    const wordInt: number = parseInt(word, 10)
    const guessInt: number = parseInt(guess, 10)

    if (!isGuessed) {
      return <CornerDownLeft strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"} />
    }

    if (wordInt == guessInt) {
      return <Crosshair strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"} />
    }

    if (Math.abs(wordInt - guessInt) < 25) {
      if (wordInt > guessInt) {
        return <ChevronUp strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"} />
      } else {
        return <ChevronDown strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"} />
      }
    }

    if (wordInt > guessInt) {
      return <ChevronsUp strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"}
      />
    } else {
      return <ChevronsDown strokeWidth={3} size={isMobile ? "4vw" : "1.5vw"} />
    }
  }

  const handleClick = () => {
    if (!isGuessed) {
      onClick()
    }
  }

  const isMobile = useMediaQuery('(max-width: 1100px)')

  return (
    <Flex
      justify="center"
      align="center"
      gap={isMobile ? "10px" : ".5vw"}
      mt={isMobile ? ".75vh" : ".75vh"}
      pl={isMobile ? "10px" : ".75vw"}
    >
      {new Array(3).fill(0).map((_, i) => (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={i}
        >
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: isMobile ? "4vw" : "1.5vw",
              userSelect: 'none',
            }}
            bd="1% solid #c4c4c4"
            radius={15}
            h={isMobile ? "8vh" : "7vh"}
            w={isMobile ? "8vh" : "7vh"}
            bg="#020202"
            c="#a1a1a1"
          >
            {<Text size={isMobile ? "6vw" : "1.5vw"}>{guess[i]}</Text>}
          </Paper>
        </motion.a>
      ))}

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            userSelect: 'none',
          }}
          onClick={handleClick}
          bd={`3px solid ${GetSquareColor(true)}`}
          bg={GetSquareColor(false)}
          h={isMobile ? "6vh" : "6vh"}
          w={isMobile ? "6vh" : "6vh"}
          c="white"
          radius={100}
        >
          {GetSquareIcon()}
        </Paper>
      </motion.a>
    </Flex>
  );
}