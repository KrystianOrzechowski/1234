import { uploads_uri } from "@/utils/baseUrl";
import React from "react";
import OfferRenderRichText from "./OfferRenderRichText";

const SingleOfferSpecialist = ({ data }) => {
  return (
    <div className="custom-container">
      {data && data.attributes && (
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-4">
            <div className="flex flex-col justify-normal gap-[1rem] ">
              <div className="uppercase text-[2.5rem] font-[300]">
                Our Specialist
              </div>
              <div className="w-[25vh] h-[25vh]">
                <img
                  src={
                    uploads_uri +
                    data.attributes.specialist.data.attributes.avatar.data
                      .attributes.url
                  }
                  className="w-full h-full object-cover"
                  alt={data.attributes.specialist.data.attributes.username}
                />
              </div>
            </div>
          </div>
          <div className="col-span-8 flex flex-col justify-normal gap-[1rem]">
            <OfferRenderRichText content={data.attributes.description} />
            <div
              className="uppercase w-fit p-[1rem] bg-[#FAD3B1] cursor-pointer"
              onClick={() => window.open("/contact")}
            >
              Book Now
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleOfferSpecialist;
