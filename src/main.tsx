import { StrictMode } from "react";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  colors: {
    primary: "#007BFF",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
