import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 
      (import.meta.env.MODE === "development" 
        ? "https://spotify-clone-backend-ruddy.vercel.app/api" 
        : "https://spotify-clone-backend-ruddy.vercel.app/api"),
    withCredentials: true
  })