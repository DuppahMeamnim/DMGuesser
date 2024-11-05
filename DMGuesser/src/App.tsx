import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import Guess from "./Guess/Guess";
import exampleImage from './assets/csExampleImage.png';
import damageData from "./DamageData/damageData";
import ImageAndInformation from "./ImageAndInformation/ImageAndInformation";
import MobileKeyboard from "./CustomKeyboard/MobileKeyboard";

export default function App() {
  const damageData: damageData = {
    image: exampleImage,
    word: "034",
    distance: "123",
    weapon: "ak47",
    hitLocation: "Shoulder",
    wentThrough: "Nothing"
  };

  const isMobile = useMediaQuery('(max-width: 1100px)')

  const handleMobileKeyPress = (key: string) => {
    if (key === "backspace") {
    } else if (key === "enter") {
    } else {
    }
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
          <Guess {...damageData} />

          <Box style={{ flexGrow: 1 }} />

          {isMobile && <input
            type='number'
            inputMode='numeric'
            pattern="[0-9]*"
            style={{
              width: '5vw',        // Set the width
              height: '5vw',       // Set the height
              borderRadius: '50%',   // Make it a circle
              backgroundColor: "rgba(201, 76, 76, 1)", // Background color
              color: 'white',        // Text color
              border: 'none',        // Remove border
              textAlign: 'center',   // Center text
              fontSize: '20px',      // Font size for visibility
              outline: 'none',       // Remove outline on focus
              padding: '0',          // Remove default padding
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', // Optional shadow for effect
            }}
          />}
        </Box>
      </Box>
    </MantineProvider>
  );
}
