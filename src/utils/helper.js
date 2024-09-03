import { uploads_uri } from "./baseUrl";
import userImage from "../app/images/Avatar Image.png";

export const extractError = (res) => {
  return res.error[0].responseMessage;
};

export const userAvatar = userImage;

export const getFileFromServer = (file) => `${uploads_uri}${file}`;
