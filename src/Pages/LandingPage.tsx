import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProjects from "../Components/FeaturedProjects";

const LandingPage = () => {
  return (
    <Box >
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </Box>
  );
};

export default LandingPage;
