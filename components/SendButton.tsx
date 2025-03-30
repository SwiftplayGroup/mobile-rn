import { Send } from "lucide-react-native";
import { Pressable } from "react-native";

export function SendButton() {
  return (
    <Pressable>
      <Send color="black" size={24} />
    </Pressable>
  );
}
