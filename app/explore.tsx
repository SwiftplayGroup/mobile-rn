import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getForums } from "../services/api/forums";
import { Card, Input, XStack, YStack, Button, Text } from "tamagui";
import { Forum } from "../types/forums";

export default function Explore() {
  const [forums, setForums] = useState<Forum[]>([]);
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const fetchForums = async () => {
      const data = await getForums();
      setForums(data);
    };
    fetchForums();
  }, []);

  // Search results based on input
  const searchResults = forums.filter((forum) =>
    forum.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Recommended forums - completely separate from search
  // This would be replaced with your vector search logic
  const recommendedForums = forums.slice(0, 3).sort(() => 0.5 - Math.random());
  // Simulating recommendations with random sorting
  // Replace this with forums/recommendations/{userId}

  const handleSearchChange = (text: string) => {
    setSearch(text);
    setShowSearchResults(text.length > 0);
  };

  return (
    <YStack flex={1}>
      <YStack padding={16} gap={12}>
        <XStack position="relative">
          <Input
            flex={1}
            placeholder="Search Swiftplay..."
            value={search}
            onChangeText={handleSearchChange}
            onFocus={() => setShowSearchResults(search.length > 0)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
          />
        </XStack>
        {showSearchResults && (
          <Card
            elevate
            bordered
            animation="quick"
            enterStyle={{ opacity: 0, y: -10 }}
            exitStyle={{ opacity: 0, y: -10 }}
            padding={8}
            marginTop={4}
            zIndex={10}
          >
            <YStack gap={8}>
              <Text fontWeight="bold">Search Results</Text>
              {searchResults.length > 0 ? (
                searchResults.map((forum, index) => (
                  <Button
                    key={`search-${index}`}
                    justifyContent="flex-start"
                    padding={12}
                    pressStyle={{ opacity: 0.8 }}
                  >
                    <Text>{forum.name}</Text>
                  </Button>
                ))
              ) : (
                <Text>No results found</Text>
              )}
            </YStack>
          </Card>
        )}

        {/* Recommended Forums Section */}
        <YStack gap={8}>
          <Text fontSize={16}>Recommended Forums</Text>
          <YStack gap={8}>
            {recommendedForums.map((forum, index) => (
              <Card key={`recommended-${index}`} padding={16} bordered>
                <Text fontSize={16} fontWeight="500">
                  {forum.name}
                </Text>
                <Text fontSize={14} marginTop={4} opacity={0.7}>
                  {forum.description ||
                    `Join the conversation in ${forum.name}`}
                </Text>
              </Card>
            ))}
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
