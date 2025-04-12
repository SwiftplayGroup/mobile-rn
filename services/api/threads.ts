import { api } from "./api";
import { Thread, CreateThreadPayload } from "@/types/threads";

export const getThreads = async (): Promise<Thread[]> => {
  const response = await api.get("/threads");
  return response.data;
};

export const createThread = async (thread: CreateThreadPayload) => {
  const response = await api.post("/threads", thread);
  return response.data;
};
