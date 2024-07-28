import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
export default function MainModal({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        layoutId="modal"
        className="size-full overflow-auto rounded-md bg-white p-5"
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
