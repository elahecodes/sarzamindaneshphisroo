import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaTelegramPlane,
  FaWhatsapp,
  FaArrowRight,
  FaHeart,
  FaBookmark,
  FaShareAlt,
  FaUserEdit,
  FaTag,
} from "react-icons/fa";
import { FaXTwitter, FaBookOpen } from "react-icons/fa6";

const BlogPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const BlogsText =
    t("blogsData.items", { returnObjects: true, defaultValue: [] }) || [];
  console.log(BlogsText[2].img);

  const item = BlogsText.find((blog) => blog.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        {t("blogPage.notFound")}
      </div>
    );
  }
  const Tags = t("blogPage.defaultTags", {
    returnObjects: true,
    defaultValue: [],
  });

  const relatedBlogs = BlogsText.filter(
    (blog) => blog.category === item.category && blog.id !== item.id,
  ).slice(0, 6);

  return (
    <section className="bg-slate-50 dark:bg-bg-dark min-h-screen py-12">
      <div className="max-w-[1440px] mx-auto px-5">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link
            to="/"
            className="hover:text-violet-600 dark:text-secondary-text"
          >
            {t("blogPage.home")}
          </Link>

          <span>/</span>

          <Link
            to="/blogs"
            className="hover:text-violet-600 dark:text-secondary-text"
          >
            {t("blogPage.blogs")}
          </Link>

          <span>/</span>

          <span className="text-gray-700 font-bold dark:text-text-dark">
            {item.title}
          </span>
        </div>

        {/* Hero */}

        <div className="relative overflow-hidden rounded-[32px] shadow-xl">
          <img
            loading="lazy"
            decoding="async"
            src={item.img}
            alt={item.title}
            className="w-full md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div
            className={`absolute bottom-12 text-white max-w-4xl ${i18n.language === "fa" ? "right-12" : "left-12"}`}
          >
            <span className=" bg-primary dark:bg-primary-dark px-5 py-2 rounded-full text-sm font-medium">
              {item.category}
            </span>

            <h1 className="text-xl text-start lg:text-2xl xl:text-3xl font-bold mt-6">
              {item.title}
            </h1>
          </div>
        </div>
        {/* Content */}

        <div className="bg-white dark:bg-surface rounded-[32px] shadow-lg mt-10 p-8 md:p-12">
          {/* Meta */}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-start lg:items-center lg:gap-10 gap-6 border-b border-gray-200 dark:border-neutral-600 pb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <FaUser className="text-primary dark:text-primary-dark" />
              <span className="dark:text-secondary-text">{item.author}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="text-primary dark:text-primary-dark" />
              <span className="dark:text-secondary-text">{item.date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-primary dark:text-primary-dark" />
              <span className="dark:text-secondary-text">{item.readTime}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaEye className="text-primary dark:text-primary-dark" />
              <span className="dark:text-secondary-text">
                {item.views} <span>{item.viewsWord}</span>
              </span>
            </div>
          </div>

          {/* Author Card */}

          <div
            className="relative overflow-hidden bg-gradient-to-r from-violet-50 via-fuchsia-50 to-indigo-50
              dark:from-[#2a1f4a] dark:via-[#32224f] dark:to-[#1e2a4a]
              border border-violet-100 dark:border-border-dark
              rounded-2xl p-3 lg:p-6 mt-10"
          >
            {/* Decorative Icon */}
            <FaUserEdit
              className={`absolute top-5 text-6xl text-violet-600/10 dark:text-violet-400/10 ${
                i18n.language === "fa" ? "left-6" : "right-6"
              }`}
            />

            <div className="flex items-start flex-col gap-2 lg:gap-4 relative z-10">
              <div className="flex items-center justify-start gap-3">
                <div className="lg:w-16 md:w-12 md:h-12 lg:h-16 min-w-8 min-h-8 rounded-full bg-primary dark:bg-primary-dark text-white flex items-center justify-center lg:text-2xl font-bold">
                  {item.author?.charAt(0) ?? "نویسنده"}
                </div>

                <h3 className="font-bold text-lg dark:text-text-dark">
                  {item.author}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-secondary-text mt-2">
                {t("blogPage.position")}
              </p>
            </div>
          </div>

          {/* Article */}

          <article className="mt-12">
            <div className="space-y-8 lg:text-lg leading-[1.8] text-gray-700">
              <p className="dark:text-text-dark">{item.description}</p>
            </div>
          </article>

          {/* Tags */}

          <div className="mt-14 border-t border-border dark:border-neutral-600 pt-8">
            <h3 className="flex items-center gap-2 text-lg lg:text-xl dark:text-text-dark font-bold mb-6">
              <FaTag className="text-primary dark:text-primary-dark" />
              {t("blogPage.tags")}
            </h3>

            <div className="flex flex-wrap gap-3">
              {Tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 px-4 py-2 text-sm sm:text-base font-medium text-violet-700 border border-violet-200 transition-all duration-300 hover:from-violet-600 hover:to-fuchsia-600 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                >
                  <FaTag className="text-xs" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}

          <div className="mt-12 border-t border-border dark:border-neutral-600 pt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-red-50 text-red-500 px-5 py-3 rounded-xl hover:scale-105 transition">
              <FaHeart />
              {t("blogPage.like")}
            </button>

            <button className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-5 py-3 rounded-xl hover:scale-105 transition">
              <FaBookmark />
              {t("blogPage.save")}
            </button>
          </div>

          <div className="mt-14 pt-8">
            <h3 className="flex items-center gap-2 font-bold dark:text-text-dark text-lg lg:text-xl mb-6">
              <FaShareAlt className="text-primary dark:text-primary-dark text-xl" />
              {t("blogPage.share")}
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-4 dark:bg-bg-dark dark:bg-bg-dark/0 py-6 rounded-xl">
              <button
                className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl shadow-md hover:scale-110 hover:shadow-lg transition duration-300"
                aria-label="اشتراک در تلگرام"
              >
                <FaTelegramPlane />
              </button>

              <button
                className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl shadow-md hover:scale-110 hover:shadow-lg transition duration-300"
                aria-label="اشتراک در X"
              >
                <FaXTwitter />
              </button>

              <button
                className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center text-2xl shadow-md hover:scale-110 hover:shadow-lg transition duration-300"
                aria-label="اشتراک در واتساپ"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>

          {/* Related Blogs */}

          {relatedBlogs.length > 0 && (
            <div className="mt-8 pt-12">
              <h2 className="flex items-center gap-3 text-lg lg:text-xl dark:text-text-dark font-bold mb-8">
                <FaBookOpen className="text-primary dark:text-primary text-xl" />
                {t("blogPage.relatedBlogs")}
              </h2>

              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto hide-scrollbar md:overflow-visible pb-4 snap-x snap-mandatory">
                {relatedBlogs.map((blog) => (
                  <Link key={blog.id} to={`/blogPage/${blog.id}`}>
                    <div className="min-w-[200px] sm:min-w-[240px] md:min-w-none bg-primary-light dark:border-border-dark dark:bg-bg-dark rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300 snap-start flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-52 object-cover"
                      />

                      <div className="p-5">
                        <span className="text-primary dark:text-primary-dark text-sm font-medium">
                          {blog.category}
                        </span>

                        <h3 className="font-bold dark:text-text-dark line-clamp-1 text-lg mt-3">
                          {blog.title}
                        </h3>

                        {/* اطلاعات مقاله */}
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <FaClock className="text-primary dark:text-primary-dark" />
                            <span>{blog.readTime}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <FaEye className="text-primary dark:text-primary-dark" />
                            <span>{blog.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}

          <div className="mt-16">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-3 bg-primary dark:bg-primary-dark text-white px-7 py-4 rounded-xl hover:bg-violet-700 transition"
            >
              <FaArrowRight
                className={`${i18n.language === "fa" ? "rotate-y-0" : "rotate-y-180"}`}
              />
              {t("blogPage.back")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
