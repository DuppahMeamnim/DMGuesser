import { Box, NumberInput } from "@mantine/core";
import { useState } from "react";

export default function GuessNumber() {
  const [guessedNumber, setGuessedNumber] = useState(0);

  const handleChange = (newValue: number) => {
    if (newValue >= 0 && newValue <= 100) {
      setGuessedNumber(newValue);
    } else {
      setGuessedNumber("");
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NumberInput
        size="xl"
        radius="lg"
        label="Guess Damage"
        description="ye"
        placeholder="( ͡° ͜ʖ ͡°)"
        styles={{ input: { textAlign: "center" } }}
        min={0}
        max={100}
        value={guessedNumber}
        onChange={handleChange}
      />
    </Box>
  );
}
