import { useState, useEffect, useRef } from "react";
const Pagination = ({ items, isBlog }) => {
  const [quantity, setQuantity] = useState(10);
  const [value, setValue] = useState("");

  const loaderRef = useRef(null);
  const filteredItems = items.filter((item) => item.title.includes(value));
  const content = filteredItems.slice(0, quantity);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && quantity < filteredItems.length) {
        setTimeout(() => {
          setQuantity((prev) => Math.min(prev + 10, filteredItems.length));
        }, 1000);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [quantity, items.length]);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center py-2 px-4">
        <h2 className="text-xl text-primary dark:text-[#8B5CF6] font-bold">
          {isBlog ? <span>وبلاگ ها</span> : <span>نمونه پروژه ها</span>}
        </h2>
        {isBlog && (
          <form className="w-8/12" action="">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="جستجو وبلاگ ..."
              className="w-full outline-none bg-white dark:bg-[#334155] dark:border-[#334155] dark:text-white border border-neutral-200 h-12 rounded-md px-4"
              type="text"
            />
          </form>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3">
        {content.map((item) =>
          isBlog ? (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:bg-[#334155] dark:border-[#334155] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-3 relative flex items-center gap-2 text-sm text-gray-500">
                  <span className="dark:text-[#94A3B8]">{item.category}</span>
                  <span className="dark:text-[#94A3B8]">•</span>
                  <span className="dark:text-[#94A3B8]">{item.author}</span>
                </div>

                <h2 className="mb-3 line-clamp-2 font-bold text-gray-900 dark:text-[#F8FAFC]">
                  {item.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
                {/* 
              <div className="mb-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}

                <button className="w-full rounded-lg bg-primary dark:bg-[#8B5CF6] py-3 text-white transition hover:opacity-90">
                  مطالعه مقاله
                </button>
              </div>
            </article>
          ) : (
            <div className="bg-white dark:border-[#334155] dark:bg-[#334155] rounded-md border border-neutral-200">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 text-sm md:text-base font-bold transition-all">
                    مشاهده جزئیات
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col">
                <h4 className="text-lg font-bold dark:text-[#8B5CF6] dark:border-[#334155] text-purple-600">
                  {item.title}
                </h4>

                <div className="mb-2">
                  <p className="text-xs dark:text-[#F8FAFC] font-bold text-neutral-500 py-4">
                    تکنولوژی‌ها
                  </p>
                  <div className="text-xs dark:text-[#F8FAFC] bg-primary/10 px-2 py-1 rounded-xl text-neutral-700">
                    {item.technology}
                  </div>
                </div>

                <p className="text-sm dark:text-[#F8FAFC] text-neutral-600 leading-6 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      {quantity < items.length && (
        <div ref={loaderRef} className="h-10 bg-red-500">
          در حال بارگذاری...
        </div>
      )}
    </>
  );
};

export default Pagination;
