import { Box, Flex } from "@mantine/core";
import { useEffect } from "react";

interface NumberBoxProps {
  word: string;
  guess: string;
  isGuessed: boolean;
}

export default function NumberBox({ word, guess, isGuessed }: NumberBoxProps) {

  useEffect(() => {
    console.log(guess)
  }, [guess])

  const GetSquareColor = (i: number) => {
    return !isGuessed ? "black" :
      guess[i] === word[i] ? "green" :
        word.includes(guess[i]) ? "yellow" :
          "black"
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

        const squareColor = GetSquareColor(i);

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
            miw="75"
            bg={squareColor}
            c="white">
            {guess[i]}
          </Box>
        )
      })
      }
    </Flex>
  );
}
