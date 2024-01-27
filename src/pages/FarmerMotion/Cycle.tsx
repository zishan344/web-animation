import React from "react";
import { motion, useCycle } from "framer-motion";
const Cycle = () => {
  const boxAnimation = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100 },
    { x: -100, y: 100, opacity: 0.25 },
    { x: -100, y: -100, opacity: 0 },
  ];
  const [animation, Cycle] = useCycle(...boxAnimation);
  return (
    <div className="w-96 h-96 flex flex-col gap-2 justify-center items-center border border-red-300">
      <motion.div
        animate={animation}
        custom={1}
        onTap={() => Cycle()}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
    </div>
  );
};

export default Cycle;
