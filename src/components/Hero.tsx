import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { heroImage } from "../Assets";

const Hero: React.FC = () => {
  return (
    <Box>
      <Box
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPos="center"
        height="100vh"
        paddingTop="104px"
        display="flex"
        color="white"
        fontWeight="bold"
        textAlign="left"
        position="relative"
        isolation="isolate"
      >
        <Box
          background="rgba(0,0,0,0.6)"
          position="absolute"
          inset="0"
          zIndex="-1"
        ></Box>
        <Flex flexDirection="column" padding={["5", "10", "20"]}>
          <Text
            as="h1"
            marginTop="15"
            maxW={["100%", "100%", "90%"]}
            fontSize={["3xl", "4xl", "6xl"]}
          >
            Exceptional Real Estate Projects By Leading Developers
          </Text>
          <Text as="p" py="14" maxW="720px">
            Explore premier real estate developments from top professionals,
            featuring luxurious condos, serene retreats, and cutting-edge
            commercial spaces. Experience the finest craftsmanship, innovative
            designs, and unmatched quality by renowned developers.
          </Text>
          <Button
            bg="transparent"
            color="#ffffff"
            width="164px"
            height="64px"
            border="1px"
            borderRadius="72px"
            _hover={{ bg: "#ffffff", color: "#000000" }}
          >
            Explore
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
