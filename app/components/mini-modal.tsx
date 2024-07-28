import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { navHoverItemState } from "../recoil/atoms";
import { motion } from "framer-motion";

export default function MiniModal() {
  const currentHoveredItem = useRecoilValue(navHoverItemState);
  return (
    <AnimatePresence>
      {currentHoveredItem && (
        <motion.div
          className="absolute -bottom-44 left-[2%] h-80 w-11/12 rotate-3 rounded-md bg-white p-5"
          initial={{ y: 200 }}
          animate={{ y: 0, rotate: 5 }}
          exit={{ y: 200, rotate: 8 }}
          layoutId="modal"
        >
          <h2 className="text-lg text-product-black">
            {currentHoveredItem?.title}
          </h2>
          <h5 className="text-xs text-product-black text-opacity-60">
            {currentHoveredItem.subtitle}
          </h5>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
