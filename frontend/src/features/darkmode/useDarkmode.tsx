import { useEffect } from "react";
import { useDarkmodeStore } from "./darkmodeStore";
export function useDarkmode() {
  const { isDarkMode, setDarkMode } = useDarkmodeStore();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  const toggleDarkmode: () => void = () => {
    setDarkMode(!isDarkMode);
  };
  return { isDarkMode, toggleDarkmode };
}
