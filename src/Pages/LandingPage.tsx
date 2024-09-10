import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProjects from "../Components/FeaturedProjects";
import TopDevelopers from "../Components/TopDevelopers";

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TopDevelopers />
    </Box>
  );
};

export default LandingPage;
