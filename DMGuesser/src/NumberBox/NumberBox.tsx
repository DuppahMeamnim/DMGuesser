import { Flex, Paper } from "@mantine/core";
import { ChevronDown, ChevronsDown, ChevronsUp, ChevronUp, Crosshair } from "react-feather";
import { motion } from 'framer-motion'

interface NumberBoxProps {
  word: string;
  guess: string;
  isGuessed: boolean;
}

<script src=""></script>

export default function NumberBox({ word, guess, isGuessed }: NumberBoxProps) {

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

    if (!isGuessed) return ""

    if (wordInt == guessInt) {
      return <Crosshair strokeWidth={4} />
    }

    if (Math.abs(wordInt - guessInt) < 25) {
      if (wordInt > guessInt) {
        return <ChevronUp strokeWidth={4} />
      } else {
        return <ChevronDown strokeWidth={4} />
      }
    }

    if (wordInt > guessInt) {
      return <ChevronsUp strokeWidth={4} />
    } else {
      return <ChevronsDown strokeWidth={4} />
    }
  }

  return (
    <Flex
      justify="center"
      align="center"
      mih={50}
      gap="xs"
      mt="xs"
      direction="row"
      wrap="wrap"
      pl={30}
    >
      {new Array(3).fill(0).map((_, i) => {
        return (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Paper
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                userSelect: 'none'
              }}
              bd="3px solid #c4c4c4"
              radius={15}
              mih="75"
              bg="#020202"
              miw="75"
              c="#a1a1a1">
              {guess[i]}
            </Paper>
          </motion.a>
        )
      })
      }
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
          bd={'3px solid ' + GetSquareColor(true)}
          bg={GetSquareColor(false)}
          mih="60"
          miw="60"
          c="white"
          radius={100}
        >
          {GetSquareIcon()}
        </Paper>
      </motion.a>
    </Flex >
  );
}
