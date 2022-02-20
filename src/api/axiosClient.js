import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "https://json-server-van.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});