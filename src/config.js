import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://backend.getlinked.ai",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});
