import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
export default function MainModal({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        layoutId="modal"
        className="bg-white rounded-md w-full p-5 overflow-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
