import Introduction from "../components/introduction";
import Services from "./Services";
const Home = () => {
  return (
    <>
      <div className="mt-10">
        <Introduction />
      </div>
      <div>
        <Services />
      </div>
    </>
  );
};

export default Home;
