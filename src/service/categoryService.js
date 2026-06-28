const API = "http://localhost:3000/categories"
import axios from "axios"

export const doGetCategory = async (url) => {
    const responseData = await axios.get(`${API}${url}`);
    return responseData.data;
}

export const doPostCategory = async (url, data) => {
    const responseData = await axios.post(`${API}`, data);
    return responseData.data;
}