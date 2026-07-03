

const CustomSelect = ({items , setValue , setOpen}) => {
    return (
        <div>
              <div className="bg-white z-20 p-3 rounded-xl shadow-xl absolute top-22 left-0">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setValue(item.text);
                      setOpen(false);
                    }}
                    className="
                        flex items-center gap-2 mb-2 h-10 px-2
                        rounded-xl bg-primary-light
                        hover:scale-[1.02]
                        hover:shadow-md
                        cursor-pointer
                        transition-all
                      "
                  >
                    {item.icon}
                    <span className="text-xs md:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            
        </div>
    );
};

export default CustomSelect;