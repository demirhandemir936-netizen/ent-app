import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

type OtologyTopic = {
  title: string;
  description: string;
  route?:
    | "/notes/chronic-otitis-media"
    | "/notes/cholesteatoma"
    | "/notes/sudden-hearing-loss";
};

const otologyTopics: OtologyTopic[] = [
  {
    title: "Kronik Otitis Media",
    description: "Tanı, sınıflama ve cerrahi yaklaşım",
    route: "/notes/chronic-otitis-media",
  },
  {
    title: "Kolesteatom",
    description: "Klinik bulgular ve tedavi prensipleri",
    route: "/notes/cholesteatoma",
  },
  {
    title: "Ani İşitme Kaybı",
    description: "Tanı, acil yaklaşım ve güncel tedavi",
    route: "/notes/sudden-hearing-loss",
  },
  {
    title: "Otoskleroz",
    description: "İşitme kaybı ve cerrahi seçenekler",
  },
  {
    title: "Vertigo",
    description: "Periferik vertigo değerlendirmesi",
  },
  {
    title: "Timpanoplasti",
    description: "Cerrahi teknikler ve sınıflamalar",
  },
];

export default function OtologyScreen() {
  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerClassName="px-5 pb-10 pt-16"
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={() => router.back()}
        className="mb-7 h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white"
      >
        <Ionicons name="chevron-back" size={22} color="#0F172A" />
      </Pressable>

      <Text className="text-sm font-semibold uppercase tracking-wider text-teal-700">
        Konular
      </Text>

      <Text className="mt-2 text-3xl font-bold text-slate-900">
        Otoloji
      </Text>

      <Text className="mt-2 text-base leading-6 text-slate-500">
        Kulak hastalıkları ve cerrahisi
      </Text>

      <View className="mt-8 gap-3">
        {otologyTopics.map((topic) => (
          <Pressable
            key={topic.title}
            disabled={!topic.route}
            onPress={() => {
              if (topic.route) {
                router.push(topic.route);
              }
            }}
            className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
          >
            <View className="flex-1">
              <Text className="text-base font-semibold text-slate-900">
                {topic.title}
              </Text>

              <Text className="mt-1 text-sm leading-5 text-slate-500">
                {topic.description}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}