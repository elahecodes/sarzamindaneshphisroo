import Introduction from "../components/introduction";
import Services from "./Services";
import Portfolio from "../components/portfolio";
import Steps from "../components/Steps";
import Workingwhitus from "../components/Workingwhitus";
import Comments from "../components/Comments";
const Home = () => {
  return (
    <>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <Portfolio />
      </div>
      <div className="mt-20">
        <Steps />
      </div>
      <div className="mt-12">
        <Workingwhitus />
      </div>
      <div className=" p-[24px] bg-bg">
      <Comments/>
      </div>
    </>
  );
};

export default Home;
