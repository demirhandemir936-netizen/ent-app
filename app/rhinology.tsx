import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

type RhinologyTopic = {
  title: string;
  description: string;
  isPlaceholder?: boolean;
  route?:
    | "/notes/acute-rhinosinusitis"
    | "/notes/acute-bacterial-rhinosinusitis"
    | "/notes/chronic-rhinosinusitis"
    | "/notes/chronic-rhinosinusitis-with-nasal-polyps"
    | "/notes/allergic-rhinitis"
    | "/notes/nonallergic-rhinitis"
    | "/notes/fungal-rhinosinusitis"
    | "/notes/epistaxis"
    | "/notes/septal-deviation"
    | "/notes/fess-indications-complications";
};

const rhinologyTopics: RhinologyTopic[] = [
  {
    title: "Akut Rinosinüzit",
    description: "Viral, post-viral ve bakteriyel ayrımına pratik yaklaşım",
    route: "/notes/acute-rhinosinusitis",
  },
  {
    title: "Akut Bakteriyel Rinosinüzit",
    description: "Antibiyotik kararını yönlendiren klinik paternler",
    route: "/notes/acute-bacterial-rhinosinusitis",
  },
  {
    title: "Kronik Rinosinüzit",
    description: "12 haftadan uzun semptom ve objektif inflamasyon yaklaşımı",
    route: "/notes/chronic-rhinosinusitis",
  },
  {
    title: "Nazal Polipli Kronik Rinosinüzit",
    description: "Koku kaybı, polip yükü ve inflamatuvar hastalık yönetimi",
    route: "/notes/chronic-rhinosinusitis-with-nasal-polyps",
  },
  {
    title: "Alerjik Rinit",
    description: "Tetikleyici, fenotip ve basamaklı tedavi yaklaşımı",
    route: "/notes/allergic-rhinitis",
  },
  {
    title: "Nonalerjik Rinit",
    description: "İrritan, vazomotor ve alerji dışı rinit tabloları",
    route: "/notes/nonallergic-rhinitis",
  },
  {
    title: "Fungal Rinosinüzit",
    description: "Alerjik, fungal ball ve invaziv formlara genel yaklaşım",
    route: "/notes/fungal-rhinosinusitis",
  },
  {
    title: "Epistaksis",
    description: "Anterior-posterior kanama ayrımı ve poliklinik yönetimi",
    route: "/notes/epistaxis",
  },
  {
    title: "Septum Deviasyonu",
    description: "Nazal obstrüksiyon değerlendirmesi ve cerrahi karar",
    isPlaceholder: true,
    route: "/notes/septal-deviation",
  },
  {
    title: "FESS Endikasyonları ve Komplikasyonları",
    description: "Endoskopik sinüs cerrahisi için endikasyon ve riskler",
    isPlaceholder: true,
    route: "/notes/fess-indications-complications",
  },
];

export default function RhinologyScreen() {
  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerClassName="w-full max-w-[720px] self-center px-5 pb-10 pt-16"
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={() => router.back()}
        hitSlop={8}
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
              <View className="flex-row flex-wrap items-center gap-2">
                <Text className="text-base font-semibold text-slate-900">
                  {topic.title}
                </Text>

                {topic.isPlaceholder && (
                  <View className="rounded-full bg-amber-100 px-2.5 py-1">
                    <Text className="text-xs font-semibold text-amber-700">
                      Hazırlanıyor
                    </Text>
                  </View>
                )}
              </View>

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
