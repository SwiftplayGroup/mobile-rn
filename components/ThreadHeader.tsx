import {
  Avatar,
  Sheet,
  Separator,
  XStack,
  YStack,
  Button,
  TextArea,
} from "tamagui";
import { Pressable, Text } from "react-native";
import { X } from "@tamagui/lucide-icons";
import { useEffect, useState } from "react";
import { createPost } from "@/services/api/posts";
import { CreatePostPayload } from "@/types/posts";

export function ThreadHeader() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleCreateThread = async () => {
    if (!content.trim()) return;

    const newPost: CreatePostPayload = {
      user: "@username",
      content,
      parentPostId: undefined,
      forum: undefined,
      tags: [],
      views: 0,
      likes: 0,
    };

    try {
      await createPost(newPost);
      setContent("");
      setOpen(false);
    } catch (err) {
      console.error("Failed to create thread", err);
      // Optional: show user feedback
    }
  };

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <XStack
          alignItems="center"
          padding={10}
          hoverStyle={{ cursor: "pointer" }}
        >
          <Avatar circular size="$4">
            <Avatar.Image
              accessibilityLabel="User Avatar"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
          </Avatar>

          <YStack marginLeft={10}>
            <Text>Username</Text>
            <Text className="text-zinc-500">What's on your mind?</Text>
          </YStack>
        </XStack>
      </Pressable>

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[75]}
        position={0}
        dismissOnSnapToBottom
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
            <Text className="text-lg font-bold">Create Post</Text>
            <Button
              size="$2"
              circular
              icon={X}
              onPress={() => setOpen(false)}
            />
          </XStack>
          <Text>Share what's on your mind with your friends.</Text>
          <TextArea placeholder="What's happening?" onChangeText={setContent} />
          <XStack alignSelf="flex-end" gap="$4">
            <Button
              theme="alt1"
              aria-label="Close"
              onPress={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button theme="active" onPress={handleCreateThread}>
              Post
            </Button>
          </XStack>
        </Sheet.Frame>
      </Sheet>
      <Separator />
    </>
  );
}
