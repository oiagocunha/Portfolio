import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Locale, PortfolioContent } from './types';
import { pt } from './locales/pt';
import { en } from './locales/en';
import { es } from './locales/es';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: PortfolioContent;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const locales: Record<Locale, PortfolioContent> = {
  pt,
  en,
  es,
};

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export function I18nProvider({ children, defaultLocale = 'pt' }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const value: I18nContextType = {
    locale,
    setLocale,
    t: locales[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
