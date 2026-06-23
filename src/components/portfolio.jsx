import { useEffect, useState } from "react";
import arrow from "../assets/icons/back.png";
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
    <div className="h-auto w-full bg-white py-3">
      <div className="flex justify-center items-center flex-col gap-8">
        <h2 className="w-full text-center text-4xl text-neutral-700 font-bold">
          جدیدترین پروژه ها
        </h2>
        <p className="mx-auto w-2/3 text-center text-lg">
          در این بخش، نمونه‌کارهایی نمایش داده می‌شود که برای مشتریان و
          پروژه‌های واقعی طراحی و پیاده‌سازی شده‌اند. هر پروژه حاصل همکاری با
          دیگران است و نشان‌دهنده تجربه عملی ما در اجرای نیازهای واقعی کاربران
          می‌باشد.
        </p>
        <div className="flex w-full justify-center items-center gap-2">
          <a className="text-orange-500" href="">
            مشاهده بیشتر پروژه ها
          </a>
          <img className="w-4 mt-1" src={arrow} alt="" />
        </div>
      </div>
      <section className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {data.map((portfolio) => (
          <div
            key={portfolio.id}
            className="h-[18rem] p-2 shadow-2xl overflow-hidden rounded hover:h-[40rem] bg-white transition-all delay-200 cursor-grab"
          >
            <div className="h-[18rem] overflow-hidden">
              <div
                className="
                    w-full
                    group 
                    relative
                    overflow-hidden
                    rounded
                    before:content-['']
                    hover:before:content-['توضیحات']
                    before:flex  
                    before:justify-center
                    before:items-center
                    before:text-sm
                    before:text-white
                    hover:before:text-2xl
                    before:font-bold
                    before:absolute
                    before:inset-0
                   hover:before:bg-neutral-500/30
                    before:z-10
                    before:duration-300
                    "
              >
                <img
                  className="w-full transition-all group-hover:scale-110"
                  src={portfolio.img}
                  alt={portfolio.title}
                />
              </div>
            </div>
            <div className="h-[21rem] w-full rounded-md p-1">
              <h4 className="text-xl font-bold text-purple-500">
                {portfolio.title}
              </h4>
              <div className="bg-white mt-2 rounded flex flex-col gap-2 justify-center items-satrt">
                <h6>تکنولوژی های استفاده شده</h6>
                <span className="text-xs text-neutral-600 bg-neutral-100 p-2 rounded-full">
                  {portfolio.technology}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-2 justify-center items-satrt">
                <h6>توضیحات پروژه</h6>
                <p className="text-neutral-600 text-justify rounded-lg text bg-neutral-100 text-sm p-1">
                  {portfolio.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default portfolio;
