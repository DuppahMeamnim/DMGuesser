import { Paper } from "@mantine/core";
import { motion } from "framer-motion";
import { useHover, useMediaQuery } from "@mantine/hooks";

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => {
  const { hovered, ref } = useHover();
  const isMobile = useMediaQuery('(max-width: 1100px)');

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <Paper
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          cursor: "pointer",
          fontSize: isMobile ? "4vw" : "1.5vw",
          transition: "background-color 0.2s",
          backgroundColor: hovered ? "#292929" : "#020202",

        }}
        bd="1% solid #c4c4c4"
        c="#a1a1a1"
        radius={10}
        h="7vh"
        w="3.5vh"
        onClick={onClick}
      >
        {value}
      </Paper>
    </motion.a>
  );
};

export default Button;
