import { api } from "@/services/api/api";
import { CreateLikePayload, HasLikedResponse } from "@/types/likes";

export const createLike = async (like: CreateLikePayload) => {
  const data = await api.post("/likes", like);
  return data;
};

export const deleteLike = async (threadId: string, userId: string) => {
  const data = await api.delete(`/likes/deleteLike`, {
    params: { userId, threadId },
  });
  return data;
};

export const hasLiked = async (
  userId: string,
  threadId: string,
): Promise<HasLikedResponse> => {
  const { data } = await api.get("/likes/hasLiked", {
    params: { userId, threadId },
  });
  return data;
};

export const getUsersLikes = async (userId: string) => {
  const { data } = await api.get(`/accounts/likes/${userId}`);
  return data;
};
