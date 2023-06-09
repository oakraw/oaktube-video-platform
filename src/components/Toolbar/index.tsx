import { Box, Image, Flex, Container, Link } from "@chakra-ui/react";
import React from "react";

const Toolbar: React.FC = () => {
  return (
    <>
      <Box h="81px" background="white">
        <Container maxW="container.xl" overflow="hidden" height="full">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height="full"
          >
            <Link href="/">
              <Image src="/logo512.png" height="56px" />
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Toolbar;
