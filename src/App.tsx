import "./App.css";
import AnimationControls from "./pages/FarmerMotion/AnimationControls";
import Cycle from "./pages/FarmerMotion/Cycle";
import InitialFarmerMotion from "./pages/FarmerMotion/InitialFarmerMotion";
import InView from "./pages/FarmerMotion/InView";
import UseAnimation from "./pages/FarmerMotion/UseAnimation";

function App() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <UseAnimation />
      {/* <div className="h-[200vh] w-full bg-red-500"></div> */}
      {/* <InView /> */}
      {/* <Cycle /> */}
      {/* <AnimationControls /> */}
      {/* <InitialFarmerMotion /> */}
    </div>
  );
}

export default App;
