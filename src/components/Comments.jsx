import { useEffect, useRef } from "react";
import chatIcon from "../assets/icons/chat.png";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const marqueeRef = useRef(null);
  const { t, i18n } = useTranslation();
  const commentTexts = t("comments.items", { returnObjects: true });

  // تنظیم عرض برای مارکی
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const updateWidth = () => {
      const totalWidth = el.scrollWidth / 2;
      i18n.language === "fa" ? el.style.setProperty("--marquee-width", `${totalWidth}px`) : 
      el.style.setProperty("--marquee-width", `${-totalWidth}px`) 
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [commentTexts]);

  return (
    <section className="overflow-hidden relative py-20 bg-white dark:bg-[#1E293B] px-[16px]">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="mb-20 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <hr className="flex-1 border-neutral-300 dark:border-[#334155]" />
          {i18n.language === "fa" ? (
            <h2 className="mx-2 md:mx-5 text-center text-2xl lg:text-3xl dark:text-[#F8FAFC] md:text-3xl font-title text-text">
              <span className="text-primary"> تجربه همکاری</span> با ما
            </h2>
          ) : (
            <h2 className="mx-2 md:mx-5 text-center text-2xl lg:text-3xl dark:text-[#F8FAFC] md:text-3xl font-title text-text">
              <span className="text-primary">Experience Working</span> With Us
            </h2>
          )}

          <hr className="flex-1 border-neutral-300 dark:border-[#334155]" />
          <div className="h-2 w-2 rounded-full bg-accent" />
        </div>

        <p className="text-text dark:text-text-dark lg:text-xl mt-3">
          {i18n.language === "fa"
            ? " بخشی از دیدگاه کارفرمایانی که به ما اعتماد کرده‌اند"
            : "Hear what our clients have to say about working with us"}
        </p>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="flex w-max gap-6 animate-marquee">
        {[...commentTexts, ...commentTexts].map((item, index) => {
          return (
            <div
              key={index}
              className="group relative w-[360px] shrink-0 rounded-2xl dark:border-[#334155] dark:from-[#334155] dark:to-[#1E293B] bg-gradient-to-br from-white to-violet-50 border border-violet-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <img
                src={chatIcon}
                alt=""
                className="absolute left-5 top-5 w-12 opacity-30"
              />

              {/* User */}
              <div className="flex items-center gap-4 mb-5">
                {" "}
                <img
                  src={item.avatar}
                  alt={item.fullName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-bold text-neutral-800 dark:text-[#F8FAFC]">
                    {item.fullName}
                  </h3>

                  <span className="text-sm text-primary">{item.position}</span>
                </div>
              </div>

              {/* Review */}
              <p className="text-neutral-600 dark:text-[#94A3B8] text-sm leading-7 line-clamp-4">
                {item.review}
              </p>

              {/* Stars */}
              <div className="mt-5 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
