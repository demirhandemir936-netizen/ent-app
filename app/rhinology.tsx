import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

type RhinologyTopic = {
  title: string;
  description: string;
  route?:
    | "/notes/acute-rhinosinusitis"
    | "/notes/acute-bacterial-rhinosinusitis"
    | "/notes/chronic-rhinosinusitis"
    | "/notes/allergic-rhinitis";
};

const rhinologyTopics: RhinologyTopic[] = [
  {
    title: "Akut Rinosinüzit",
    description: "Placeholder içerik",
    route: "/notes/acute-rhinosinusitis",
  },
  {
    title: "Akut Bakteriyel Rinosinüzit",
    description: "Placeholder içerik",
    route: "/notes/acute-bacterial-rhinosinusitis",
  },
  {
    title: "Kronik Rinosinüzit",
    description: "Placeholder içerik",
    route: "/notes/chronic-rhinosinusitis",
  },
  {
    title: "Nazal Polipli Kronik Rinosinüzit",
    description: "İçerik sonraki fazda eklenecek",
  },
  {
    title: "Alerjik Rinit",
    description: "Placeholder içerik",
    route: "/notes/allergic-rhinitis",
  },
  {
    title: "Nonalerjik Rinit",
    description: "İçerik sonraki fazda eklenecek",
  },
  {
    title: "Fungal Rinosinüzit",
    description: "İçerik sonraki fazda eklenecek",
  },
  {
    title: "Epistaksis",
    description: "İçerik sonraki fazda eklenecek",
  },
  {
    title: "Septum Deviasyonu",
    description: "İçerik sonraki fazda eklenecek",
  },
  {
    title: "FESS Endikasyonları ve Komplikasyonları",
    description: "İçerik sonraki fazda eklenecek",
  },
];

export default function RhinologyScreen() {
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
        Rinoloji
      </Text>

      <Text className="mt-2 text-base leading-6 text-slate-500">
        Burun, paranazal sinüsler ve anterior kafa tabanı
      </Text>

      <View className="mt-8 gap-3">
        {rhinologyTopics.map((topic) => (
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
