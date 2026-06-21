import { useEffect, useState } from "react";
const portfolio = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch("/public/api/portfolio.json");
      const dataPortfolio = await response.json();

      if (!response.ok) {
        throw new Error("خطا در دریافت  اطلاعات");
      }
      setData(dataPortfolio);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-[80rem] w-full">
      <h2 className="w-full text-center text-4xl text-purple-600 font-bold mb-12">
        جدیدترین پروژه ها
      </h2>
      <section className="relative grid grid-cols-2 md:grid-cols-4 gap-5">
        {data.map((portfolio) => (
          <div key={portfolio.id} className="h-[18rem] p-1 shadow-2xl overflow-hidden  rounded-2xl hover:h-[40rem] bg-white transition-all delay-200 cursor-grab">
            <div className="h-[18rem] p-3 overflow-hidden">
            <img
              className="rounded hover:scale-110 before:content-[''] before:absolute before: overflow-hidden transition-all w-full"
              src={portfolio.img}
              alt={portfolio.title}
            />

            </div>
            <div className="h-[22rem] w-full bg-white">
              <h4>{portfolio.title}</h4>

              <p>{portfolio.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default portfolio;
