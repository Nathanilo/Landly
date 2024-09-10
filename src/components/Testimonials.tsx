import { Box, Button, Flex, Text, Image, Grid } from "@chakra-ui/react";
import React from "react";
import { arrowLeft, arrowRight } from "../Assets";

const Testimonials: React.FC = () => {
  return (
    <Box px="20" py="5">
      <Text as="h2" textAlign="center" fontWeight="600" fontSize="26">
        Testimonials
      </Text>
      <Text as="p" textAlign="center" py="5">
        Here's what our clients have to say about their real estate experiences
        with us.
      </Text>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={6}
        justifyContent="center"
        paddingTop="10"
      >
        <Box bg="#F5f5f5" borderRadius="xl" px="8" py="16" textAlign="left">
          <Text as="p" fontSize="18" fontWeight="500" textAlign="center">
            John Doe, Investor
          </Text>
          <Text as="p" fontSize="18" fontWeight="400" paddingTop="2">
            Investing with Stanbic IBTC was a game-changer for me. Their
            attention to detail and commitment to quality ensured my property
            not only met but exceeded my expectations. Highly recommended!
          </Text>
        </Box>
        <Box bg="#F5f5f5" borderRadius="xl" px="8" py="16" textAlign="left">
          <Text as="p" fontSize="18" fontWeight="500" textAlign="center">
            John Doe, Investor
          </Text>
          <Text as="p" fontSize="18" fontWeight="400" paddingTop="2">
            Investing with Stanbic IBTC was a game-changer for me. Their
            attention to detail and commitment to quality ensured my property
            not only met but exceeded my expectations. Highly recommended!
          </Text>
        </Box>
        <Box bg="#F5f5f5" borderRadius="xl" px="8" py="16" textAlign="left">
          <Text as="p" fontSize="18" fontWeight="500" textAlign="center">
            John Doe, Investor
          </Text>
          <Text as="p" fontSize="18" fontWeight="400" paddingTop="2">
            Investing with Stanbic IBTC was a game-changer for me. Their
            attention to detail and commitment to quality ensured my property
            not only met but exceeded my expectations. Highly recommended!
          </Text>
        </Box>
      </Grid>
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

export default Testimonials;
