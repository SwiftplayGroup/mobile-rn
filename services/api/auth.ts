import { api } from "./api";
import { LoginResponse } from "@/types/auth";

export const login = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await api.post("/account/sessions", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  emailAddress: string,
  username: string,
  password: string,
) => {
  try {
    await api.post("/accounts", { emailAddress, username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSessionFromToken = async (refreshToken: string) => {
  try {
    const response = await api.post("/account/sessions/by-token", {
      refreshToken,
    });
    return response.data.session;
  } catch (error) {
    throw error;
  }
};
