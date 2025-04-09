import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getForums } from "../services/api/forums";

export default function Explore() {
  const [forums, setForums] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      const data = await getForums();
      setForums(data);
    };

    fetchForums();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Explore Page</Text>
      <Text>{JSON.stringify(forums)}</Text>
    </View>
  );
}
