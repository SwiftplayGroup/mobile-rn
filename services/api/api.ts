import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/", //This is for dev
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
