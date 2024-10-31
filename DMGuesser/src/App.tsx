import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import GuessNumber from "./GuessNumber/GuessNumber";

export default function App() {
  return <MantineProvider>{<GuessNumber />}</MantineProvider>;
}
