import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { bed, heart, shower, location, roomImage } from "../Assets";
import { TRoomData } from "../types";

interface ProjectCardProps {
  key: number;
  room: TRoomData;
}

type stackProps = {
  children: React.ReactNode;
};

export const ListItem: React.FC<stackProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack spacing="1" {...rest} marginRight="4">
      {children}
    </HStack>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ room }) => {
  return (
    <Box width="100%" paddingTop="10" flexGrow={1}>
      <Box borderRadius="xl" overflow="hidden">
        <Image
          src={roomImage}
          alt="room"
          width="100%"
          height="385px"
          objectFit="cover"
        />
      </Box>
      <Box paddingTop="1">
        <Flex align="center" justify="space-between" wrap="wrap">
          <Text fontWeight="700" fontSize="xl">
            {room.title}
          </Text>
          <Flex align="center">
            <img src={heart} alt="heart" />
            <Text marginLeft="2" fontWeight="600">
              890
            </Text>
          </Flex>
        </Flex>
        <Flex marginTop="1" wrap="wrap">
          <ListItem>
            <img src={location} alt="location" />
            <Text>{room.location}</Text>
          </ListItem>
          <ListItem>
            <img src={shower} alt="location" />
            <Text>{room.noOfBath} Baths</Text>
          </ListItem>
          <ListItem>
            <img src={bed} alt="location" />
            <Text>{room.noOfBed} Beds</Text>
          </ListItem>
        </Flex>
        <Text color="primary" marginTop="2" fontWeight="600">
          View Details
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
