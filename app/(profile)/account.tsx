import { Text, Button, ScrollView } from "tamagui";
import { useAuth } from "@/store/auth";

export default function AccountOptions() {
  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
  };

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
      <Button theme="red" marginTop="$4" onPress={handleSignOut}>
        Sign Out
      </Button>
    </ScrollView>
  );
}
