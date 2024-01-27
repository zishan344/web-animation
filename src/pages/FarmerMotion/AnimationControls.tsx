import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const AnimationControls = () => {
  const controls = useAnimation();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      controls.start({ x: 200 });
    } else {
      controls.start({ x: -200 });
    }
  };

  useEffect(() => {
    controls.start((i) => ({
      x: 200,
      transition: { delay: i * 1 },
      duration: 1,
    }));
  }, []);
  const forward = () => {
    controls.start({ x: 200 });
  };

  const backward = () => {
    controls.start({ x: -200 });
  };
  return (
    <div className="w-96 h-96 flex flex-col gap-2 justify-center items-center border border-red-300">
      <button className="px-3 py-2 bg-green-400">forward</button>
      <motion.div
        custom={1}
        animate={controls}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
      <motion.div
        custom={2}
        animate={controls}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
      <motion.div
        custom={3}
        animate={controls}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
      <button className="px-3 py-2 bg-green-400">backward</button>
    </div>
  );
};

export default AnimationControls;
