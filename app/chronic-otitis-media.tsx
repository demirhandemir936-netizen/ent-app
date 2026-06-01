import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import NoteContentBlock from "../components/NoteContentBlock";
import { chronicOtitisMediaNote } from "../data/notes";

export default function ChronicOtitisMediaScreen() {
  const note = chronicOtitisMediaNote;

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

        <Pressable className="h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
          <Ionicons name="bookmark-outline" size={22} color="#0F766E" />
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