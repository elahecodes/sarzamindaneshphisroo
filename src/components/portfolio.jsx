import { useEffect, useState } from "react";
import arrow from "../assets/icons/back.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();
  const cards = t("portfolioHome.cards", { returnObjects: true });

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
        <div className="flex items-center w-full max-full">
          <div className="w-2 h-2 rounded-full bg-accent" />
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

        <a
          href="#"
          className="flex items-center gap-2 text-orange-500 hover:gap-3 transition-all"
        >
          {t("portfolioHome.readMore")}
          <img className="w-4" src={arrow} alt="arrow" />
        </a>
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
                  <h4 className="text-lg font-bold text-purple-600 dark:text-[#8B5CF6]">
                    {cards[index].title}
                  </h4>

                  <div>
                    <p className="text-xs font-bold text-neutral-500 dark:text-[#F8FAFC] py-4">
                      {i18n.language === "fa"
                        ? "تکنولوژی‌ها"
                        : "technology"}{" "}
                    </p>
                    <div className="text-xs dark:text-[#F8FAFC]  bg-primary/10 px-2 py-1 rounded-xl text-neutral-700">
                      {cards[index].tech}
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-[#F8FAFC]  leading-6 line-clamp-3">
                    {cards[index].text}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>
          <section className="lg:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.slice(0, 4).map((item, index) => (
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
                    {item.title}
                  </h4>

                  <div>
                    <p className="text-xs font-bold text-neutral-500 dark:text-[#F8FAFC] py-4">
                      تکنولوژی‌ها
                    </p>
                    <div className="text-xs dark:text-[#F8FAFC]  bg-primary/10 px-2 py-1 rounded-xl text-neutral-700">
                      {item.technology}
                    </div>
                  </div>

                  <p className="text-sm dark:text-[#F8FAFC] text-neutral-600 leading-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Portfolio;
