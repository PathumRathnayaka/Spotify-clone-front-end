import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
    songs: Song[]; 
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    madeForYouSongs: Song[];
    featuredSongs: Song[];
    trendingSongs: Song[];

    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    madeForYouSongs: [],
    featuredSongs: [],
    trendingSongs: [],

    fetchAlbums: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data });
        } catch (error: any) {
            set({ error: error?.response?.data?.message || "An error occurred" });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchAlbumById: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data });
        } catch (error: any) {
            set({ error: error?.response?.data?.message || "An error occurred" });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchFeaturedSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/song/featured");
            set({ featuredSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    },
    fetchMadeForYouSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/song/made-for-you");
            set({ madeForYouSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    },
    fetchTrendingSongs: async () =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/song/trending");
            set({ trendingSongs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally{
            set({ isLoading: false});
        }
    }
}));
