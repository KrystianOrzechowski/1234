import { uploads_uri } from "@/utils/baseUrl";
import React from "react";
import { useRouter } from "next/navigation";


const Travel = ({ data, category_name }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-12 my-5 cursor-pointer gap-0">
      <div className="col-span-7 flex flex-col justify-normal gap-[2rem]">
        {/* <div className="text-[2.5rem] font-[500] leading-tight">
          Explore interesting journeys
        </div> */}
        <div className="flex flex-col justify-normal gap-[2rem]">
          {data &&
            data.slice(0, 3).map((v, i) => {
              return (
                <div onClick={() => router.push(`/blogs/${v.id}`)} key={i} className="flex justify-normal cursor-pointer gap-[3rem]">
                  <div className="w-[13rem] h-[9rem]">
                    <img
                      src={uploads_uri + v.attributes.image.data.attributes.url}
                      alt={v.attributes.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-normal gap-[1rem]">
                    <div className="text-[1.5rem] font-[500] hover:text-red-500 transition-all text-[black]/80 pr-[1rem]">
                      {v.attributes.title}
                    </div>
                    <div className="text-[0.6rem] uppercase text-[black]/50 flex justify-normal gap-[1rem]">
                      <div>{category_name} </div>
                      <div>
                        by{" "}
                        <span className="text-red-500">
                          {v.attributes.category.data.attributes.title}
                        </span>
                      </div>
                    </div>
                    <div className="text-[1rem] font-[300] text-[black]/60 pr-[1rem]">
                      {v.attributes.title}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="col-span-5 px-[1rem]">
        {" "}
        <div className="flex flex-col justify-normal gap-[2rem]">
          {data &&
            data.length > 0 &&
            data.slice(3, 6).map((v, i) => {
              return (
                <div key={i} className="flex justify-normal gap-[3rem]">
                  <div className="w-[9rem] h-[7rem]">
                    <img
                      src={uploads_uri + v.attributes.image.data.attributes.url}
                      alt={v.attributes.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-normal gap-[0.4rem]">
                    <div className="text-[1.5rem] font-[500] text-[black]/80 pr-[1rem]">
                      {v.attributes.title}
                    </div>
                    <div className="text-[0.75rem] font-bold text-[black]/50">
                      {v.attributes.category.data.attributes.title}
                    </div>
                    <div className="text-[1rem] font-[300] text-[black]/60 pr-[1rem]">
                      {v.attributes.title}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Travel;
