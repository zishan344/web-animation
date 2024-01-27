import { useScroll } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="h-5 w-full fixed top-0 bg-green-500"
      style={{ scaleX: scrollYProgress }}></motion.div>
  );
};

export default ScrollAnimation;
