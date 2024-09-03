import Cookies from "js-cookie";
import ApiInstance from "../axiosconfig";
import { CREATE_APPOINTMENT } from "../routes";

const createAppointment = async (data) => {
  const response = await ApiInstance.post(CREATE_APPOINTMENT, data);
  return response.data;
};

const ContactService = {
  createAppointment,
};

export default ContactService;
