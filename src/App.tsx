import * as React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Watch from "./views/Watch";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
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
            <Route  path="watch/:id" element={<Watch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Flex>
    </ChakraProvider>
  </Router>
);
