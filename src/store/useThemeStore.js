import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "root",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "root" ? "light" : "root",
        })),

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "portfolio-theme",
    },
  ),
);
