import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const About = () => {
  const { scrollY } = useScroll();

  // Map the scroll position to the translateY value for the box
  const translateY = useTransform(scrollY, [0, 1000], [0, 600]);

  return (
    <div className="lg:h-screen h-[70vh] grid lg:grid-cols-2 grid-cols-1 gap-0 relative">
      <div className="border h-screen lg:block hidden">
        <img
          src="/assets/about1.webp"
          className="w-full h-full object-cover"
          alt="about_img_1"
        />
      </div>
      <div className="flex justify-end items-center">
        <div className="lg:h-[50vh] h-full w-[40vh]">
          <img
            src="/assets/about2.webp"
            className="w-full h-full object-cover"
            alt="about_img_1"
          />
        </div>
      </div>
      <motion.div
        className="w-[60vh] h-[50vh] bg-white absolute bottom-[25%] left-[35%] p-[3rem] flex flex-col justify-normal gap-[1rem]"
        // style={{ translateY }}
      >
        <div className="text-[3.5rem]">About us</div>
        <div className="text-[1.2rem]">
          Unveil the essence of Visage—a concept born from the fusion of
          expertise and elegance. Our idea: Enhance natural beauty, promote
          radiant skin, and create personalized, uplifting experiences.
        </div>
        <div>
          <button
            className="w-fit bg-black py-[1.2rem] px-[1.7rem] text-white"
            onClick={() => window.open("/contact")}
          >
            BOOK NOW
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
