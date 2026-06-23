import { useState, useEffect } from "react";

const Introduction = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const targets = [180, 275, 30, 56];
  async function getData() {
    try {
      const response = await fetch("/api/images.json");
      if (!response.ok) {
        throw new Error("خطا در دریافت عکس ها");
      }
      const Data = await response.json();
      setImages(Data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => {
        const updated = prev.map((count, index) => {
          if (count >= targets[index]) return count;
          return count + 1;
        });
        const finished = updated.every(
          (count, index) => count >= targets[index],
        );

        if (finished) {
          clearInterval(timer);
        }

        return updated;
      });
    }, 5);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((index) => {
        if (index == images.length - 1) {
          return 0;
        }
        return index + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);

    const t = setTimeout(() => {
      setFade(true);
    }, 50);

    return () => clearTimeout(t);
  }, [currentIndex]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-full rounded-2xl">
      <div className="relative w-full h-[25rem]">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={images[currentIndex]?.url}
        />
      </div>

      <div className="w-11/12 mx-auto -mt-28 bg-white/50 backdrop-blur-sm rounded-2xl py-4">
        <div className="flex justify-evenly items-center gap-20 mt-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className={`w-40 h-40 rounded-2xl bg-white/60 shadow-2xl flex items-center justify-center ${index % 2 === 0 ? "border-t-2 border-purple-500" : "border-b-2 border-orange-500"} `}
            >
              <b className="text-purple-500 text-7xl">{counter}</b>
            </div>
          ))}
        </div>

        <div className="p-10 flex flex-col gap-4">
          <h2 className="text-3xl">سرزمین دانش</h2>
          <p className="text-justify text-xl">
            شرکت «سرزمین دانش» را اگر بخواهیم به‌صورت یک متن معرفی‌گونه توصیف
            کنیم، می‌توان این‌طور نوشت: شرکت سرزمین دانش با هدف توسعه دانش،
            مهارت و فناوری‌های نوین فعالیت خود را در حوزه آموزش و خدمات آموزشی
            آغاز کرده است. این مجموعه تلاش می‌کند با بهره‌گیری از روش‌های نوین
            یادگیری و استفاده از ابزارهای دیجیتال، مسیر آموزش را برای
            دانش‌پذیران ساده‌تر، کاربردی‌تر و جذاب‌تر کند. سرزمین دانش با تمرکز
            بر ارتقای سطح علمی و مهارتی افراد، برنامه‌ها و دوره‌هایی را ارائه
            می‌دهد که بتواند نیازهای آموزشی نسل امروز را پاسخ دهد. این شرکت تلاش
            دارد تا با ایجاد محیطی پویا و خلاق، زمینه رشد فردی و حرفه‌ای را برای
            مخاطبان خود فراهم کند. از مهم‌ترین اهداف این مجموعه می‌توان به
            افزایش دسترسی به آموزش باکیفیت، توسعه مهارت‌های کاربردی و همراهی با
            تحولات دنیای فناوری اشاره کرد. سرزمین دانش می‌کوشد پلی میان دانش
            نظری و کاربرد عملی ایجاد کند تا یادگیری به تجربه‌ای مؤثر و ماندگار
            تبدیل شود.
          </p>

          <div className="flex gap-4 mt-11">
            <button
              className="w-48 h-12 bg-purple-600 relative overflow-hidden text-white rounded-md shadow-xl shadow-purple-500 hover:scale-105 transition-all cursor-pointer
                before:content-['']
                before:absolute
                before:bottom-28
                before:left-44
                before:w-4
                before:h-56
                before:bg-white/20
                before:rotate-45
                before:animate-[shine_2s_ease-in_infinite]"
            >
              مطالعه بیشتر
            </button>
            <button className="w-48 h-12 rounded-md bg-orange-500 text-white shadow-xl shadow-orange-400 hover:scale-105 transition-all cursor-pointer">
              همکاری با ما
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
