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
} from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const itemStyle =
    "cursor-pointer rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/40 hover:text-primary hover:translate-x-1";

  return (
    <footer className="w-full border-t border-neutral-300 bg-gradient-to-l from-accent-light/30 to-primary-light py-12">
      <div className="w-11/12 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* معرفی شرکت */}
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaBuilding className="text-primary" />
            سرزمین دانش پیشرو
          </h4>

          <p className="text-sm leading-8 text-neutral-700">
            ارائه‌دهنده راهکارهای نوین نرم‌افزاری در زمینه طراحی وب‌سایت،
            توسعه سامانه‌های تحت وب، نرم‌افزارهای سازمانی و مشاوره تحول
            دیجیتال برای کسب‌وکارهای مدرن.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="#"
              className="text-green-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="text-pink-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaInstagramSquare />
            </a>

            <a
              href="#"
              className="text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="#"
              className="text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* خدمات اصلی */}
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaBriefcase className="text-primary" />
            خدمات اصلی
          </h4>

          <ul className="space-y-2 text-neutral-700">
            <li className={itemStyle}>طراحی سایت شرکتی</li>
            <li className={itemStyle}>فروشگاه اینترنتی</li>
            <li className={itemStyle}>پنل مدیریت اختصاصی</li>
            <li className={itemStyle}>نرم‌افزارهای سازمانی</li>
          </ul>
        </div>

        {/* خدمات جانبی */}
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaCogs className="text-primary" />
            خدمات جانبی
          </h4>

          <ul className="space-y-2 text-neutral-700">
            <li className={itemStyle}>سئو و بهینه‌سازی</li>
            <li className={itemStyle}>پشتیبانی فنی</li>
            <li className={itemStyle}>مشاوره دیجیتال</li>
            <li className={itemStyle}>آموزش و استقرار</li>
          </ul>
        </div>

        {/* ارتباط با ما */}
        <div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaHeadset className="text-primary" />
            ارتباط با ما
          </h4>

          <div className="space-y-4 text-neutral-700">
            <a
              href="tel:02112345678"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
            >
              <FaPhone className="text-primary" />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>

            <a
              href="mailto:info@sarzamindanesh.ir"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
            >
              <FaEnvelope className="text-primary" />
              <span>info@sarzamindanesh.ir</span>
            </a>

            <div className="flex items-start gap-3 transition-colors duration-300 hover:text-primary">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              <span>تهران، خیابان ولیعصر، پلاک ۱۲۵</span>
            </div>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="w-11/12 max-w-7xl mx-auto mt-10 pt-6 border-t border-neutral-300 text-center text-sm text-neutral-600">
        © 2026 تمامی حقوق برای شرکت سرزمین دانش پیشرو محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;