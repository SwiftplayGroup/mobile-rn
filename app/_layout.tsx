import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider, Button, Text } from "tamagui";
import { PortalProvider } from "@tamagui/portal";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import { Tabs } from "expo-router";
import { Home, User, Bell, Search } from "@tamagui/lucide-icons";
import { AppHeader } from "../components/AppHeader";

const config = createTamagui(defaultConfig); // Import your global CSS file

import "../global.css";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <PortalProvider shouldAddRootHost>
        <AppHeader />
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#000",
            tabBarInactiveTintColor: "#666",
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => <Home size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Explore",
              tabBarIcon: ({ color }) => <Search size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="notifications"
            options={{
              title: "Notifications",
              tabBarIcon: ({ color }) => <Bell size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => <User size={24} color={color} />,
            }}
          />
        </Tabs>
      </PortalProvider>
    </TamaguiProvider>
  );
}
