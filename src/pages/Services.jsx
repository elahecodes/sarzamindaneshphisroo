import softIcon from "/projects/SarzaminDaneshPishroo/src/assets/icons/soft.png";
import smartHomeIcon from "/projects/SarzaminDaneshPishroo/src/assets/icons/smartHome.png";
import hardwareIcon from "/projects/SarzaminDaneshPishroo/src/assets/icons/mouse.png";
import robotIcon from "/projects/SarzaminDaneshPishroo/src/assets/icons/robot.png";
const Services = () => {
  const data = [
    {
      id: 1,
      icon: robotIcon,
      description:
        "ربات‌های صنعتی دستگاه‌های خودکار برای انجام وظایف کارخانه‌ای هستند.",
      title: "ربات های صنعتی",
    },
    {
      id: 2,
      icon: smartHomeIcon,
      description:
        "خانه‌های هوشمند با دستگاه‌های متصل، امکانات کنترل و اتوماسیون را فراهم می‌کنند.",
      title: "خانه های هوشمند",
    },
    {
      id: 3,
      icon: hardwareIcon,
      description:
        "سیستم‌های سخت‌افزاری شامل اجزای فیزیکی و قابل لمس یک دستگاه هستند.",
      title: "سیستم های سخت افزاری",
    },
    {
      id: 4,
      icon: softIcon,
      description:
        "سامانه‌های نرم‌افزاری برنامه‌هایی برای اجرای وظایف و مدیریت داده‌ها هستند.",
      title: "سامانه های نرم افزاری",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-8 relative mt-56">
      <div className="z-30 grid grid-cols-2 lg:grid-cols-4 gap-20">
        {data.map((box, Index) => {
          return (
            <div
              className={`${
                Index % 2 === 0
                  ? "bg-purple-800/50 shadow-purple-400 text-white sm:translate-y-10"
                  : "bg-white/20 border-t-2 border-t-purple-400 text-neutral-800"
              } rounded-2xl h-[23rem] backdrop-blur-sm hover:scale-105 origin-center box cursor-pointer shadow-xl transition-all p-2 flex flex-col justify-center items-center gap-8`}
            >
              <img className="w-16 animate-pulse" src={box.icon} alt="" />

              <h4 className="text-2xl font-bold">{box.title}</h4>

              <p className="text-lg px-4 leading-relaxed text-center">
                {box.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="relative -top-[32rem] w-11/12 mx-auto h-52 rounded-2xl bg-white/60 flex justify-between items-start p-4 overflow-hidden shadow-lg">
        <h2 className="text-4xl mr-6 font-bold z-10">خدمات</h2>
        <span
          className="
            relative
            inline-block
            bg-orange-500
            shadow-lg 
            shadow-orange-400
            px-4 
            py-3
            text-xl
            rounded-xl
            text-white
            cursor-pointer
            before:content-['']
            before:absolute
            before:top-0
            before:left-0
            before:animate-pulse
          "
        >
          برای کسب اطلاعات بیشتر کلیک کنید
        </span>
      </div>
    </div>
  );
};

export default Services;
