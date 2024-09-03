import { uploads_uri } from "@/utils/baseUrl";
import React from "react";

const SingleOfferHero = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-normal gap-0">
      {data && data.attributes && (
        <>
          <div className="w-[150vh] h-[50vh] absolute top-[20%] left-[20%] flex justify-normal gap-[2rem] z-50 ">
            <div className="w-[70vh] h-[50vh]">
              <img
                src={
                  uploads_uri + data.attributes.thumbnail.data.attributes.url
                }
                className="w-full h-full object-cover "
                alt={data.attributes.title}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-[1rem]">
              <div className="text-[4rem] uppercase leading-tight">
                {data.attributes.title}
              </div>
              <div className="text-[1.1rem]">{data.attributes.sub_title}</div>
              <div
                className="uppercase p-[1rem] bg-[#FAD3B1] cursor-pointer"
                onClick={() => window.open("/contact")}
              >
                Book Now
              </div>
            </div>
          </div>
          <div className="w-full p-[1rem] grid grid-cols-2 gap-0">
            <div className="h-[90vh]">
              <img
                src={
                  uploads_uri + data.attributes.thumbnail.data.attributes.url
                }
                className="w-full h-full object-cover blur-xl"
                alt={data.attributes.title}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleOfferHero;
