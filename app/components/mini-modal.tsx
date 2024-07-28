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
          className="absolute w-11/12 left-[2%] bg-white h-80 -bottom-44 rotate-3 rounded-md p-5"
          initial={{ y: 200 }}
          animate={{ y: 0, rotate: 5 }}
          exit={{ y: 200, rotate: 8 }}
          layoutId="modal"
        >
          <h2 className="text-product-black text-lg">
            {currentHoveredItem?.title}
          </h2>
          <h5 className="text-product-black text-opacity-60 text-xs">
            {currentHoveredItem.subtitle}
          </h5>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
