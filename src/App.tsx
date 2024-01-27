import "./App.css";
import AnimationControls from "./pages/FarmerMotion/AnimationControls";
import InitialFarmerMotion from "./pages/FarmerMotion/InitialFarmerMotion";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <AnimationControls />
      {/* <InitialFarmerMotion /> */}
    </div>
  );
}

export default App;
