import axios from "axios";

export const api = axios.create({
  baseURL: "https://speedrun-listings-server.onrender.com", //This is for dev
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
