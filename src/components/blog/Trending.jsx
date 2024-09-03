import { BLOGS } from "@/utils/constants";
import React from "react";

const Trending = () => {
  return (
    <div className="flex flex-col justify-normal gap-[1rem]">
      <div className="text-[3rem] leading-tight">Most Popular</div>
      <div className="flex flex-col justify-normal gap-[3rem]">
        <div className="grid grid-cols-2 gap-[3rem]">
          {BLOGS &&
            BLOGS.slice(0, 2).map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-normal gap-[1rem]"
                >
                  <div className="w-full h-[30rem]">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[0.75rem] font-bold text-[black]/50">
                    {v.category}
                  </div>
                  <div className="text-[1.7rem] font-[500] text-[black]/80 pr-[1rem]">
                    {v.desc}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="grid grid-cols-3 gap-[2rem]">
          {BLOGS &&
            BLOGS.slice(2).map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-normal gap-[1rem]"
                >
                  <div className="w-full h-[20rem]">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[0.75rem] font-bold text-[black]/50">
                    {v.category}
                  </div>
                  <div className="text-[1.7rem] font-[500] text-[black]/80 pr-[1rem]">
                    {v.desc}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
