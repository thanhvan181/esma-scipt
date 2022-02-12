import { axiosClient } from "./axiosClient";

export const getAll = () => {
  const url = "/products";
  return axiosClient.get(url);
};
export const list = () => {
  const url = "/products?_expand=category";
  return axiosClient.get(url);
};
export const addproduct = (product) => {
  const url = "/products";
  return axiosClient.post(url, product)
}