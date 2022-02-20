import axios from "axios";
export const axiosClient = axios.create({
    baseURL: '192.46.226.178',
    headers: {
        'Content-Type': 'application/json'
    }

})