import { api } from "./api";
import { Post } from "@/types/posts";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const createPost = async (post: Post) => {
  const response = await api.post("/posts", post);
  return response.data;
};
