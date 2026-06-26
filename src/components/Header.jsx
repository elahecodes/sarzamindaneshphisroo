import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaMoon } from "react-icons/fa";
import logo from "/src/assets/logo/Levels 1.png";
import {
  FaHome,
  FaCogs,
  FaBlog,
  FaQuestionCircle,
  FaUsers,
  FaPhoneAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    title: "صفحه اصلی",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "خدمات",
    path: "/services",
    icon: <FaCogs />,
  },
  {
    title: "نمونه کارها",
    path: "/portfolio",
    icon: <FaProjectDiagram />,
  },
  {
    title: "درباره ما",
    path: "/about",
    icon: <FaUsers />,
  },
  {
    title: "وبلاگ‌ها",
    path: "/blogs",
    icon: <FaBlog />,
  },
  {
    title: "سوالات متداول",
    path: "/question",
    icon: <FaQuestionCircle />,
  },
  {
    title: "تماس با ما",
    path: "/contact",
    icon: <FaPhoneAlt />,
  },
  {
    title: "درخواست پروژه",
    path: "/request",
    icon: <FaEnvelope />,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="w-full max-w-[1600px] mx-auto h-20 px-3 md:px-6 flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-4 lg:gap-10">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 md:w-40 lg:w-44 object-contain"
          />
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              <li className="bg-primary-soft w-full h-14 flex justify-start items-center">
                <Link
                  to="/home"
                  className="text-primary hover:bg-white/20 p-2 rounded-md transition-all duration-300"
                >
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-white hover:bg-white/20 p-2 rounded-md transition-all duration-300"
                >
                  خدمات
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="text-white hover:bg-white/20 p-2 rounded-md transition-all duration-300"
                >
                  وبلاگ‌ها
                </Link>
              </li>

              <li>
                <Link
                  to="/question"
                  className="text-white hover:bg-white/20 p-2 rounded-md transition-all duration-300"
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language */}
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/30 flex items-center justify-center hover:scale-105 transition">
            <span className="fi fi-us"></span>
          </button>

          {/* Dark Mode */}
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/30 text-white flex items-center justify-center hover:scale-105 transition">
            <FaMoon />
          </button>

          {/* Login */}
          <button className="hidden cursor-pointer sm:flex h-10 md:h-12 px-4 md:px-5 items-center gap-2 rounded-lg bg-white text-primary shadow-lg hover:scale-105 transition">
            <FaUser className="text-lg" />
            <span className="text-sm md:text-base">ورود | ثبت نام</span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden cursor-pointer w-10 h-10 md:w-12 md:h-12 text-xl text-white bg-white/20 rounded-md flex items-center justify-center"
          >
            <FaBars />
          </button>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
          <nav
            className={`
    fixed top-0 right-0
    w-[80%] max-w-sm h-dvh
    bg-bg shadow-2xl z-50
    transition-transform duration-500 ease-in-out
    lg:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
          >
            {/* Header */}
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral-200">
              <img
                className="w-16 object-contain"
                src={logo}
                alt="Company Logo"
              />

              <button
                onClick={() => setIsOpen(false)}
                className="
        w-10 h-10
        rounded-full
        flex justify-center items-center
        cursor-pointer
        bg-primary/10
        text-primary
        shadow-sm
        hover:bg-primary
        hover:text-white
        hover:scale-105
        transition-all
        duration-300
      "
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-3 py-6">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className="
                    bg-white
                    border border-neutral-100
                    w-11/12 mx-auto
                    rounded-xl
                    h-14
                    overflow-hidden
                    hover:border-primary
                    hover:bg-primary/5
                    transition-all
                    duration-300
                  "
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 h-full px-4 text-text"
                  >
                    <span className="text-primary text-lg">{item.icon}</span>

                    <span className="font-medium">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
