import { View } from "react-native";
import {
  Avatar,
  Button,
  Tabs,
  H5,
  XStack,
  YStack,
  Separator,
  Text,
} from "tamagui";
import { useState } from "react";
import { AlignRight, Settings, Search, BarChart2 } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Stack } from "expo-router";

export default function Profile() {
  const [tabState, setTabState] = useState("posts");
  const router = useRouter();

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "Profile",
        }}
      />
      <View className="flex-row items-center justify-between w-full px-4">
        <Button size="$2" chromeless>
          <Text>
            <Settings />
          </Text>
        </Button>
        <View className="flex-row items-center space-x-2">
          <Button size="$2" chromeless>
            <Text>
              <Search />
            </Text>
          </Button>
          <Button size="$2" chromeless>
            <Text>
              <BarChart2 />
            </Text>
          </Button>
          <Button
            size="$2"
            chromeless
            onPress={() => router.push("/(profile)/account")}
          >
            <Text>
              <AlignRight />
            </Text>
          </Button>
        </View>
      </View>
      <View className="m-4">
        <XStack className="items-center">
          <YStack className="flex-1">
            <Text fontSize={30} fontWeight="bold">
              Aiden Jastrzembski
            </Text>
            <Text fontSize={16}>@itsaidenjai</Text>
          </YStack>
          <View className="ml-auto">
            <Avatar circular size="$6">
              <Avatar.Image
                accessibilityLabel="User Avatar"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
            </Avatar>
          </View>
        </XStack>
        <Text fontSize={14}>Software Engineer</Text>
        <Text fontSize={14}>30 Followers</Text>
        <View className="mt-4 mb-4">
          <XStack gap="$2">
            <Button variant="outlined" size="$3" width={200}>
              <Text>Edit Profile</Text>
            </Button>
            <Button variant="outlined" size="$3" width={200}>
              <Text>Share Profile</Text>
            </Button>
          </XStack>
        </View>
        <Tabs
          defaultValue="posts"
          orientation="horizontal"
          flexDirection="column"
          width="100%"
          value={tabState}
          onValueChange={setTabState}
        >
          <Tabs.List
            separator={<Separator vertical />}
            disablePassBorderRadius
            paddingBottom="$1"
            borderBottomWidth="$0.25"
            borderColor="$borderColor"
            backgroundColor="$background"
          >
            <Tabs.Tab
              value="posts"
              flex={1}
              borderRadius="$4"
              paddingVertical="$3"
            >
              <Text
                fontWeight={tabState === "posts" ? "600" : "400"}
                color={tabState === "posts" ? "$color" : "$colorFocus"}
              >
                Posts
              </Text>
            </Tabs.Tab>

            <Tabs.Tab
              value="forums"
              flex={1}
              borderRadius="$4"
              paddingVertical="$3"
            >
              <Text
                fontWeight={tabState === "forums" ? "600" : "400"}
                color={tabState === "forums" ? "$color" : "$colorFocus"}
              >
                Forums
              </Text>
            </Tabs.Tab>

            <Tabs.Tab
              value="media"
              flex={1}
              borderRadius="$4"
              paddingVertical="$3"
            >
              <Text
                fontWeight={tabState === "media" ? "600" : "400"}
                color={tabState === "media" ? "$color" : "$colorFocus"}
              >
                Media
              </Text>
            </Tabs.Tab>

            <Tabs.Tab
              value="resposts"
              flex={1}
              borderRadius="$4"
              paddingVertical="$3"
            >
              <Text
                fontWeight={tabState === "resposts" ? "600" : "400"}
                color={tabState === "resposts" ? "$color" : "$colorFocus"}
              >
                Resposts
              </Text>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Content value="posts">
            <YStack padding="$4">
              <Text>Posts content here</Text>
            </YStack>
          </Tabs.Content>

          <Tabs.Content value="forums">
            <YStack padding="$4">
              <Text>Forums content here</Text>
            </YStack>
          </Tabs.Content>

          <Tabs.Content value="media">
            <YStack padding="$4">
              <Text>Media content here</Text>
            </YStack>
          </Tabs.Content>

          <Tabs.Content value="resposts">
            <YStack padding="$4">
              <Text>Resposts content here</Text>
            </YStack>
          </Tabs.Content>
        </Tabs>
      </View>
    </View>
  );
}
