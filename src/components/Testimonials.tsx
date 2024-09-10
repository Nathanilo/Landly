import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import Navigation from "./Navigation";
import { TTestimonial } from "../types/index";

const TestimonialsData: TTestimonial[] = [
  {
    id: 1,
    name: "John Doe, Investor",
    testimonial:
      "Investing with Stanbic IBTC was a game-changer for me. Their attention to detail and commitment to quality ensured my property not only met but exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith, Homebuyer",
    testimonial:
      "Finding my dream home was effortless with Stanbic IBTC. Their team guided me through every step, from property selection to finalizing the deal. I couldn't be happier with my new place",
  },
  {
    id: 3,
    name: "David Johnson, Developer Partner",
    testimonial:
      "Working with [Company Name] on our latest project was a pleasure. Their professionalism and expertise in real estate development made the entire process smooth and successful. Looking forward to future collaborations!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box px={["8", "8", "20"]} py="5">
      <Text as="h2" textAlign="center" fontWeight="600" fontSize="26">
        Testimonials
      </Text>
      <Text as="p" textAlign="center" py="5">
        Here's what our clients have to say about their real estate experiences
        with us.
      </Text>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "repeat(3, 1fr)"]}
        gap={6}
        justifyContent="center"
        paddingTop="10"
      >
        {TestimonialsData &&
          TestimonialsData.map((testimonial, id) => (
            <Box
              key={id}
              bg="#F8F8F8"
              padding="5"
              borderRadius="md"
              textAlign="left"
              py="16"
              px="10"
            >
              <Text fontSize="md" fontWeight="600">
                {testimonial.name}
              </Text>
              <Text fontSize="md" paddingTop="2">
                {testimonial.testimonial}
              </Text>
            </Box>
          ))}
      </Grid>
      <Box marginTop="10">
        <Navigation />
      </Box>
    </Box>
  );
};

export default Testimonials;
