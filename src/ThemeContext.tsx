import React, { ReactNode, createContext, useContext } from "react";
import { Theme, pageThemes } from "./themes";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ page: string; children: ReactNode }> = ({
  page,
  children,
}) => {
  const theme = pageThemes[page as keyof typeof pageThemes];
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context.theme;
};
