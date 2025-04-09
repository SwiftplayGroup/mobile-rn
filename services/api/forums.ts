import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/", //This is for dev
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getForums = async () => {
  const response = await api.get("/forums");
  return response.data;
};
