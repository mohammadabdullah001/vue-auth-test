import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    responseType: "json",
});

export default instance;
