import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  link: {
    baseStyle: {
      // normal styling
      textDecoration: "none",
      // hover styling goes here
      _hover: {
        textDecoration: "none",
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
