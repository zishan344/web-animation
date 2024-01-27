import React, { useRef } from "react";
import { motion } from "framer-motion";
const InitialFarmerMotion = () => {
  const parentRef = useRef(null);
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hover: { scale: 1.1 },
    tab: {
      scale: 1.1,
      boxShadow: "0px 10px 10px #000",
    },
  };
  /*   const child = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }; */
  return (
    <div
      ref={parentRef}
      className="w-96 h-96 flex justify-center items-center border border-red-300">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tab"
        drag
        dragConstraints={parentRef}
        dragElastic={0.7}
        whileDrag={{
          scale: 1.1,
          boxShadow: "0px 10px 10px #000",
        }}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
    </div>
  );
};

export default InitialFarmerMotion;
