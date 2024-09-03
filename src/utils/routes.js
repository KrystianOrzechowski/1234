export const GET_ALL_BLOGS = `/blogs?populate=*`;
export const GET_LATEST_BLOGS = `/blogs?populate=*`;
export const GET_BLOG_BY_ID = (id) => `/blogs/${id}?populate=*`;
export const GET_BLOGS_BY_FILTER = (key) =>
  `/blogs?populate=*&filters[category][title][$eq]=${key}`;
export const GET_ALL_CATEGORIES = `/categories?populate=blogs.image,blogs.category`;
export const GET_ALL_OFFERS = `/offers?populate=*`;
export const GET_OFFER_BY_ID = (id) =>
  `/offers/${id}?populate=description, specialist.avatar, thumbnail, services.image`;
export const CREATE_APPOINTMENT = `/appointments`;
export const GET_ALL_PARTNERS = `/partners?populate=*`;
export const GET_HERO_BANNER = `/hero-banner?populate=*`;
