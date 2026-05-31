import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-8 pb-24">
      <View className="rounded-full bg-teal-50 p-6">
        <Ionicons name="bookmark-outline" size={38} color="#0F766E" />
      </View>

      <Text className="mt-6 text-xl font-bold text-slate-900">
        Henüz favori yok
      </Text>

      <Text className="mt-3 text-center text-base leading-6 text-slate-500">
        Beğendiğin konu ve notları kaydettiğinde burada görebileceksin.
      </Text>
    </View>
  );
}