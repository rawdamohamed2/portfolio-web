import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18n';

/**
 * Applies the language to the actual DOM: tells i18next to switch
 * the active language, and flips the document direction so the
 * whole layout mirrors correctly for Arabic (RTL) vs English (LTR).
 */
function applyLanguage(lang) {
  i18n.changeLanguage(lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

/**
 * Language store.
 * - `language` is either 'en' or 'ar'.
 * - `persist` saves the choice to localStorage under 'portfolio-language'.
 * - `onRehydrateStorage` runs once, right after the saved value is loaded
 *   back from localStorage on app start, so dir/lang are correct
 *   immediately (not just after the user clicks the toggle).
 *
 * Usage in a component:
 *   const language = useLanguageStore((state) => state.language);
 *   const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
 */
export const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => {
        applyLanguage(lang);
        set({ language: lang });
      },
      toggleLanguage: () =>
        set((state) => {
          const next = state.language === 'en' ? 'ar' : 'en';
          applyLanguage(next);
          return { language: next };
        }),
    }),
    {
      name: 'portfolio-language',
      onRehydrateStorage: () => (state) => {
        if (state) applyLanguage(state.language);
      },
    }
  )
);
