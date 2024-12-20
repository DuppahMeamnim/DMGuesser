import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text, ActionIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Guess from "./Guess/Guess";
import ImageAndInformation from "./ImageAndInformation/ImageAndInformation";
import Numpad from "./Numpad/Numpad";
import damageData, { getDailyDamageData } from "./DamageData/damageData";
import { useRef, useState } from "react";
import InstructionsPopUp from "./Instructions/InstructionsPopUp";
import { HelpCircle } from "react-feather";

export default function App() {
  const guessRef = useRef<{ NumKeyPressed: (numKey: string) => void }>(null);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(true);

  const isMobile = useMediaQuery("(max-width: 1100px)");

  const damageData: damageData = getDailyDamageData();

  const handleButtonClick = (value: string): string => {
    if (guessRef.current) {
      guessRef.current.NumKeyPressed(value);
    }
    return value;
  };

  return (
    <MantineProvider theme={{ fontFamily: "Aldrich, sans-serif" }}>
      <InstructionsPopUp
        openModal={isInstructionsOpen}
        closeModal={() => setIsInstructionsOpen(false)}
      />

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
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginBottom: isMobile ? "30px" : "6dvh",
              paddingTop: isMobile ? "10px" : "0px",
            }}
          >
            <ActionIcon
              onClick={() => setIsInstructionsOpen(true)}
              variant="transparent"
              size={isMobile ? "6dvw" : "2.7dvw"}
              style={{
                position: "absolute",
                top: isMobile ? "1dvh" : "1dvh",
                right: isMobile ? "87dvw" : "64dvw",
                marginRight: "10px",
                color: "#f2f2f2",
              }}
            >
              <HelpCircle size="100%" />
            </ActionIcon>

            <Text
              size={isMobile ? "10vw" : "4.2vw"}
              variant="gradient"
              gradient={{ from: "#020202", to: "#f2f2f2", deg: 360 }}
              style={{ textAlign: "center" }}
            >
              DAMAGEDLE
            </Text>
          </Box>

          <ImageAndInformation {...damageData} />
          <Guess ref={guessRef} damageData={damageData} />
          <Box style={{ flexGrow: 1 }} />
          <Numpad onButtonClick={handleButtonClick} />
        </Box>
      </Box>
    </MantineProvider>
  );
}