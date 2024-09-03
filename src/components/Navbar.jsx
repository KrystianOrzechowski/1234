"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
function Navbar() {
  const isTabScreen = useMediaQuery("(max-width:800px)");
  return (
    // <AppBar position="static" sx={{ backgroundColor: '#fffff0' }}>
    // <Toolbar sx={{ border:"1px solid red", display: "flex", justifyContent: "space-between", width:"100%" }}>
    <div className="bg-white">
      <div className="container lg:custom-margin mx-auto">
        <Box
          sx={{
            padding: "10px 10px",
          }}
          className="lg:custom-container flex lg:flex-row flex-col-reverse justify-between items-center gap-[2rem] lg:gap-0"
        >
          {/* Left-aligned links */}
          <Box className="flex justify-normal items-center gap-[2rem] lg:gap-[1rem]">
            <Link
              className="decoration-transparent text-[1.2rem] lg:text-[1rem] text-[black] hover:text-orange-300 hover:decoration-transparent transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="decoration-transparent text-[1.2rem] lg:text-[1rem] text-[black] hover:text-orange-300 hover:decoration-transparent transition-all"
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="decoration-transparent text-[1.2rem] lg:text-[1rem] text-[black] hover:text-orange-300 hover:decoration-transparent transition-all"
              href="/contact"
            >
              Contact
            </Link>
          </Box>

          {/* Centered title */}
          <Box
            sx={{
              padding: "4px 8px",
              textAlign: "center",
              transform: !isTabScreen && "translate( -50%)",
            }}
            className={""}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "black",
                fontFamily: "monospace",
                fontSize: "1.3rem",
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
              className="text-[2rem] font-[500] lg:text-[1.1rem]"
            >
              Expert Beauty
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: "gray",
                fontSize: "0.9rem",
                fontWeight: "medium",
              }}
              className="text-[1rem] lg:text-[0.7rem]"
            >
              GlowUp
            </Typography>
          </Box>

          {/* Right-aligned search */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ color: "black", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Search
            </Typography> */}
          </Box>
        </Box>
      </div>
    </div>
    // </Toolbar>
    // </AppBar>
  );
}

export default Navbar;
