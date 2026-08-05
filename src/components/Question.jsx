import { useState, useEffect } from "react";
import { FaArrowDown, FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Question = () => {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { t, i18n } = useTranslation();
  const questions = t("question.items", { returnObjects: true });

  async function getData() {
    try {
      const response = await fetch("/api/question.json");

      if (!response.ok) return;

      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.log(error);
    }
  }

  const showMenu = (index) => {
    setCurrentIndex((prev) => (prev === index ? -1 : index));
  };

  useEffect(() => {
    getData();
  }, []);

  const middle = Math.ceil(question.length / 2);

  const questionRight = question.slice(0, middle);
  const questionLeft = question.slice(middle);

  const renderQuestions = (items, offset = 0) =>
    items.map((box, index) => {
      const realIndex = index + offset;

      return (
        <div className="mb-4" key={box.id}>
          <motion.button
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileHover={{ y: -6, scale: 1.03 }}
            onClick={() => showMenu(realIndex)}
            className={`
              ${
                currentIndex === realIndex
                  ? "bg-primary dark:text-primary-dark text-white shadow-lg shadow-primary/20"
                  : "bg-white border border-primary/10 text-text hover:border-primary/30 dark:bg-[#334155] hover:shadow-md"
              }
              w-full cursor-pointer flex justify-between items-center
              p-4 min-h-16 rounded-2xl
            `}
          >
            <div className="flex items-center gap-3 text-right">
              <span
                className={`
                  ${
                    currentIndex === realIndex
                      ? "bg-white/20 text-white"
                      : "bg-gradient-to-br from-primary-soft to-accent-light dark:from-primary-dark dark:to-surface text-primary"
                  }
                  w-11 h-11 rounded-xl flex justify-center items-center shrink-0
                `}
              >
                <FaQuestion className="dark:text-text-dark" />
              </span>

              <span
                className={`font-medium px-4 dark:text-[#F8FAFC] ${
                  i18n.language === "fa" ? "text-right" : "text-left"
                }`}
              >
                {questions[index].question}
              </span>
            </div>
            <span
              className={`
                ${
                  currentIndex === realIndex
                    ? "rotate-180 text-white"
                    : "text-primary dark:text-primary-dark"
                }
                transition-all duration-300
              `}
            >
              <FaArrowDown />
            </span>
          </motion.button>
          <div
            className={`
              ${
                currentIndex === realIndex
                  ? "max-h-40 opacity-100 py-3"
                  : "max-h-0 opacity-0"
              }
              overflow-hidden transition-all duration-500
            `}
          >
            <p className="px-4 text-text/80 dark:text-[#94A3B8] leading-7">
              {questions[index].answer}
            </p>
          </div>
        </div>
      );
    });
  return (
    <section className="relative  overflow-hidden py-20 px-4 dark:from-[#1E293B] dark:to-[#1E293B] bg-gradient-to-b from-primary-soft/20 to-white">
      <div className="absolute top-0 -left-20 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-14">
        <h2 className="lg:text-3xl text-xl font-title text-text mb-5 dark:text-[#F8FAFC]">
          {t("question.title")}
        </h2>

        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-6"></div>

        <p className="text-text/70 leading-8 max-w-2xl mx-auto dark:text-[#94A3B8]">
          {t("question.text")}
        </p>
      </div>

      <div className="relative max-w-[1440px] mx-auto z-10 flex flex-col lg:flex-row lg:gap-6">
        <div className="flex-1">{renderQuestions(questionRight)}</div>

        <div className="flex-1">{renderQuestions(questionLeft, middle)}</div>
      </div>
    </section>
  );
};

export default Question;
