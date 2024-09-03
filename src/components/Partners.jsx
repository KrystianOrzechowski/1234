import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import { ParentBox, Title } from "../Tokonomics/TokenomicStyles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MARQUES } from "@/utils/constants";
import partnerService from "@/utils/controllers/partnerServices";
import { uploads_uri } from "@/utils/baseUrl";

const Partners = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [partners, setPartners] = useState([]);

  const fetchPartners = async () => {
    try {
      const response = await partnerService.fetchAllPartners();
      if (response && response.data) {
        setPartners(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);
  return (
    <div className="my-[3rem]">
      {isSmallScreen ? (
        <>
          <Marquee
            pauseOnHover={false}
            gradient={false}
            speed={100}
            autoFill
            className="flex justify-normal gap-[1rem] bg-orange-100"
          >
            {partners && partners.length > 0
              ? partners.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-[1rem] p-[2rem]"
                    >
                      <div>
                        <img
                          src={uploads_uri + v.attributes.image}
                          className="w-[4rem]"
                          alt="marque1"
                        />
                      </div>
                      <div className="text-[1.5rem]">{v.attributes.title}</div>
                    </div>
                  );
                })
              : MARQUES &&
                MARQUES.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-[1rem] p-[2rem]"
                    >
                      <div>
                        <img src={v.image} className="w-[4rem]" alt="marque1" />
                      </div>
                      <div className="text-[1.5rem]">{v.title} </div>
                    </div>
                  );
                })}
          </Marquee>
        </>
      ) : (
        <>
          <Marquee
            pauseOnHover={false}
            gradient={false}
            speed={100}
            autoFill
            className="flex justify-normal gap-[1rem] bg-orange-100"
          >
            {partners && partners.length > 0
              ? partners.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-[1rem] p-[2rem]"
                    >
                      {v.attributes.image &&
                        v.attributes.image.data &&
                        v.attributes.image.data.attributes &&
                        v.attributes.image.data.attributes.url && (
                          <div>
                            <img
                              src={
                                uploads_uri +
                                v.attributes.image.data.attributes.url
                              }
                              className="w-[4rem]"
                              alt="marque1"
                            />
                          </div>
                        )}
                      <div className="text-[1.5rem]">{v.attributes.title}</div>
                    </div>
                  );
                })
              : MARQUES &&
                MARQUES.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-[1rem] p-[2rem]"
                    >
                      <div>
                        <img src={v.image} className="w-[4rem]" alt="marque1" />
                      </div>
                      <div className="text-[1.5rem]">{v.title} </div>
                    </div>
                  );
                })}
          </Marquee>
        </>
      )}

      {/* </ParentBox> */}
    </div>
  );
};

export default Partners;
