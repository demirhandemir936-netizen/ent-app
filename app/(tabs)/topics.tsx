import { Ionicons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { notes } from "../../data/notes";

type Topic = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  route?: "/otology" | "/rhinology";
};

const topics: Topic[] = [
  {
    title: "Otoloji",
    description: "Kulak hastalıkları ve cerrahisi",
    icon: "ear-outline",
    route: "/otology",
  },
  {
    title: "Rinoloji",
    description: "Burun ve paranazal sinüs hastalıkları",
    icon: "medical-outline",
    route: "/rhinology",
  },
  {
    title: "Baş Boyun Cerrahisi",
    description: "Tümörler, boyun kitleleri ve cerrahi",
    icon: "body-outline",
  },
  {
    title: "Pediatrik KBB",
    description: "Çocukluk çağı KBB hastalıkları",
    icon: "happy-outline",
  },
  {
    title: "Laringoloji",
    description: "Ses, yutma ve larinks hastalıkları",
    icon: "mic-outline",
  },
];

function normalizeSearchText(value: string) {
  return value.toLocaleLowerCase("tr-TR").trim();
}

export default function TopicsScreen() {
  const [searchText, setSearchText] = useState("");

  const normalizedSearchText = normalizeSearchText(searchText);
  const isSearching = normalizedSearchText.length > 0;

  const filteredNotes = useMemo(() => {
    if (!isSearching) {
      return [];
    }

    return notes.filter((note) => {
      const searchableText = normalizeSearchText(
        [
          note.category,
          note.title,
          note.subtitle,
          note.clinicalSummary,
        ].join(" "),
      );

      return searchableText.includes(normalizedSearchText);
    });
  }, [isSearching, normalizedSearchText]);

  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerClassName="px-5 pb-32 pt-16"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-3xl font-bold text-slate-900">
        Konular
      </Text>

      <Text className="mt-2 text-base text-slate-500">
        İncelemek istediğin alanı seç veya not ara.
      </Text>

      <View className="mt-7 flex-row items-center rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <Ionicons name="search-outline" size={21} color="#94A3B8" />

        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Konu veya hastalık ara..."
          placeholderTextColor="#94A3B8"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          className="ml-3 flex-1 text-base text-slate-900"
        />

        {isSearching && (
          <Pressable
            onPress={() => setSearchText("")}
            accessibilityRole="button"
            accessibilityLabel="Aramayı temizle"
            className="ml-2 h-8 w-8 items-center justify-center rounded-full bg-slate-100"
          >
            <Ionicons name="close" size={17} color="#64748B" />
          </Pressable>
        )}
      </View>

      {isSearching ? (
        <View className="mt-8">
          <Text className="text-lg font-bold text-slate-900">
            Arama Sonuçları
          </Text>

          <Text className="mt-1 text-sm text-slate-500">
            {filteredNotes.length} not bulundu
          </Text>

          {filteredNotes.length === 0 ? (
            <View className="mt-7 items-center rounded-3xl border border-slate-200 bg-white px-6 py-10">
              <View className="rounded-full bg-slate-100 p-4">
                <Ionicons name="search-outline" size={28} color="#94A3B8" />
              </View>

              <Text className="mt-5 text-lg font-bold text-slate-900">
                Sonuç bulunamadı
              </Text>

              <Text className="mt-2 text-center text-sm leading-6 text-slate-500">
                Farklı bir konu adı veya hastalık terimi deneyebilirsin.
              </Text>
            </View>
          ) : (
            <View className="mt-5 gap-3">
              {filteredNotes.map((note) => (
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
                    <Ionicons name="document-text-outline" size={23} color="#0F766E" />
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
          )}
        </View>
      ) : (
        <View className="mt-8 gap-3">
          {topics.map((topic) => (
            <Pressable
              key={topic.title}
              disabled={!topic.route}
              onPress={() => {
                if (topic.route) {
                  router.push(topic.route as Href);
                }
              }}
              className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
            >
              <View className="rounded-2xl bg-teal-50 p-3">
                <Ionicons name={topic.icon} size={23} color="#0F766E" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-base font-semibold text-slate-900">
                  {topic.title}
                </Text>

                <Text className="mt-1 text-sm text-slate-500">
                  {topic.description}
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
