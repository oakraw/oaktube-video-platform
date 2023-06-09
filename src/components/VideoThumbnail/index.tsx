import { Box, Image, Flex, Container, AspectRatio, ChakraProps } from "@chakra-ui/react";
import React from "react";
import { Video } from "../../model/video";

interface Props extends ChakraProps {
    video: Video
  }

const VideoThumbnail: React.FC<Props> = ({ video }) => {
  return (
    <>
      <Flex direction="column">
        <AspectRatio boxSize="100%" ratio={16 / 9}>
          <Image objectFit="cover" src={video.thumbnailUrl} borderRadius={16} />
        </AspectRatio>
      </Flex>
    </>
  );
};

export default VideoThumbnail;
