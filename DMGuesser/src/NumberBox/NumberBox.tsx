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

export default function NumberBox({ word, guess, isGuessed , onClick }: NumberBoxProps) {

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

    if (!isGuessed){
      return <CornerDownLeft  strokeWidth={3} size={isMobile ? "5vw" : "1.5vw"}/>
      
    }

    if (wordInt == guessInt) {
      return <Crosshair strokeWidth={3} size={isMobile ? "5vw" : "1.5vw"}/>
    }

    if (Math.abs(wordInt - guessInt) < 25) {
      if (wordInt > guessInt) {
        return <ChevronUp strokeWidth={3} size={isMobile ? "5dvw" : "1.5dvw"} />
      } else {
        return <ChevronDown strokeWidth={3} size={isMobile ? "5dvw" : "1.5dvw"} />
      }
    }

    if (wordInt > guessInt) {
      return <ChevronsUp strokeWidth={3} size={isMobile ? "5dvw" : "1.5dvw"}
      />
    } else {
      return <ChevronsDown strokeWidth={3} size={isMobile ? "5dvw" : "1.5dvw"} />
    }
  }

  const isMobile = useMediaQuery('(max-width: 1100px)')

  return (
    <Flex
      onClick={onClick}
      justify="center"
      align="center"
      gap={isMobile ? "10px" : ".5dvw"}
      mt={isMobile ? ".75dvh" : ".75dvh"}
      pl={isMobile ? "10px" : ".75dvw"}
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
              fontSize: isMobile ? "4dvw" : "1.5dvw",
              userSelect: 'none',
            }}
            bd="1% solid #c4c4c4"
            radius={15}
            h={isMobile ? "8dvh" : "7dvh"}
            w={isMobile ? "8dvh" : "7dvh"}
            bg="#020202"
            c="#a1a1a1"
          >
            {<Text size={isMobile ? "6dvw" : "1.5dvw"}>{guess[i]}</Text>}
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
<<<<<<< Updated upstream
          bd={`3px solid ${GetSquareColor(true)}`}
=======
          onClick={handleClick}
          bd={`.5dvh solid ${GetSquareColor(true)}`}
>>>>>>> Stashed changes
          bg={GetSquareColor(false)}
          h={isMobile ? "6dvh" : "6dvh"}
          w={isMobile ? "6dvh" : "6dvh"}
          c="white"
          radius={100}
        >
          {GetSquareIcon()}
        </Paper>
      </motion.a>
    </Flex>
  );
}