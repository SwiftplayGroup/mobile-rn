import { View, Text } from "react-native";
import { Avatar, XStack, YStack } from "tamagui";

export default function Profile() {
  return (
    <View className="m-4">
      <XStack className="items-center">
        <YStack className="flex-1">
          <Text className="text-4xl font-bold">Aiden Jastrzembski</Text>
          <Text className="mt-2 text-xl">@itsaidenjai</Text>
        </YStack>
        <View className="ml-auto">
          <Avatar circular size="$6">
            <Avatar.Image
              accessibilityLabel="User Avatar"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
          </Avatar>
        </View>
      </XStack>
    </View>
  );
}
