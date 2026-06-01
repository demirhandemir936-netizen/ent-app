import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavoritesState = {
  favoriteSlugs: string[];
  hasHydrated: boolean;
  toggleFavorite: (slug: string) => void;
  setHasHydrated: (value: boolean) => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favoriteSlugs: [],
      hasHydrated: false,

      toggleFavorite: (slug) =>
        set((state) => ({
          favoriteSlugs: state.favoriteSlugs.includes(slug)
            ? state.favoriteSlugs.filter((item) => item !== slug)
            : [...state.favoriteSlugs, slug],
        })),

      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "ent-app-favorites",
      storage: createJSONStorage(() => AsyncStorage),

      partialize: (state) => ({
        favoriteSlugs: state.favoriteSlugs,
      }),

      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.warn("Favoriler cihazdan yüklenemedi:", error);
        }

        state?.setHasHydrated(true);
      },
    },
  ),
);