import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function ChronicOtitisMediaScreen() {
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
        Otoloji
      </Text>

      <Text className="mt-2 text-3xl font-bold leading-10 text-slate-900">
        Kronik Otitis Media
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-500">
        Tanı, sınıflama ve temel cerrahi yaklaşım
      </Text>

      <View className="mt-8 rounded-3xl bg-teal-700 p-5">
        <View className="flex-row items-center">
          <Ionicons name="information-circle-outline" size={22} color="#FFFFFF" />

          <Text className="ml-3 text-base font-semibold text-white">
            Klinik Özet
          </Text>
        </View>

        <Text className="mt-4 text-sm leading-6 text-teal-50">
          Kronik otitis media, orta kulak ve mastoid havalı hücre sisteminde
          süregelen inflamatuvar hastalık tablosudur. Tedavi yaklaşımı hastalık
          tipi, işitme durumu ve komplikasyon riskine göre planlanır.
        </Text>
      </View>

      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          Tanım
        </Text>

        <Text className="mt-3 text-base leading-7 text-slate-600">
          Kronik otitis media; timpanik membran, orta kulak mukozası ve
          gerektiğinde mastoid sistemin etkilendiği kronik inflamatuvar bir
          süreçtir. Klinik yaklaşımda perforasyon, akıntı, kolesteatom varlığı
          ve işitme kaybı özellikle değerlendirilir.
        </Text>
      </View>

      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          Değerlendirmede Temel Noktalar
        </Text>

        <View className="mt-4 gap-3">
          {[
            "Otoskopik veya mikroskopik kulak muayenesi",
            "Perforasyonun yeri ve karakterinin değerlendirilmesi",
            "Aktif akıntı ve kolesteatom şüphesinin araştırılması",
            "Saf ses odyometri ile işitme durumunun belirlenmesi",
            "Gerekli hastada temporal kemik görüntüleme planlanması",
          ].map((item) => (
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
          Cerrahinin temel amaçları hastalığın eradikasyonu, güvenli ve kuru
          bir kulak elde edilmesi ve uygun hastada işitmenin rekonstrüksiyonudur.
          Uygulanacak teknik hastalığın yaygınlığına göre belirlenir.
        </Text>
      </View>

      <View className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-4">
        <Text className="text-sm font-semibold text-teal-800">
          Not
        </Text>

        <Text className="mt-2 text-sm leading-6 text-teal-700">
          Bu ekran şimdilik okuma tasarımını test etmek için örnek içerik
          kullanıyor. Gerçek kapsamlı ders notlarını sonraki aşamada sisteme
          aktaracağız.
        </Text>
      </View>
    </ScrollView>
  );
}