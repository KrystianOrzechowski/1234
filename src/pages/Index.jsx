"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image"; // Assuming you're using Next.js's Image component
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Partners from "../components/Partners";
import About from "@/components/about/About";
import Services from "@/components/Services";
import Offers from "@/components/Offers";

const Index = () => {
  return (
    <div className="flex flex-col justify-normal gap-[1rem]">
      <HeroSection />
      <Partners />
      <About />
      <Services />
      <Offers />
    </div>
  );
};

export default Index;
