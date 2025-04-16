export interface Like {
  _id: string;
  userID: string;
  postID: string;
  createdAt: Date;
}

export interface HasLikedResponse {
  liked: boolean;
}
export type CreateLikePayload = Omit<Like, "_id" | "createdAt">;
