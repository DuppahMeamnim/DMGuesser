import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text } from "@mantine/core";
import Guess from "./Guess/Guess";
import exampleImage from './assets/csExampleImage.png'
import damageData from "./DamageData/damageData";
import ImageAndInformation from "./ImageAndInformation/ImageAndInformation";

export default function App() {
  const damageData: damageData = {
    image: exampleImage,
    word: "034",
    distance: "123",
    weapon: "ak47",
    hitLocation: "Shoulder",
    wentThrough: "Nothing"
  }

  return <MantineProvider
    theme={{
      fontFamily: 'Aldrich, sans-serif',
    }}

  > {
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#020202",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          style={{
            class: "pc",
            width: "40vw",
            height: "100vh",
            backgroundColor: "#121212",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            userSelect: 'none',
            justifyContent: "center"
          }}
        >
          <Text
            mb="px"
            pb="60px"
            size="62px"
            variant="gradient"
            gradient={{ from: '#020202', to: '#f2f2f2', deg: 360 }}
          >
            DAMAGEDLE
          </Text>
          <ImageAndInformation {...damageData} />
          <Guess {...damageData} />
        </Box>
      </Box>
    } </MantineProvider >;
}
