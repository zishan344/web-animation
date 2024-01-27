import { useDragControls } from "framer-motion";
import { motion } from "framer-motion";
const DragControls = () => {
  const controls = useDragControls();
  return (
    <div
      onPointerDown={(e) => controls.start(e)}
      className="border border-red-500 size-[600px] flex flex-col gap-2 justify-center items-center  ">
      <motion.div className="size-56 h-8 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
      <motion.div
        drag="x"
        dragControls={controls}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></motion.div>
    </div>
  );
};

export default DragControls;
