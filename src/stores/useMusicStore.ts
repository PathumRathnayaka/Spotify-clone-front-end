import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { error } from "console";
import { create} from "zustand";

interface MusicStore {
    song: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;

    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums:[],
    song:[],
    isLoading: false,
    error: null,

    fetchAlbums: async() => {
        set({ isLoading: true, error: null});

        try {
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data});
        } catch (error: any) {
            set({error: error.response.data.message});
        }finally {
            set({ isLoading: false})
        }
    },
    fetchAlbumById: async (id: string) =>{
        set({ isLoading: true, error: null});
        try {
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data})
        } catch (error:any) {
            set({error: error.response.data.message})
        }finally{
            set({isLoading: false});
        }
    }
}));