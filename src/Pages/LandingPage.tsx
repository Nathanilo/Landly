import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar.tsx";
import Hero from "../Components/Hero.tsx";
import FeaturedProjects from "../Components/FeaturedProjects.tsx";
import TopDevelopers from "../Components/TopDevelopers.tsx";
import Testimonials from "../Components/Testimonials.tsx";
import Footer from "../Components/Footer.tsx";

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
