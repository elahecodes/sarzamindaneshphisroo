import { motion } from "framer-motion";
import projectIcon from "../assets/icons/project.png";
import teamIcon from "../assets/icons/team.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WorkingWithUs = () => {
  const { t, i18n } = useTranslation();
  const Cards = t("workwithus.items", { returnObjects: true });
  const position = i18n.language === "fa" ? "left-3" : "right-3";
  const cards = [
    {
      id: 1,
      icon: projectIcon,
      className:
        "bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 text-white",
    },
    {
      id: 2,
      icon: teamIcon,
      className:
        "bg-slate-50 dark:bg-[#334155] dark:text-[#F8FAFC] dark:border-[#334155] border border-slate-200 text-slate-800",
    },
  ];

  return (
    <section className="bg-white xl:mt-14 dark:bg-[#0F172A] px-6 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <Link to={card.id === 1 ? "/projectorder" : "/home"}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
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
              className={`group relative h-[300px] overflow-hidden rounded-2xl p-8 min-h-[280px] hover:shadow-xl ${card.className}`}
            >
              {/* Decoration */}
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-5 text-3xl font-title">
                    {Cards[index].title}
                  </h3>

                  <p
                    className={`text-lg leading-8 ${
                      card.id === 1
                        ? "text-white/90"
                        : "text-slate-600 dark:text-secondary-text"
                    }`}
                  >
                    {Cards[index].description}
                  </p>
                </div>

                <button
                  className={`mt-8 w-fit rounded-xl px-6 py-3 font-bold transition ${
                    card.id === 1
                      ? "bg-white text-violet-700 hover:bg-slate-100"
                      : "bg-primary dark:bg-[#8B5CF6] text-white hover:opacity-90"
                  }`}
                >
                  {i18n.language === "fa"
                    ? card.id === 1
                      ? "ثبت درخواست"
                      : "ارسال رزومه"
                    : card.id === 1
                      ? "Submit Request"
                      : "Send Resume"}
                </button>
              </div>

              {/* Icon */}
              <img
                src={card.icon}
                alt={card.title}
                className={`absolute bottom-3 ${position} transition duration-500 group-hover:scale-110 ${
                  card.id === 1
                    ? "opacity-40 w-44"
                    : "opacity-40 w-32 dark:opacity-70"
                }`}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkingWithUs;
