import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const [members, setMembers] = useState([]);

  async function getData() {
    try {
      const response = await fetch("/api/members.json");

      if (!response.ok) return;

      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold">نظرات</h2>
      </div>
      <Swiper
        className="h-[20rem] mt-11"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={4}
      >
        {members.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" border flex flex-col justify-center items-center overflow-hidden rounded-lg"
          >
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <h2>{item.name}</h2>
            <span>{item.jobTitle}</span>
            <p>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
