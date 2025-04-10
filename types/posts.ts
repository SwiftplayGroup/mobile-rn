export interface Post {
  id: string;
  user: string;
  content: string;
  parentThread: string;
  parentPost?: string;
  date: Date;
  tags?: string[];
  views: number;
  likes: number;
  isDeleted: boolean;
}
