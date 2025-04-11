import { api } from "./api";
export const login = async (username: string, password: string) => {
  try {
    await api.post("/account/sessions", { username, password });
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
