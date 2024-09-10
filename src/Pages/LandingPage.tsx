import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProjects from "../Components/FeaturedProjects";
import TopDevelopers from "../Components/TopDevelopers";
import Testimonials from "../Components/Testimonials";

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TopDevelopers />
      <Testimonials />
    </Box>
  );
};

export default LandingPage;
