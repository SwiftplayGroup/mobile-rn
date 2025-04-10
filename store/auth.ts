import { create } from "zustand";
import { saveToken, getToken, deleteToken } from "../utils/secureStore";

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
    set({ token, isLoading: false });
  },
}));
