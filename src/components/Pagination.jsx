import { useState, useEffect, useRef } from "react";
import Portfolio from "./portfolio";
const Pagination = ({ items, isBlog }) => {
  const [quantity, setQuantity] = useState(10);

  const loaderRef = useRef(null);
  const content = items.slice(0, quantity);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && quantity < items.length) {
        setTimeout(() => {
          setQuantity((prev) => Math.min(prev + 10, items.length));
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
        <h2 className="text-xl text-primary font-bold">وبلاگ ها</h2>
        <form className="w-8/12" action="">
          <input
            placeholder="جستجو وبلاگ ..."
            className="w-full outline-none bg-white border border-neutral-200 h-12 rounded-md px-4"
            type="text"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3">
        {content.map((item) =>
          isBlog ? (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-3 relative flex items-center gap-2 text-sm text-gray-500">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.author}</span>
                </div>

                <h2 className="mb-3 line-clamp-2 font-bold text-gray-900">
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

                <button className="w-full rounded-lg bg-primary py-3 text-white transition hover:opacity-90">
                  مطالعه مقاله
                </button>
              </div>
            </article>
          ) : (
            <div>
            
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
