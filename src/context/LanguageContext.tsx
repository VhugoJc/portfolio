import React, { createContext, useContext, useState, useEffect } from 'react';
import contentData from '../data/content.json';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: any;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [content, setContent] = useState(contentData.en);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    setLanguage(initialLanguage);
    setContent(contentData[initialLanguage]);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setContent(contentData[lang]);
    localStorage.setItem('portfolio-language', lang);
  };

  // Helper function to get nested content
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = content;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        return key; // Return key if not found
      }
    }
    
    return result;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    content,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language };
