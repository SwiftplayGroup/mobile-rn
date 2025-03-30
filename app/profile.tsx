import { View, Text } from "react-native";
import { Avatar } from "tamagui";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center">
      <Avatar circular size="$8" className="mb-4">
        <Avatar.Image
          accessibilityLabel="User Avatar"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
      </Avatar>
      <Text className="text-xl font-bold">User Profile</Text>
      <Text className="mt-2">Your profile information will appear here</Text>
    </View>
  );
}
