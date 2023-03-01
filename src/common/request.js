import axios from 'axios';
import { BASE_URL } from '../utils/baseUrl';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});

export const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest = (params) => {
    return sendRequest({
        method: 'get',
        url: params
    })
}

export const postRequest = (path, newData) => {
    return sendRequest({
        method: "post",
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(newData)
    })
}