import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;
const BASE_URL_FOR_JUNOLOGIX = "https://dev-backend.paperlink.app";

export const ApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const JunologixAxionInstance = axios.create({
  baseURL: BASE_URL_FOR_JUNOLOGIX,
});
