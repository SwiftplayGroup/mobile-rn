import { MessageSquareText } from "lucide-react-native";
import { Pressable } from "react-native";

export function CommentButton() {
  return (
    <Pressable>
      <MessageSquareText color="black" size={24} />
    </Pressable>
  );
}
