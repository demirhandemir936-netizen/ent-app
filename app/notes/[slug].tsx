import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import NoteContentBlock from "../../components/NoteContentBlock";
import { getNoteBySlug } from "../../data/notes";
import { useFavoritesStore } from "../../stores/useFavoritesStore";

export default function NoteReaderScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const note = getNoteBySlug(slug);

  const favoriteSlugs = useFavoritesStore((state) => state.favoriteSlugs);
  const hasHydrated = useFavoritesStore((state) => state.hasHydrated);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  if (!note) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50 px-6">
        <Text className="text-xl font-bold text-slate-900">
          Not bulunamadı
        </Text>

        <Text className="mt-3 text-center text-base leading-6 text-slate-500">
          Açmaya çalıştığın ders notu henüz uygulamaya eklenmemiş olabilir.
        </Text>

        <Pressable
          onPress={() => router.back()}
          className="mt-8 rounded-2xl bg-teal-700 px-6 py-4"
        >
          <Text className="font-semibold text-white">
            Geri Dön
          </Text>
        </Pressable>
      </View>
    );
  }

  const isFavorite = favoriteSlugs.includes(note.slug);

  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerClassName="px-5 pb-12 pt-16"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={() => router.back()}
          className="h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white"
        >
          <Ionicons name="chevron-back" size={22} color="#0F172A" />
        </Pressable>

        <Pressable
          disabled={!hasHydrated}
          onPress={() => toggleFavorite(note.slug)}
          accessibilityRole="button"
          accessibilityLabel={
            isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"
          }
          className="h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white"
        >
          <Ionicons
            name={isFavorite ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isFavorite ? "#0F766E" : "#94A3B8"}
          />
        </Pressable>
      </View>

      <Text className="mt-8 text-sm font-semibold uppercase tracking-wider text-teal-700">
        {note.category}
      </Text>

      <Text className="mt-2 text-3xl font-bold leading-10 text-slate-900">
        {note.title}
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-500">
        {note.subtitle}
      </Text>

      <View className="mt-8 rounded-3xl bg-teal-700 p-5">
        <View className="flex-row items-center">
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text className="ml-3 text-base font-semibold text-white">
            Klinik Özet
          </Text>
        </View>

        <Text className="mt-4 text-sm leading-6 text-teal-50">
          {note.clinicalSummary}
        </Text>
      </View>

      {note.blocks.map((block, index) => (
        <NoteContentBlock
          key={`${block.type}-${block.title}-${index}`}
          block={block}
        />
      ))}
    </ScrollView>
  );
}