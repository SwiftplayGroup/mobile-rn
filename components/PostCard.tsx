import { Text, View } from "react-native";
import { LikeButton } from "@/components/LikeButton";
import { CommentButton } from "@/components/CommentButton";
import { RepostButton } from "@/components/RepostButton";
import { SendButton } from "@/components/SendButton";

interface Post {
  id: number;
  author: string;
  content: string;
}

interface PostCardProps {
  post: Post;
  liked: boolean;
  onLikePress: (postId: number) => void;
}

export function PostCard({ post, liked, onLikePress }: PostCardProps) {
  return (
    <View className="w-full max-w-md p-4 border-b border-gray-300">
      <Text className="text-sm font-bold">{post.author}</Text>
      <Text className="text-base text-gray-800 mt-1">{post.content}</Text>
      <View className="flex-row justify-between mt-2">
        <LikeButton liked={liked} onPress={() => onLikePress(post.id)} />
        <CommentButton />
        <RepostButton />
        <SendButton />
      </View>
    </View>
  );
}
