import { useState } from "react";
import { ScrollView, View } from "react-native";
import { PostCard } from "@/components/PostCard";

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
    id: 2,
    author: "@Vi",
    content: "I be doin studyin n shi",
  },
  {
    id: 2,
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
    <ScrollView className="mt-2">
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
  );
}
