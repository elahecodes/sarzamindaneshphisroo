import {
  FaInstagramSquare,
  FaTelegramPlane,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCogs,
  FaHeadset,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import anjomanSenfi from "../assets/images/anjomanSenfi.jpeg";
import anformatic from "../assets/images/25.webp";
import senfiRayaneei from "../assets/images/download.jpg";

const Footer = () => {
  const { t } = useTranslation();

  const mainServices = t("footer.mainServices.items", {
    returnObjects: true,
  });

  const otherServices = t("footer.otherServices.items", {
    returnObjects: true,
  });

  const licenses = t("footer.licenses.items", {
    returnObjects: true,
  });

  const licenseImages = [senfiRayaneei, anformatic, anjomanSenfi];

  const itemStyle =
    "cursor-pointer dark:text-[#94A3B8] rounded-lg px-3 py-1 lg:py-2 transition-all duration-300 hover:bg-white/40 hover:text-primary dark:hover:text-primary-dark dark:hover:bg-black/50 hover:translate-x-1";

  return (
    <footer className="w-full border-t border-neutral-300 dark:border-[#334155] bg-gradient-to-l from-accent-light/30 dark:from-[#1a2848] dark:to-[#121924] to-primary-light py-10 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-2">
        {/* معرفی شرکت */}
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-start">
          <h4 className="text-lg md:text-xl dark:text-text-dark text-text font-bold mb-3 md:mb-4 flex items-center gap-2">
            <FaBuilding className="text-primary md:text-lg md:text-xl" />
            {t("footer.company.title")}
          </h4>

          <p className="text-xs xl:dark:bg-transparent xl:text-start dark:bg-card-dark/50 bg-white/50 text-center p-1 rounded-md md:text-sm dark:text-[#94A3B8] leading-7 md:leading-8 text-neutral-700">
            {t("footer.company.description")}
          </p>
        </div>

        {/* خدمات اصلی */}
        <div className="flex flex-col items-start">
          <h4 className="text-sm md:text-xl dark:text-text-dark text-text font-bold mb-3 md:mb-4 flex items-center gap-2">
            <FaBriefcase className="text-primary md:text-lg md:text-xl" />
            {t("footer.mainServices.title")}
          </h4>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
            {mainServices.map((item, index) => (
              <li key={index} className={itemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* خدمات جانبی */}
        <div className="flex flex-col items-start">
          <h4 className="text-sm md:text-xl dark:text-text-dark text-text font-bold mb-3 md:mb-4 flex items-center gap-2">
            <FaCogs className="text-primary md:text-lg md:text-xl" />
            {t("footer.otherServices.title")}
          </h4>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
            {otherServices.map((item, index) => (
              <li key={index} className={itemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ارتباط با ما */}
        <div className="flex flex-col items-start">
          <h4 className="text-sm md:text-xl dark:text-text-dark text-text font-bold mb-3 md:mb-4 flex items-center gap-2">
            <FaHeadset className="text-primary md:text-lg md:text-xl" />
            {t("footer.contact.title")}
          </h4>

          <div className="space-y-3 mt-2 sm:mt-0 md:space-y-4 text-neutral-700 text-xs md:text-sm">
            <a
              href="tel:02112345678"
              className="flex dark:text-[#94A3B8] items-center gap-2 md:gap-3 hover:text-primary"
            >
              <FaPhone className="text-primary md:text-sm md:text-base" />
              <span>{t("footer.contact.phone")}</span>
            </a>

            <a
              href="mailto:info@sarzamindanesh.ir"
              className="flex dark:text-[#94A3B8] items-center gap-2 md:gap-3 hover:text-primary"
            >
              <FaEnvelope className="text-primary md:text-sm md:text-base" />
              <span>{t("footer.contact.email")}</span>
            </a>

            <div className="flex items-start gap-2 md:gap-3 hover:text-primary">
              <FaMapMarkerAlt className="mt-1 text-primary text-sm md:text-base" />
              <span className="dark:text-[#94A3B8]">
                {t("footer.contact.address")}
              </span>
            </div>
          </div>
        </div>

        {/* مجوزها */}
        <div>
          <h4 className="text-sm md:text-xl dark:text-text-dark text-text font-bold mb-4 flex items-center gap-2">
            <FaShieldAlt className="text-primary md:text-xl" />
            {t("footer.licenses.title")}
          </h4>

          <div className="md:grid md:grid-cols-3 flex gap-1">
            {licenses.map((item, index) => (
              <a
                key={item.id}
                href="#"
                title={item.name}
                className="group h-[50px] md:h-[70px] bg-white rounded-md md:rounded-2xl border border-neutral-200 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={licenseImages[index]}
                  alt={item.name}
                  className="w-[70px] h-[30px] lg:w-[100px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="col-span-2 lg:col-span-4 flex justify-center lg:justify-start gap-4 mt-6 lg:mt-0 text-lg md:text-2xl">
          <a
            aria-label={t("footer.social.whatsapp")}
            className="text-green-500 hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            aria-label={t("footer.social.instagram")}
            className="text-pink-500 hover:scale-110 transition"
          >
            <FaInstagramSquare />
          </a>

          <a
            aria-label={t("footer.social.telegram")}
            className="text-sky-500 hover:scale-110 transition"
          >
            <FaTelegramPlane />
          </a>

          <a
            aria-label={t("footer.social.linkedin")}
            className="text-blue-700 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto mt-8 pt-5 dark:border-[#334155] border-t dark:text-[#F8FAFC] border-neutral-300 text-center text-xs md:text-sm text-neutral-600">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
