import Cookies from "js-cookie";
import ApiInstance from "../axiosconfig";
import {
  GET_ALL_BLOGS,
  GET_ALL_CATEGORIES,
  GET_BLOG_BY_ID,
  GET_BLOGS_BY_FILTER,
  GET_LATEST_BLOGS,
} from "../routes";

const fetchAllBlogs = async () => {
  const response = await ApiInstance.get(GET_ALL_BLOGS);
  return response.data;
};
const getLatestBlogs = async () => {
  const response = await ApiInstance.get(GET_LATEST_BLOGS);
  return response.data;
};
const fetchBlogsFilterBy = async (key) => {
  const response = await ApiInstance.get(GET_BLOGS_BY_FILTER(key));
  return response.data;
};
const fetchAllCategories = async (key) => {
  const response = await ApiInstance.get(GET_ALL_CATEGORIES);
  return response.data;
};

const fetchBlogById = async (id) => {
  const response = await ApiInstance.get(GET_BLOG_BY_ID(id));
  return response.data;
};

const BlogsService = {
  fetchAllBlogs,
  fetchBlogsFilterBy,
  fetchAllCategories,
  getLatestBlogs,
  fetchBlogById,
};

export default BlogsService;
