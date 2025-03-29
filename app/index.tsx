import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Card, CardFooter, CardHeader, CardContent } from "@/components/Card";
import { LikeButton } from "@/components/LikeButton";

const posts = [
  { id: 1, author: "@SunnyDaze", content: "This is the content of post 1." },
  {
    id: 2,
    author: "@Hadyen",
    content:
      "This is the content of post 2. his is the content of post 2. his is the content of post 2. his is the content of post 2.",
  },
  { id: 3, author: "@SunnyDaze", content: "This is the content of post 1." },
  { id: 4, author: "@Hadyen", content: "This is the content of post 2." },
  { id: 5, author: "@SunnyDaze", content: "This is the content of post 1." },
  { id: 6, author: "@Hadyen", content: "This is the content of post 2." },
  { id: 7, author: "@SunnyDaze", content: "This is the content of post 1." },
  { id: 8, author: "@Hadyen", content: "This is the content of post 2." },
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
    <ScrollView className="mt-4 mb-4">
      <View className="flex-1 items-center justify-center gap-y-2">
        {posts.map((post) => (
          <Card key={post.id} className="w-full max-w-md h-auto p-0">
            <CardHeader>
              <Text className="text-sm font-bold">{post.author}</Text>
            </CardHeader>
            <CardContent>
              <Text>{post.content}</Text>
            </CardContent>
            <CardFooter>
              <LikeButton
                liked={!!likedPosts[post.id]}
                onPress={() => toggleLike(post.id)}
              />
            </CardFooter>
          </Card>
        ))}
        <Button variant="ghost">
          <Text>Load More</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
