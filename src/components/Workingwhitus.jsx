import { motion } from "framer-motion";
import projectIcon from "../assets/icons/project.png";
import teamIcon from "../assets/icons/team.png";

const WorkingWithUs = () => {
  const cards = [
    {
      id: 1,
      icon: projectIcon,
      title: "سفارش پروژه",
      description:
        "اگر برای کسب‌وکار یا استارتاپ خود به یک وب‌سایت حرفه‌ای نیاز داری، خوشحال می‌شویم در مسیر طراحی و توسعه کنارت باشیم.",
      className:
        "bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 text-white",
    },
    {
      id: 2,
      icon: teamIcon,
      title: "همکاری با ما",
      description:
        "ما همیشه به دنبال افراد خلاق و باانگیزه برای همکاری در پروژه‌های طراحی و توسعه هستیم. اگر اهل کار تیمی و رشد در پروژه‌های واقعی هستید، مشتاق همکاری با شما هستیم.",
      className:
        "bg-slate-50 border border-slate-200 text-slate-800",
    },
  ];

  return (
    <section className="bg-white px-6 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card,index) => (
          <motion.div
           initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { duration: 0.2 },
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            key={card.id}
            className={`group relative overflow-hidden rounded-2xl p-8 min-h-[280px] hover:shadow-xl ${card.className}`}
          >
            {/* Decoration */}
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h3 className="mb-5 text-3xl font-extrabold">
                  {card.title}
                </h3>

                <p
                  className={`max-w-md text-lg leading-8 ${
                    card.id === 1
                      ? "text-white/90"
                      : "text-slate-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>

              <button
                className={`mt-8 w-fit rounded-xl px-6 py-3 font-bold transition ${
                  card.id === 1
                    ? "bg-white text-violet-700 hover:bg-slate-100"
                    : "bg-primary text-white hover:opacity-90"
                }`}
              >
                {card.id === 1 ? "ثبت درخواست" : "ارسال رزومه"}
              </button>
            </div>

            {/* Icon */}
            <img
              src={card.icon}
              alt={card.title}
              className={`absolute left-3 bottom-3 transition duration-500 group-hover:scale-110 ${
                card.id === 1 ? "opacity-40 w-44" : "opacity-40 w-32"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingWithUs;