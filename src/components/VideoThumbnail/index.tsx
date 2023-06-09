import {
  Image,
  Flex,
  Text,
  AspectRatio,
  ChakraProps,
  HStack,
  Avatar,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import React from "react";
import { Video } from "../../model/video";
import { shortenNumber } from "../../utils/number";
import { Link as RouterLink } from "react-router-dom";

interface Props extends ChakraProps {
  video: Video;
}

const VideoThumbnail: React.FC<Props> = ({ video }) => {
  return (
    <>
      <LinkBox width="100%">
        <Flex direction="column">
          <LinkOverlay as={RouterLink} to={`/watch/${video.id}`} reloadDocument>
            <AspectRatio boxSize="100%" ratio={16 / 9}>
              <Image
                objectFit="cover"
                src={video.thumbnailUrl}
                borderRadius={16}
              />
            </AspectRatio>
          </LinkOverlay>
          <HStack spacing={4} mt={2} align="start">
            <Avatar
              size={{ base: "lg", md: "md" }}
              src={video.author.imageUrl}
            />
            <Flex direction="column">
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="black"
                fontWeight={500}
              >
                {video.title}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
                {video.author.name}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
                {shortenNumber(video.viewCount)} views
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </LinkBox>
    </>
  );
};

export default VideoThumbnail;
