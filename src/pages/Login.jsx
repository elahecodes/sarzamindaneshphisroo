import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full bg-primary-light h-dvh flex justify-center items-center pt-12">
      <form
        className="w-11/12 h-full flex flex-col justify-start items-center gap-3"
        action=""
      >
        <label className="text-2xl text-primary font-bold mb-8" htmlFor="">
          ورود به حساب کاربری
        </label>
        <input
          className="border border-neutral-200 px-2 text-sm rounded w-full h-12 bg-white"
          placeholder="ایمیل یا شماره تلفن را وارد کنید"
          type="text"
        />
        <input
          className="border border-neutral-200 px-2 text-sm rounded w-full h-12 bg-white"
          placeholder="رمز را وارد کنید"
          type="text"
        />
        <div className="w-full flex justify-between items-center">
          <span className="text-text text-sm">بازیابی رمز عبور</span>
        </div>
        <button className="bg-primary w-full h-12 rounded text-white mt-5">
          اعمال
        </button>
        <div className="relative w-full">
          <span className="absolute right-0 top-3">
            حساب کاربری ندارید ؟{" "}
            <Link to={"/signin"} className="text-primary font-bold">ثبت نام</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
