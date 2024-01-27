import "./App.css";
import AnimationControls from "./pages/FarmerMotion/AnimationControls";
import Cycle from "./pages/FarmerMotion/Cycle";
import DragControls from "./pages/FarmerMotion/DragControls";
import InitialFarmerMotion from "./pages/FarmerMotion/InitialFarmerMotion";
import InView from "./pages/FarmerMotion/InView";
import MotionValues from "./pages/FarmerMotion/MotionValues";
import ScrollAnimation from "./pages/FarmerMotion/ScrollAnimation";
import UseAnimation from "./pages/FarmerMotion/UseAnimation";

function App() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="h-[500vh] w-full bg-red-500"></div>
      <ScrollAnimation />
      {/* <MotionValues /> */}
      {/* <DragControls /> */}
      {/* <UseAnimation /> */}
      {/* <InView /> */}
      {/* <Cycle /> */}
      {/* <AnimationControls /> */}
      {/* <InitialFarmerMotion /> */}
    </div>
  );
}

export default App;
