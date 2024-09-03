"use client";
import RenderRichText from "@/components/common/RenderRichText";
import { uploads_uri } from "@/utils/baseUrl";
import BlogsService from "@/utils/controllers/blogServices";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const SingleBlogComp = () => {
  const params = useParams();
  const id = params.id;
  const [blogData, setBlogData] = useState();

  const fetchBlogById = async () => {
    try {
      const response = await BlogsService.fetchBlogById(id);
      if (response && response.data) {
        setBlogData(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchBlogById();
  }, [id]);

  return (
    <div className="custom-container flex flex-col justify-normal gap-[4rem] my-[2rem]">
      {blogData && blogData.attributes && (
        <>
          <div className="w-[65%] mx-auto flex flex-col justify-normal gap-[3rem]">
            <div className="text-[3rem] font-bold leading-tight">
              {blogData.attributes.title}
            </div>
            <div className="text-[0.75rem]">
              Updated{" "}
              {format(new Date(blogData.attributes.updatedAt), "dd MMM yyyy")}{" "}
              {}
            </div>
          </div>

          <div className="w-full max-h-[50rem]">
            <img
              src={uploads_uri + blogData.attributes.image.data.attributes.url}
              className="w-full h-full object-cover"
              alt={blogData.attributes.title}
            />
          </div>
          <div className="w-[60%] mx-auto">
            <RenderRichText content={blogData.attributes.description} />
          </div>
          <div className="flex flex-col justify-normal gap-[1rem] border p-[3rem] text-[1rem] w-[40%] mx-auto ">
            <div className="text-center">
              If you enjoyed reading this story, then we'd love it if you would{" "}
              <span className="font-bold">share it!</span>
            </div>
            <div className="flex justify-center items-center gap-[1rem]">
              <CiFacebook size={20} />
              <CiTwitter size={20} />
              <CiInstagram size={20} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBlogComp;
