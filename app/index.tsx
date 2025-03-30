import { useState } from "react";
import { ScrollView, View } from "react-native";
import { PostCard } from "@/components/PostCard";
import { PostHeader } from "@/components/PostHeader";
import { Dialog, Button } from "tamagui";

const posts = [
  {
    id: 1,
    author: "@SunnyDaze",
    content: "I love my boyfriend so much. He is so good at valorant :D",
  },
  {
    id: 2,
    author: "@Hadyen",
    content:
      "I FUCKING HATE VALORANT IT SUCKS, I SWING I GET FLASHED I DIE IT HAPPENS EVERY TIME I DONT GET TO PLAY ",
  },
  {
    id: 3,
    author: "@Vi",
    content: "I be doin studyin n shi",
  },
  {
    id: 4,
    author: "@Bannable",
    content: "Just bagged a baddie by eating korean food",
  },
];

export default function Index() {
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <View className="flex-1 mt-12">
      <PostHeader />
      <ScrollView className="mt-2 flex-1">
        <View className="flex-1">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              liked={!!likedPosts[post.id]}
              onLikePress={toggleLike}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
