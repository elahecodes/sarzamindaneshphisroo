import Pagination from "../components/pagination";
import { useState , useEffect } from "react";
const PortfolioPage = () => {
      const isBlog = false;
      const [Portfolio, setPortfolio] = useState([]);
      useEffect(() => {
        const fetchPortfolio = async () => {
          try {
            const data = await fetch("/api/portfolio.json");
            if (!data.ok) return;
            const response = await data.json();
            setPortfolio(response);
          } catch (error) {
            console.log(error);
          }
        };
        fetchPortfolio();
      }, []);
    return (
        <div>
            <Pagination isBlog={isBlog} items={Portfolio}/>
        </div>
    );
};

export default PortfolioPage;