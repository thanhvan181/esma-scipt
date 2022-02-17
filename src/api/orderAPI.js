import { axiosClient } from "./axiosClient";

export const add = (data) => {
    const url = `orders`;
    return axiosClient.post(url,data)

}
export const list = () => {
     const url = `orders`;
     return axiosClient.get(url);
    
}