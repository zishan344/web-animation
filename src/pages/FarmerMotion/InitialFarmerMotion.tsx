import React from "react";
import { motion } from "framer-motion";
const InitialFarmerMotion = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div>
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 1,
          staggerChildren: 0.5,
        }}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 ">
        <motion.div
          variants={child}
          className="size-20 bg-cyan-400"></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-400"></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-400"></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-400"></motion.div>
      </motion.div>
    </div>
  );
};

export default InitialFarmerMotion;
