import { Paper, Flex } from '@mantine/core';
import Button from './Button';
import { useMediaQuery } from "@mantine/hooks";
import { motion } from 'framer-motion';
import { Delete } from "react-feather";

interface NumpadProps {
  onButtonClick: (number: string) => void;
}

export default function Numpad({ onButtonClick }: NumpadProps) {
  const isMobile = useMediaQuery("(max-width: 1100px)");

  return (
    <Flex
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: isMobile ? "3px" : ".2vw",
        alignItems: "center",
        marginTop: isMobile ? "1vh" : "2vh",
        width: isMobile ? "90vw" : "40vw"
      }}
    >
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num, i) => (
        <Button key={i} value={num} onClick={() => onButtonClick(num)} />
      ))}

      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none",
            cursor: "pointer",
          }}
          bd="1% solid #c4c4c4"
          radius={10}
          h = {isMobile ? "7vh" : "7vh"}
          w = {isMobile ? "10vw" : "4.5vw"}
          bg="#020202"
          c="#a1a1a1"

          onClick={() => onButtonClick("Backspace")}
        >
          <Delete size={isMobile ? "4vw" : "1.5vw"} /> 
        </Paper>
      </motion.a>
        
    </Flex>
  );
}
