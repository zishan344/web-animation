import React, { useRef } from "react";
import { motion } from "framer-motion";
const InitialFarmerMotion = () => {
  const parentRef = useRef(null);
  const parent = {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: {
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 300, -300, 0],

      opacity: 1,
      transition: {
        ease: "linear",
        duration: 5,
        repeat: Infinity,
        opacity: {
          duration: 0.2,
        },
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
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
    </div>
  );
};

export default InitialFarmerMotion;
