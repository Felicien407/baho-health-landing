import { useState, useMemo, useCallback } from "react";
import { translations } from "../data/translations";

const LANGUAGES = ["EN", "FR", "RW"];

export function useTranslation(initial = "EN") {
  const [language, setLanguage] = useState(initial);
  const locale = useMemo(() => translations[language] || translations.EN, [language]);

  const t = useCallback((key) => {
    return locale[key] ?? translations.EN[key] ?? key;
  }, [locale]);

  const switchLanguage = useCallback((next) => {
    if (LANGUAGES.includes(next)) {
      setLanguage(next);
    }
  }, []);

  return {
    language,
    t,
    switchLanguage,
    supported: LANGUAGES,
  };
}
