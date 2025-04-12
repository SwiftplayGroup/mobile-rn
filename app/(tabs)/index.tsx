import { useState } from "react";
import { ScrollView, View } from "react-native";
import { ThreadCard } from "@/components/ThreadCard";
import { ThreadHeader } from "@/components/ThreadHeader";
import { Button } from "tamagui";
import { getThreads } from "@/services/api/threads";
import { Thread } from "@/types/threads";
import { useEffect } from "react";

export default function Index() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await getThreads();
        setThreads(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchThreads();
  }, []);

  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <ThreadHeader />

        <View className="flex-1">
          {threads.map((thread) => (
            <ThreadCard key={thread._id} thread={thread} />
          ))}
        </View>
        <Button chromeless onPress={() => {}}>
          Load More
        </Button>
      </ScrollView>
    </View>
  );
}
