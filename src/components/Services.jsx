import { motion } from "framer-motion";
import softIcon from "../assets/icons/soft.png";
import smartHomeIcon from "../assets/icons/smartHome.png";
import hardwareIcon from "../assets/icons/mouse.png";
import robotIcon from "../assets/icons/robot.png";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: robotIcon,
      title: "ربات های صنعتی",
      description:
        "ربات‌های صنعتی دستگاه‌های خودکار برای انجام وظایف کارخانه‌ای هستند.",
    },
    {
      id: 2,
      icon: smartHomeIcon,
      title: "خانه های هوشمند",
      description:
        "خانه‌های هوشمند با دستگاه‌های متصل، امکانات کنترل و اتوماسیون را فراهم می‌کنند.",
    },
    {
      id: 3,
      icon: hardwareIcon,
      title: "سیستم های سخت افزاری",
      description:
        "سیستم‌های سخت‌افزاری شامل اجزای فیزیکی و قابل لمس یک دستگاه هستند.",
    },
    {
      id: 4,
      icon: softIcon,
      title: "سامانه های نرم افزاری",
      description:
        "سامانه‌های نرم‌افزاری برنامه‌هایی برای اجرای وظایف و مدیریت داده‌ها هستند.",
    },
    {
      id: 5,
      icon: softIcon,
      title: "طراحی و تولید دیتابیس",
      description:
        "طراحی ساختار داده‌ها برای ذخیره‌سازی و مدیریت اطلاعات بهینه.",
    },
    {
      id: 6,
      icon: softIcon,
      title: "مشاوره",
      description:
        "ارائه مشاوره تخصصی برای انتخاب و اجرای راهکارهای نرم‌افزاری و سخت‌افزاری.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white">
      {/* Header */}
      <div className="flex justify-center items-center w-full">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <hr className="border flex-1 border-neutral-200" />
        <h2 className="text-2xl text-center font-bold mx-4">
          <span className="text-primary">خدماتی</span> که ارائه میدهیم
        </h2>
        <hr className="border flex-1 border-neutral-200" />
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
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
            viewport={{once: true}}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="group relative rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-6 shadow-sm hover:shadow-xl cursor-pointer"
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-neutral-800 group-hover:text-primary transition">
                {box.title}
              </h3>

              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <img src={box.icon} alt="" className="w-6 h-6" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-7 text-neutral-600">
              {box.description}
            </p>

            {/* Hover Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
