import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Hero />
      </Box>
    </>
  );
}

export default App;
