import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, Text, View } from "react-native";

const ONBOARDING_COMPLETED_KEY = "ent-app-onboarding-completed";

export default function SettingsScreen() {
  const handleResetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(ONBOARDING_COMPLETED_KEY);
      Alert.alert(
        "Onboarding",
        "Onboarding bir sonraki açılışta tekrar gösterilecek.",
      );
    } catch (error) {
      console.warn("Onboarding durumu sıfırlanamadı:", error);
      Alert.alert("Onboarding", "Onboarding ayarı sıfırlanamadı.");
    }
  };

  return (
    <View className="flex-1 items-center bg-slate-50 px-5 pb-32 pt-16">
      <Text className="w-full max-w-[720px] text-3xl font-bold text-slate-900">
        Ayarlar
      </Text>

      <Text className="mt-2 w-full max-w-[720px] text-base text-slate-500">
        Uygulama tercihleri
      </Text>

      <View className="mt-8 w-full max-w-[720px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <View className="flex-row items-center border-b border-slate-100 p-4">
          <View className="rounded-xl bg-teal-50 p-2">
            <Ionicons name="moon-outline" size={21} color="#0F766E" />
          </View>

          <Text className="ml-4 flex-1 text-base font-medium text-slate-800">
            Görünüm
          </Text>

          <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
        </View>

        <View className="flex-row items-center border-b border-slate-100 p-4">
          <View className="rounded-xl bg-teal-50 p-2">
            <Ionicons name="text-outline" size={21} color="#0F766E" />
          </View>

          <Text className="ml-4 flex-1 text-base font-medium text-slate-800">
            Yazı Boyutu
          </Text>

          <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
        </View>

        <Pressable
          onPress={handleResetOnboarding}
          accessibilityRole="button"
          className="flex-row items-center p-4"
        >
          <View className="rounded-xl bg-teal-50 p-2">
            <Ionicons name="refresh-outline" size={21} color="#0F766E" />
          </View>

          <Text className="ml-4 flex-1 text-base font-medium text-slate-800">
            {"Onboarding'i Tekrar Göster"}
          </Text>

          <Ionicons name="chevron-forward" size={19} color="#94A3B8" />
        </Pressable>
      </View>
    </View>
  );
}
