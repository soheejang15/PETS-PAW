import axios from "axios";
import { BASE_URL, SERVICE_KEY } from "./constant";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    serviceKey: SERVICE_KEY,
    _type: "json",
  },
});

export default instance;
