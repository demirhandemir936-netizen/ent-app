import { Ionicons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-slate-50 px-5 pb-32 pt-16">
      <Text className="w-full max-w-[720px] text-sm font-semibold uppercase tracking-wider text-teal-700">
        Hoş Geldin
      </Text>

      <Text className="mt-2 w-full max-w-[720px] text-3xl font-bold text-slate-900">
        KBB Bilgi Bankası
      </Text>

      <Text className="mt-2 w-full max-w-[720px] text-base leading-6 text-slate-500">
        Klinik konulara ve ders notlarına hızlı erişim.
      </Text>

      <Pressable
        onPress={() => router.push("/notes/chronic-otitis-media")}
        className="mt-8 w-full max-w-[720px] rounded-3xl bg-teal-700 p-6"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="rounded-2xl bg-teal-600 p-3">
              <Ionicons name="book-outline" size={22} color="#FFFFFF" />
            </View>

            <Text className="ml-3 text-sm font-medium text-teal-100">
              Öne Çıkan Konu
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#CCFBF1" />
        </View>

        <Text className="mt-5 text-xl font-bold text-white">
          Kronik Otitis Media
        </Text>

        <Text className="mt-3 text-sm leading-6 text-teal-50">
          Tanı, sınıflama, cerrahi yaklaşım ve güncel bilgiler.
        </Text>
      </Pressable>

      <Text className="mt-9 w-full max-w-[720px] text-lg font-bold text-slate-900">
        Hızlı Erişim
      </Text>

      <View className="mt-4 w-full max-w-[720px] flex-row gap-3">
        <Pressable
          onPress={() => router.push("/otology")}
          className="flex-1 rounded-2xl border border-slate-200 bg-white p-4"
        >
          <Ionicons name="ear-outline" size={23} color="#0F766E" />

          <Text className="mt-4 font-semibold text-slate-900">
            Otoloji
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/rhinology" as Href)}
          className="flex-1 rounded-2xl border border-slate-200 bg-white p-4"
        >
          <Ionicons name="medical-outline" size={23} color="#0F766E" />

          <Text className="mt-4 font-semibold text-slate-900">
            Rinoloji
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
