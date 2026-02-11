import { createContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '../locales';
import type { TranslationKeys } from '../locales/en';

interface LocalizationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const STORAGE_KEY = 'preferred-language';

export const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

function getBrowserLanguage(): Language {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('az')) return 'az';
    return 'en';
}

function getInitialLanguage(): Language {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'en' || stored === 'az')) {
        return stored;
    }
    return getBrowserLanguage();
}

interface LocalizationProviderProps {
    children: ReactNode;
}

export function LocalizationProvider({ children }: LocalizationProviderProps) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const value: LocalizationContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LocalizationContext.Provider value={value}>
            {children}
        </LocalizationContext.Provider>
    );
}
