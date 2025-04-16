import { api } from "./api";
import { LoginResponse } from "@/types/auth";

//V2
export const login = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await api.post("/user/sessions", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//V2
export const signup = async (
  emailAddress: string,
  username: string,
  password: string,
) => {
  try {
    await api.post("/users", { emailAddress, username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//V2
export const logout = async (
  sessionID: string,
  token: string,
  accountID: string,
) => {
  try {
    const response = await api.delete(`/user/sessions/${sessionID}`, {
      headers: {
        token,
        "account-id": accountID,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

//V2
export const getSessionFromToken = async (refreshToken: string) => {
  try {
    const response = await api.post("/user/sessions/by-token", {
      refreshToken,
    });
    return response.data.session;
  } catch (error) {
    throw error;
  }
};
