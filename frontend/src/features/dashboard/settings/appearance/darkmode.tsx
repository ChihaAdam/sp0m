import Switch from "../../../../shared/components/ui/switch";
import { useDarkmode } from "../../../darkmode/useDarkmode";
function DarkMode() {
  const { isDarkMode, toggleDarkmode } = useDarkmode();
  return (
    <div className="flex items-center gap-2">
      <h4>Dark Mode: </h4>
      <Switch enabled={isDarkMode} toggleEnabled={toggleDarkmode} />
    </div>
  );
}

export default DarkMode;
