import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      title: "شماره تماس",
      value: "+98 912 345 6789",
      icon: <FaPhoneAlt />,
      href: "tel:+989123456789",
    },
    {
      title: "ایمیل",
      value: "info@company.com",
      icon: <FaEnvelope />,
      href: "mailto:info@company.com",
    },
    {
      title: "اینستاگرام",
      value: "@company",
      icon: <FaInstagram />,
      href: "https://instagram.com/company",
    },
    {
      title: "واتساپ",
      value: "+98 912 345 6789",
      icon: <FaWhatsapp />,
      href: "https://wa.me/989123456789",
    },
    {
      title: "آدرس شرکت",
      value: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
      icon: <FaMapMarkerAlt />,
      href: "#",
    },
  ];

  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10">
      <div className="mb-7 flex flex-col item-start gap-2">
        <h2 className="text-2xl font-extrabold text-primary">
          ارتباط با ما
        </h2>

        <p className="text-neutral-600 leading-8">
          برای ثبت سفارش، دریافت مشاوره یا پاسخ به سوالات خود می‌توانید از
          طریق راه‌های ارتباطی زیر با ما در تماس باشید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              gap-5
              p-7
              rounded-[32px]

              bg-gradient-to-br
              from-primary/10
              via-white
              to-accent/10

              border
              border-white/50

              shadow-lg
              backdrop-blur-xl

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
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

                w-16
                h-16

                rounded-2xl

                bg-gradient-to-br
                from-primary
                to-accent

                text-white
                text-2xl

                flex
                items-center
                justify-center

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
              <h4 className="text-xl font-bold text-primary mb-2">
                {item.title}
              </h4>

              <p className="text-neutral-700 break-all">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;