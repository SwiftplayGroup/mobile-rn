export interface Thread {
  _id: string;
  user: string;
  content: string;
  forum?: string;
  date: Date;
  tags?: string[];
  views: number;
  likes: number;
  isDeleted: boolean;
}

export type CreateThreadPayload = Omit<Thread, "_id">;
