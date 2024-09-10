import React from "react";
import { Box, Text, Grid, Button, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import { data } from "../DummyData/Data";
import { TRoomData } from "../types";

const FeaturedProjects: React.FC = () => {
  return (
    <Box px="20">
      <Box paddingTop="10">
        <SearchBar />
      </Box>
      <Box>
        <Text as="h2" paddingTop="12" fontWeight="600" fontSize="26">
          Featured Projects
        </Text>
        <Text as="p" paddingTop="2" maxW={["", "", "750px"]}>
          Discover your dream property from your favorite developers. Explore
          our premium listings and find the perfect home or investment
          opportunity tailored to your preferences. Start Your Search Today.
        </Text>
        <Grid
          templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
          gap={6}
          paddingTop="10"
        >
          {data.map((room: TRoomData) => (
            <ProjectCard key={room.id} room={room} />
          ))}
        </Grid>
      </Box>
      <Flex justify="center">
        <Button
          bg="primary"
          color="#ffffff"
          _hover={{ bg: "primary" }}
          width="164px"
          height="64px"
          borderRadius="16px"
          marginTop="10"
        >
          Load more
        </Button>
      </Flex>
    </Box>
  );
};

export default FeaturedProjects;
