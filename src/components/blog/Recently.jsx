import { uploads_uri } from "@/utils/baseUrl";
import React from "react";
import { useRouter } from "next/navigation";


const Recently = ({ latest_data }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-10 gap-0">
      <div className="col-span-7 flex flex-col justify-normal gap-[3rem]">
        <div className="flex justify-normal items-center gap-[1rem] ">
          <div className="w-[5rem] h-[1px] rounded-full bg-black" />
          <div className="text-red-500">Recently</div>
        </div>
        <div className="text-[2.5rem] font-[500] leading-tight">
          Latest Stories
        </div>
        <div className="flex flex-col justify-normal gap-[2rem]">
          {latest_data &&
            latest_data.length > 0 &&
            latest_data.slice(0, 5).map((v, i) => {
              return (
                <div onClick={() => router.push(`/blogs/${v.id}`)} key={i} className="flex justify-normal cursor-pointer gap-[3rem]">
                  {
                    v?.attributes?.image && v?.attributes?.image?.data && v?.attributes?.image?.data?.attributes && v?.attributes?.image?.data?.attributes.url && (

                      <div className="w-[16rem] h-[16rem]">
                        <img
                          src={uploads_uri + v.attributes.image.data.attributes.url}
                          alt={v.attributes.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  }
                  <div className="flex-1 flex flex-col justify-normal gap-[1rem]">
                    <div className="text-[1.5rem] font-[500] hover:text-red-500 transition-all text-[black]/80 pr-[1rem]">
                      {v.attributes.title}
                    </div>
                    <div className="text-[0.6rem] uppercase text-[black]/50 flex justify-normal gap-[1rem]">
                      <div>Lifestyle </div>
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
      {/* <div className="col-span-3 flex flex-col justify-normal gap-[1rem]">
        <div className="text-[1.5rem] uppercase font-[600]">
          Editor's picked
        </div>
        <div className="flex justify-normal items-center">
          <div className="w-[3rem] border-[2px] border-black" />
          <div className="flex-1 border-[1px] border-black/10" />
        </div>
        <div className="flex flex-col justify-normal gap-[2rem] mt-[1rem]">
          {BLOGS &&
            BLOGS.slice(0, 4).map((v, i) => {
              return (
                <div key={i} className="flex justify-normal gap-[3rem]">
                  <div className="w-[6rem] h-[6rem]">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-normal gap-[1rem]">
                    <div className="text-[1.1rem] font-[600] text-[black]/80 pr-[1rem]">
                      {v.desc}
                    </div>
                    <div className="text-[0.6rem] uppercase text-[black]/50 flex justify-normal gap-[1rem]">
                      <div>Lifestyle </div>
                      <div>
                        by <span className="text-red-500">{v.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="p-[1.5rem]">
          <img
            src={"/assets/blogAd.jpg"}
            alt={"blogAd"}
            className="w-full h-full"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Recently;
