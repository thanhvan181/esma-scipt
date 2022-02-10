import { axiosClient } from "./axiosClient";

export const getAll = () => {
  const url = "/categories";
  return axiosClient.get(url);
};