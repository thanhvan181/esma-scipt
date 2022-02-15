import { axiosClient } from "./axiosClient";

export const signup = (user) => {
  console.log("USER: ", user);
  const url = "/signup";
  return axiosClient.post(url, user);
};
export const signin = (user) => {
  const url = "/login";
  return axiosClient.post(url, user);
};
export const list = () => {
  const url = "/users";
  return axiosClient.get(url);
};

export const remove = (id) => {
  const url = `/users/${id}`;
  return axiosClient.delete(url);
};
export const listedit = (id, data) => {
  console.log("Id api", id);
  const url = `users/${id}`;
  return axiosClient.put(url, data);
};

export const get = (id) => {
  const url = `users/${id}`;
  return axiosClient.get(url);
};
