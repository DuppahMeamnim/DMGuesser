import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import Guess from "./Guess/Guess";
import exampleImage from './assets/csExampleImage.png';
import ImageAndInformation from "./ImageAndInformation/ImageAndInformation";
import Numpad from "./Numpad/Numpad";
import  damageData  from './DamageData/damageData';
import { useRef } from "react";
export default function App() {

  const guessRef = useRef<{ NumKeyPressed: (numKey: string) => void }>(null);  
  
  const isMobile = useMediaQuery('(max-width: 1100px)');

  const damageData: damageData = {
    image: exampleImage,
    word: "034",
    distance: "123",
    weapon: "ak47",
    hitLocation: "Shoulder",
    wentThrough: "Nothing"
  };
  const handleButtonClick = (value: string): string => {
    if (guessRef.current) {  
      guessRef.current.NumKeyPressed(value);  
    }
    return value;
  };


  return (
    <MantineProvider theme={{ fontFamily: 'Aldrich, sans-serif' }}>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#020202",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: isMobile ? "100vw" : "35vw",
            height: "100vh",
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
            mt={isMobile ? "1vh" : "1vh"}
            mb={isMobile ? "30px" : "6vh"}
            size={isMobile ? "12vw" : "4.2vw"}
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
