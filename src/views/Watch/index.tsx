import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CoverImage from "../../assets/images/cover.jpg";
import ProfileImage from "../../assets/images/profile.jpeg";
import VideoThumbnail from "../../components/VideoThumbnail";
import { useFetchVideoById, useFetchVideos } from "../../hooks/useFetchVideo";
import { insertCommas, shortenNumber } from "../../utils/number";

const Home: React.FC = () => {
  const { id } = useParams();
  const { video } = useFetchVideoById(id || "");
  const { videos } = useFetchVideos();

  useEffect(() => {
    console.log(id);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Box height="full" overflowY="auto">
      <Container maxW="container.xl" py={4} background="white">
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex="1">
            {video && (
              <>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    objectFit="cover"
                    src={video.thumbnailUrl}
                    borderRadius={16}
                  />
                </AspectRatio>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  mt={4}
                  fontWeight={600}
                  color="black"
                >
                  {video.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
                  {insertCommas(video.viewCount)} views
                </Text>
                <Card
                  background="gray.100"
                  borderRadius={16}
                  shadow={0}
                  mt={6}
                  p={{ base: 4, md: 6 }}
                >
                  <HStack spacing={4}>
                    <Avatar
                      size={{ base: "sm", md: "md" }}
                      src={video.author.imageUrl}
                    />
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.800">
                      {video.author.name}
                    </Text>
                  </HStack>

                  <Text mt={4}>{video.description}</Text>
                </Card>
              </>
            )}
          </Box>
          <Divider my={8} display={{ base: "block", lg: "none" }} />
          <Box px={{ base: 0, lg: 6 }} w={{ base: "initial", lg: "sm" }}>
            <Heading size="md" mb={4}>
              Related Videos
            </Heading>
            <VStack spacing={4} mb={6}>
              {videos &&
                videos.map((v, index) => <VideoThumbnail video={v} key={index} />)}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
