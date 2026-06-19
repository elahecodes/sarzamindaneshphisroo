import { useState, useEffect } from "react";

const Introduction = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getData() {
    try {
      const response = await fetch("/api/images.json");
      console.log(response);

      if (!response.ok) {
        throw new Error("خطا در دریافت عکس ها");
      }
      const Data = await response.json();
      setImages(Data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((index) => {
        if (index == images.length - 1) {
          return 0;
        }
        return index + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);

    const t = setTimeout(() => {
      setFade(true);
    }, 50);

    return () => clearTimeout(t);
  }, [currentIndex]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-full rounded-2xl overflow-hidden border">
      <div className="relative w-full h-[25rem]">
        <img
        className="w-full"
          src={images[currentIndex]?.url}
        />
        <div className="nav w-24 h-full bg-white absolute left-8 top-6 rounded-tr-2xl rounded-br-2xl shadow-2xl">111</div>
      </div>

    </section>
  );
};

export default Introduction;
