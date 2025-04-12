import { api } from "@/services/api/api";
import { CreateLikePayloud, Like } from "@/types/likes";

export const createLike = async (like: CreateLikePayloud) => {
  const data = await api.post("/likes", like);
  return data;
};

export const deleteLike = async (id: string) => {
  const data = await api.delete(`/likes/${id}`);
  return data;
};

export const hasLiked = async (userId: string, postId: string) => {
  const { data } = await api.get("/likes/hasLiked", {
    params: { userId, postId },
  });
  return data;
};

export const getUsersLikes = async (userId: string) => {
  const { data } = await api.get(`/accounts/likes/${userId}`);
  return data;
};
