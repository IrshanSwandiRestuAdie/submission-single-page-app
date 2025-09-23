import { createContext, useState, useEffect } from "react";

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem("locale");
    return saved || "id"; // default Bahasa Indonesia
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
