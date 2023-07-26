import { createContext, useContext, useState } from "react";

const theme = {
  mode: {
    light: "LIGHT",
    dark: "DARK",
  },
};

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(theme.mode.light);
  console.log(themeMode);
  const toggleThemeMode = () => {
    setThemeMode(themeMode === "LIGHT" ? theme.mode.dark : theme.mode.light);
  };
  return (
    <ThemeContext.Provider value={{ toggleThemeMode, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
export { ThemeProvider, useTheme };
