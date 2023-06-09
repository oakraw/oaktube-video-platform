import {
  Box,
  Image,
  Flex,
  Container,
  Link,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
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
            <LinkBox>
              <Flex direction="row" alignItems="center">
                <LinkOverlay href="/">
                  <Image src="/logo512.png" height="40px" />
                </LinkOverlay>
                <Heading color="black" size="lg" ml={3}>
                  Oaktube
                </Heading>
              </Flex>
            </LinkBox>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Toolbar;
