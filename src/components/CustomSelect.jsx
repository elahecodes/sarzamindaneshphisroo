const CustomSelect = ({ items, setValue, setOpen, icon }) => {
  return (
    <div>
      <div className="bg-bg dark:bg-surface z-20 p-3 rounded-xl shadow-xl absolute top-22 left-0">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => {
              setValue(item);
              setOpen(false);
            }}
            className="
              flex items-center gap-2 mb-2 h-10 px-2
              rounded-xl bg-primary-light
              dark:bg-bg-dark
              hover:scale-[1.02]
              hover:shadow-md
              cursor-pointer
              transition-all
             "
          >
            {icon[index].icon}
            <span className="text-xs md:text-sm dark:text-text-dark">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
