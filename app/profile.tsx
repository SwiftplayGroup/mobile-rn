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

export default function Profile() {
  const [tabState, setTabState] = useState("posts");

  return (
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
            Edit Profile
          </Button>
          <Button variant="outlined" size="$3" width={200}>
            Share Profile
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
            value="replies"
            flex={1}
            borderRadius="$4"
            paddingVertical="$3"
          >
            <Text
              fontWeight={tabState === "replies" ? "600" : "400"}
              color={tabState === "replies" ? "$color" : "$colorFocus"}
            >
              Replies
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

        <Tabs.Content value="replies">
          <YStack padding="$4">
            <Text>Replies content here</Text>
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
  );
}
