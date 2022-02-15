import axios from "axios";
export const axiosClient = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        'Content-Type': 'application/json'
    }

})