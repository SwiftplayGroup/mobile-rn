import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import { PortalProvider } from "@tamagui/portal";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this

const config = createTamagui(defaultConfig); // Import your global CSS file

import "../global.css";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <PortalProvider shouldAddRootHost>
        <Stack />
      </PortalProvider>
    </TamaguiProvider>
  );
}
