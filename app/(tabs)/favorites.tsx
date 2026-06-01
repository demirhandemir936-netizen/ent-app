import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { getNoteBySlug, type Note } from "../../data/notes";
import { useFavoritesStore } from "../../stores/useFavoritesStore";

export default function FavoritesScreen() {
  const favoriteSlugs = useFavoritesStore((state) => state.favoriteSlugs);
  const hasHydrated = useFavoritesStore((state) => state.hasHydrated);

  const favoriteNotes = favoriteSlugs
    .map((slug) => getNoteBySlug(slug))
    .filter((note): note is Note => note !== undefined);

  if (!hasHydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator size="small" color="#0F766E" />

        <Text className="mt-4 text-sm text-slate-500">
          Favoriler yükleniyor...
        </Text>
      </View>
    );
  }

  if (favoriteNotes.length === 0) {
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

  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerClassName="px-5 pb-32 pt-16"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-3xl font-bold text-slate-900">
        Favoriler
      </Text>

      <Text className="mt-2 text-base text-slate-500">
        Kaydettiğin ders notları
      </Text>

      <View className="mt-8 gap-3">
        {favoriteNotes.map((note) => (
          <Pressable
            key={note.slug}
            onPress={() =>
              router.push({
                pathname: "/notes/[slug]",
                params: { slug: note.slug },
              })
            }
            className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
          >
            <View className="rounded-2xl bg-teal-50 p-3">
              <Ionicons name="bookmark" size={23} color="#0F766E" />
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                {note.category}
              </Text>

              <Text className="mt-1 text-base font-semibold text-slate-900">
                {note.title}
              </Text>

              <Text className="mt-1 text-sm leading-5 text-slate-500">
                {note.subtitle}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}