import { useState, useEffect } from "react";
const Question = () => {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
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
    setCurrentIndex((amount) => (amount === index ? -1 : index));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      {question.map((box, index) => (
        <div
        className="w-full"
          key={box.id}
        >
          <button
            onClick={() => showMenu(index)}
            className="h-12 bg-neutral-200 w-full"
          >
            {box.question}
          </button>
          <div className={`${currentIndex === index ? "h-12" : "h-0"} overflow-hidden transition-all`}>
            <p>{box.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
