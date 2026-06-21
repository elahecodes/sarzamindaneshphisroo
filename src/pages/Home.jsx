import Introduction from "../components/introduction";
import Services from "./Services";
import Portfolio from "../components/portfolio";
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
        <Portfolio/>
      </div>
    </>
  );
};

export default Home;
