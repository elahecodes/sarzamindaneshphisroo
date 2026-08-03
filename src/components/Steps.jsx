import { motion } from "framer-motion";
import { Translation, useTranslation } from "react-i18next";
import {
  FaFlag,
  FaSearch,
  FaCalendarAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const Steps = () => {
  const { t, i18n } = useTranslation();
  const Steps = t("steps.items", { returnObjects: true });
  const steps = [
    {
      id: 1,
      icon: FaFlag,
      iconColor: "text-primary dark:text-primary-dark",
      color: "bg-gradient-to-br from-purple-600 to-purple-500 text-white",
    },
    {
      id: 2,
      icon: FaSearch,
      iconColor: "text-primary dark:text-primary-dark",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white",
    },
    {
      id: 3,
      icon: FaCalendarAlt,
      iconColor: "text-primary dark:text-primary-dark",
      color: "bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white",
    },
    {
      id: 4,
      icon: FaCode,
      iconColor: "text-primary dark:text-primary-dark",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white",
    },
    {
      id: 5,
      icon: FaCheckCircle,
      iconColor: "text-green-500",
      color: "bg-gradient-to-br from-purple-600 to-purple-500 text-white",
    },
  ];

  return (
    <section className="bg-neutral-50  max-w-7xl mx-auto dark:bg-[#0F172A] px-6 py-20 overflow-hidden">
      {/* عنوان */}
      <div className="mb-10 xl:mb-32 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <hr className="flex-1 border-neutral-300 dark:border-[#334155]" />
        {i18n.language === "fa" ? (
          <h2 className="mx-2 md:mx-5 text-center text-2xl lg:text-3xl md:text-3xl font-title text-text dark:text-[#F8FAFC] ">
            فرایند <span className="text-primary dark:text-primary-dark">همکاری</span> با ما
          </h2>
        ) : (
          <h2 className="mx-2 md:mx-5 text-center text-2xl lg:text-3xl md:text-3xl font-title text-text dark:text-[#F8FAFC] ">
            Our <span className="text-primary dark:text-primary-dark">Work</span> Process
          </h2>
        )}

        <hr className="flex-1 border-neutral-300 dark:border-[#334155]" />
        <div className="h-2 w-2 rounded-full bg-accent" />
      </div>

      {/* دسکتاپ */}
      <div className="relative mx-auto hidden xl:block">
        {/* خط وسط */}
        <div className="absolute top-[200px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300" />

        <ul className="relative grid grid-cols-5 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isTop = index % 2 === 0;

            return (
              <li
                key={item.id}
                className={`flex flex-col items-center transition-all duration-300 ${
                  isTop ? "-translate-y-12" : "translate-y-12"
                }`}
              >
                {/* شماره */}
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-bold shadow-md ring-4 ring-white ${item.color}`}
                >
                  {item.id}
                </div>

                {/* کارت */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group mt-6 flex min-h-[250px] dark:bg-[#334155] dark:border-[#334155] w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 dark:bg-[#1E293B]">
                    <Icon
                      className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
                    />
                  </div>

                  <h3 className="text-center text-lg font-bold text-text dark:text-[#F8FAFC]">
                    {Steps[index].title}
                  </h3>

                  <p className="text-center text-sm leading-7 text-neutral-600 dark:text-[#94A3B8]">
                    {Steps[index].description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* موبایل */}
      <div className="mx-auto max-w-2xl xl:hidden">
        <ul
          className={`relative space-y-8 ${i18n.language === "fa" ? "border-r-2 pr-8" : "border-l-2 pl-8"} border-purple-200`}
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="relative">
                {/* شماره */}
                <div
                  className={`absolute z-30 ${i18n.language === "fa" ? "right-[-46px]" : "left-[-46px]"} top-5 flex h-12 w-12 items-center justify-center rounded-full shadow-md ring-4 ring-white ${item.color}`}
                >
                  {item.id}
                </div>

                {/* کارت */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group rounded-2xl dark:bg-[#334155] dark:border-[#334155] border border-neutral-200 bg-white p-6 shadow-sm  hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 dark:bg-[#1E293B]">
                    <Icon
                      className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
                    />
                  </div>

                  <h3 className="mb-3 text-lg font-bold dark:text-[#F8FAFC] text-neutral-800">
                    {Steps[index].title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-600 dark:text-[#94A3B8]">
                    {Steps[index].description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Steps;
