import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Toolbar from "./components/Toolbar";
import theme from "./theme";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" h="100vh">
        <Toolbar />
        <Box h="full" overflow="hidden" overflowY="auto" bg="gray.100">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Flex>
    </ChakraProvider>
  </Router>
);
