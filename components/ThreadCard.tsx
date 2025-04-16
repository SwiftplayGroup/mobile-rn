import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { LikeButton } from "@/components/LikeButton";
import { CommentButton } from "@/components/CommentButton";
import { RepostButton } from "@/components/RepostButton";
import { SendButton } from "@/components/SendButton";
import { Sheet, XStack, YStack, Button, Separator } from "tamagui";
import { X } from "@tamagui/lucide-icons";
import { Thread } from "@/types/threads";
import { createLike, deleteLike, hasLiked } from "@/services/api/likes";
import { useEffect } from "react";

interface ThreadCardProps {
  thread: Thread;
  user: string;
}

export function ThreadCard({ thread, user }: ThreadCardProps) {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const onLikePress = (id: string) => {
    setLiked(!liked); //inverse of liked
    if (liked == false) {
      createLike({ postID: id, userID: user });
    } else {
      deleteLike(id);
    }
  };

  useEffect(() => {
    const fetchHasLiked = async () => {
      try {
        const res = await hasLiked(user, thread._id);
        setLiked(res.liked);
      } catch (err) {
        console.error("Error checking like status:", err);
      }
    };

    fetchHasLiked();
  }, [user, thread._id]);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <View className="w-full max-w-md p-4 border-b border-gray-300">
          <Text className="text-sm font-bold">{thread.user}</Text>
          <Text className="text-base text-gray-800 mt-1">{thread.content}</Text>
          <View className="flex-row justify-between mt-2">
            <LikeButton liked={liked} onPress={() => onLikePress(thread._id)} />
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
            <Text className="text-sm font-bold">{thread.user}</Text>
            <Text className="text-base text-gray-800">{thread.content}</Text>
          </YStack>
          <View className="flex-row justify-between mt-2">
            <LikeButton liked={liked} onPress={() => onLikePress(thread._id)} />
            <CommentButton />
            <RepostButton />
            <SendButton />
          </View>

          <Separator />

          {/* Replies Section - Placeholder for now */}
          <Text className="text-gray-500">Replies will go here...</Text>

          <Separator />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
