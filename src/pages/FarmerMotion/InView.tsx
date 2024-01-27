import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const InView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="border border-red-500 size-[600px] flex flex-col gap-2 justify-center items-center  ">
      <motion.div
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 0.07 } }
            : { opacity: 0, x: -500 }
        }
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "
        ref={ref}></motion.div>
    </div>
  );
};

export default InView;
