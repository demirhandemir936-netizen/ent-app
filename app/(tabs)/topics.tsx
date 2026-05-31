import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Topic = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  route?: "/otology";
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

export default function TopicsScreen() {
  return (
    <View className="flex-1 bg-slate-50 px-5 pb-32 pt-16">
      <Text className="text-3xl font-bold text-slate-900">
        Konular
      </Text>

      <Text className="mt-2 text-base text-slate-500">
        İncelemek istediğin alanı seç.
      </Text>

      <View className="mt-8 gap-3">
        {topics.map((topic) => (
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
    </View>
  );
}