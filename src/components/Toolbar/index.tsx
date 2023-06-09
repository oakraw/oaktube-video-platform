import { Box, Image, Flex, Container } from "@chakra-ui/react";
import React from "react";

const Toolbar: React.FC = () => {
  return (
    <>
      <Box h="81px" background="white">
        <Container maxW="container.lg" overflow="hidden" height="full">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height="full"
          >
            <Image src="/logo512.png" height="56px" />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Toolbar;
