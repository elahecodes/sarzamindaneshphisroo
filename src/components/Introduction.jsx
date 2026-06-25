import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const targets = [100, 27, 30, 56];

  const counterTitles = [
    "پروژه انجام شده",
    "مشتری فعال",
    "دوره آموزشی",
    "همکار حرفه‌ای",
  ];

  async function getData() {
    try {
      const response = await fetch("/api/images.json");
      if (!response.ok) throw new Error("خطا در دریافت عکس‌ها");

      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => {
        const updated = prev.map((count, i) =>
          count < targets[i] ? count + 1 : count
        );

        if (updated.every((v, i) => v >= targets[i])) {
          clearInterval(timer);
        }

        return updated;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-full bg-neutral-50 md:p-10">

      {/* HERO IMAGE */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full h-[22rem] md:h-[30rem] rounded-2xl overflow-hidden shadow-xl"
      >
        {images.length > 0 && (
          <img
            src={images[currentIndex]?.url}
            className="w-full h-full object-cover"
            alt="intro"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </motion.div>

      {/* MAIN CARD */}
      <div className="w-full md:w-11/12 mx-auto -mt-24 md:-mt-28">

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 md:p-10">

          {/* COUNTERS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

            {counters.map((counter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-md transition-all ${
                  index % 2 === 0
                    ? "bg-purple-50 border-t-4 border-purple-500"
                    : "bg-orange-50 border-b-4 border-orange-400"
                }`}
              >
                <b className="text-4xl md:text-6xl text-purple-600">
                  {counter}
                </b>

                <span className="mt-2 text-sm md:text-base text-neutral-600">
                  {counterTitles[index]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 text-center md:text-right space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              سرزمین دانش
            </h2>

            <p className="text-sm md:text-lg leading-8 text-neutral-600 text-justify">
              شرکت «سرزمین دانش» با هدف توسعه دانش، مهارت و فناوری‌های نوین فعالیت می‌کند.
              این مجموعه تلاش دارد یادگیری را ساده‌تر، کاربردی‌تر و جذاب‌تر کند و
              پلی بین دانش نظری و مهارت عملی بسازد.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">

              <button className="px-6 py-3 rounded-xl bg-purple-600 text-white shadow-lg hover:shadow-purple-300 hover:-translate-y-1 transition-all">
                مطالعه بیشتر
              </button>

              <button className="px-6 py-3 rounded-xl bg-orange-400 text-white shadow-lg hover:shadow-orange-300 hover:-translate-y-1 transition-all">
                همکاری با ما
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;