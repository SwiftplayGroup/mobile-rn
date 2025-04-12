import { useState } from "react";
import { useRouter } from "expo-router";
import { YStack, Input, Button, Text, XStack, View, Spinner } from "tamagui";
import { useAuth } from "../../store/auth";
import axios from "axios";
import { ArrowRight } from "@tamagui/lucide-icons";
import { login as LoginCall } from "@/services/api/auth";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await LoginCall(username, password);
      router.replace("/(tabs)/profile");
      login(data.token);
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View height="100%" width="100%">
      <YStack
        flex={1}
        padding="$4"
        gap="$4"
        maxWidth={500}
        justifyContent="center"
      >
        <YStack gap="$1" marginBottom="$8">
          <Text
            fontFamily="$heading"
            fontSize="$8"
            fontWeight="bold"
            textAlign="left"
            color="$color12"
          >
            Welcome Back
          </Text>
          <Text fontSize="$3" color="$color10" textAlign="left" opacity={0.8}>
            Sign in to continue to your account
          </Text>
        </YStack>

        <YStack gap="$5">
          <YStack gap="$2">
            <Text fontSize="$3" fontWeight="500" color="$color11">
              Username
            </Text>
            <Input
              size="$4"
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$4"
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              keyboardType="email-address"
              focusStyle={{ borderColor: "$color10" }}
            />
          </YStack>

          <YStack space="$2">
            <Text fontSize="$3" fontWeight="500" color="$color11">
              Password
            </Text>
            <Input
              size="$4"
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$4"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              focusStyle={{ borderColor: "$color10" }}
            />
          </YStack>

          <Text
            textAlign="right"
            fontSize="$2"
            fontWeight="500"
            color="$blue10"
            onPress={() => router.push("/(auth)/forgot-password")}
            opacity={0.9}
            pressStyle={{ opacity: 0.7 }}
          >
            Forgot password?
          </Text>
        </YStack>

        {!!error && (
          <Text
            color="$red10"
            backgroundColor="$red2"
            padding="$2"
            borderRadius="$2"
            textAlign="center"
          >
            {error}
          </Text>
        )}

        <YStack space="$4" marginTop="$2">
          <Button
            size="$5"
            variant="outlined"
            theme="accent"
            borderRadius="$4"
            onPress={handleLogin}
            disabled={loading}
            color={"$color1"}
            iconAfter={loading ? Spinner : ArrowRight}
          >
            <Text fontSize="$4" fontWeight="600" color="$color1">
              {loading ? "Signing In" : "Sign In"}
            </Text>
          </Button>

          <XStack justifyContent="center" alignItems="center" space="$2">
            <Text fontSize="$3" color="$color11">
              Don't have an account?
            </Text>
            <Text
              fontSize="$3"
              fontWeight="600"
              color="$blue10"
              onPress={() => router.push("/(auth)/signup")}
              pressStyle={{ opacity: 0.7 }}
            >
              Sign Up
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </View>
  );
}
