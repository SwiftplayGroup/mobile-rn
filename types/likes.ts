export interface Like {
  _id: string;
  userId: string;
  postId: string;
  createdAt: Date;
}

export type CreateLikePayloud = Omit<Like, "_id" | "createdAt">;
