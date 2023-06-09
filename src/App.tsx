import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Toolbar from "./components/Toolbar";

export const App = () => (
  <Router>
    <ChakraProvider>
      <Flex flexDirection="column" h="100vh">
        <Toolbar />
        <Box h="full" overflow="hidden" overflowY="auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Flex>
    </ChakraProvider>
  </Router>
);
