import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaCheckCircle, FaCode, FaRocket, FaLayerGroup } from "react-icons/fa";

const PortfolioPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const portfolio = t("portfolioPage.items", {
    returnObjects: true,
  });

  const item = portfolio.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="text-center py-20 text-xl">
        {t("portfolioPage.notFound")}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-6">
      <div className="absolute -z-10 w-[44rem] h-[22rem] bg-primary/10 dark:bg-primary/20 blur-3xl -top-2 -right-20" />
      <div className="absolute -z-10 w-[40rem] h-[40rem] bg-primary/10 dark:bg-primary/20 blur-3xl top-[50rem] -left-12" />

      <div className="container mx-auto px-5 lg:px-10">
        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 duration-500"
            />
          </div>

          {/* Content */}

          <div>
            <span className="inline-block mb-4 rounded-full bg-violet-100 dark:bg-violet-900/40 text-primary dark:text-primary-dark dark:text-violet-300 px-4 py-2 text-sm">
              {t("portfolioPage.category")}
            </span>

            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-slate-800 dark:text-white leading-relaxed">
              {item.title}
            </h1>

            <p className="mt-2 lg:text-xl text-slate-600 dark:text-slate-300 leading-9">
              {item.description}
            </p>

            {/* Technologies */}

            <div className="mt-10">
              <h2 className="flex items-center gap-3 text-[1.1rem] md:text-xl font-bold text-slate-800 dark:text-white mb-5">
                <FaCode className="text-primary dark:text-primary-dark text-2xl" />
                {t("portfolioPage.technologies")}
              </h2>

              <div className="flex flex-wrap gap-3">
                {item.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="md:flex grid grid-cols-2 gap-4 mt-12">
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 flex justify-center items-center text-sm md:text-[1.1rem] rounded-xl bg-primary dark:bg-primary-dark hover:bg-violet-700 text-white duration-300"
              >
                {t("portfolioPage.demo")}
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="lg:px-8 lg:py-3 flex justify-center items-center text-sm md:text-[1.1rem] rounded-xl border border-violet-600 text-primary dark:text-primary-dark hover:bg-primary hover:text-white duration-300"
              >
                {t("portfolioPage.github")}
              </a>
            </div>
          </div>
        </div>

        {/* Features */}

        <div className="mt-18">
          <h2 className="flex items-center justify-start md:text-center gap-3 text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
            <FaRocket className="text-primary dark:text-primary-dark" />
            {t("portfolioPage.features")}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="group relative overflow-hidden rounded-2xl p-2 md:p-3 lg:p-4 xl:p-6 border border-violet-200/60 dark:border-violet-700/40 bg-gradient-to-br from-violet-200 via-white to-accent/10 dark:from-slate-800 dark:via-slate-800 dark:to-accent/20 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-violet-300/20 blur-3xl group-hover:bg-violet-400/30 duration-500"></div>

                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 md:w-9 xl:w-12 md:h-9 xl:h-12 rounded-xl bg-primary dark:bg-primary-dark text-white flex items-center justify-center">
                    <FaCheckCircle />
                  </div>

                  <p className="text-slate-700 text-sm dark:text-slate-200 md:text-[1.1rem]">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About */}

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-3xl p-4 md:p-10 border border-slate-200 dark:border-slate-700">
          <h2 className="flex items-center gap-3 text-xl lg:text-2xltext-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-6">
            <FaLayerGroup className="text-primary dark:text-primary-dark" />
            {t("portfolioPage.about")}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 lg:text-xl leading-9">
            {item.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
