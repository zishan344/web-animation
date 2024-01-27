import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
const MotionValues = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);
  return (
    <div className="border border-red-500 size-[600px] flex flex-col gap-2 justify-center items-center  ">
      <motion.div
        style={{ x, scale, rotate }}
        drag="x"
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
    </div>
  );
};

export default MotionValues;
