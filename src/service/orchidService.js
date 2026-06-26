import axios from "axios";

const API =
    import.meta.env.VITE_BASE_URL;

export const doGet = async (url) => {
    try {
        const response = await axios.get(`${API}${url}`);
        return response.data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
}

export const doPost = async (url, data) => {
    try {
        const response = await axios.post(`${API}${url}`, data);
        return response.data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
}

export const doDelete = async (url) => {
    try {
        const response = await axios.delete(`${API}${url}`);
        return response.data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
}

export const doPut = async (url, data) => {
    try {
        const response = await axios.put(`${API}${url}`, data);
        return response.data;
    } catch (error) {
        console.log("Error: " + error);
        throw error;
    }
}