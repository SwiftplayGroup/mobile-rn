import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="account"
        options={{
          title: "Profile",
          gestureEnabled: true,
          animation: "default",
        }}
      />
    </Stack>
  );
}
