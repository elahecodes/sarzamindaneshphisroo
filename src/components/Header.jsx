import { Link } from "react-router-dom";
import logo from "/src/assets/logo/Levels 1.png"
const Header = () => {
  return (
    <header className="bg-primary h-20 m-[24px] rounded-xl flex justify-between items-center px-2">
      <div className="flex justify-start items-center gap-8">
        <img className="w-48" src={logo} alt="" />
        <nav>
          <ul className="flex justify-start items-center gap-4">
            <li className="text-white">
              <Link to={"/question"}>سوالات</Link>
            </li>
            <li className="text-white">
              <Link to={"/blogs"}>وبلاگ ها</Link>
            </li>
            <li className="text-white">
              <Link to={"/home"}>خدمات</Link>
            </li>
            <li className="text-white">
              <Link to={"/home"}>صفحه اصلی</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-white w-40 h-12 flex justify-evenly items-center rounded-md shadow-2xl">
        <button>ورود | ثبت نام</button>
        <button>11</button>
      </div>

    </header>
  );
};

export default Header;
