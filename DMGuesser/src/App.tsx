import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text, Button } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import Guess from "./Guess/Guess";
import exampleImage from './assets/csExampleImage.png';
import ImageAndInformation from "./ImageAndInformation/ImageAndInformation";
import Numpad from "./Numpad/Numpad";
import damageData from './DamageData/damageData';
import { useRef, useState } from "react";
import InstructionsPopUp from "./Instructions/InstructionsPopUp"; // Corrected the import

export default function App() {
  const guessRef = useRef<{ NumKeyPressed: (numKey: string) => void }>(null);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1100px)');

  const damageData: damageData = {
    image: exampleImage,
    word: "034",
    weapon: "ak47",
    hitLocation: "Shoulder",
    wentThrough: ["Nothing", "asd"]
  };

  const handleButtonClick = (value: string): string => {
    if (guessRef.current) {
      guessRef.current.NumKeyPressed(value);
    }
    return value;
  };

  return (
    <MantineProvider theme={{ fontFamily: 'Aldrich, sans-serif' }}>
      {/* Button to open Instructions Modal */}
      <Button onClick={() => setIsInstructionsOpen(true)} style={{ position: 'absolute', top: '20px', right: '20px' }}>
        Show Instructions
      </Button>

      {/* Instructions Modal */}
      <InstructionsPopUp openModal={isInstructionsOpen} />

      <Box
        style={{
          width: "100dvw",
          height: isMobile ? "100ddvh" : "100dvh",
          backgroundColor: "#020202",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: isMobile ? "100dvw" : "35dvw",
            height: "100dvh",
            backgroundColor: "#121212",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            padding: isMobile ? "10px" : "30px",
            userSelect: "none",
          }}
        >
          <Text
            mt={isMobile ? "1dvh" : "1dvh"}
            mb={isMobile ? "30px" : "6dvh"}
            size={isMobile ? "12dvw" : "4.2dvw"}
            variant="gradient"
            gradient={{ from: '#020202', to: '#f2f2f2', deg: 360 }}
            style={{ textAlign: "center" }}
          >
            DAMAGEDLE
          </Text>
          <ImageAndInformation {...damageData} />
          <Guess ref={guessRef} damageData={damageData} />
          <Box style={{ flexGrow: 1 }} />
          <Numpad onButtonClick={handleButtonClick} />
        </Box>
      </Box>
    </MantineProvider>
  );
}
