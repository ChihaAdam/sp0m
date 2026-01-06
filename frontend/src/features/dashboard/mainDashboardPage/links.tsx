import {
  BarChartIcon,
  FileTextIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const links = [
  {
    name: "pages",
    href: "/admin",
    icon: FileTextIcon,
  },
  {
    name: "create page",
    href: "/admin/create-page",
    icon: PlusIcon,
  },
  {
    name: "settings",
    href: "/admin/settings",
    icon: SettingsIcon,
  },
  {
    name: "metrics",
    href: "/admin/metrics",
    icon: BarChartIcon,
  },
];
function Links() {
  return (
    <ul className="w-full flex flex-col gap-2">
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.name}
          end
          className={({
            isActive,
          }) => `flex gap-2 items-center w-full border-b-2 p-2 border-gray-500/50
        hover:bg-zinc-200 dark:hover:bg-zinc-900 active:bg-zinc-300 
          hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
          transition-all duration-300 ease-in-out
          active:scale-95 ${isActive ? "bg-zinc-200 dark:bg-zinc-800" : ""}`}
        >
          <link.icon />
          <h2>{link.name}</h2>
        </NavLink>
      ))}
    </ul>
  );
}

export default Links;
