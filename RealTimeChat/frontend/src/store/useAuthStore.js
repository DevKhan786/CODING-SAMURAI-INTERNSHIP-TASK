import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  loading: false,
  error: null,

  checkAuth: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get("/auth/check");
      set({ authUser: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false, authUser: null });
      console.error("Error in checkAuth:", error.message);
    } finally {
      set({ loading: false });
    }
  },
}));
