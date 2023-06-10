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
  Fade,
  Box,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { Video } from "../../model/video";
import { shortenNumber } from "../../utils/number";
import { Link as RouterLink } from "react-router-dom";
import ReactPlayer from "react-player";

interface Props extends ChakraProps {
  video: Video;
}

const VideoThumbnail: React.FC<Props> = ({ video }) => {
  const [isVideoPlay, setVideoPlay] = useState(false);
  
  const handleThumnailMouseOver = useCallback(() => {
    console.log("onMousehandleThumnailMouseOverOver");
    setVideoPlay(true);
  }, []);

  const handleThumnailMouseOut = useCallback(() => {
    setVideoPlay(false);
  }, []);

  return (
    <>
      <LinkBox width="100%">
        <Flex direction="column">
          <LinkOverlay as={RouterLink} to={`/watch/${video.id}`} reloadDocument>
            <AspectRatio
              boxSize="100%"
              ratio={16 / 9}
              onMouseOver={handleThumnailMouseOver}
              onMouseOut={handleThumnailMouseOut}
            >
              <Box
                width="100%"
                height="100%"
                position="relative"
                borderRadius={16}
              >
                <Image
                  objectFit="cover"
                  src={video.thumbnailUrl}
                  position="absolute"
                  width="100%"
                  height="100%"
                />
                <Box width="100%" height="100%" zIndex="1000">
                  <Fade
                    in={isVideoPlay}
                    transition={{
                      enter: { duration: 0.5 },
                      exit: { duration: 0.5 },
                    }}
                  >
                    <ReactPlayer
                      playing={isVideoPlay}
                      width="100%"
                      height="100%"
                      position="absolute"
                      muted
                      url={isVideoPlay ? video.videoUrl : ""}
                    />
                  </Fade>
                </Box>
              </Box>
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
