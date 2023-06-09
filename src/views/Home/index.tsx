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
    <Box height="full" overflowY="auto">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt={4} spacing={8}>
          {videos && videos.map((video, index) => <VideoThumbnail video={video} key={index}/>)}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
