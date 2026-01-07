import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "./use-local-storage";

type darkmodeContextType = {
  isDarkMode: boolean;
  toggleDarkmode: () => void;
};

const darkmodeContext = createContext<darkmodeContextType | null>(null);

export default function DarkmodeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false);
  const toggleDarkmode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  return (
    <darkmodeContext.Provider value={{ isDarkMode, toggleDarkmode }}>
      {children}
    </darkmodeContext.Provider>
  );
}

export const useDarkmode = () => {
  const context = useContext(darkmodeContext);
  if (!context) {
    throw new Error("useDarkmode must be used within a DarkmodeProvider");
  }
  return context;
};
