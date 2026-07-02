import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Theme store.
 * - `theme` is either 'dark' or 'light'.
 * - Defaults to 'dark' because that's the site's original design.
 * - `persist` automatically saves/reads the value from localStorage
 *   under the key 'portfolio-theme', so the choice survives a refresh.
 *
 * Usage in a component:
 *   const theme = useThemeStore((state) => state.theme);
 *   const toggleTheme = useThemeStore((state) => state.toggleTheme);
 */
export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'portfolio-theme',
    }
  )
);
