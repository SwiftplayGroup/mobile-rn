import { useState } from "react";
import { useRouter } from "expo-router";
import { YStack, Input, Button, Text, XStack, Theme, Spinner } from "tamagui";
import { signup } from "@/services/api/auth"; // Adjust the path as needed
import { ArrowRight } from "@tamagui/lucide-icons";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    setLoading(true);
    try {
      await signup(email, username, password);
      router.replace("/(auth)/login"); // Redirect to login after successful signup
    } catch (err) {
      setError(`Signup failed. Please try again. ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Theme name="light">
      <YStack
        flex={1}
        padding="$5"
        gap="$4"
        maxWidth={500}
        marginHorizontal="auto"
        justifyContent="center"
      >
        <YStack gap="$6" marginBottom="$6">
          <Text
            fontFamily="$heading"
            fontSize="$8"
            fontWeight="bold"
            textAlign="center"
            color="$color12"
          >
            Create Account
          </Text>
          <Text fontSize="$3" color="$color10" textAlign="center" opacity={0.8}>
            Sign up to get started.
          </Text>
        </YStack>

        <YStack space="$5">
          <YStack space="$2">
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
              focusStyle={{ borderColor: "$color10" }}
            />
          </YStack>

          <YStack space="$2">
            <Text fontSize="$3" fontWeight="500" color="$color11">
              Email
            </Text>
            <Input
              size="$4"
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$4"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
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

        <YStack gap="$4" marginTop="$2">
          <Button
            size="$5"
            theme="active"
            borderRadius="$4"
            onPress={handleSignup}
            disabled={loading}
            pressStyle={{ opacity: 0.9 }}
            iconAfter={loading ? Spinner : ArrowRight}
          >
            <Text fontSize="$4" fontWeight="600" color="$color1">
              {loading ? "Signing Up" : "Sign Up"}
            </Text>
          </Button>

          <XStack justifyContent="center" alignItems="center" gap="$2">
            <Text fontSize="$3" color="$color11">
              Already have an account?
            </Text>
            <Text
              fontSize="$3"
              fontWeight="600"
              color="$blue10"
              onPress={() => router.push("/(auth)/login")}
              pressStyle={{ opacity: 0.7 }}
            >
              Log In
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </Theme>
  );
}
