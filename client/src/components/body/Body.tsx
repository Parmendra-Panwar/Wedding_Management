import EvokeEventPlanners from "./EvokeEventPlanners/EvokeEventPlanners";
import HeroSection from "./HeroSection/HeroSection";
import RequestCallback from "./RequestCallback/RequestCallback";

const Body = () => {
  return (
    <div className="header">
      <HeroSection />
      <RequestCallback />
      <EvokeEventPlanners />
    </div>
  );
};

export default Body;
