const API = "https://6a169f001b90031f81b140d7.mockapi.io/users"
import axios from "axios"

export const doGetUser = async (url) => {
    const responseData = await axios.get(`${API}${url}`);
    return responseData.data;
}

export const doPostUser = async (url, data) => {
    const responseData = await axios.post(`${API}`, data);
    return responseData.data;
}