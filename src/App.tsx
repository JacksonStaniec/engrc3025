import React from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <div className="App">This is my website.</div>
      <ColorSchemeToggle />
    </MantineProvider>
  );
}

export default App;
