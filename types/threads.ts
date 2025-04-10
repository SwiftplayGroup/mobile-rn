export interface Thread {
  id: string;
  user: string;
  content: string;
  forum?: string;
  date: Date;
  tags?: string[];
  views: number;
  likes: number;
  isDeleted: boolean;
}
