import { useState, useEffect, useRef } from "react";
import chatIcon from "../assets/icons/chat.png";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const marqueeRef = useRef(null);

  async function getData() {
    try {
      const response = await fetch("/api/comments.json");

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // تنظیم عرض برای مارکی
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const updateWidth = () => {
      const totalWidth = el.scrollWidth / 2;
      el.style.setProperty("--marquee-width", `${totalWidth}px`);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [comments]);

  return (
    <section className="overflow-hidden relative py-20 bg-white px-[16px]">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="mb-20 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <hr className="flex-1 border-neutral-300" />
          <h2 className="mx-5 text-center text-2xl md:text-3xl font-bold text-neutral-900">
             <span className="text-primary"> تجربه همکاری</span> با ما
          </h2>
          <hr className="flex-1 border-neutral-300" />
          <div className="h-2 w-2 rounded-full bg-accent" />
        </div>

        <p className="text-neutral-500 mt-3">
          بخشی از دیدگاه کارفرمایانی که به ما اعتماد کرده‌اند
        </p>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="flex w-max gap-6 animate-marquee">
        {[...comments, ...comments].map((item, index) => (
          <div
            key={index}
            className="group relative w-[360px] shrink-0 rounded-2xl bg-gradient-to-br from-white to-violet-50 border border-violet-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Quote Icon */}
            <img
              src={chatIcon}
              alt=""
              className="absolute left-5 top-5 w-12 opacity-60"
            />

            {/* User */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={item.avatar}
                alt={item.fullName}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
              />

              <div>
                <h3 className="font-bold text-neutral-800">{item.fullName}</h3>

                <span className="text-sm text-primary">کارفرما</span>
              </div>
            </div>

            {/* Review */}
            <p className="text-neutral-600 text-sm leading-7 line-clamp-4">
              {item.review}
            </p>

            {/* Stars */}
            <div className="mt-5 flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
