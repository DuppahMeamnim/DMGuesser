import { Box, Flex } from "@mantine/core";
import { useEffect } from "react";
import { ChevronDown, ChevronsDown, ChevronsUp, ChevronUp, Crosshair } from "react-feather";

interface NumberBoxProps {
  word: string;
  guess: string;
  isGuessed: boolean;
}

<script src=""></script>

export default function NumberBox({ word, guess, isGuessed }: NumberBoxProps) {

  const GetSquareColor = (): string => {
    const wordInt: number = parseInt(word, 10)
    const guessInt: number = parseInt(guess, 10)

    if (!isGuessed) return "black"

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

    // 23
    //40  

    if (!isGuessed) return ""

    if (wordInt == guessInt) {
      return <Crosshair />
    }

    if (Math.abs(wordInt - guessInt) < 25) {
      if (wordInt > guessInt) {
        return <ChevronUp />
      } else {
        return <ChevronDown />
      }
    }

    if (wordInt > guessInt) {
      return <ChevronsUp />
    } else {
      return <ChevronsDown />
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
    >
      {new Array(3).fill(0).map((_, i) => {
        return (
          <Box
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            bd="2px solid white"
            mih="75"
            bg="black"
            miw="75"
            c="white">
            {guess[i]}
          </Box>
        )
      })
      }
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        bd="2px solid white"
        bg={GetSquareColor()}
        mih="75"
        miw="75"
        c="white"
      >
        {GetSquareIcon()}
      </Box>
    </Flex>
  );
}
