import { useEffect, useMemo, useRef, useState } from "react";
import CustomSelect from "../components/CustomSelect";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import {
  FaGift,
  FaClipboardList,
  FaPaintBrush,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaMicrochip,
  FaEllipsisH,
  FaMoneyBillWave,
  FaCoins,
  FaClock,
  FaCalendarAlt,
  FaBolt,
  FaExclamationTriangle,
  FaPhone,
  FaWhatsapp,
  FaTelegramPlane,
  FaArrowDown,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaHeading,
  FaFileAlt,
  FaCogs,
  FaPaperclip,
} from "react-icons/fa";
const ProjectOrder = () => {
  const { t, i18n } = useTranslation();
  const [captchaValue, setCaptchaValue] = useState(null);

  const [Project, setProject] = useState(t("projectOrder.selects.project"));
  const [projectOpen, setProjectsOpen] = useState(false);

  const [budget, setBudget] = useState(t("projectOrder.selects.budget"));
  const [budgetOpen, setbudgetOpen] = useState(false);

  const [deadline, setDeadline] = useState(t("projectOrder.selects.deadline"));
  const [deadlineOpen, setDeadlineOpen] = useState(false);

  const [priority, setPriority] = useState(t("projectOrder.selects.priority"));
  const [priorityOpen, setPriorityOpen] = useState(false);

  const [communication, setCommunication] = useState(
    t("projectOrder.selects.communication"),
  );
  const [communicationOpen, setCommunicationOpen] = useState(false);

  useEffect(() => {
    setBudget(t("projectOrder.selects.budget", { returnObjects: true }));
    setCommunication(
      t("projectOrder.selects.communication", { returnObjects: true }),
    );
    setDeadline(t("projectOrder.selects.deadline", { returnObjects: true }));
    setPriority(t("projectOrder.selects.priority", { returnObjects: true }));
    setProject(t("projectOrder.selects.project", { returnObjects: true }));
  }, [i18n.language]);

  const refProject = useRef(null);
  const refBudget = useRef(null);
  const refDeadline = useRef(null);
  const refPriority = useRef(null);
  const refCommunication = useRef(null);
  const featuresText = t("projectOrder.features.items", {
    returnObjects: true,
  });

  const advantagesText = t("projectOrder.advantages.items", {
    returnObjects: true,
  });

  const projectTypesText = t("customSelect.projectTypes", {
    returnObjects: true,
  });
  const budgetOptionsText = t("customSelect.budget", {
    returnObjects: true,
  });
  const deadlineOptionsText = t("customSelect.deadline", {
    returnObjects: true,
  });
  const priorityOptionsText = t("customSelect.priority", {
    returnObjects: true,
  });
  const communicationOptionsText = t("customSelect.communication", {
    returnObjects: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("لطفاً ابتدا کپچا را تایید کنید.");
      return;
    }
  };

  useEffect(() => {
    const handleDropdown = (e) => {
      const refs = [
        refProject,
        refBudget,
        refDeadline,
        refPriority,
        refCommunication,
      ];

      const isOutside = refs.every(
        (ref) => !ref.current || !ref.current.contains(e.target),
      );

      if (isOutside) {
        setProjectsOpen(false);
        setbudgetOpen(false);
        setDeadlineOpen(false);
        setPriorityOpen(false);
        setCommunicationOpen(false);
      }
    };

    window.addEventListener("click", handleDropdown);

    return () => {
      window.removeEventListener("click", handleDropdown);
    };
  }, []);

  const projectIcon = [
    {
      id: 1,
      text: "طراحی رابط کاربری",
      icon: (
        <FaPaintBrush className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 2,
      text: "وبسایت",
      icon: <FaGlobe className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 3,
      text: "اپلیکیشن",
      icon: <FaMobileAlt className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 4,
      text: "طراحی دیتابیس",
      icon: <FaDatabase className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 5,
      text: "سخت افزار",
      icon: <FaMicrochip className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 6,
      text: "غیره",
      icon: <FaEllipsisH className="text-primary dark:text-primary-dark w-3" />,
    },
  ];
  const budgetIcon = [
    {
      id: 1,
      icon: <FaCoins className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 2,
      icon: (
        <FaMoneyBillWave className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 3,
      icon: (
        <FaMoneyBillWave className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 4,
      icon: (
        <FaMoneyBillWave className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 5,
      icon: (
        <FaMoneyBillWave className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 6,
      icon: <FaEllipsisH className="text-primary dark:text-primary-dark w-3" />,
    },
  ];

  const deadlineIcon = [
    {
      id: 1,
      icon: <FaBolt className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 2,
      icon: <FaClock className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 3,
      icon: (
        <FaCalendarAlt className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 4,
      icon: (
        <FaCalendarAlt className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 5,
      icon: <FaEllipsisH className="text-primary dark:text-primary-dark w-3" />,
    },
  ];

  const priorityIcon = [
    {
      id: 1,
      icon: <FaClock className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 2,
      icon: <FaBolt className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 3,
      icon: (
        <FaExclamationTriangle className="text-primary dark:text-primary-dark w-3" />
      ),
    },
  ];
  const communicationIcon = [
    {
      id: 1,
      icon: <FaPhone className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 2,
      icon: <FaWhatsapp className="text-primary dark:text-primary-dark w-3" />,
    },
    {
      id: 3,
      icon: (
        <FaTelegramPlane className="text-primary dark:text-primary-dark w-3" />
      ),
    },
    {
      id: 4,
      icon: <FaEnvelope className="text-primary dark:text-primary-dark w-3" />,
    },
  ];
  const advantages = [
    {
      id: 1,
      icon: FaGift,
    },
    {
      id: 2,
      icon: FaClock,
    },
    {
      id: 3,
      icon: FaShieldAlt,
    },
    {
      id: 4,
      icon: FaClipboardList,
    },
  ];

  const toggleBudget = () => setbudgetOpen((prev) => !prev);

  const inputStyles =
    "h-9 md:h-12 bg-primary/10 text-xs md:text-sm text-text dark:text-secondary-text px-2 text-sm outline-none rounded-xl";

  const lableStyles =
    "text-text text-[0.9rem] md:text-sm h-[2rem] dark:text-text-dark";
  const iconStyle = `absolute ${i18n.language === "fa" ? "left-3" : "right-3"} top-14 text-primary dark:text-primary-dark transition-all`;
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto p-4" action="">
        <div>
          <h4 className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary-dark dark:text-primary dark:text-primary-dark-dark mb-6">
            <FaUser />
            {t("projectOrder.employer.title")}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* نام و نام خانوادگی */}
            <div className="flex flex-col gap-3">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaUser className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.employer.fullName")}</span>
              </label>

              <input
                className={inputStyles}
                type="text"
                placeholder={t("projectOrder.employer.fullNamePlaceholder")}
              />
            </div>

            {/* ایمیل */}
            <div className="flex flex-col gap-3">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaEnvelope className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.employer.email")}</span>
              </label>

              <input
                className={inputStyles}
                type="email"
                placeholder={t("projectOrder.employer.emailPlaceholder")}
              />
            </div>

            {/* شماره تماس */}
            <div className="flex flex-col gap-3">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaPhone className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.employer.phone")}</span>
              </label>

              <input
                className={inputStyles}
                type="tel"
                placeholder={t("projectOrder.employer.phonePlaceholder")}
              />
            </div>

            {/* نام شرکت */}
            <div className="flex flex-col gap-3">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaBuilding className="text-primary dark:text-primary-dark text-sm" />
                <span>
                  {t("projectOrder.employer.company")}
                  <span className="text-neutral-400 text-sm mx-2">
                    ({t("projectOrder.employer.optional")})
                  </span>
                </span>
              </label>

              <input
                className={inputStyles}
                type="text"
                placeholder={t("projectOrder.employer.companyPlaceholder")}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-6">
          <h4 className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primary-dark dark:text-primary dark:text-primary-dark-dark">
            <FaFileAlt />
            {t("projectOrder.project.title")}
          </h4>
          {/* عنوان پروژه */}

          <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaHeading className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.project.projectTitle")}</span>
              </label>
              <input
                placeholder={t("projectOrder.project.projectTitlePlaceholder")}
                className={inputStyles}
                type="text"
              />
            </div>

            {/* نوع پروژه */}
            <div className="relative">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaFileAlt className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.project.projectType")}</span>
              </label>

              <div
                ref={refProject}
                onClick={() => setProjectsOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {Project}

                <FaArrowDown
                  className={`${
                    projectOpen ? "rotate-180" : "rotate-0"
                  } ${iconStyle}`}
                />
              </div>

              {projectOpen && (
                <CustomSelect
                  items={projectTypesText}
                  setValue={setProject}
                  setOpen={setProjectsOpen}
                  icon={projectIcon}
                />
              )}
            </div>

            {/* بودجه */}
            <div className="relative">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaMoneyBillWave className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.project.budget")}</span>
              </label>

              <div
                ref={refBudget}
                onClick={toggleBudget}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {budget}

                <FaArrowDown
                  className={`${
                    budgetOpen ? "rotate-180" : "rotate-0"
                  } ${i18n.language === "fa" ? " left-3 " : "right-3"} absolute top-14 text-primary dark:text-primary-dark transition-all`}
                />
              </div>

              {budgetOpen && (
                <CustomSelect
                  items={budgetOptionsText}
                  setValue={setBudget}
                  setOpen={setbudgetOpen}
                  icon={budgetIcon}
                />
              )}
            </div>

            {/* زمان تحویل */}
            <div className="relative">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaCalendarAlt className="text-primary dark:text-primary-dark text-sm" />
                <span className="line-clamp-1">
                  {t("projectOrder.project.deadline")}
                </span>
              </label>

              <div
                ref={refDeadline}
                onClick={() => setDeadlineOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {deadline}

                <FaArrowDown
                  className={`${deadlineOpen ? "rotate-180" : ""} ${iconStyle}`}
                />
              </div>

              {deadlineOpen && (
                <CustomSelect
                  items={deadlineOptionsText}
                  setValue={setDeadline}
                  setOpen={setDeadlineOpen}
                  icon={deadlineIcon}
                />
              )}
            </div>
            {/* اولویت */}
            <div className="relative">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaBolt className="text-primary dark:text-primary-dark text-sm" />
                <span>{t("projectOrder.project.priority")}</span>
              </label>

              <div
                ref={refPriority}
                onClick={() => setPriorityOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {priority}

                <FaArrowDown
                  className={`${priorityOpen ? "rotate-180" : ""} ${iconStyle}`}
                />
              </div>

              {priorityOpen && (
                <CustomSelect
                  items={priorityOptionsText}
                  setValue={setPriority}
                  setOpen={setPriorityOpen}
                  icon={priorityIcon}
                />
              )}
            </div>

            {/* روش ارتباط */}
            <div className="relative">
              <label className={`${lableStyles} flex items-center gap-2`}>
                <FaPhone className="text-primary dark:text-primary-dark text-sm" />
                <span className="line-clamp-1">
                  {t("projectOrder.project.communication")}
                </span>
              </label>

              <div
                ref={refCommunication}
                onClick={() => setCommunicationOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {communication}

                <FaArrowDown
                  className={`${
                    communicationOpen ? "rotate-180" : ""
                  } ${iconStyle}`}
                />
              </div>

              {communicationOpen && (
                <CustomSelect
                  items={communicationOptionsText}
                  setValue={setCommunication}
                  setOpen={setCommunicationOpen}
                  icon={communicationIcon}
                />
              )}
            </div>
          </section>

          {/* توضیحات */}
          <div className="my-8">
            <label className={`${lableStyles} mb-3 flex items-center gap-2`}>
              <FaFileAlt className="text-primary dark:text-primary-dark text-sm" />
              <span>{t("projectOrder.project.description")}</span>
            </label>

            <textarea
              className="
                  w-full
                  h-52
                  p-4
                  bg-primary/10
                  dark:text-secondary-text
                  rounded-xl
                  outline-none
                  resize-none
                  text-sm
                "
              placeholder={t("projectOrder.project.descriptionPlaceholder")}
            />
          </div>

          {/* امکانات مورد نیاز */}
          <div>
            <label
              className={`${lableStyles} mb-4 flex items-center gap-2 text-primary dark:text-primary-dark text-xl font-bold`}
            >
              <FaCogs className="text-lg text-primary dark:text-primary-dark dark:text-primary dark:text-primary-dark-dark" />
              <span>{t("projectOrder.features.title")}</span>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {featuresText.map((item, index) => (
                  <label className="flex items-center gap-2 bg-white dark:bg-[#1E293B] dark:text-white p-2 dark:border-[#334155] border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                    <input type="checkbox" />
                    <span className="text-xs md:text-sm">
                      {featuresText[index]}
                    </span>
                  </label>
                ))}
              </div>

              <div className=" bg-primary/10 rounded-2xl p-4 mt-4 md:mt-0">
                <label
                  className={`${lableStyles} mb-3 flex items-center gap-2 text-xl text-primary dark:text-primary-dark font-bold`}
                >
                  <FaPaperclip className="text-lg text-primary dark:text-primary-dark dark:text-primary dark:text-primary-dark-dark" />
                  <span className="text-[1rem]">
                    {t("projectOrder.upload.title")}
                  </span>
                </label>
                <p className="text-neutral-600 dark:text-[#94A3B8] text-sm md:text-xl text-start">
                  {t("projectOrder.upload.description")}
                </p>

                <input
                  type="file"
                  className="text-xs md:text-sm w-40 bg-accent dark:bg-[#FB923C] checked:scale-90 md:w-50 p-3 mt-4 rounded-md text-white"
                />
              </div>
            </div>
          </div>
          {/* دکمه ارسال */}
          <div
            className="mt-12 rounded-3xl bg-bg dark:bg-primary/10
           p-4 md:p-8"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              {/* فرم */}
              <div className="w-full lg:w-5/12">
                <div className="overflow-hidden rounded-3xl bg-white dark:bg-[#0F172A] shadow-2xl border border-primary/20">
                  {/* Header */}
                  <div className="relative overflow-hidden bg-primary dark:bg-primary-dark p-6">
                    <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
                    <div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>

                    <div className="relative flex items-start md:items-center gap-4">
                      <div className="flex md:h-14 md:w-14 items-center justify-center rounded-2xl md:bg-white/20">
                        <FaShieldAlt className="text-2xl mt-2 text-white" />
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {t("projectOrder.security.title")}
                        </h4>

                        <p className="mt-1 text-sm text-white/80">
                          {t("projectOrder.security.description")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-6 p-6">
                    <div className="flex justify-center rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-5 dark:bg-slate-800">
                      <ReCAPTCHA
                        sitekey="YOUR_SITE_KEY"
                        onChange={(value) => setCaptchaValue(value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="
                          cursor-pointer
                          group
                          flex h-14 w-full
                          items-center justify-center gap-3
                          rounded-2xl
                          bg-gradient-to-r
                          from-primary
                          to-accent
                          text-white
                          font-bold
                          shadow-lg
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-2xl
                          active:scale-95
                        "
                    >
                      <FaRocket className="transition-transform duration-300 group-hover:-rotate-12 group-hover:translate-x-1" />
                      <span> {t("projectOrder.security.button")}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* متن */}
              <div className="w-full lg:w-7/12 space-y-6">
                <h2 className="text-[1.2rem] md:text-[1.7rem] text-start xl:text-3xl font-extrabold text-text dark:text-white leading-relaxed">
                  {t("projectOrder.hero.title1")}{" "}
                  <span
                    className={
                      i18n.language === "fa"
                        ? "text-primary dark:text-primary-dark"
                        : "text-text dark:text-text-dark"
                    }
                  >
                    {t("projectOrder.hero.title2")}
                  </span>{" "}
                  {t("projectOrder.hero.title3")}
                </h2>

                <p className="text-sm md:text-base text-neutral-600 dark:text-slate-400 leading-8">
                  {t("projectOrder.hero.description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advantages.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        className="group h-16 md:h-24 flex cursor-pointer items-center gap-3 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                      >
                        <div className="flex w-8 h-8 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:bg-primary">
                          <Icon className="text-sm md:text-lg text-primary dark:text-primary-dark transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-white" />
                        </div>

                        <span className="font-medium text-sm md:text-[1.1rem] w-10/12 text-neutral-700 transition-colors duration-300 dark:text-white group-hover:text-primary dark:text-primary-dark dark:group-hover:text-primary dark:text-primary-dark-dark">
                          {advantagesText[index]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectOrder;
