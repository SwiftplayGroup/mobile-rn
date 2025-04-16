import { api } from "./api";
import { CreatePostPayload } from "@/types/posts";

//V2
export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

//V1 but should be implemented in V2
export const createPost = async (post: CreatePostPayload) => {
  const response = await api.post("/posts", post);
  return response.data;
};
