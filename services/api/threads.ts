import { api } from "./api";
import { Thread } from "@/types/threads";

export const getThreads = async () => {
  const response = await api.get("/threads");
  return response.data;
};

export const createThread = async (thread: Thread) => {
  const response = await api.post("/threads", thread);
  return response.data;
};
