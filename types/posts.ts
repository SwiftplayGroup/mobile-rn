export interface Post {
  id: string;
  user: string;
  content: string;
  parentPostId?: string;
  forum?: string;
  date: Date;
  tags?: string[];
  views: number;
  likes: number;
  isDeleted: boolean;
}

export type CreatePostPayload = Omit<Post, "id" | "date" | "isDeleted">;
