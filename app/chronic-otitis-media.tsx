import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

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

      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          Tanım
        </Text>

        <Text className="mt-3 text-base leading-7 text-slate-600">
          {note.definition}
        </Text>
      </View>

      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          Değerlendirmede Temel Noktalar
        </Text>

        <View className="mt-4 gap-3">
          {note.evaluationPoints.map((item) => (
            <View
              key={item}
              className="flex-row rounded-2xl border border-slate-200 bg-white p-4"
            >
              <View className="mt-2 h-2 w-2 rounded-full bg-teal-700" />

              <Text className="ml-3 flex-1 text-sm leading-6 text-slate-700">
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          Cerrahi Yaklaşım
        </Text>

        <Text className="mt-3 text-base leading-7 text-slate-600">
          {note.surgicalApproach}
        </Text>
      </View>

      <View className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-4">
        <Text className="text-sm font-semibold text-teal-800">
          Not
        </Text>

        <Text className="mt-2 text-sm leading-6 text-teal-700">
          {note.developmentNote}
        </Text>
      </View>
    </ScrollView>
  );
}