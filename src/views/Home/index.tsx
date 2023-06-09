import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CoverImage from "../../assets/images/cover.jpg";
import ProfileImage from "../../assets/images/profile.jpeg";
import VideoThumbnail from "../../components/VideoThumbnail";
import { useFetchVideos } from "../../hooks/useFetchVideo";

const Home: React.FC = () => {
  const { videos } = useFetchVideos();

  return (
    <Box bg="gray.100" height="full">
      <Container maxW="1024px">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="40px">
          {videos && videos.map((video) => <VideoThumbnail video={video} />)}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
