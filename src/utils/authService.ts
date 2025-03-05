import apiClient from "@/utils/apiClient";

interface LoginData {
    email: string;
    password: string;
}

export const authService = {
    async login(data: LoginData) {
        const response = await apiClient.post("/auth/login", data, { withCredentials: true });
        return response.data;
    },

    async logout() {
        await apiClient.post("/auth/logout", {}, { withCredentials: true });
    },

    async register(data: LoginData) {
        const response = await apiClient.post("/auth/register", data, { withCredentials: true });
        return response.data;
    },

    async getUser() {
        const response = await apiClient.get("/users/me", { withCredentials: true });
        return response.data;
    },
};
