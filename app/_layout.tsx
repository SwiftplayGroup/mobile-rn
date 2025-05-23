// app/_layout.tsx
import { useEffect } from "react";
import { Slot, Stack, useRouter } from "expo-router";
import { useAuth } from "@/store/auth";
import { TamaguiProvider, createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { PortalProvider } from "@tamagui/portal";

const config = createTamagui(defaultConfig);

export default function RootLayout() {
  const { token, isLoading, checkAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!token) {
        router.replace("/(auth)/login");
      }
    }
  }, [isLoading, token]);

  if (isLoading) return null; // or splash screen

  return (
    <TamaguiProvider config={config}>
      <PortalProvider shouldAddRootHost>
        <Stack
          screenOptions={{
            headerTitle: "Swiftplay",
          }}
        >
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerBackVisible: false,
            }}
          />
        </Stack>
      </PortalProvider>
    </TamaguiProvider>
  );
}
