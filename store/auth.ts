import { create } from "zustand";
import { saveToken, getToken, deleteToken } from "../utils/secureStore";
import { getSessionFromToken } from "@/services/api/auth";

type AuthState = {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  isLoading: true,
  login: async (token) => {
    await saveToken(token);
    set({ token });
  },
  logout: async () => {
    await deleteToken();
    set({ token: null });
  },
  checkAuth: async () => {
    const token = await getToken();
    if (!token) {
      set({ token: null, isLoading: false });
      return;
    } else {
      const data = await getSessionFromToken(token);
      if (!data) {
        set({ token: null, isLoading: false });
        return;
      } else if (data.experationDate < Date.now()) {
        set({ token: null, isLoading: false });
      } else {
        set({ token, isLoading: false });
      }
    }
    set({ token, isLoading: false });
  },
}));
