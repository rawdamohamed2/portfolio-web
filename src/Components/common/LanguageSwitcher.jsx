import React from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../store/useLanguageStore';

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('language.label')}
      title={t('language.label')}
      className="flex items-center gap-1 text-sm font-semibold text-fontColor hover:text-effectColor transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-effectColor rounded px-2 py-1"
    >
      <Languages size={16} aria-hidden="true" />
      <span>{t('language.switchTo')}</span>
    </button>
  );
}
