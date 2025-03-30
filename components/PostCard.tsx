import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { LikeButton } from "@/components/LikeButton";
import { CommentButton } from "@/components/CommentButton";
import { RepostButton } from "@/components/RepostButton";
import { SendButton } from "@/components/SendButton";
import { Sheet, XStack, YStack, Button, Separator } from "tamagui";
import { X } from "@tamagui/lucide-icons";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
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
      </Pressable>

      {/* Post Details Sheet */}
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85]}
        position={0}
      >
        <Sheet.Overlay
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" gap="$4">
          <XStack justifyContent="space-between" alignItems="center">
            <Text className="text-lg font-bold">Post</Text>
            <Button
              size="$2"
              circular
              icon={X}
              onPress={() => setOpen(false)}
            />
          </XStack>

          <YStack gap="$2">
            <Text className="text-sm font-bold">{post.author}</Text>
            <Text className="text-base text-gray-800">{post.content}</Text>
          </YStack>

          <Separator />

          {/* Replies Section - Placeholder for now */}
          <Text className="text-gray-500">Replies will go here...</Text>

          <Separator />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
