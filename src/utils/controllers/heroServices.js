import Cookies from "js-cookie";
import ApiInstance from "../axiosconfig";
import { GET_HERO_BANNER } from "../routes";

const fetchHero = async () => {
  const response = await ApiInstance.get(GET_HERO_BANNER);
  return response.data;
};

const heroService = {
  fetchHero,
};

export default heroService;
