import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full max-w-[35rem] mx-auto h-dvh flex justify-center items-center pt-12">
      <div className="absolute w-[22rem] h-[22rem] bg-accent/10 blur-3xl bottom-0 left-0 pointer-events-none" />
      <div className="absolute w-[40rem] h-[40rem] bg-primary/10 blur-3xl top-0 right-1 pointer-events-none" />

      <form
        className="w-11/12 z-20 h-full flex flex-col justify-start items-center gap-3"
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
          <span className="text-text text-sm hover:text-accent cursor-pointer transition-all">
            بازیابی رمز عبور
          </span>
        </div>
        <button className="bg-primary w-full hover:bg-primary/90 transition-all cursor-pointer h-12 rounded text-white mt-5">
          اعمال
        </button>
        <div className="relative w-full">
          <span className="absolute right-0 top-3">
            حساب کاربری ندارید ؟{" "}
            <Link to={"/signin"} className="text-primary font-bold">
              ثبت نام
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
