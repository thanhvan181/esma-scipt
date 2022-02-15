import { axiosClient } from "./axiosClient";
export const postAPI = {
  list() {
    const url = `posts`;
    return axiosClient.get(url);
  },
  read(id) {
    const url = `posts/${id}`;
    return axiosClient.get(url);
  },
 

  edit(id, data) {
    const url = `posts/${id}`;
    return axiosClient.put(url, data);
  },
  readCate(id) {
    const url = `posts?&id_ne=${id}&_limit=7`;
    return axiosClient.get(url);
  },
};
export const add = (data) => {
    const url = `posts`;
    return axiosClient.post(url,data)

}
export const remove = (id) => {
  const url = `posts/${id}`;
  return axiosClient.delete(url);
}
export const edit = (id, data) => {
   const url = `posts/${id}`;
   return axiosClient.put(url, data)
}
export const listedit = (id) => {
   const url = `posts/${id}`;
   return axiosClient.get(url);
  
}
