import { axiosClient } from "./axiosClient";

export const add = (data) => {
  const url = `orders`;
  return axiosClient.post(url, data);
};
export const list = () => {
  const url = `orders`;
  return axiosClient.get(url);
};
export const listone = (id) => {
  console.log("Id", id);
  const url = `orders/?userId=${id}`;
  return axiosClient.get(url);
};
export const listTotal = () => {
  const url = `orders`;
  return axiosClient.get(url);
};
export const update = (id, data) => {
  const url = `orders/${id}`;
  return axiosClient.put(url, data);
};
export const getOrder = (id) => {
  const url = `orders/${id}`;
  return axiosClient.get(url);
};
export const updateOrder = (id, data) => {
  const url = `orders/${id}`;
  return axiosClient.put(url, data);
};
export const remove = (id) => {
  const url = `orders/${id}`;
  return axiosClient.delete(url);
};

export const searchOrder = (text) => {
  const url = `orders?q=${text}`;
  return axiosClient.get(url);
};
export const sortOrderStatus = (sortType) => {
  console.log("Sort by: ", sortType);
  const url = `orders?status=${sortType}`;
  return axiosClient.get(url);
};

export const sortOrderTotal = (sortType) => {
  console.log("Sort by: ", sortType);
  const url = `orders?_sort=totalMoney&_order=${sortType}`;
  return axiosClient.get(url);
};
