import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import logo from "/src/assets/logo/Levels 1.png";
import logo2 from "/src/assets/logo/لوگو سربرگ3.png";
import logoEn from "/src/assets/logo/LogoEn.png";
import logoEnPhone from "/src/assets/logo/LogoEnPhone.png";

import {
  FaUser,
  FaBars,
  FaMoon,
  FaHome,
  FaBlog,
  FaUsers,
  FaPhoneAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    title: "navbar.home",
    path: "/home",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "navbar.portfolio",
    path: "/portfolio",
    icon: <FaProjectDiagram />,
  },
  {
    id: 3,
    title: "navbar.aboutus",
    path: "/aboutus",
    icon: <FaUsers />,
  },
  {
    id: 4,
    title: "navbar.blogs",
    path: "/blogs",
    icon: <FaBlog />,
  },
  {
    id: 5,
    title: "navbar.contact",
    path: "/contact",
    icon: <FaPhoneAlt />,
  },
  {
    id: 6,
    title: "navbar.projectorder",
    path: "/projectorder",
    icon: <FaEnvelope />,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggle } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-primary dark:bg-[#8B5CF6] shadow-md">
      <div className="w-full  max-w-[1440px] mx-auto h-20 px-3 flex flex-row-reverse lg:flex-row items-center justify-between">
        {/* Logo & Desktop Menu */}
        <div className="flex items-center gap-4 lg:gap-10">
          {i18n.language === "fa" ? (
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 object-contain"
            />
          ) : (
            <img className="w-32 object-contain" src={logoEn} />
          )}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2 md:gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-2 hover:bg-white/20 hover:p-2 rounded-md transition-all duration-300"
                >
                  <span className="text-white text-sm hidden xl:block">
                    {item.icon}
                  </span>

                  <Link className="text-white text-sm" to={item.path}>
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
          >
            <FaBars />
          </button>
          {/* Language */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")
            }
            className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/30 flex items-center justify-center hover:scale-105 transition"
          >
            <span
              className={`fi ${i18n.language === "fa" ? "fi-us" : "fi-ir"}`}
            ></span>
          </button>

          {/* Dark Mode */}
          <button
            onClick={toggle}
            className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/30 text-white flex items-center justify-center hover:scale-105 transition"
          >
            <FaMoon />
          </button>

          {/* Login Desktop */}
          <Link to="/login">
            <button className="hidden lg:flex h-10 md:h-12 px-4 md:px-5 items-center gap-2 rounded-lg bg-white text-primary shadow-lg hover:scale-105 transition cursor-pointer">
              <FaUser className="text-lg" />

              <span className="text-sm md:text-base hidden xl:block">
                {t("navbar.loginSignup")}
              </span>
            </button>
          </Link>

          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <nav
            className={`fixed top-0 h-dvh w-[80%] max-w-sm
              overflow-y-auto overscroll-contain
              bg-bg dark:bg-[#0F172A]
              shadow-2xl z-50 transition-transform opacity-0 duration-500 lg:hidden
              ${i18n.language === "fa" ? "right-0" : "left-0"}
              ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : i18n.language === "fa"
                    ? "translate-x-full"
                    : "-translate-x-full"
              }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-neutral-200 dark:border-[#334155]">
              {i18n.language === "fa" ? (
                <img
                  src={logo2}
                  alt="Company Logo"
                  className="w-32 object-contain"
                />
              ) : (
                <img
                  src={logoEnPhone}
                  alt="Company Logo"
                  className="w-32 object-contain"
                />
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 dark:bg-primary/30 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaTimes className="dark:text-[#8B5CF6]" />
              </button>
            </div>

            <ul className="flex flex-col gap-3 py-6">
              {" "}
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="bg-white dark:bg-[#334155] border border-neutral-100 dark:border-[#334155] w-11/12 mx-auto rounded-xl h-14 overflow-hidden hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 h-full px-4 text-text"
                  >
                    <span className="text-primary dark:text-[#8B5CF6] text-lg">
                      {item.icon}
                    </span>

                    <span className="font-medium dark:text-[#F8FAFC]">
                      {t(item.title)}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="w-11/12 mx-auto">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary dark:bg-[#8B5CF6] text-white shadow-lg hover:scale-105 transition cursor-pointer">
                    <FaUser className="text-lg" />

                    <span className="text-sm md:text-base">
                      {t("navbar.loginSignup")}
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
