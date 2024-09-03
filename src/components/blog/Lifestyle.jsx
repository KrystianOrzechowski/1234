import { uploads_uri } from "@/utils/baseUrl";
import { useRouter } from "next/navigation";

import React from "react";

const Lifestyle = ({ data }) => {

  const router = useRouter();
  return (
    <div className="flex flex-col justify-normal gap-[1rem]">
      {data &&
        data.length > 0 &&
        data[0].attributes &&
        data[0].attributes.heading && (
          <div className="text-[3rem] leading-tight">
            {data[0].attributes.heading}
          </div>
        )}
      <div className="grid grid-cols-4 gap-[2rem]">
        {data &&
          data.length > 0 &&
          data[0].attributes &&
          data[0].attributes.blogs &&
          data[0].attributes.blogs.data &&
          data[0].attributes.blogs.data.length > 0 &&
          data[0].attributes.blogs.data.slice(0, 4).map((v, i) => {
            return (
              <div onClick={() => router.push(`/blogs/${v.id}`)} key={i} className="flex flex-col justify-normal gap-[1rem] cursor-pointer ">
                {
                  v?.attributes?.image && v?.attributes?.image?.data && v?.attributes?.image?.data?.attributes && v?.attributes?.image?.data?.attributes.url && (

                    <div className="w-full h-[20rem]">
                      <img
                        src={uploads_uri + v.attributes.image.data.attributes.url}
                        alt={v.attributes.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                }
                <div className="text-[0.75rem] font-bold text-[black]/50">
                  {v.attributes.category.data.attributes.title}
                </div>
                <div className="text-[1.1rem] hover:text-red-500 transition-all font-[500] text-[black]/80 pr-[1rem]">
                  {v.attributes.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Lifestyle;
