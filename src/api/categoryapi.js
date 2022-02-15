import { axiosClient } from "./axiosClient";

export const getAllCate = () => {
  const url = "/categories";
  return axiosClient.get(url);
};
export const editProduct = (id) => {
   const url = `categories?id_ne=${id}`;
   return axiosClient.get(url);
}
export const addcate = (cate) => {
  const url = "/categories";
  return axiosClient.post(url, cate);
};
export const remove = (id) => {
  const url = `/categories/${id}`;
  return axiosClient.delete(url);
};
export const get = (id) => {
  const url = `/categories/${id}`;
  return axiosClient.get(url);
};

export const edit = (cate) => {
  const url = `/categories/${cate.id}`;
  return axiosClient.put(url, cate);
};
export const readCate = (id_cate, classify, id) => {
  const url = `products?categoryId=${id_cate}&id_ne=${id}&classify=${classify}&_limit=4`;
 return axiosClient.get(url);
}