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
  return axiosClient.post(url, product);
};
export const remove = (id) => {
  const url = `/products/${id}`;
  return axiosClient.delete(url);
};
export const read = (id) => {
  

  const url = `/products/${id}?_expand=category`;
  return axiosClient.get(url);
};
export const update = (id, data) => {
  const url = `/products/${id}`;
  return axiosClient.put(url, data);
};
export const listProductCate = (sex) => {
  const url = `/products?classify=${sex}`;
  return axiosClient.get(url);
};
export const sortproductAsc = (sortType) => {
  console.log("Sort by: ", sortType);
  const url = `products?_sort=price&_order=${sortType}`;
  return axiosClient.get(url);
};
export const sortproductSex = (sex, sortType) => {
  const url = `/products?classify=${sex}&_sort=price&_order=${sortType}`;
  return axiosClient.get(url);
}
export const searchproduct = (text) => {
  const url = `products?q=${text}`;
  return axiosClient.get(url);
}
export const productCate = (sex) => {
 const url = `/products?classify=${sex}`;
  return axiosClient.get(url);
}
export const paginateProduct = (page = 1, limit = 4) => {
  const url = `products?_page=${page}&_limit=${limit}`;
  return axiosClient.get(url);

} 
