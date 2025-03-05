import axios from "axios";
import Cookies from "js-cookie";

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend-marketplace-3xzz.onrender.com";

// Создаем Axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Позволяет передавать cookies (если используешь httpOnly)
});


// Перехватчик запроса
apiClient.interceptors.request.use((config) => {
    return config;
});

// Перехватчик ответа
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        return Promise.reject(error);
    }
);
export default apiClient;