import { CONTACT_DETAILS } from "@/utils/constants";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex justify-center items-center gap-[2rem] my-[4rem]">
      {CONTACT_DETAILS &&
        CONTACT_DETAILS.map((v, i) => {
          return (
            <div
              key={i}
              className={`${
                i == 1 ? `w-[40vh] h-[40vh]` : `w-[30vh] h-[30vh]`
              }  rounded-full flex flex-col justify-center items-center gap-[1rem] border border-[#FAD3B1]`}
            >
              <div className="text-[2.5rem] font-[300]">{v.title}</div>
              <div className="text-[1.1rem]">{v.info}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ContactInfo;
