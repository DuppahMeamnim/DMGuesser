import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box, Text } from "@mantine/core";
import Guess from "./Guess/Guess";

export default function App() {
  return <MantineProvider
    theme={{
      fontFamily: 'Aldrich, sans-serif'
    }}
    withGlobalStyles
    withNormalizeCSS> {
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
            width: "600px",
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
            mb="300px"
            pb="10px"
            size="62px"
            variant="gradient"
            gradient={{ from: '#020202', to: '#f2f2f2', deg: 360 }}
          >
            DAMAGEDLE
          </Text>
          <Guess />
        </Box>
      </Box>
    } </MantineProvider >;
}
