import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this

const config = createTamagui(defaultConfig); // Import your global CSS file

import "../global.css";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
}
