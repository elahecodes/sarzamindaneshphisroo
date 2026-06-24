import goal from "/src/assets/icons/goal.png";
import steps from "/src/assets/icons/location.png";
const Steps = () => {
  const colors = [
    "bg-purple-500 text-white",
    "bg-purple-400 text-white",
    "bg-purple-500 text-white",
    "bg-purple-400 text-white",
    "bg-purple-400 text-white",
  ];

  const steps = [
    {
      id: 1,
      title: "شروع همکاری",
      description:
        "درخواست پروژه ثبت شده و اهداف، امکانات و انتظارات به‌طور کامل بررسی می‌شوند.",
    },
    {
      id: 2,
      title: "بررسی و تحلیل",
      description:
        "ساختار پروژه، نیازهای فنی و تجربه کاربری برای دستیابی به بهترین نتیجه تحلیل می‌شوند.",
    },
    {
      id: 3,
      title: "توافق و برنامه‌ریزی",
      description:
        "زمان‌بندی، هزینه و مراحل اجرا مشخص شده و پس از تایید، پروژه وارد فاز عملیاتی می‌شود.",
    },
    {
      id: 4,
      title: "طراحی و پیاده‌سازی",
      description:
        "فرآیند طراحی رابط کاربری و توسعه بخش‌های مختلف پروژه با دقت و استانداردهای روز انجام می‌شود.",
    },
    {
      id: 5,
      title: "تحویل نهایی",
      description:
        "پروژه پس از تست و بررسی کامل تحویل داده شده و پشتیبانی لازم ارائه می‌شود.",
    },
  ];
  return (
    <section className="bg-neutral-50 pb-16 flex flex-col justify-center items-start gap-20 p-[24px]">
      <div className="flex justify-center items-center w-full">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <hr className="border w-[40%] border-neutral-200" />
        <h2 className="text-2xl text-center font-bold mx-4">
          فرایند <span className="text-primary">همکاری</span> با ما
        </h2>
        <hr className="border w-[40%] border-neutral-200" />
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
      <div className="w-[90%] mx-auto relative">
        {/* خط وسط */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-200 -translate-y-1/2"></div>

        <ul className="grid grid-cols-5 gap-6 relative">
          {steps.map((item, index) => {
            const isTop = index % 2 === 0;

            return (
              <li
                key={item.id}
                className={`relative flex flex-col items-center ${
                  isTop ? "-translate-y-10" : "translate-y-10"
                }`}
              >
                {/* دایره شماره */}
                <div
                  className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center font-bold z-10 ${colors[index]}`}
                >
                  {item.id}
                </div>

                {/* کارت */}
                <div className="mt-6 bg-white border border-neutral-200 rounded-xl p-4  hover:shadow-md transition-all h-[14rem] w-[14rem] flex flex-col gap-3">
                  <h3 className="font-bold text-neutral-800 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-6 text-center">
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
