import { axiosClient } from "./axiosClient";

export const getAllCate = () => {
  const url = "/categories";
  return axiosClient.get(url);
};
export const editProduct = (id) => {
   const url = `categories?id_ne=${id}`;
   return axiosClient.get(url);
}