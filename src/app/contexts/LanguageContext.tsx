"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

type LanguageContextProps = {
  language: string;
  changeLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",  // Default fallback language
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [language, setLanguage] = useState<string>("en");  // Initialize with fallback language "en"

  useEffect(() => {
    // Set language from local storage or fallback to 'en'
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);  // Save language preference in local storage

    // Use window.location.pathname to get the current path for navigation
    router.push(`${window.location.pathname}`);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
