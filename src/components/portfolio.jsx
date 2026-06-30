import { useEffect, useState } from "react";
import arrow from "../assets/icons/back.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="w-full py-12 px-6 md:px-12">
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
          <hr className="flex-1 border-neutral-200" />

          <h2 className="text-2xl font-bold mx-4">
            جدیدترین <span className="text-primary">پروژه</span> های ما
          </h2>

          <hr className="flex-1 border-neutral-200" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>

        <p className="text-neutral-600 max-w-2xl leading-7">
          نمونه‌کارهایی که در این بخش می‌بینید حاصل طراحی و توسعه پروژه‌های
          واقعی هستند و تجربه عملی تیم ما را نشان می‌دهند.
        </p>

        <a
          href="#"
          className="flex items-center gap-2 text-orange-500 hover:gap-3 transition-all"
        >
          مشاهده بیشتر پروژه‌ها
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
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white"
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
                      مشاهده جزئیات
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3">
                  <h4 className="text-lg font-bold text-purple-600">
                    {item.title}
                  </h4>

                  <div>
                    <p className="text-xs text-neutral-500 mb-1">تکنولوژی‌ها</p>
                    <span className="text-xs bg-neutral-100 px-2 py-1 rounded-full text-neutral-700">
                      {item.technology}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-6 line-clamp-3">
                    {item.description}
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
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white"
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
                      مشاهده جزئیات
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3">
                  <h4 className="text-lg font-bold text-purple-600">
                    {item.title}
                  </h4>

                  <div>
                    <p className="text-xs text-neutral-500 mb-1">تکنولوژی‌ها</p>
                    <span className="text-xs bg-neutral-100 px-2 py-1 rounded-full text-neutral-700">
                      {item.technology}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-6 line-clamp-3">
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
