import { create } from "zustand";
import { getItem, setItem } from "./localStorage";

interface DarkmodeStore {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useDarkmodeStore = create<DarkmodeStore>((set) => ({
  isDarkMode: getItem("darkmode") || false,
  setDarkMode: (darkMode: boolean) => {
    set({ isDarkMode: darkMode });
    setItem("darkmode", darkMode);
  },
}));
