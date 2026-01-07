import { motion, AnimatePresence } from "motion/react";

type DropDownMenuProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

function DropDownMenu({ children, isOpen }: Readonly<DropDownMenuProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-screen z-50 bg-black/50 dark:bg-white/20 flex items-center justify-center p-4 no-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropDownMenu;
