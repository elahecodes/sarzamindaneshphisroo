import projectIcon from "../assets/icons/project.png";
const Workingwhitus = () => {
  const card = [
    {
      id: 1,
      icon: projectIcon,
      title: "سفارش پروژه",

      description:
        "اگر برای کسب‌وکار یا استارتاپ خود به یک وب‌سایت حرفه‌ای نیاز داری، خوشحال می‌شویم در مسیر طراحی و توسعه کنارت باشیم.",
    },
    {
      id: 2,
      title: "همکاری با ما",
      description:
        "ما همیشه به دنبال افراد خلاق و باانگیزه برای همکاری در پروژه‌های طراحی و توسعه هستیم.اگر اهل کار تیمی و رشد در پروژه‌های واقعی هستید، مشتاق همکاری با شما هستیم.",
    },
  ];
  return (
    <section className="grid grid-cols-2 gap-4">
      {card.map((card, index) => {
        const iszooj = index % 2 === 0;
        return (
          <div
            className={`h-56 flex px-10 justify-between items-center rounded-md cursor-pointer hover:scale-105 duration-500 ${iszooj ? "bg-pink-100" : "bg-amber-100"}`}
          >
            <div className="flex flex-col justify-center item-start gap-6">
              <span className="text-2xl text-neutral-700 font-bold">
                {card.title}
              </span>
              <p className="text-neutral-800">{card.description}</p>
            </div>
            <img className="w-32" src={card.icon} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default Workingwhitus;

//   it('should first', () => { second })
