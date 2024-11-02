import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Box } from "@mantine/core";
import Guess from "./Guess/Guess";

export default function App() {
  return <MantineProvider> {
    <Box
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#828267",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Guess />
    </Box>
  } </MantineProvider >;
}
