"use client";
import React, { useEffect, useState } from "react";
import BlogsHero from "./BlogsHero";
import Lifestyle from "./Lifestyle";
import Travel from "./Travel";
import Recently from "./Recently";
import BlogsService from "@/utils/controllers/blogServices";

const BlogsComp = () => {
  const [blogData, setBlogData] = useState([]);
  const [latestBlogData, setLatestBlogData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await BlogsService.fetchAllBlogs();
      if (response && response.data && response.data.length > 0) {
        setBlogData(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await BlogsService.fetchAllCategories();
      if (response && response.data && response.data.length > 0) {
        setCategoryData(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchLatestBlogs = async () => {
    try {
      const response = await BlogsService.getLatestBlogs();
      if (response && response.data && response.data.length > 0) {
        setLatestBlogData(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
    fetchLatestBlogs();
  }, []);
  return (
    <div className="custom-container flex flex-col justify-normal gap-[4rem] my-[2rem]">
      <div>
        <BlogsHero data={blogData} />
      </div>
      {/* <div className="flex justify-normal items-center gap-[1rem]">
        <div className="w-[5rem] h-[1px] rounded-full bg-black" />
        <div className="text-red-500">Trending</div>
      </div> */}
      {/* <div>
        <Trending />
      </div> */}
      <div className="flex justify-normal  items-center gap-[1rem]">
        <div className="w-[5rem] h-[1px]  rounded-full bg-black" />
        <div className="text-red-500">
          {categoryData &&
            categoryData.length > 0 &&
            categoryData[0].attributes &&
            categoryData[0].attributes.title &&
            categoryData[0].attributes.title}
        </div>
      </div>
      <div>
        <Lifestyle data={categoryData} />
      </div>
      <div className="flex flex-col justify-normal gap-[1rem] bg-[#FAFAFA] p-[2rem] py-[4rem]">
        {categoryData &&
          categoryData.length > 0 &&
          categoryData.slice(1).map((v, i) => {
            return (
              <div key={v.id}>
                <div className="flex justify-between items-center ">
                  <div className="flex justify-normal items-center gap-[1rem] ">
                    <div className="w-[5rem] h-[1px] rounded-full bg-black" />
                    <div className="text-red-500">{v.attributes.title}</div>
                  </div>
                  {/* <div className="text-[0.875rem] font-[200] border border-black px-[1rem] py-[0.5rem]">
                    View more
                  </div> */}
                </div>
                <div>
                  <Travel
                    data={v.attributes.blogs.data}
                    category_name={v.attributes.title}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <Recently latest_data={latestBlogData} />
      </div>
    </div>
  );
};

export default BlogsComp;
