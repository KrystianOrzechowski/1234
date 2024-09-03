import Cookies from "js-cookie";
import ApiInstance from "../axiosconfig";
import { GET_ALL_OFFERS, GET_OFFER_BY_ID } from "../routes";

const fetchAllOffers = async () => {
  const response = await ApiInstance.get(GET_ALL_OFFERS);
  return response.data;
};

const fetchOfferById = async (id) => {
  const response = await ApiInstance.get(GET_OFFER_BY_ID(id));
  return response.data;
};

const OfferService = {
  fetchAllOffers,
  fetchOfferById,
};

export default OfferService;
