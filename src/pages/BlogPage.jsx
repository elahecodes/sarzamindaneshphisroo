import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogsContext } from "../context/DataOfBlogsContext";
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
  FaTag,
} from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

import { FaXTwitter } from "react-icons/fa6";

const BlogPage = () => {
  const { blogs } = useContext(BlogsContext);
  const { id } = useParams();

  const item = blogs.find((blog) => blog.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        مقاله پیدا نشد!
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter((blog) => blog.category === item.category && blog.id !== item.id)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 dark:bg-bg-dark min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-violet-600 dark:text-secondary-text">
            خانه
          </Link>

          <span>/</span>

          <Link to="/blogs" className="hover:text-violet-600 dark:text-secondary-text">
            وبلاگ
          </Link>

          <span>/</span>

          <span className="text-gray-700 dark:text-text-dark">{item.title}</span>
        </div>

        {/* Hero */}

        <div className="relative overflow-hidden rounded-[32px] shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-12 right-12 text-white max-w-4xl">
            <span className="bg-violet-600 px-5 py-2 rounded-full text-sm font-medium">
              {item.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mt-6">
              {item.title}
            </h1>
          </div>
        </div>

        {/* Content */}

        <div className="bg-white dark:bg-surface rounded-[32px] shadow-lg mt-10 p-8 md:p-12">
          {/* Meta */}

          <div className="flex flex-wrap gap-6 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <FaUser className="text-violet-600" />
              <span className="dark:text-secondary-text">{item.author}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="text-violet-600" />
              <span className="dark:text-secondary-text">{item.date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-violet-600" />
              <span className="dark:text-secondary-text">{item.readTime}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaEye className="text-violet-600" />
              <span className="dark:text-secondary-text">
                {item.views} بازدید
              </span>
            </div>
          </div>

          {/* Author Card */}

          <div className="bg-violet-50 dark:bg-bg-dark rounded-2xl p-6 mt-10 flex items-center flex-col gap-4">
            <div className="flex justify-start w-full items-center gap-4">
              <div className="lg:w-16 w-12 h-12 lg:h-16 min-w-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-2xl font-bold">
                {item.author?.charAt(0)}
              </div>
              <h3 className="dark:text-text-dark font-bold text-lg sm:text-xl text-gray-800 truncate">
                {item.author}
              </h3>
            </div>
          <p className="text-sm dark:text-text-dark sm:text-base text-gray-600 mt-2 leading-7">
            نویسنده و تولیدکننده محتوای تخصصی در حوزه برنامه‌نویسی و توسعه وب.
          </p>
          </div>

          {/* Article */}

          <article className="mt-12">
            <div className="space-y-8 text-lg leading-[2.4] text-gray-700">
              {item.description.split("\n\n").map((paragraph, index) => (
                <p className="dark:text-text-dark" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Tags */}

          <div className="mt-14 border-t border-border pt-8">
            <h3 className="flex items-center gap-2 text-lg lg:text-xl dark:text-text-dark font-bold mb-6">
              <FaTag className="text-violet-600" />
              تگ‌ها
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                item.category,
                "برنامه‌نویسی",
                "توسعه وب",
                "React",
                "JavaScript",
                "فرانت‌اند",
              ].map((tag, index) => (
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

          <div className="mt-12 border-t border-border pt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-red-50 text-red-500 px-5 py-3 rounded-xl hover:scale-105 transition">
              <FaHeart />
              پسندیدم
            </button>

            <button className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-5 py-3 rounded-xl hover:scale-105 transition">
              <FaBookmark />
              ذخیره مقاله
            </button>
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <h3 className="font-bold dark:text-text-dark text-lg lg:text-xl mb-6">
              اشتراک‌گذاری مقاله
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-4">
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
            <div className="mt-20 border-t border-border pt-12">
              <h2 className="flex items-center gap-3 text-lg lg:text-xl dark:text-text-dark font-bold mb-8">
                <MdOutlineArticle className="text-violet-600 text-4xl" />
                مقالات مرتبط
              </h2>

              <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto hide-scrollbar md:overflow-visible pb-4 snap-x snap-mandatory">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blogs/${blog.id}`}
                    className="min-w-[230px] sm:min-w-[340px] md:min-w-0 bg-primary-light dark:border-border-dark dark:bg-bg-dark rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300 snap-start flex-shrink-0"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover"
                    />

                    <div className="p-5">
                      <span className="text-violet-600 text-sm font-medium">
                        {blog.category}
                      </span>

                      <h3 className="font-bold dark:text-text-dark text-lg mt-3 line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* اطلاعات مقاله */}
                      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-violet-500" />
                          <span>{blog.publishDate}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <FaClock className="text-violet-500" />
                          <span>{blog.readTime}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <FaEye className="text-violet-500" />
                          <span>{blog.views}</span>
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
              className="inline-flex items-center gap-3 bg-violet-600 text-white px-7 py-4 rounded-xl hover:bg-violet-700 transition"
            >
              <FaArrowRight />
              بازگشت به وبلاگ‌ها
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
