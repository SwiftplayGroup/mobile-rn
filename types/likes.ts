export interface Like {
  _id: string;
  userId: string;
  threadId: string;
  createdAt: Date;
}

export interface HasLikedResponse {
  liked: boolean;
}

export type CreateLikePayload = Omit<Like, "_id" | "createdAt">;
