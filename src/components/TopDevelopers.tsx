import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { arrowLeft, arrowRight, roomImage } from "../Assets";
import React from "react";

const TopDevelopers: React.FC = () => {
  return (
    <Box paddingTop="10" paddingBottom="10" px={["8", "8", "20"]}>
      <Text as="h2" paddingTop="12" fontWeight="600" fontSize="26">
        Top Real Estate Developers
      </Text>
      <Text as="p" paddingTop="2" maxW={["", "", "600px"]}>
        Discover projects from leading developers in Lagos, offering exceptional
        properties tailored to your lifestyle and investment goals.
      </Text>
      <Flex
        flexDirection={["column", "column", "row"]}
        paddingTop="10"
        justify="space-between"
      >
        <Box width={["100%", "100%", "49%"]} position="relative" my="5">
          <Box
            bgImage={`url(${roomImage})`}
            width="100%"
            height="400px"
            bgSize="cover"
            bgPos="center"
            borderRadius="xl"
          ></Box>

          <Box
            background="rgba(0,0,0,0.4)"
            position="absolute"
            borderRadius="xl"
            inset="0"
            zIndex="1"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Box padding="10">
              <Text as="h3" fontSize="2xl" color="#ffffff">
                PrimewaterView Limited
              </Text>
              <Text as="p" color="#ffffff">
                Specializing in high-end residential properties, PrimewaterView
                Limited has established itself as a leader in luxury living.
              </Text>
              <Button width="184px" marginTop="5">
                View Projects
              </Button>
            </Box>
          </Box>
        </Box>
        <Box width={["100%", "100%", "49%"]} position="relative" my="5">
          <Box
            bgImage={`url(${roomImage})`}
            width="100%"
            height="400px"
            bgSize="cover"
            bgPos="center"
            borderRadius="xl"
          ></Box>

          <Box
            background="rgba(0,0,0,0.4)"
            position="absolute"
            borderRadius="xl"
            inset="0"
            zIndex="1"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Box padding="10">
              <Text as="h3" fontSize="2xl" color="#ffffff">
                PrimewaterView Limited
              </Text>
              <Text as="p" color="#ffffff">
                Specializing in high-end residential properties, PrimewaterView
                Limited has established itself as a leader in luxury living.
              </Text>
              <Button width="184px" marginTop="5">
                View Projects
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex justify="space-between" paddingTop="10">
        <Button bg="#F5f5f5" borderRadius="50%" width="54px" height="54px">
          <Image src={arrowLeft} alt="arrow" />
        </Button>
        <Button bg="primary" borderRadius="50%" width="54px" height="54px">
          <Image src={arrowRight} alt="arrow" />
        </Button>
      </Flex>
    </Box>
  );
};

export default TopDevelopers;
