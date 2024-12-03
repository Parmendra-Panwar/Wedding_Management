import EvokeEventPlanners from "./EvokeEventPlanners/EvokeEventPlanners";
import HeroSection from "./HeroSection/HeroSection";
import OurServices from "./Our Services/OurServices";
import RequestCallback from "./RequestCallback/RequestCallback";
import Contectus from "./contectUs/Contectus";

const Body = () => {
  return (
    <div className="header">
      <HeroSection />
      <RequestCallback />
      <EvokeEventPlanners />
      <OurServices />
      <Contectus />
    </div>
  );
};

export default Body;
