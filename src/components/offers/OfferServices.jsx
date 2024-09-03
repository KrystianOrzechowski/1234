import { uploads_uri } from "@/utils/baseUrl";
import React from "react";

const OfferServices = ({ data }) => {
  return (
    <>
      {data &&
        data.attributes &&
        data.attributes.services &&
        data.attributes.services.data &&
        data.attributes.services.data.length > 0 && (
          <div className="custom-container grid grid-cols-2 gap-[2rem]">
            <div className="flex flex-col justify-center items-center gap-[1rem]">
              <div className="w-full flex flex-col justify-center items-center gap-[1rem]">
                {data.attributes.services.data.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full flex flex-col justify-normal gap-[0rem]"
                    >
                      <div className="flex justify-between items-center text-[1.7rem] font-[500]">
                        <div>{v.attributes.title}</div>
                        <div>${v.attributes.price}</div>
                      </div>
                      <div className="text-[1.1rem] font-[300]">
                        {v.attributes.description}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full">
                <div
                  className="uppercase w-fit p-[1rem] bg-[#FAD3B1] cursor-pointer"
                  onClick={() => window.open("/contact")}
                >
                  Book Now
                </div>
              </div>
            </div>
            <div className="">
              <img
                src={
                  uploads_uri +
                  data.attributes.services.data[0].attributes.image.data
                    .attributes.url
                }
                alt={"service thumbnail"}
              />
            </div>
          </div>
        )}
    </>
  );
};

export default OfferServices;
