import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import type { NoteBlock } from "../data/notes";

type NoteContentBlockProps = {
  block: NoteBlock;
};

export default function NoteContentBlock({
  block,
}: NoteContentBlockProps) {
  if (block.type === "paragraph") {
    return (
      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          {block.title}
        </Text>

        <Text className="mt-3 text-base leading-7 text-slate-600">
          {block.content}
        </Text>
      </View>
    );
  }

  if (block.type === "bulletList") {
    return (
      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          {block.title}
        </Text>

        <View className="mt-4 gap-3">
          {block.items.map((item) => (
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
    );
  }

  if (block.type === "important") {
    return (
      <View className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <View className="flex-row items-center">
          <Ionicons name="alert-circle-outline" size={21} color="#B45309" />

          <Text className="ml-2 text-base font-bold text-amber-900">
            {block.title}
          </Text>
        </View>

        <Text className="mt-3 text-sm leading-6 text-amber-800">
          {block.content}
        </Text>
      </View>
    );
  }

  if (block.type === "examTip") {
    return (
      <View className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-4">
        <View className="flex-row items-center">
          <Ionicons name="school-outline" size={21} color="#0F766E" />

          <Text className="ml-2 text-base font-bold text-teal-900">
            {block.title}
          </Text>
        </View>

        <Text className="mt-3 text-sm leading-6 text-teal-800">
          {block.content}
        </Text>
      </View>
    );
  }

  if (block.type === "table") {
    return (
      <View className="mt-8">
        <Text className="text-xl font-bold text-slate-900">
          {block.title}
        </Text>

        <View className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {block.rows.map((row, index) => (
            <View
              key={`${row.label}-${row.value}`}
              className={
                index !== block.rows.length - 1
                  ? "flex-row border-b border-slate-100 p-4"
                  : "flex-row p-4"
              }
            >
              <Text className="w-2/5 pr-3 text-sm font-semibold leading-5 text-slate-800">
                {row.label}
              </Text>

              <Text className="flex-1 text-sm leading-5 text-slate-600">
                {row.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return null;
}