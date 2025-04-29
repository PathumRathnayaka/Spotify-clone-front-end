import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://spotify-clone-backend-ruddy.vercel.app/api" : "/api",
})