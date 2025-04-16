import { api } from "@/services/api/api";
import { CreateLikePayload, HasLikedResponse } from "@/types/likes";

//V2
export const createLike = async (like: CreateLikePayload) => {
  const data = await api.post(`/posts/${like.postID}/likes`, like);
  return data;
};

//V2 but not implementable
export const deleteLike = async (likeID: string) => {
  const data = await api.delete(`/likes/${likeID}`);
  return data;
};

//V1
export const hasLiked = async (
  userId: string,
  threadId: string,
): Promise<HasLikedResponse> => {
  const { data } = await api.get("/likes/hasLiked", {
    params: { userId, threadId },
  });
  return data;
};

//V2
export const getUsersLikes = async (userId: string) => {
  const { data } = await api.get(`/users/${userId}/likes`);
  return data;
};
