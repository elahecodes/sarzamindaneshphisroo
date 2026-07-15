import { useState, useEffect, createContext } from "react";

export const PortfolioContext = createContext();

export const DataOfPortfolioContext = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  async function getData() {
    try {
      const response = await fetch("/api/portfolio.json");
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function loadData() {
      const items = await getData();
      setPortfolio(items);
    }
    loadData();
  }, []);
  return (
    <PortfolioContext.Provider value={{ portfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default DataOfPortfolioContext;
