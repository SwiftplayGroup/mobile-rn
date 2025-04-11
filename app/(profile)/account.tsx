import { useRouter } from "expo-router";
import { View, Text, Button, ScrollView } from "tamagui";

export default function AccountOptions() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text fontSize="$5" marginTop="$4" marginBottom="$2">
        Account Options
      </Text>

      <Button theme="blue" marginBottom="$2">
        Notifications
      </Button>
      <Button theme="blue" marginBottom="$2">
        Likes
      </Button>
      <Button theme="blue" marginBottom="$2">
        Saved
      </Button>
      <Button theme="red" marginTop="$4">
        Sign Out
      </Button>
    </ScrollView>
  );
}
