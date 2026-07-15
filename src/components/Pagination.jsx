import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineArticle } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi2";

const Pagination = ({ items, isBlog }) => {
  const [quantity, setQuantity] = useState(10);
  const [value, setValue] = useState("");

  const loaderRef = useRef(null);
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()),
  );
  const content = filteredItems.slice(0, quantity);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && quantity < filteredItems.length) {
        setTimeout(() => {
          setQuantity((prev) => Math.min(prev + 10, filteredItems.length));
        }, 1000);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [quantity, filteredItems.length]);

  const MotionLink = motion(Link);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mt-3 mx-2">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={`${
            isBlog ? "mb-12" : "mb-0"
          } relative w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-12 lg:px-14`}
        >
          {/* Background */}
          <div className="absolute -top-24 -right-20 h-[25rem] w-[25rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-[25rem] w-[25rem] rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.08,
                rotate: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-violet-500 blur-xl opacity-40"></div>

              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 shadow-2xl shadow-violet-500/30">
                {isBlog ? (
                  <MdOutlineArticle className="text-5xl text-white" />
                ) : (
                  <HiOutlineBriefcase className="text-5xl text-white" />
                )}
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 dark:border-violet-700 dark:bg-violet-900/30"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

              <span className="font-semibold text-violet-700 dark:text-violet-300">
                {items.length} مورد منتشر شده
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={item}
              className="mt-7 text-2xl font-black leading-tight text-slate-900 dark:text-white md:text-3xl lg:text-4xl"
            >
              {isBlog
                ? "وبلاگ‌های تخصصی برنامه‌نویسی"
                : "نمونه پروژه‌های اجرا شده"}
            </motion.h2>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-5 h-1 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500"
            />

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-6 max-w-3xl text-base leading-9 text-slate-600 dark:text-slate-400 lg:text-lg"
            >
              {isBlog
                ? "مجموعه‌ای از مقالات تخصصی در زمینه React، JavaScript، طراحی رابط کاربری، تکنولوژی و تجربیات عملی توسعه وب که به شما کمک می‌کند دانش خود را به‌روز نگه دارید."
                : "مجموعه‌ای از پروژه‌های طراحی و توسعه وب که با React، Tailwind CSS و JavaScript پیاده‌سازی شده‌اند و نمایانگر تجربه ما در ساخت رابط‌های کاربری سریع، مدرن و ریسپانسیو هستند."}
            </motion.p>

            {/* Search */}
            {isBlog && (
              <motion.div variants={item} className="mt-8 w-full lg:w-9/12">
                <input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  placeholder="جستجوی مقاله..."
                  className="
            h-14
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            text-slate-700
            
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            focus:scale-[1.02]
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-500/20
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
          "
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3">
        {content.map((item) =>
          isBlog ? (
            <Link to={`/blogPage/${item.id}`} className="group block h-full">
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="
                    h-full overflow-hidden
                    rounded-3xl
                    border border-slate-200
                    dark:border-slate-700
                    bg-white
                    dark:bg-slate-800
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:shadow-violet-500/10
                    hover:border-violet-400
                  "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    h-56
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                  />

                  {/* Overlay */}
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                  />

                  {/* Category */}
                  <span
                    className="
                    absolute
                    top-4
                    right-4
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-slate-800
                  "
                  >
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex h-[150px] lg:h-[200px] flex-col p-2 lg:p-6">
                  {/* Author */}
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{item.author}</span>

                    <span className="rounded-full bg-violet-100 dark:bg-violet-500/20 px-3 py-1 text-xs text-violet-700 dark:text-violet-300">
                      ۵ دقیقه مطالعه
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="
                    line-clamp-1
                    lg:text-xl
                    text-sm
                    font-extrabold
                    text-slate-900
                    dark:text-white
                    transition-colors
                    duration-300
                    group-hover:text-violet-600
                  "
                  >
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                    line-clamp-1
                    text-sm
                    leading-7
                    text-slate-600
                    dark:text-slate-400
                  "
                  >
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className="
                        text-sm
                        font-bold
                        text-violet-600
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      مطالعه مقاله →
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        text-violet-600
                        transition-all
                        duration-300
                        group-hover:bg-violet-600
                        group-hover:text-white
                        rotate-y-180
                      "
                    >
                      →
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ) : (
            <MotionLink
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              to={`/portfolioPage/${item.id}`}
              className="group block h-full"
            >
              <article
                className="
                  h-full overflow-hidden rounded-3xl
                  border border-slate-200 dark:border-slate-700
                  bg-white dark:bg-slate-800
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-violet-400
                  hover:shadow-2xl hover:shadow-violet-500/10
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      h-56 w-full object-cover
                      transition-all duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                    "
                  />

                  {/* Button */}
                  <div
                    className="
                      absolute bottom-5 left-1/2
                      -translate-x-1/2 translate-y-5
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all duration-500
                    "
                  >
                    <span
                      className="
                      rounded-full
                      bg-white/90
                      px-5 py-2
                      text-sm font-bold
                      text-slate-900
                      backdrop-blur-md
                    "
                    >
                      مشاهده پروژه
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2 flex flex-col h-[170px] ">
                
                  {/* Title */}
                  <h3
                    className="
                      text-sm
                      lg:text-lg
                      font-extrabold
                      text-slate-900
                      dark:text-white
                      transition-colors  
                      group-hover:text-violet-600
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      lg:h-14
                      text-slate-600
                      dark:text-slate-400
                      lg:line-clamp-2
                      line-clamp-1
                    "
                  >
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-primary
                        dark:text-primary-dark
                        group-hover:translate-x-1
                        transition-transform
                      "
                    >
                      مشاهده جزئیات →
                    </span>

                    <div
                      className="
                        h-10 w-10
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        flex items-center justify-center
                        text-violet-600
                        transition
                        dark:text-primary-dark
                        group-hover:bg-violet-600
                        group-hover:text-white
                        rotate-y-180
                      "
                    >
                      →
                    </div>
                  </div>
                </div>
              </article>
            </MotionLink>
          ),
        )}
      </div>
      {filteredItems.length === 0 && (
        <div className="col-span-full py-20 text-center text-slate-500">
          موردی پیدا نشد.
        </div>
      )}
      {quantity < items.length && (
        <div ref={loaderRef} className="h-10 bg-red-500">
          در حال بارگذاری...
        </div>
      )}
    </>
  );
};

export default Pagination;
