import Cookies from "js-cookie";
import ApiInstance from "../axiosconfig";
import { GET_ALL_PARTNERS } from "../routes";

const fetchAllPartners = async () => {
  const response = await ApiInstance.get(GET_ALL_PARTNERS);
  return response.data;
};

const partnerService = {
  fetchAllPartners,
};

export default partnerService;
