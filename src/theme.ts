import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
