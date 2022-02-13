import { axiosClient } from "./axiosClient";

export const getAll = () => {
  const url = "/products";
  return axiosClient.get(url);
};
export const get = (id) => {
  const url = `/products/${id}`;
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
export const remove = (id) => {
  const url = `/products/${id}`;
  return axiosClient.delete(url);
};
export const read = (id) => {
  console.log("Idread", id);

   const url = `/products/${id}?_expand=category`;
   return axiosClient.get(url);

}
export const update = (id, data) => {
  const url = `/products/${id}`;
  return axiosClient.put(url, data);
}