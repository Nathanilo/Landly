import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { roomImage } from "../asset";
import React from "react";
import { TTopDeveloper } from "../types";
import Navigation from "./Navigation";

const TopDevelopersData: TTopDeveloper[] = [
  {
    id: 1,
    name: "PrimewaterView Limited",
    description:
      "Specializing in high-end residential properties, PrimewaterView Limited has established itself as a leader in luxury living.",
  },
  {
    id: 2,
    name: "PrimewaterView Limited",
    description:
      "Specializing in high-end residential properties, PrimewaterView Limited has established itself as a leader in luxury living.",
  },
];

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
        {TopDevelopersData &&
          TopDevelopersData.map((developer, id) => (
            <Box
              width={["100%", "100%", "49%"]}
              position="relative"
              my="5"
              key={id}
            >
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
                    {developer.name}
                  </Text>
                  <Text as="p" color="#ffffff">
                    {developer.description}
                  </Text>
                  <Button width="184px" marginTop="5">
                    View Projects
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
      </Flex>
      <Navigation />
    </Box>
  );
};

export default TopDevelopers;
