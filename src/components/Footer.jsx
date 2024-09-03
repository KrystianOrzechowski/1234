import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto flex flex-col justify-normal gap-[2rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1rem] lg:gap-0">
          <div className="flex justify-center">
            <Box
              sx={{
                // position: 'absolute',
                // left: '50%',
                // padding: "4px 8px",
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                textAlign: "center",
                // top: '50%',
                // transform: "translate( -50%)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  // color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "1.1rem",
                  // fontWeight: 'bold',
                  lineHeight: 1.1,
                }}
              >
                Expert Beauty
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "gray",
                  fontSize: "0.7rem",
                  fontWeight: "medium",
                }}
              >
                GlowUp
              </Typography>
            </Box>
          </div>
          <div className="flex justify-center items-center gap-[1rem]">
            <div className="border border-[#F4A261] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <RiFacebookCircleLine size={30} />
            </div>
            <div className="border border-[#F4A261] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <RiInstagramLine size={30} />
            </div>
            <div className="border border-[#F4A261] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <PiLinkedinLogoBold size={30} />
            </div>
          </div>
        </div>
        <div className="w-full border-[1px] border-[#F4A261]" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[1rem] lg:gap-0">
          <div className="flex-1 flex justify-center ">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-[24px]">Explore</h4>
              <ul>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <a href="#">Services</a>
                </li>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <Link href="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center ">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-[24px]">Keep in Touch</h4>
              <ul>
                <li className="mb-2  text-gray-300">
                  Address: 24A Kingston St, Las Vegas NC 28202, USA
                </li>
                <li className="mb-2  text-gray-300">
                  Mail: support@visage.com
                </li>
                <li className="mb-2  text-gray-300">
                  Phone: (+22)123-4567-900
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-[1px] border-[#F4A261] lg:hidden block" />
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Visage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
