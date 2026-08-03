import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineArticle } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi2";
import loadingGif from "../assets/LoadingIcon/Ellipsis@1x-2.8s-200px-200px.gif";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
const MotionLink = motion(Link);

const Pagination = ({ items, isBlog }) => {
  const { t, i18n } = useTranslation();
  const portfolioText = t("portfolioData.items", { returnObjects: true });
  const blogsText = t("blogsData.items", { returnObjects: true });
  const [quantity, setQuantity] = useState(10);
  const [value, setValue] = useState("");
  const loaderRef = useRef(null);

  const blogMap = useMemo(
    () => Object.fromEntries(blogsText.map((item) => [item.id, item])),
    [blogsText],
  );

  useEffect(() => {
    setQuantity(10);
  }, [value]);

  const portfolioMap = useMemo(
    () => Object.fromEntries(portfolioText.map((item) => [item.id, item])),
    [portfolioText],
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const title = isBlog
        ? blogMap[item.id]?.title
        : portfolioMap[item.id]?.title;

      const searchValue = value.toLocaleLowerCase();
      return title?.toLowerCase().includes(searchValue);
    });
  }, [items, value, isBlog, blogMap, portfolioMap]);

  const content = filteredItems.slice(0, quantity);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && quantity < filteredItems.length) {
        const timeout = setTimeout(() => {
          setQuantity((prev) => Math.min(prev + 10, filteredItems.length));
        }, 1000);
        return () => clearTimeout(timeout);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [quantity, filteredItems.length]);

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

              <span className="font-semibold mx-2 text-primary dark:text-violet-300">
                <span className="mx-1">{items.length}</span>
                {t("pagination.published")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={item}
              className="mt-7 text-2xl font-black leading-tight text-slate-900 dark:text-white md:text-3xl lg:text-4xl"
            >
              {isBlog
                ? t("pagination.blog.title")
                : t("pagination.portfolio.title")}
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
              className="mt-6 max-w-3xl text-base text-slate-600 dark:text-slate-400 text-center lg:text-lg"
            >
              {isBlog
                ? t("pagination.blog.description")
                : t("pagination.portfolio.description")}
            </motion.p>

            {/* Search */}
            {isBlog && (
              <motion.div variants={item} className="mt-8 w-full lg:w-9/12">
                <input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  placeholder={t("pagination.blog.searchPlaceholder")}
                  className="
                  
                    h-14
                    w-full
                    rounded-2xl
                    border
                  border-slate-200
                  bg-white
                   xl:bg-primary/10
                    px-6
                  text-slate-700 
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:scale-[1.02]
                    focus:border-primary
                    dark:focus:border-primary-dark
                    focus:ring-4
                    focus:ring-violet-500/20
                    dark:border-slate-700
                    dark:bg-bg-dark
                    dark:text-text-dark
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
            <Link
              key={item.id}
              to={`/blogPage/${item.id}`}
              className="group block h-full"
            >
              <motion.article
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
                    loading="lazy"
                    decoding="async"
                    src={blogMap[item.id]?.img}
                    alt={item.title}
                    className="
                    h-40
                    lg:h-56
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                  />
                
                </div>

                {/* Content */}
                <div className="flex h-[150px] lg:h-[200px] flex-col p-2 lg:p-6">
                  {/* Author */}
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{blogMap?.[item.id]?.author}</span>

                    <span className="rounded-full bg-violet-100 dark:bg-violet-500/20 px-3 py-1 text-xs text-primary dark:text-violet-300">
                      {t("pagination.blog.readTime")}
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
                    <span>{blogMap?.[item.id]?.title}</span>
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
                    {blogMap?.[item.id]?.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className="
                        text-sm
                        font-bold
                        text-primary
                        dark:text-primary-dark
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {blogMap[item.id]?.readMore}
                    </span>

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        text-primary
                        transition-all
                        duration-300
                        group-hover:bg-violet-600
                        group-hover:text-white
                       ${i18n.language === "fa" ? " rotate-y-180" : " rotate-y-0"}
                      `}
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
                      h-56
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
                      {portfolioMap[item.id]?.readMore}
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
                      group-hover:text-primary 
                      group-hover:dark:text-primary-dark
                    "
                  >
                    {portfolioMap[item.id]?.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-sm
                      lg:h-14
                      text-slate-600
                      dark:text-slate-400
                      line-clamp-2
                     
                    "
                  >
                    {portfolioMap[item.id]?.description}
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
                      {portfolioMap[item.id]?.readMore}
                    </span>

                    <div
                      className={`h-10 w-10
                        rounded-full
                        bg-violet-100
                        dark:bg-violet-500/20
                        flex items-center justify-center
                        text-primary
                        transition
                        dark:text-primary-dark
                        group-hover:bg-violet-600
                        group-hover:text-white
                        ${i18n.language === "fa" ? "rotate-y-180" : "rotate-y-0"}`}
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
          {t("pagination.notFound")}
        </div>
      )}
      {quantity < filteredItems.length && (
        <div
          ref={loaderRef}
          className="flex justify-center items-center w-full"
        >
          <img src={loadingGif} alt="Loading..." className="w-20 lg:w-28" />
        </div>
      )}
    </>
  );
};

export default Pagination;
