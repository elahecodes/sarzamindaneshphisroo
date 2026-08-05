import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import softIcon from "../assets/icons/soft.png";
import smartHomeIcon from "../assets/icons/smartHome.png";
import hardwareIcon from "../assets/icons/mouse.png";
import robotIcon from "../assets/icons/robot.png";

const Services = () => {
  const { t, i18n } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const data = [
    { id: 1, icon: robotIcon },
    { id: 2, icon: smartHomeIcon },
    { id: 3, icon: hardwareIcon },
    { id: 4, icon: softIcon },
    { id: 5, icon: softIcon },
    { id: 6, icon: softIcon },
  ];

  return (
    <section className="px-6 max-w-[1440px] mx-auto py-20 bg-white dark:bg-bg-dark">
      {/* Header */}
      <div className="flex justify-center items-center w-full">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <hr className="border flex-1 border-neutral-200 dark:border-[#334155]" />
        <h2 className="text-2xl lg:text-3xl text-center font-bold mx-4 dark:text-white">
          {i18n.language === "fa" ? (
            <div>
              <span className="text-primary dark:text-primary-dark">خدماتی</span> که ارائه میدهیم
            </div>
          ) : (
            <div>
              <span>our</span> <span className="text-primary dark:text-primary-dark">Services</span>
            </div>
          )}
        </h2>
        <hr className="border flex-1 border-neutral-200 dark:border-[#334155]" />
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 xl:mt-20">
        {data.map((box, index) => (
          <motion.div
            key={box.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="group relative rounded-2xl border border-violet-100 dark:border-[#334155] bg-gradient-to-br from-white to-violet-50 dark:from-[#37475c] dark:to-[#1b2535] p-6 shadow-sm hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-title text-text dark:text-neutral-100 group-hover:text-primary dark:text-primary-dark dark:group-hover:text-white transition">
                {services[index].title}
              </h3>

              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-bg-dark flex items-center justify-center">
                <img src={box.icon} alt="" className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm leading-7 dark:text-secondary-text text-neutral-600">
              {services[index].text}
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
