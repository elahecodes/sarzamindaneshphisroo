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
  <footer className="w-full border-t border-neutral-300 bg-gradient-to-l from-accent-light/30 to-primary-light py-10 md:py-12">

  <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

    {/* معرفی شرکت */}
    <div className="col-span-2 lg:col-span-1">
      <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        <FaBuilding className="text-primary text-lg md:text-xl" />
        سرزمین دانش پیشرو
      </h4>

      <p className="text-xs md:text-sm leading-7 md:leading-8 text-neutral-700 text-justify">
        ارائه‌دهنده راهکارهای نوین نرم‌افزاری در زمینه طراحی وب‌سایت،
        توسعه سامانه‌های تحت وب، نرم‌افزارهای سازمانی و مشاوره تحول
        دیجیتال برای کسب‌وکارهای مدرن.
      </p>
    </div>

    {/* خدمات اصلی */}
    <div>
      <h4 className="text-base md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        <FaBriefcase className="text-primary text-lg md:text-xl" />
        خدمات اصلی
      </h4>

      <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
        <li className={itemStyle}>طراحی سایت شرکتی</li>
        <li className={itemStyle}>فروشگاه اینترنتی</li>
        <li className={itemStyle}>پنل مدیریت اختصاصی</li>
        <li className={itemStyle}>نرم‌افزارهای سازمانی</li>
      </ul>
    </div>

    {/* خدمات جانبی */}
    <div>
      <h4 className="text-base md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        <FaCogs className="text-primary text-lg md:text-xl" />
        خدمات جانبی
      </h4>

      <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
        <li className={itemStyle}>سئو و بهینه‌سازی</li>
        <li className={itemStyle}>پشتیبانی فنی</li>
        <li className={itemStyle}>مشاوره دیجیتال</li>
        <li className={itemStyle}>آموزش و استقرار</li>
      </ul>
    </div>

    {/* ارتباط با ما */}
    <div>
      <h4 className="text-base md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        <FaHeadset className="text-primary text-lg md:text-xl" />
        ارتباط با ما
      </h4>

      <div className="space-y-3 md:space-y-4 text-neutral-700 text-xs md:text-sm">

        <a
          href="tel:02112345678"
          className="flex items-center gap-2 md:gap-3 hover:text-primary"
        >
          <FaPhone className="text-primary text-sm md:text-base" />
          <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
        </a>

        <a
          href="mailto:info@sarzamindanesh.ir"
          className="flex items-center gap-2 md:gap-3 hover:text-primary"
        >
          <FaEnvelope className="text-primary text-sm md:text-base" />
          <span>info@sarzamindanesh.ir</span>
        </a>

        <div className="flex items-start gap-2 md:gap-3 hover:text-primary">
          <FaMapMarkerAlt className="mt-1 text-primary text-sm md:text-base" />
          <span>تهران، خیابان ولیعصر، پلاک ۱۲۵</span>
        </div>
      </div>
    </div>

    {/* شبکه‌های اجتماعی - موبایل پایین‌تر */}
    <div className="col-span-2 lg:col-span-4 flex justify-center lg:justify-start gap-4 mt-6 lg:mt-0 text-lg md:text-2xl">
      <a className="text-green-500 hover:scale-110 transition">
        <FaWhatsapp />
      </a>
      <a className="text-pink-500 hover:scale-110 transition">
        <FaInstagramSquare />
      </a>
      <a className="text-sky-500 hover:scale-110 transition">
        <FaTelegramPlane />
      </a>
      <a className="text-blue-700 hover:scale-110 transition">
        <FaLinkedin />
      </a>
    </div>

  </div>

  {/* کپی‌رایت */}
  <div className="w-11/12 max-w-7xl mx-auto mt-8 pt-5 border-t border-neutral-300 text-center text-xs md:text-sm text-neutral-600">
    © 2026 تمامی حقوق برای شرکت سرزمین دانش پیشرو محفوظ است.
  </div>

</footer>
  );
};

export default Footer;