import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const contactItems = [
  {
    icon: <FaPhoneAlt />,
    href: "tel:+989123456789",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:info@company.com",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/company",
    external: true,
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/989123456789",
    external: true,
  },
  {
    icon: <FaMapMarkerAlt />,
  },
];

const Contact = () => {
  const { t } = useTranslation();

const contactText = t("aboutUs.contact.items", {
  returnObjects: true,
});
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10">
      <div className="mb-7 flex flex-col items-start gap-2">
        <h2 className="text-2xl font-extrabold dark:text-primary-dark text-primary">
            {t("aboutUs.contact.title")}
        </h2>

        <p className="leading-8 text-neutral-600 dark:text-slate-300">
          {t("aboutUs.contact.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item, index) => {
          const Card = (
            <>
              <div
                className="
                  absolute
                  -top-16
                  -left-16
                  w-40
                  h-40
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:scale-150
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-primary
                  to-accent
                  text-xl
                  text-white
                  shadow-xl
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <div className="relative z-10">
                <h4 className="mb-2 text-xl font-bold text-primary dark:text-white">
                  {contactText[index].title}
                </h4>

                <p className="break-words text-neutral-700 dark:text-slate-300">
                  {contactText[index].value}
                </p>
              </div>
            </>
          );

          const classes = `
            group
            relative
            overflow-hidden
            flex
            items-center
            gap-5
            rounded-[32px]
            border
            border-slate-200
            bg-gradient-to-br
            from-primary/5
            via-white
            to-accent/5
            p-7
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-500
            md:hover:-translate-y-2
            md:hover:shadow-2xl
            dark:border-slate-700
            dark:from-primary/10
            dark:via-slate-800
            dark:to-accent/10
          `;

          if (item.href) {
            return (
              <a
               key={index}
                href={item.href}
                aria-label={`${item.title}: ${item.value}`}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={classes}
              >
                {Card}
              </a>
            );
          }

          return (
            <div
              key={index}
              className={classes}
            >
              {Card}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;