import { uploads_uri } from "@/utils/baseUrl";
import { BLOGS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import React from "react";

const BlogsHero = ({ data }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 gap-0">
      {data &&
        data.slice(0, 3).map((v, i) => {
          return (
            <div
              key={i}
              onClick={() => router.push(`/blogs/${v.id}`)}
              className="flex flex-col justify-normal px-4 gap-[1rem] cursor-pointer"
            >
              {
                v?.attributes?.image && v?.attributes?.image?.data && v?.attributes?.image?.data?.attributes && v?.attributes?.image?.data?.attributes.url &&
                  (
                    <>

                      <div className="w-full h-[20rem]">
                        <img
                          src={uploads_uri + v?.attributes?.image?.data?.attributes.url}
                          alt={v.attributes.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[0.75rem] font-bold text-[black]/50">
                        {v.attributes.sub_category}
                      </div>
                      <div className="text-[1.1rem] hover:text-red-500 transition-all font-[500] text-[black]/80 pr-[1rem]">
                        {v.attributes.title}
                      </div>
                    </>
                  )

              }
            </div>
          );
        })}
    </div>
  );
};

export default BlogsHero;
