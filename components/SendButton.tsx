import { Send } from "lucide-react-native";
import { Pressable } from "react-native";
import { useState } from "react";
import { Sheet, XStack, YStack, Button, TextArea, Text } from "tamagui";
import { X } from "@tamagui/lucide-icons";

export function SendButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <Send color="black" size={24} />
      </Pressable>

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[75]}
        position={0}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" gap="$4">
          <XStack justifyContent="space-between" alignItems="center">
            <Text className="text-lg font-bold">Send Message</Text>
            <Button
              size="$2"
              circular
              icon={X}
              onPress={() => setOpen(false)}
            />
          </XStack>
          <Text>Type your message below.</Text>
          <TextArea placeholder="Write something..." />
          <XStack alignSelf="flex-end" gap="$4">
            <Button theme="alt1" onPress={() => setOpen(false)}>
              Cancel
            </Button>
            <Button theme="active">Send</Button>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
