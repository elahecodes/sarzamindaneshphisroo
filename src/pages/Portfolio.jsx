import { useContext } from "react";
import Pagination from "../components/pagination";
import { PortfolioContext } from "../context/DataOfPortfolioContext";

const Portfolio = () => {
  const { portfolio } = useContext(PortfolioContext);

  return <Pagination items={portfolio} isBlog={false} />;
};

export default Portfolio;