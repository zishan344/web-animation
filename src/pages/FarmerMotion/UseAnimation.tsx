import { animate, useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const UseAnimation = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, []);
  /*   const handleClick = () => {
    animate(scope.current, { rotate: 45 });
  }; */
  return (
    <div className="border border-red-500 size-[600px] flex flex-col gap-2 justify-center items-center  ">
      <div
        // onClick={handleClick}
        ref={scope}
        className="size-56 bg-indigo-300 rounded-lg flex justify-center items-center flex-wrap  gap-2 px-4 pt-0 "></div>
    </div>
  );
};

export default UseAnimation;
