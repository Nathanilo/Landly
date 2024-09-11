import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import FeaturedProjects from "../components/FeaturedProjects.tsx";
import TopDevelopers from "../components/TopDevelopers.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Footer from "../components/Footer.tsx";

const LandingPage: React.FC = () => {
  return (
    <Box maxWidth="1920px" mx="auto">
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
