import { motion } from "framer-motion";
import {
  FaFlag,
  FaSearch,
  FaCalendarAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const Steps = () => {
  const steps = [
    {
      id: 1,
      icon: FaFlag,
      iconColor: "text-purple-600",
      color: "bg-gradient-to-br from-purple-600 to-purple-500 text-white",
      title: "شروع همکاری",
      description:
        "درخواست پروژه ثبت شده و اهداف، امکانات و انتظارات به‌طور کامل بررسی می‌شوند.",
    },
    {
      id: 2,
      icon: FaSearch,
      iconColor: "text-purple-600",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white",
      title: "بررسی و تحلیل",
      description:
        "ساختار پروژه، نیازهای فنی و تجربه کاربری برای دستیابی به بهترین نتیجه تحلیل می‌شوند.",
    },
    {
      id: 3,
      icon: FaCalendarAlt,
      iconColor: "text-purple-600",
      color: "bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white",
      title: "توافق و برنامه‌ریزی",
      description:
        "زمان‌بندی، هزینه و مراحل اجرا مشخص شده و پس از تایید، پروژه وارد فاز عملیاتی می‌شود.",
    },
    {
      id: 4,
      icon: FaCode,
      iconColor: "text-purple-600",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white",
      title: "طراحی و پیاده‌سازی",
      description:
        "فرآیند طراحی رابط کاربری و توسعه بخش‌های مختلف پروژه با دقت و استانداردهای روز انجام می‌شود.",
    },
    {
      id: 5,
      icon: FaCheckCircle,
      iconColor: "text-green-500",
      color: "bg-gradient-to-br from-purple-600 to-purple-500 text-white",
      title: "تحویل نهایی",
      description:
        "پروژه پس از تست و بررسی کامل تحویل داده شده و پشتیبانی لازم ارائه می‌شود.",
    },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-20 overflow-hidden">
      {/* عنوان */}
      <div className="mb-20 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <hr className="flex-1 border-neutral-300" />
        <h2 className="mx-5 text-center text-2xl md:text-3xl font-bold text-neutral-900">
          فرایند <span className="text-primary">همکاری</span> با ما
        </h2>
        <hr className="flex-1 border-neutral-300" />
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
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group mt-6 flex min-h-[250px] w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-50">
                    <Icon
                      className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
                    />
                  </div>

                  <h3 className="text-center text-lg font-bold text-neutral-800">
                    {item.title}
                  </h3>

                  <p className="text-center text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* موبایل */}
      <div className="mx-auto max-w-2xl xl:hidden">
        <ul className="relative space-y-8 border-r-2 border-purple-200 pr-8">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id} className="relative">
                {/* شماره */}
                <div
                  className={`absolute right-[-46px] top-5 flex h-12 w-12 items-center justify-center rounded-full shadow-md ring-4 ring-white ${item.color}`}
                >
                  {item.id}
                </div>

                {/* کارت */}
                <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50">
                    <Icon
                      className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
                    />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-neutral-800">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Steps;
