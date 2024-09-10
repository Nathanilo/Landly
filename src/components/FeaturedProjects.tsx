import React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Grid, Button, Flex } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import { data } from "../DummyData/data";
import { TRoomData } from "../types";
import { TTabCount } from "../types";

const FeaturedProjects: React.FC = () => {
  const [tabs, setTabs] = useState<TTabCount[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      const updatedTabs = [...tabs];
      data.forEach((newRoom) => {
        const existingTabIndex = updatedTabs.findIndex(
          (tab) => tab.title === newRoom.title
        );
        if (existingTabIndex !== -1) {
          // If tab already exists, increment the count
          updatedTabs[existingTabIndex].count += 1;
        } else {
          // If tab does not exist, add a new one with count 1
          updatedTabs.push({ title: newRoom.title, count: 1 });
        }
      });
      setTabs(updatedTabs);
    }
  }, [data]);

  return (
    <Box px={["8", "8", "20"]}>
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

        {tabs.length > 0 && (
          <Box width="fit-content" paddingTop="5">
            <Tabs>
              <TabList>
                {tabs.map((tab, index) => (
                  <Tab key={index}>
                    {tab.title} ({tab.count})
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Box>
        )}

        {data.length > 0 ? (
          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "1fr 1fr",
              "1fr 1fr",
              "repeat(3, 1fr)",
            ]}
            gap={6}
          >
            {data.map((room: TRoomData) => (
              <ProjectCard key={room.id} room={room} />
            ))}
          </Grid>
        ) : (
          ""
        )}
      </Box>
      {data.length >= 6 ? (
        <Flex justify="center" paddingTop="10">
          <Button
            bg="primary"
            color="#ffffff"
            width="164px"
            height="64px"
            border="1px"
            borderRadius="xl"
            _hover={{ bg: "#ffffff", color: "#000000" }}
          >
            View All Projects
          </Button>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};

export default FeaturedProjects;
