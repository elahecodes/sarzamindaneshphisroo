import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUserCog,
  FaGlobe,
  FaRobot,
  FaMicrochip,
  FaHome,
  FaLightbulb,
  FaDatabase,
  FaUsers,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa";

import project from "../assets/images/project.png";
import softwareTeam from "../assets/images/softwareTeam.jpg";
import softwareTeam2 from "../assets/images/softwareTeam2.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);

  async function getData() {
    try {
      const response = await fetch("/api/services.json");

      if (!response.ok) return;

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }
  //   ارم انجمن صنفی کسب و کار اینترنتی
  // ارم انجمن انفورماتیک ایران
  // ارم نظام صنفی رایانه ای کشور

  useEffect(() => {
    getData();
  }, []);

  const achievements = [
    {
      icon: <FaCheckCircle />,
      position: "md:left-[8%] md:top-[18%] left-4 top-4",
    },
    {
      icon: <FaShieldAlt />,
      position: "md:right-[8%] md:top-[20%] right-4 top-28",
    },
    {
      icon: <FaRocket />,
      position: "md:left-[10%] md:bottom-[18%] left-4 bottom-20",
    },
    {
      icon: <FaHandshake />,
      position: "md:right-[5%] md:bottom-[12%] right-4 bottom-4",
    },
    {
      icon: <FaLightbulb />,
      position:
        "md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 hidden md:flex",
    },
  ];
  const whyUs = [
    {
      id: 1,
      icon: FaUsers,
    },

    {
      id: 2,
      icon: FaClock,
    },

    {
      id: 3,
      icon: FaHeadset,
    },

    {
      id: 4,
      icon: FaShieldAlt,
    },

    {
      id: 5,
      icon: FaRocket,
    },

    {
      id: 6,
      icon: FaLightbulb,
    },
  ];
  const SectionTitle =
    "text-3xl md:text-4xl font-extrabold text-primary text-center";

  const icons = {
    1: <FaLaptopCode className="text-white text-3xl" />,
    2: <FaUserCog className="text-white text-3xl" />,
    3: <FaGlobe className="text-white text-3xl" />,
    4: <FaRobot className="text-white text-3xl" />,
    5: <FaMicrochip className="text-white text-3xl" />,
    6: <FaHome className="text-white text-3xl" />,
    7: <FaLightbulb className="text-white text-3xl" />,
    8: <FaDatabase className="text-white text-3xl" />,
  };
  const achievementsText = t("aboutUs.trust.achievements", {
    returnObjects: true,
  });
  const servicesText = t("aboutUs.services.items", { returnObjects: true });
  const whyUsText = t("aboutUs.whyUs.items", { returnObjects: true });
  return (
    <div className="relative overflow-hidden">
      {/* background blobs (کنترل شده) */}
      <div className="absolute w-[22rem] h-[22rem] bg-accent/10 dark:bg-accent/10 blur-3xl -top-2 -right-20 pointer-events-none" />
      <div className="absolute w-[40rem] h-[40rem] bg-primary/10 dark:bg-primary/20 blur-3xl top-[50rem] -left-12 pointer-events-none" />
      <div className="absolute w-[22rem] h-[22rem] bg-accent/10 blur-3xl bottom-0 -left-10 pointer-events-none" />

      <section className="py-12 md:py-20 relative z-10 overflow-hidden">
        <motion.h4
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${SectionTitle} tracking-tight dark:text-[#8B5CF6] font-title`}
        >
          {t("aboutUs.trust.title")}
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 md:mt-6 mx-auto w-11/12 md:w-8/12 dark:text-[#94A3B8] text-center text-sm md:text-base text-neutral-600 leading-8 md:leading-9"
        >
          {t("aboutUs.trust.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="
            relative
            w-11/12 md:w-8/12
            h-[22rem] sm:h-[28rem] md:h-[35rem]
            mx-auto mt-12 md:mt-20
          "
        >
          {/* پس‌زمینه */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] rotate-4 md:rotate-6 bg-gradient-to-br from-primary to-accent -z-10" />

          {/* تصویر */}
          <img
            src={softwareTeam2}
            alt="Team"
            className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem]"
          />

          {/* Achievement Cards */}
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: (index + 1) * 0.2,
              }}
              className={`
                  absolute
                  ${item.position}
                  flex items-center gap-2 md:gap-3
                  bg-white/85
                  dark:bg-[#334155]/60
                  dark:text-white
                  backdrop-blur-xl
                  border border-white/40
                  shadow-xl md:shadow-2xl
                  py-2 md:py-3
                  px-3 md:px-5
                  rounded-full
                  hover:scale-105 md:hover:scale-110 
                  cursor-default
                  text-xs md:text-sm
                  w-fit max-w-[90%]
                `}
            >
              <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white">
                {item.icon}
              </span>

              <span className="whitespace-nowrap">
                {achievementsText[index].text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-2 m-4">
        <div className="relative overflow-hidden rounded-3xl bg-bg p-8 d dark:bg-bg-dark md:p-12">
          {/* عنوان */}
          <div className="mb-10 flex items-center gap-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl text-violet-600 dark:bg-primary/30"
            >
              <FaRocket />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t("aboutUs.story.badge")}
              </span>

              <h3 className="mt-1 text-3xl font-title text-text dark:text-text-dark">
                {t("aboutUs.story.title")}
              </h3>
            </motion.div>
          </div>

          {/* متن */}
          <div className="space-y-6 leading-9 text-justify text-text dark:text-text-dark">
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("aboutUs.story.paragraph1")}
            </motion.p>

            {/* باکس هدف */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-start gap-4 rounded-2xl border-r-4 border-accent dark:border-accent-dark bg-orange-50 p-5 dark:bg-orange-500/10"
            >
              <FaLightbulb className="mt-1 text-2xl text-orange-500" />

              <p className="leading-8 text-gray-700 dark:text-gray-200">
                {t("aboutUs.story.goal")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {" "}
              {t("aboutUs.story.paragraph2")}
            </motion.p>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="mt-30 relative z-10 px-8">
        <div className="flex items-center w-full max-w-full mb-16">
          <div className="w-2 h-2 rounded-full bg-accent shrink-0" />

          <hr className="flex-1 bg-neutral-200 dark:border-[#334155] border border-neutral-200" />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-1 lg:mx-4 text-xl lg:text-2xl font-title text-text dark:text-[#F8FAFC] font-bold whitespace-nowrap"
          >
            {t("aboutUs.services.title")}
          </motion.h2>

          <hr className="flex-1 bg-neutral-200 dark:border-[#334155] border border-neutral-200" />

          <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {items.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              key={item.id}
              className="group p-6 rounded-3xl bg-white/70 dark:bg-[#334155] dark:border-[#334155] backdrop-blur-xl border border-purple-200/40 shadow-md hover:shadow-xl flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-orange-500 flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition">
                {icons[item.id]}
              </div>

              <h2 className="text-lg font-bold text-primary dark:text-[#8B5CF6] min-h-[50px]">
                {servicesText[index].title}
              </h2>

              <p className="text-neutral-600 text-sm leading-6 dark:text-[#F8FAFC]">
                {servicesText[index].text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 mt-20 relative overflow-hidden px-10">
        {/* بک‌گراند تزئینی */}
        <div className="absolute top-0 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10">
          <div className="text-center mx-auto">
            <div className="flex items-center w-full max-w-full">
              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />

              <hr className="flex-1 border-border md:flex-[2]  dark:border-[#334155] bg-neutral-200 border" />

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-4 dark:text-[#F8FAFC] text-xl lg:text-2xl font-title whitespace-nowrap"
              >
                {t("aboutUs.whyUs.title")}
              </motion.h2>

              <hr className="flex-1 border-border md:flex-[2] lg:flex-[3] dark:border-[#334155] bg-neutral-200 border" />

              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-neutral-500 mt-4 text-lg leading-8"
            >
              {t("aboutUs.whyUs.description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            {/* لیست ویژگی‌ها */}
            <div className="space-y-5">
              {whyUs.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  key={item.id}
                  className="
                    group
                    flex items-start gap-5
                    
                    p-6
                    rounded-3xl
                    bg-white/80
                    dark:bg-[#334155]
                    dark:border-[#334155]
                    backdrop-blur-xl
                    border border-neutral-200
                    shadow-sm
                    hover:shadow-2xl
                    hover:border-primary/20
                  "
                >
                  {/* آیکون */}
                  <div
                    className="
                    w-16 h-16
                    rounded-2xl
                    bg-primary/10
                    dark:bg-[#8B5CF6]/20
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:bg-primary
                    group-hover:rotate-6
                  "
                  >
                    <item.icon className="text-primary text-2xl dark:text-[#8B5CF6] group-hover:text-white transition-colors" />
                  </div>

                  {/* متن */}
                  <div>
                    <h3 className="text-xl font-title text-primary dark:text-[#8B5CF6] mb-2">
                      {whyUsText[index].title}
                    </h3>

                    <p className="text-neutral-500 dark:text-[#F8FAFC] leading-8">
                      {whyUsText[index].description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* تصویر */}
            <div className="relative flex justify-center">
              {/* نورهای پس‌زمینه */}
              <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />

              {/* باکس اصلی */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  group
                  relative
                  w-full
                  max-w-lg
                  h-[500px]
                  rounded-[40px]
                  overflow-hidden
                  border border-white/30
                  bg-gradient-to-br from-primary to-primary-light
                  shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                "
              >
                <img
                  src={softwareTeam}
                  alt="تیم ما"
                  className="w-full transition-all h-full group-hover:scale-110 object-cover"
                />

                {/* لایه گرادیان */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* متن روی تصویر */}
                <div className={`absolute bottom-8 ${i18next.language === "fa"? "right-8":"left-8 right-8"}  text-white`}>
                  <h3 className="text-3xl font-bold mb-3">{t("aboutUs.whyUs.titlePhoto")}</h3>

                  <p className="text-white/90 leading-8">
                  {t("aboutUs.whyUs.descriptionPhoto")}
                  </p>
                </div>
              </motion.div>

              {/* کارت شناور */}

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="
                  absolute
                  -top-10
                  -right-4
                  bg-white
                 dark:bg-[#334155]/30
                  dark:backdrop-blur-2xl
                  dark:border-[#334155]
                  rounded-3xl
                  px-6 py-4
                  shadow-2xl
                  border border-neutral-100
                "
              >
                <p className="text-4xl font-black text-primary dark:text-[#8B5CF6]">
                  +120
                </p>
                <span className="text-neutral-500 dark:text-white">
                  {t("aboutUs.whyUs.textBox")}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="
                  absolute
                  md:-bottom-6
                   dark:bg-[#334155]/30
                  dark:backdrop-blur-2xl
                  dark:border-[#334155]
                  -bottom-10
                  -left-6
                  bg-white
                  rounded-3xl
                  px-6 py-4
                  shadow-2xl
                  border border-neutral-100
                "
              >
                <p className="text-4xl font-black text-primary dark:text-[#8B5CF6]">
                  +120
                </p>
                <span className="text-neutral-500 dark:text-white">
                  {t("aboutUs.whyUs.textBox")}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
            relative my-24 w-10/12 mx-auto
            overflow-visible
          "
      >
        {/* لایه پس‌زمینه چرخیده */}
        <div
          className="
            absolute inset-0
            rotate-4
            rounded-[2rem]
            bg-gradient-to-l bg-primary/40
            
    "
        />

        {/* محتوای اصلی */}
        <div
          className="
                group
                relative z-10
                flex flex-col lg:flex-row
                items-center justify-between
                gap-12
                px-12 py-14
                rounded-[2rem]
                bg-gradient-to-bl from-primary to-accent
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
              "
        >
          {/* متن */}
          <div className="flex flex-col items-center md:items-start gap-6 max-w-xl">
            <span
              className="
                px-4 py-2
                rounded-full
                bg-white/20
                text-white text-sm
                backdrop-blur-md
              "
            >
              {t("aboutUs.cta.badge")}
            </span>
            <h2 className="text-2xl text-start text-center md:text-3xl font-title leading-[1.6] md:leading-[1.8] text-white tracking-tight">
              {t("aboutUs.cta.title")}
            </h2>

            <p className="mt-4 w-full text-base text-start md:text-lg leading-8 md:leading-9 text-white/85 max-w-xl">
              {t("aboutUs.cta.description")}
            </p>

            <Link
              to="/projectorder"
              className="
                flex
                justify-center items-center
                w-64 h-16
                rounded-2xl
                bg-accent
                text-white
                text-xl
                font-bold
                border-2 border-white/30
                transition-all duration-300
                hover:scale-105
                hover:bg-white/90
                hover:text-primary
                hover:shadow-2xl
                group-hover:scale-110
                before:content-['']
                before:w-60
                before:h-14
                before:absolute
                before:top-0
                before:left-0
                before:bg-white/0
                relative
                before:-z-20
                before:rounded-2xl
                before:animate-ping
                before:bg-white/50
                md:group-hover:before:animate-ping
                group-hover:before:bg-white/50
                "
            >
              {t("aboutUs.cta.button")}
            </Link>
          </div>

          {/* تصویر */}
          <div
            className="
              hidden
              md:block
              relative
              p-8
              rounded-full
              bg-white/15
              backdrop-blur-2xl
              border border-white/20
              shadow-2xl
            "
          >
            <img
              className="relative left-4 z-10 w-64 transition-all lg:w-72"
              src={project}
              alt="Project"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
