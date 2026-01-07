import {
  LayoutDashboardIcon,
  SidebarCloseIcon,
  SidebarIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Links from "./links";

type AsideProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

function Aside({ active, setActive }: Readonly<AsideProps>) {
  return (
    <AnimatePresence>
      {active && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: 270 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className={`h-full border-r border-gray-500 no-transition bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden py-4 px-2 max-md:fixed z-10`}
        >
          <div className="flex flex-col gap-12 items-start w-[270px]">
            <div className="flex gap-2 items-center text-xl font-bold">
              <LayoutDashboardIcon />
              <h2>Dashboard</h2>
              <button
                onClick={() => setActive(false)}
                className="py-4 md:hidden "
              >
                {active ? <SidebarCloseIcon /> : <SidebarIcon />}
              </button>
            </div>
            <Links />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Aside;
