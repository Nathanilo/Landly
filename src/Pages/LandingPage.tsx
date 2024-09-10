import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProjects from "../Components/FeaturedProjects";
import TopDevelopers from "../Components/TopDevelopers";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const LandingPage:React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TopDevelopers />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default LandingPage;
