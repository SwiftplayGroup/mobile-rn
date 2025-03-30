import { Heart } from "lucide-react-native";
import { Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface LikeButtonProps {
  liked: boolean;
  onPress: () => void;
}

export function LikeButton({ liked, onPress }: LikeButtonProps) {
  // Animation values
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  // Animated styles for the heart icon
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    };
  });

  // Handle press with animation
  const handlePress = () => {
    // If becoming liked, play "bounce" animation
    if (!liked) {
      scale.value = withSequence(
        withSpring(1.3, { damping: 2 }),
        withSpring(1, { damping: 3 }),
      );
      rotation.value = withSequence(
        withTiming(-10, { duration: 100 }),
        withTiming(10, { duration: 100 }),
        withTiming(0, { duration: 100 }),
      );
    } else {
      // If becoming unliked, play a simple scale down animation
      scale.value = withSequence(
        withTiming(0.8, { duration: 150 }),
        withTiming(1, { duration: 150 }),
      );
    }

    // Call the original onPress handler
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={animatedStyle}>
        <Heart
          size={24}
          color={liked ? "red" : "black"}
          fill={liked ? "red" : "transparent"}
        />
      </Animated.View>
    </Pressable>
  );
}
