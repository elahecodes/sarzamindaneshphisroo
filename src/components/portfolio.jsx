import { useEffect, useState, useMemo } from "react";
import arrow from "../assets/icons/back.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const portfolioText = t("portfolioData.items", { returnObjects: true });

  const [error, setError] = useState(null);
  
  const portfolioMap = useMemo(
    () => Object.fromEntries(portfolioText.map((item) => [item.id, item])),
    [portfolioText],
  );

  async function getData() {
    try {
      setLoading(true);

      const response = await fetch("/api/portfolio.json"); // 👈 اصلاح شد
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");

      const dataPortfolio = await response.json();
      setData(dataPortfolio);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full py-12 px-6 md:px-12 dark:bg-[#1E293B]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeOut",
        }}
        whileHover={{ y: -6, scale: 1.03 }}
        className="flex flex-col items-center gap-6 text-center "
      >
        <div className="flex max-w-7xl mx-auto items-center w-full max-full">
          <div className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark" />
          <hr className="flex-1 border-neutral-200 dark:border-[#334155]" />
          {i18n.language === "fa" ? (
            <h2 className="text-2xl lg:text-3xl font-title text-text mx-4 dark:text-[#F8FAFC]">
              جدیدترین{" "}
              <span className="text-primary text-2xl lg:text-3xl font-title text-primary">
                پروژه
              </span>{" "}
              های ما
            </h2>
          ) : (
            <h2 className="mx-1 md:mx-4">
              <span className="text-2xl lg:text-3xl font-title text-text dark:text-text-dark">
                latest
              </span>{" "}
              <span className="text-primary text-2xl lg:text-3xl font-title mx-1 text-primary dark:text-primary-dark">
                Projects
              </span>
            </h2>
          )}

          <hr className="flex-1 border-neutral-200 dark:border-[#334155]" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>

        <p className="text-neutral-600 dark:text-[#F8FAFC]  max-w-2xl leading-7">
          {t("portfolioHome.text")}
        </p>

        <Link
          to={`/portfolio`}
          href="#"
          className="flex items-center gap-2 text-accent dark:text-accent-dark hover:gap-3 transition-all"
        >
          {t("portfolioHome.readMore")}
          <img
            className={`w-4 ${i18n.language === "fa" ? "rotate-y-0" : "rotate-y-180"}`}
            src={arrow}
            alt="arrow"
          />
        </Link>
      </motion.div>

      {/* States */}
      {loading && (
        <p className="text-center mt-10 text-neutral-500">در حال بارگذاری...</p>
      )}

      {error && <p className="text-center mt-10 text-red-500">{error}</p>}

      {/* Grid */}
      {!loading && !error && (
        <>
          <section className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.map((item, index) => (
              <Link to={`/portfolioPage/${item.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  key={item.id}
                  className="group relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white dark:bg-[#334155]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <h5 className="text-white opacity-0 group-hover:opacity-100 text-sm md:text-base font-bold transition-all">
                        {t("portfolioHome.showDetails")}
                      </h5>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    <h4 className="text-xl font-bold text-purple-600 dark:text-primary-dark">
                      {portfolioMap[item.id]?.title}
                    </h4>
                    <p className="text-text/80 text-sm dark:text-white h-18 leading-6 line-clamp-3">
                      {portfolioMap[item.id]?.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span
                        className="
                        text-sm
                        font-semibold
                        text-primary
                        dark:text-primary-dark
                        group-hover:translate-x-1
                        transition-transform
                      "
                      >
                        {portfolioMap[item.id]?.readMore}
                      </span>

                      <div
                        className={`h-10 w-10
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        flex items-center justify-center
                        text-violet-600
                        transition
                        dark:text-primary-dark
                        group-hover:bg-violet-600
                        group-hover:text-white
                        ${i18n.language === "fa" ? "rotate-y-180" : "rotate-y-0"}`}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
          {/* mobile */}
          <section className="lg:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.slice(1, 5).map((item, index) => (
              <Link to={`/portfolioPage/${item.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  key={item.id}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white dark:bg-[#334155]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white opacity-0 group-hover:opacity-100 text-sm md:text-base font-bold transition-all">
                        {t("portfolioHome.showDetails")}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-primary dark:text-[#8B5CF6]">
                      {portfolioMap[item.id]?.title}
                    </h4>

                    <p className="text-sm h-16 overflow-hidden dark:text-[#F8FAFC] text-neutral-600 leading-6 line-clamp-3">
                      {portfolioMap[item.id]?.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span
                        className="
                        text-sm
                        font-semibold
                        text-primary
                        dark:text-primary-dark
                        group-hover:translate-x-1
                        transition-transform
                      "
                      >
                        {portfolioMap[item.id]?.readMore}
                      </span>

                      <div
                        className={`h-10 w-10
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        flex items-center justify-center
                        text-violet-600
                        transition
                        dark:text-primary-dark
                        group-hover:bg-violet-600
                        group-hover:text-white
                        ${i18n.language === "fa" ? "rotate-y-180" : "rotate-y-0"}`}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Portfolio;
