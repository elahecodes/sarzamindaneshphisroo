import { useEffect, useRef, useState } from "react";
import CustomSelect from "../components/CustomSelect";
import {
  FaPaintBrush,
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
} from "react-icons/fa";

const ProjectOrder = () => {
  const [Project, setProject] = useState("انتخاب کنید ...");
  const [projectOpen, setProjectsOpen] = useState(false);

  const [budget, setBudget] = useState("انتخاب بودجه");
  const [budgetOpen, setbudgetOpen] = useState(false);

  const [deadline, setDeadline] = useState("زمان تحویل...");
  const [deadlineOpen, setDeadlineOpen] = useState(false);

  const [priority, setPriority] = useState("اولویت پروژه...");
  const [priorityOpen, setPriorityOpen] = useState(false);

  const [communication, setCommunication] = useState("روش ارتباط...");
  const [communicationOpen, setCommunicationOpen] = useState(false);

  const refProject = useRef(null);
  const refBudget = useRef(null);
  const refDeadline = useRef(null);
  const refPriority = useRef(null);
  const refCommunication = useRef(null);

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
  const projectTypes = [
    {
      id: 1,
      text: "طراحی رابط کاربری",
      icon: <FaPaintBrush className="text-primary w-3" />,
    },
    {
      id: 2,
      text: "وبسایت",
      icon: <FaGlobe className="text-primary w-3" />,
    },
    {
      id: 3,
      text: "اپلیکیشن",
      icon: <FaMobileAlt className="text-primary w-3" />,
    },
    {
      id: 4,
      text: "طراحی دیتابیس",
      icon: <FaDatabase className="text-primary w-3" />,
    },
    {
      id: 5,
      text: "سخت افزار",
      icon: <FaMicrochip className="text-primary w-3" />,
    },
    {
      id: 6,
      text: "غیره",
      icon: <FaEllipsisH className="text-primary w-3" />,
    },
  ];
  const budgetOptions = [
    {
      id: 1,
      text: "کمتر از ۱۰ میلیون تومان",
      icon: <FaCoins className="text-primary w-3" />,
    },
    {
      id: 2,
      text: "۱۰ تا ۳۰ میلیون تومان",
      icon: <FaMoneyBillWave className="text-primary w-3" />,
    },
    {
      id: 3,
      text: "۳۰ تا ۵۰ میلیون تومان",
      icon: <FaMoneyBillWave className="text-primary w-3" />,
    },
    {
      id: 4,
      text: "۵۰ تا ۱۰۰ میلیون تومان",
      icon: <FaMoneyBillWave className="text-primary w-3" />,
    },
    {
      id: 5,
      text: "بیش از ۱۰۰ میلیون تومان",
      icon: <FaMoneyBillWave className="text-primary w-3" />,
    },
    {
      id: 6,
      text: "نیاز به مشاوره دارم",
      icon: <FaEllipsisH className="text-primary w-3" />,
    },
  ];

  const deadlineOptions = [
    {
      id: 1,
      text: "کمتر از یک هفته",
      icon: <FaBolt className="text-primary w-3" />,
    },
    {
      id: 2,
      text: "۱ تا ۲ هفته",
      icon: <FaClock className="text-primary w-3" />,
    },
    {
      id: 3,
      text: "۲ تا ۴ هفته",
      icon: <FaCalendarAlt className="text-primary w-3" />,
    },
    {
      id: 4,
      text: "۱ تا ۳ ماه",
      icon: <FaCalendarAlt className="text-primary w-3" />,
    },
    {
      id: 5,
      text: "محدودیت زمانی ندارم",
      icon: <FaEllipsisH className="text-primary w-3" />,
    },
  ];

  const priorityOptions = [
    {
      id: 1,
      text: "عادی",
      icon: <FaClock className="text-primary w-3" />,
    },
    {
      id: 2,
      text: "فوری",
      icon: <FaBolt className="text-primary w-3" />,
    },
    {
      id: 3,
      text: "خیلی فوری",
      icon: <FaExclamationTriangle className="text-primary w-3" />,
    },
  ];
  const communicationOptions = [
    {
      id: 1,
      text: "تماس تلفنی",
      icon: <FaPhone className="text-primary w-3" />,
    },
    {
      id: 2,
      text: "واتساپ",
      icon: <FaWhatsapp className="text-primary w-3" />,
    },
    {
      id: 3,
      text: "تلگرام",
      icon: <FaTelegramPlane className="text-primary w-3" />,
    },
    {
      id: 4,
      text: "ایمیل",
      icon: <FaEnvelope className="text-primary w-3" />,
    },
  ];

  const toggleBudget = () => setbudgetOpen((prev) => !prev);

  const inputStyles =
    "h-12 bg-primary/10 text-neutral-700 px-2 outline-none border-primary border text-sm outline-none border-primary rounded-xl";

  const lableStyles = "text-neutral-800";
  return (
    <div>
      <form className="p-4" action="">
        <div>
          <h4 className="text-xl font-bold text-primary mb-6">
            اطلاعات کارفرما
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* نام و نام خانوادگی */}
            <div className="flex flex-col gap-3">
              <label className={lableStyles}>نام و نام خانوادگی</label>

              <input
                className={inputStyles}
                type="text"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
              />
            </div>

            {/* ایمیل */}
            <div className="flex flex-col gap-3">
              <label className={lableStyles}>ایمیل</label>

              <input
                className={inputStyles}
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            {/* شماره تماس */}
            <div className="flex flex-col gap-3">
              <label className={lableStyles}>شماره تماس</label>

              <input
                className={inputStyles}
                type="tel"
                placeholder="0912 123 4567"
              />
            </div>

            {/* نام شرکت */}
            <div className="flex flex-col gap-3">
              <label className={lableStyles}>
                نام شرکت{" "}
                <span className="text-neutral-400 text-sm">(اختیاری)</span>
              </label>

              <input
                className={inputStyles}
                type="text"
                placeholder="نام شرکت یا برند خود را وارد کنید"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-6">
          <h4 className="text-xl font-bold text-primary">اطلاعات پروژه</h4>
          {/* عنوان پروژه */}

          <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <label className={lableStyles}>عنوان پروژه</label>
              <input className={inputStyles} type="text" />
            </div>

            {/* نوع پروژه */}
            <div className="relative">
              <label className={lableStyles}>نوع پروژه</label>

              <div
                ref={refProject}
                onClick={() => setProjectsOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {Project}

                <FaArrowDown
                  className={`${
                    projectOpen ? "rotate-180" : "rotate-0"
                  } absolute left-3 top-14 text-primary transition-all`}
                />
              </div>

              {projectOpen && (
                <CustomSelect
                  items={projectTypes}
                  setValue={setProject}
                  setOpen={setProjectsOpen}
                />
              )}
            </div>

            {/* بودجه */}
            <div className="relative">
              <label className={lableStyles}>بودجه تقریبی</label>

              <div
                ref={refBudget}
                onClick={toggleBudget}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {budget}

                <FaArrowDown
                  className={`${
                    budgetOpen ? "rotate-180" : "rotate-0"
                  } absolute left-3 top-14 text-primary transition-all`}
                />
              </div>

              {budgetOpen && (
                <CustomSelect
                  items={budgetOptions}
                  setValue={setBudget}
                  setOpen={setbudgetOpen}
                />
              )}
            </div>
      
            {/* زمان تحویل */}
            <div className="relative">
              <label className={lableStyles}>زمان تحویل مورد انتظار</label>

              <div
                ref={refDeadline}
                onClick={() => setDeadlineOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {deadline}

                <FaArrowDown
                  className={`${
                    deadlineOpen ? "rotate-180" : ""
                  } absolute left-3 top-14 text-primary transition-all`}
                />
              </div>

              {deadlineOpen && (
                <CustomSelect
                  items={deadlineOptions}
                  setValue={setDeadline}
                  setOpen={setDeadlineOpen}
                />
              )}
            </div>
            {/* اولویت */}
            <div className="relative">
              <label className={lableStyles}>اولویت پروژه</label>

              <div
                ref={refPriority}
                onClick={() => setPriorityOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {priority}

                <FaArrowDown
                  className={`${
                    priorityOpen ? "rotate-180" : ""
                  } absolute left-3 top-14 text-primary transition-all`}
                />
              </div>

              {priorityOpen && (
                <CustomSelect
                  items={priorityOptions}
                  setValue={setPriority}
                  setOpen={setPriorityOpen}
                />
              )}
            </div>

            {/* روش ارتباط */}
            <div className="relative">
              <label className={lableStyles}>روش ارتباط ترجیحی</label>

              <div
                ref={refCommunication}
                onClick={() => setCommunicationOpen((prev) => !prev)}
                className={`${inputStyles} mt-3 cursor-pointer flex items-center`}
              >
                {communication}

                <FaArrowDown
                  className={`${
                    communicationOpen ? "rotate-180" : ""
                  } absolute left-3 top-14 text-primary transition-all`}
                />
              </div>

              {communicationOpen && (
                <CustomSelect
                  items={communicationOptions}
                  setValue={setCommunication}
                  setOpen={setCommunicationOpen}
                />
              )}
            </div>
          </section>


        

          {/* توضیحات */}
          <div className="my-8">
            <label className={`${lableStyles} mb-3 block`}>
              توضیح کامل پروژه
            </label>

            <textarea
              className="
                  w-full
                  h-52
                  p-4
                  bg-primary/10
                  border
                  border-primary
                  rounded-xl
                  outline-none
                  resize-none
                  text-sm
                "
              placeholder="اهداف، امکانات، نمونه‌های مشابه و توضیحات مورد نیاز را وارد کنید..."
            />
          </div>

          {/* امکانات مورد نیاز */}
          <div>
            <label
              className={`${lableStyles} mb-4 block text-primary text-xl font-bold`}
            >
              امکانات مورد نیاز
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>پنل مدیریت</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>درگاه پرداخت</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>چند زبانه</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>سئو</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>اپلیکیشن موبایل</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>اتصال به API</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>سیستم پیامک</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 border border-neutral-200 rounded-md cursor-pointer hover:scale-105 transition-all hover:shadow-xl h-12 text-neutral-700">
                  <input type="checkbox" />
                  <span>سایر موارد</span>
                </label>
              </div>
              

              <div className=" bg-primary/10 border border-primary rounded-2xl p-4 mt-4 md:mt-0">
                <label
                  className={`${lableStyles} mb-3 block text-xl text-primary font-bold`}
                >
                  فایل یا نمونه طراحی
                </label>
                <p className="text-neutral-600 text-start">
                  اگه نمونه ای از پروژه درخواستی مد نظرتون هست در این قسمت آپلود
                  کنید.
                </p>

                <input
                  type="file"
                  className="text-sm bg-accent checked:scale-90 w-50 p-3 mt-4 rounded-md text-white"
                />
              </div>
            </div>
          </div>
          {/* دکمه ارسال */}
          <button
            type="submit"
            className="
              w-full md:w-64
              h-14
              rounded-xl
              bg-primary
              text-white
              font-bold
              hover:scale-105
              transition-all
              hover:shadow-xl
            "
          >
            ثبت سفارش پروژه
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectOrder;
