import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PortfolioContext } from "../context/DataOfPortfolioContext";

import { FaCheckCircle, FaCode, FaRocket, FaLayerGroup } from "react-icons/fa";
const PortfolioPage = () => {
  const { portfolio } = useContext(PortfolioContext);
  console.log(portfolio);

  const { id } = useParams();
  const item = portfolio.find((item) => Number(item.id) == Number(id));
  if (!item) {
    return <div>موردی پیدا نشد !</div>;
  }

  return (
    <section className="bg-slate-50 z-20 relative overflow-hidden dark:bg-slate-900 py-24">
      <div className="absolute -z-20 w-[44rem] h-[22rem] bg-primary/10 dark:bg-primary/20 blur-3xl -top-2 -right-20 pointer-events-none" />
      <div className="absolute -z-20 w-[40rem] h-[40rem] bg-primary/10 dark:bg-primary/20 blur-3xl top-[50rem] -left-12 pointer-events-none" />
      <div className="container mx-auto px-5 lg:px-10">
        {/* Hero */}
        <div className="z-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 px-4 py-2 text-sm">
              پروژه فرانت‌اند
            </span>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white leading-relaxed">
              {item.title}
            </h1>

            <p className="mt-8 text-slate-600 dark:text-slate-300 leading-9">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="mt-10">
              <h3 className="flex items-center gap-3 font-bold text-xl text-slate-800 dark:text-white mb-4">
                <FaCode className="text-violet-600 text-2xl" />
                تکنولوژی‌های استفاده شده
              </h3>

              <div className="flex flex-wrap gap-3">
                {item.technology.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-12">
              <button className="px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white duration-300">
                مشاهده دمو
              </button>

              <button className="px-8 py-3 rounded-xl border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white duration-300">
                کد GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Features */}

        <div className="mt-24">
          <h2 className="flex items-center justify-center gap-3 text-3xl font-bold text-slate-800 dark:text-white">
            <FaRocket className="text-violet-600" />
            امکانات پروژه
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="
        group
        relative
        overflow-hidden
        rounded-2xl
        p-6
        border
        border-violet-200/60
        dark:border-violet-700/40

        bg-gradient-to-br
        from-violet-50
        via-white
        to-accent/10

        dark:from-slate-800
        dark:via-slate-800
        dark:to-accent/10

        hover:-translate-y-2
        hover:shadow-2xl
        duration-300
      "
              >
                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-violet-300/20 blur-3xl group-hover:bg-violet-400/30 duration-500"></div>

                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-violet-600 text-white flex items-center justify-center">
                    <FaCheckCircle />
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About item */}

        <div className="mt-24 bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-200 dark:border-slate-700">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-800 dark:text-white mb-6">
            <FaLayerGroup className="text-violet-600" />
            درباره پروژه
          </h2>

          <p className="text-slate-600 dark:text-slate-300 leading-9">
            این پروژه با هدف مدیریت بهتر کارهای روزانه طراحی شده است. کاربران
            می‌توانند وظایف جدید ایجاد کنند، آن‌ها را ویرایش یا حذف کرده و وضعیت
            انجام هر وظیفه را مدیریت کنند. اطلاعات بدون نیاز به بک‌اند در
            LocalStorage ذخیره می‌شود و برای مدیریت State از Zustand استفاده شده
            است تا ساختار پروژه ساده، سریع و مقیاس‌پذیر باشد.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
