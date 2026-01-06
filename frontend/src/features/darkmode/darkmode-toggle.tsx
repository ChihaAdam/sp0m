import { useDarkmode } from "./useDarkmode";
import { Moon, Sun } from "lucide-react";
function DarkModeToggle() {
  const { isDarkMode, toggleDarkmode } = useDarkmode();
  return (
    <button onClick={toggleDarkmode} className="bg-transparent border-none">
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
}

export default DarkModeToggle;
