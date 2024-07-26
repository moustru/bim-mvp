import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <h1>Hello!</h1>
    </MantineProvider>
  );
}

export default App;
