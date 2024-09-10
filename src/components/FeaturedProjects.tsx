import React, { useState, useEffect } from "react";
import { Box, Text, Grid, Button, Flex } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import { data } from "../dummyData/data";
import { TRoomData } from "../types";
import { TTabCount } from "../types";

const FeaturedProjects: React.FC = () => {
  const [tabs, setTabs] = useState<TTabCount[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("All"); 
  const [filteredData, setFilteredData] = useState<TRoomData[]>(data); 

  useEffect(() => {
    if (data.length > 0) {
      const updatedTabs: TTabCount[] = [{ title: "All", count: data.length }]; // Add the "All" tab initially
      data.forEach((newRoom: TRoomData) => {
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
  }, []);

  useEffect(() => {
    // Filter the data based on the selected tab
    if (selectedTab && selectedTab !== "All") {
      const filtered = data.filter((room) => room.title === selectedTab);
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Show all data if "All" tab is selected
    }
  }, [selectedTab]);

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
            <Tabs
              onChange={(index) => setSelectedTab(tabs[index].title)} // Update the selected tab when changed
            >
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

        {filteredData.length > 0 ? (
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
            {filteredData.map((room: TRoomData) => (
              <ProjectCard key={room.id} room={room} />
            ))}
          </Grid>
        ) : (
          <Text>No projects available for this category.</Text>
        )}
      </Box>
      {filteredData.length >= 6 ? (
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
