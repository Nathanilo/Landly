import { Box, Text, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { linkedin, facebook, instagram, twitter } from "../asset";

const Socials = [
  {
    name: "Facebook",
    icon: facebook,
    link: "#",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "#",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      py="10"
      bg="#000000"
      mx="5"
      borderRadius="xl"
      px="10"
      mt="28"
    >
      <Flex justify="center">
        <Box maxW="400px">
          <Text as="p" color="#F7F9FC" textAlign="center">
            CONVINCED?
          </Text>
          <Text
            as="h3"
            color="#F7F9FC"
            textAlign="center"
            fontSize="3xl"
            fontWeight="700"
            py="3"
          >
            Let's create magic together
          </Text>
          <Text as="p" color="#F7F9FC" textAlign="center">
            Let us unleash our creativity and expertise to create designs that
            deliver extraordinary results.
          </Text>
        </Box>
      </Flex>
      <Flex justify="center" paddingTop="24" paddingBottom="6">
        <HStack spacing="6">
          {Socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              bg="primary"
              padding="10px"
              borderRadius="50%"
            >
              <img src={social.icon} alt={social.name} loading="lazy" />
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
