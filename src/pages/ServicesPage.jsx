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

const ServicesPage = () => {
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
      text: "انجام بیش از ۳۰ پروژه موفق",
      icon: <FaCheckCircle />,
      position: "md:left-[8%] md:top-[18%] left-4 top-4",
    },
    {
      text: "رعایت استانداردهای امنیت و کیفیت",
      icon: <FaShieldAlt />,
      position: "md:right-[8%] md:top-[20%] right-4 top-28",
    },
    {
      text: "استفاده از فناوری‌های روز",
      icon: <FaRocket />,
      position: "md:left-[10%] md:bottom-[18%] left-4 bottom-20",
    },
    {
      text: "تعهد به کیفیت و رضایت مشتری",
      icon: <FaHandshake />,
      position: "md:right-[5%] md:bottom-[12%] right-4 bottom-4",
    },
    {
      text: "همراهی از ایده تا اجرا",
      icon: <FaLightbulb />,
      position:
        "md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 hidden sm:flex",
    },
  ];
  const whyUs = [
    {
      id: 1,
      icon: FaUsers,
      title: "تیم متخصص",
      description:
        "تیمی متشکل از توسعه‌دهندگان و طراحان حرفه‌ای با تجربه اجرای پروژه‌های متنوع.",
    },

    {
      id: 2,
      icon: FaClock,
      title: "تحویل به‌موقع",
      description:
        "متعهد به زمان‌بندی پروژه و ارائه خروجی باکیفیت در موعد مقرر هستیم.",
    },

    {
      id: 3,
      icon: FaHeadset,
      title: "پشتیبانی دائمی",
      description:
        "پس از تحویل پروژه نیز در کنار شما هستیم و خدمات پشتیبانی ارائه می‌دهیم.",
    },

    {
      id: 4,
      icon: FaShieldAlt,
      title: "امنیت و کیفیت",
      description:
        "رعایت استانداردهای فنی، امنیتی و تضمین کیفیت در تمامی مراحل توسعه.",
    },

    {
      id: 5,
      icon: FaRocket,
      title: "فناوری‌های روز",
      description:
        "استفاده از ابزارها و تکنولوژی‌های مدرن برای ساخت محصولات سریع و مقیاس‌پذیر.",
    },

    {
      id: 6,
      icon: FaLightbulb,
      title: "راهکارهای خلاقانه",
      description:
        "ارائه ایده‌ها و راه‌حل‌های نوآورانه متناسب با نیاز و اهداف کسب‌وکار شما.",
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

  return (
    <div className="relative overflow-hidden">
      {/* background blobs (کنترل شده) */}
      <div className="absolute w-[22rem] h-[22rem] bg-accent/10 blur-3xl top-0 -right-10 pointer-events-none" />
      <div className="absolute w-[40rem] h-[40rem] bg-primary/10 blur-3xl top-[50rem] -left-12 pointer-events-none" />
      <div className="absolute w-[22rem] h-[22rem] bg-accent/10 blur-3xl bottom-0 -left-10 pointer-events-none" />

      <section className="py-12 md:py-20 relative z-10 overflow-hidden">
        <h4 className={`${SectionTitle} tracking-tight`}>
          اعتماد، بزرگ‌ترین سرمایه ما
        </h4>

        <p className="mt-5 md:mt-6 mx-auto w-11/12 md:w-8/12 text-center text-sm md:text-base text-neutral-600 leading-8 md:leading-9">
          ما مفتخریم که طی سال‌ها فعالیت حرفه‌ای، با اجرای ده‌ها پروژه موفق در
          حوزه طراحی و توسعه نرم‌افزار، اعتماد مشتریان خود را به دست آورده‌ایم.
          این اعتماد نتیجه تعهد، کیفیت، شفافیت و همراهی مستمر ما در تمامی مراحل
          همکاری است. امروز افتخار می‌کنیم که بخشی از مسیر رشد کسب‌وکارهای مختلف
          بوده‌ایم و همچنان با انگیزه و مسئولیت‌پذیری در کنار مشتریان خود برای
          خلق راهکارهای نوآورانه و ماندگار قدم برمی‌داریم.
        </p>
        <div
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
            <div
              key={index}
              className={`
                absolute
                ${item.position}

                flex items-center gap-2 md:gap-3
                bg-white/85
                backdrop-blur-xl
                border border-white/40
                shadow-xl md:shadow-2xl

                py-2 md:py-3
                px-3 md:px-5

                rounded-full
                transition-all duration-300

                hover:scale-105 md:hover:scale-110
                cursor-default
                text-xs md:text-sm

                w-fit max-w-[90%]
              `}
            >
              <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white">
                {item.icon}
              </span>

              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
      {/* SERVICES */}
      <section className="mt-30 relative z-10 px-8">
        <div className="flex items-center w-full max-w-full mb-16">
          <div className="w-2 h-2 rounded-full bg-accent shrink-0" />

          <hr className="flex-1 bg-neutral-200 border border-neutral-200" />

          <h2 className="mx-4 text-2xl font-bold whitespace-nowrap">
            خدماتی که ما ارائه می‌دهیم
          </h2>

          <hr className="flex-1 bg-neutral-200 border border-neutral-200" />

          <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-purple-200/40 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-orange-500 flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition">
                {icons[item.id]}
              </div>

              <h2 className="text-lg font-bold text-primary min-h-[50px]">
                {item.title}
              </h2>

              <p className="text-neutral-600 text-sm leading-6">{item.text}</p>
            </article>
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

              <hr className="flex-1 md:flex-[2] lg:flex-[3] h-px bg-neutral-200 border-0" />

              <h2 className="mx-4 text-2xl font-bold whitespace-nowrap">
                چرا مارا انتخاب کنید؟
              </h2>

              <hr className="flex-1 md:flex-[2] lg:flex-[3] h-px bg-neutral-200 border-0" />

              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
            </div>

            <p className="text-neutral-500 mt-4 text-lg leading-8">
              ما فقط یک تیم توسعه نیستیم؛ بلکه شریک رشد و موفقیت کسب‌وکار شما
              هستیم.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            {/* لیست ویژگی‌ها */}
            <div className="space-y-5">
              {whyUs.map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    flex items-start gap-5
                    p-6
                    rounded-3xl
                    bg-white/80
                    backdrop-blur-xl
                    border border-neutral-200
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-2
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
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:bg-primary
                    group-hover:rotate-6
                  "
                  >
                    <item.icon className="text-primary text-2xl group-hover:text-white transition-colors" />
                  </div>

                  {/* متن */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>

                    <p className="text-neutral-500 leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* تصویر */}
            <div className="relative flex justify-center">
              {/* نورهای پس‌زمینه */}
              <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />

              {/* باکس اصلی */}
              <div
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
                <div className="absolute bottom-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">همراه رشد شما</h3>

                  <p className="text-white/90 leading-8">
                    از ایده اولیه تا اجرای نهایی، در کنار شما هستیم.
                  </p>
                </div>
              </div>

              {/* کارت شناور */}

              <div
                className="
                  absolute
                  top-4
                  right-3
                  bg-white
                  rounded-3xl
                  px-6 py-4
                  shadow-2xl
                  border border-neutral-100
                "
              >
                <p className="text-4xl font-black text-primary">+120</p>
                <span className="text-neutral-500">پروژه موفق</span>
              </div>

              <div
                className="
                  absolute
                  md:-bottom-6
                  -bottom-10
                  -left-6
                  bg-white
                  rounded-3xl
                  px-6 py-4
                  shadow-2xl
                  border border-neutral-100
                "
              >
                <p className="text-4xl font-black text-primary">+120</p>
                <span className="text-neutral-500">پروژه موفق</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
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
            bg-gradient-to-l bg-primary/30
            -z-10
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
                bg-gradient-to-l from-primary to-accent
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
              "
        >
          {/* متن */}
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <span
              className="
                px-4 py-2
                rounded-full
                bg-white/20
                text-white text-sm
                backdrop-blur-md
              "
            >
              ✨ طراحی و توسعه اختصاصی
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.6] md:leading-[1.8] text-white tracking-tight">
              کسب‌وکار تو شایسته یک اجرای حرفه‌ای است
            </h2>

            <p className="mt-4 text-base md:text-lg leading-8 md:leading-9 text-white/85 max-w-xl">
              فقط کافی است ایده‌ات را با ما در میان بگذاری؛ بقیه مسیر را با
              اطمینان، خلاقیت و تجربه پیش می‌بریم.
            </p>

            <button
              className="
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
                group-hover:before:animate-ping
                group-hover:before:bg-white/50
                "
            >
              سفارش پروژه
            </button>
          </div>

          {/* تصویر */}
          <div
            className="
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
      </section>
    </div>
  );
};

export default ServicesPage;
