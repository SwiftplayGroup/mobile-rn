import React from "react";
import { CloudLightning } from "@tamagui/lucide-icons";
import { Separator } from "tamagui";
import { View } from "react-native";

export function AppHeader() {
  return (
    <>
      <View className="flex-1 max-h-24 items-center justify-end pb-2">
        <CloudLightning size={48} color="black" />
      </View>
      <Separator />
    </>
  );
}
