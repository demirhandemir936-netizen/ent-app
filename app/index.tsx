import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import Animated, {
    Extrapolation,
    FadeIn,
    FadeInDown,
    interpolate,
    type SharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

type OnboardingPage = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const PAGES: OnboardingPage[] = [
  {
    id: "1",
    eyebrow: "KBB Bilgi Bankası",
    title: "Klinik Bilgiye\nHızlı Erişim",
    description:
      "Günlük pratikte ihtiyaç duyduğun KBB notlarını düzenli ve okunabilir bir yapıda yanında taşıyabilirsin.",
    icon: "medical-outline",
  },
  {
    id: "2",
    eyebrow: "Tüm KBB Konuları, hepsi bir arada!",
    title: "Konulara Göre\nOrganize Notlar",
    description:
      "Otoloji, rinoloji, laringoloji ve baş-boyun cerrahisi konuları bir tık uzağında!",
    icon: "library-outline",
  },
  {
    id: "3",
    eyebrow: "Klinik Odak",
    title: "Önemli Noktaları\nHızla Yakala",
    description:
      "Klinik özetler, değerlendirme tabloları ve sınavda sorulabilecek önemli nüanslar.",
    icon: "pulse-outline",
  },
  {
    id: "4",
    eyebrow: "Kişisel Arşiv",
    title: "Favori Konuları\nAklında tutmana gerek yok",
    description:
      "Tekrar okumak istediğin ders notlarını favorilere kaydedip ihtiyaç olduğunda hemen ulaşabilirsin.",
    icon: "bookmark-outline",
  },
  {
    id: "5",
    eyebrow: "Hazırsın",
    title: "KBB Bilgi Bankası'na\nHoş Geldin",
    description:
      "Klinik odaklı KBB öğrenme deneyimini keşfetmeye başlamak için giriş yap veya kaydol.",
    icon: "checkmark-circle-outline",
  },
];

type PageProps = {
  page: OnboardingPage;
  index: number;
  scrollX: SharedValue<number>;
  width: number;
};

function OnboardingPageItem({
  page,
  index,
  scrollX,
  width,
}: PageProps) {
  const visualStyle = useAnimatedStyle(() => {
    const progress = (scrollX.value - index * width) / width;

    return {
      opacity: interpolate(
        progress,
        [-1, 0, 1],
        [0.2, 1, 0.2],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateX: interpolate(
            progress,
            [-1, 0, 1],
            [-34, 0, 34],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            progress,
            [-1, 0, 1],
            [0.86, 1, 0.86],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const eyebrowStyle = useAnimatedStyle(() => {
    const progress = (scrollX.value - index * width) / width;

    return {
      opacity: interpolate(
        progress,
        [-0.6, 0, 0.6],
        [0, 1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            progress,
            [-1, 0, 1],
            [16, 0, 16],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    const progress = (scrollX.value - index * width) / width;

    return {
      opacity: interpolate(
        progress,
        [-0.5, 0, 0.5],
        [0, 1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            progress,
            [-1, 0, 1],
            [28, 0, 28],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const descriptionStyle = useAnimatedStyle(() => {
    const progress = (scrollX.value - index * width) / width;

    return {
      opacity: interpolate(
        progress,
        [-0.38, 0, 0.38],
        [0, 1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            progress,
            [-1, 0, 1],
            [34, 0, 34],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <View style={{ width }} className="flex-1 px-6 pb-48">
      <Animated.View
        entering={index === 0 ? FadeIn.duration(700) : undefined}
        style={visualStyle}
        className="mt-12 h-[360px] items-center justify-center"
      >
        <View className="absolute h-72 w-72 rounded-full bg-teal-50" />
        <View className="absolute h-56 w-56 rounded-full bg-teal-100/60" />

        <View className="h-28 w-28 items-center justify-center rounded-[36px] bg-teal-700 shadow-lg">
          <Ionicons name={page.icon} size={51} color="#FFFFFF" />
        </View>

        <View className="absolute bottom-10 flex-row items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2">
          <View className="h-2 w-2 rounded-full bg-teal-600" />
          <Text className="text-xs font-semibold text-teal-700">
            Klinik odaklı öğrenme
          </Text>
        </View>
      </Animated.View>

      <View className="mt-auto items-center">
        <Animated.View
          entering={index === 0 ? FadeInDown.delay(120).duration(550) : undefined}
          style={eyebrowStyle}
        >
          <Text className="text-xs font-bold uppercase tracking-[3px] text-teal-700">
            {page.eyebrow}
          </Text>
        </Animated.View>

        <Animated.View
          entering={index === 0 ? FadeInDown.delay(200).duration(600) : undefined}
          style={titleStyle}
          className="mt-4"
        >
          <Text className="text-center text-[31px] font-extrabold leading-[39px] text-slate-900">
            {page.title}
          </Text>
        </Animated.View>

        <Animated.View
          entering={index === 0 ? FadeInDown.delay(300).duration(650) : undefined}
          style={descriptionStyle}
          className="mt-4 px-4"
        >
          <Text className="text-center text-[15px] leading-6 text-slate-500">
            {page.description}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

type DotProps = {
  index: number;
  scrollX: SharedValue<number>;
  width: number;
};

function PageDot({ index, scrollX, width }: DotProps) {
  const dotStyle = useAnimatedStyle(() => {
    const animatedWidth = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [8, 26, 8],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.35, 1, 0.35],
      Extrapolation.CLAMP,
    );

    return {
      width: animatedWidth,
      opacity,
    };
  });

  return (
    <Animated.View
      style={dotStyle}
      className="h-2 rounded-full bg-teal-700"
    />
  );
}

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const lastIndex = PAGES.length - 1;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const goToPage = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  const handleSkip = () => {
    goToPage(lastIndex);
  };

  const handlePrimaryButton = () => {
    if (activeIndex < lastIndex) {
      goToPage(activeIndex + 1);
      return;
    }

    router.replace("/home");
  };

  const skipStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [0, 3.35 * width, 4 * width],
        [1, 1, 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    const buttonWidth = interpolate(
      scrollX.value,
      [0, width, 3 * width, 4 * width],
      [width - 48, 58, 58, width - 48],
      Extrapolation.CLAMP,
    );

    const buttonRadius = interpolate(
      scrollX.value,
      [0, width, 3 * width, 4 * width],
      [20, 29, 29, 20],
      Extrapolation.CLAMP,
    );

    return {
      width: buttonWidth,
      borderRadius: buttonRadius,
    };
  });

  const firstButtonTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [0, width * 0.45],
        [1, 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  const middleButtonTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [width * 0.55, width, 3 * width, 3.45 * width],
        [0, 1, 1, 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  const finalButtonTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [3.45 * width, 4 * width],
        [0, 1],
        Extrapolation.CLAMP,
      ),
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAF9]">
      <Animated.View
        pointerEvents={activeIndex === lastIndex ? "none" : "auto"}
        style={skipStyle}
        className="absolute right-5 top-3 z-10"
      >
        <TouchableOpacity
          onPress={handleSkip}
          activeOpacity={0.7}
          className="rounded-full px-4 py-3"
        >
          <Text className="text-sm font-semibold text-slate-500">
            Atla
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        onMomentumScrollEnd={(event) => {
          const currentPage = Math.round(
            event.nativeEvent.contentOffset.x / width,
          );
          setActiveIndex(currentPage);
        }}
      >
        {PAGES.map((page, index) => (
          <OnboardingPageItem
            key={page.id}
            page={page}
            index={index}
            scrollX={scrollX}
            width={width}
          />
        ))}
      </Animated.ScrollView>

      <View className="absolute bottom-10 left-0 right-0 items-center">
        <View className="mb-7 flex-row items-center gap-2">
          {PAGES.map((page, index) => (
            <PageDot
              key={page.id}
              index={index}
              scrollX={scrollX}
              width={width}
            />
          ))}
        </View>

        <AnimatedTouchableOpacity
          onPress={handlePrimaryButton}
          activeOpacity={0.9}
          style={buttonStyle}
          className="h-[58px] items-center justify-center overflow-hidden bg-slate-900 shadow-lg"
        >
          <Animated.View
            style={firstButtonTextStyle}
            className="absolute flex-row items-center justify-center gap-2"
          >
            <Text className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Kaydır
            </Text>
            <Text className="text-sm text-white">
              veya dokun
            </Text>
            <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
          </Animated.View>

          <Animated.View style={middleButtonTextStyle} className="absolute">
            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </Animated.View>

          <Animated.View style={finalButtonTextStyle} className="absolute">
            <Text className="text-base font-bold tracking-wide text-white">
              Giriş Yap
            </Text>
          </Animated.View>
        </AnimatedTouchableOpacity>
      </View>
    </SafeAreaView>
  );
}