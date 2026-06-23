import Introduction from "../components/introduction";
import Services from "./Services";
import Portfolio from "../components/portfolio";
import Steps from "../components/Steps";
import Workingwhitus from "../components/Workingwhitus";
const Home = () => {
  return (
    <>
      <div className="mt-10">
        <Introduction />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="mt-20">
        <Steps />
      </div>
      <div className="p-6 mt-20">
        <Workingwhitus />
      </div>
    </>
  );
};

export default Home;
