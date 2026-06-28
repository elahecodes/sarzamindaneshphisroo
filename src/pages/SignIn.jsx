import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const hasMinLenght = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isOnlyNumber = /^09\d+$/.test(userName);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  let errorMessageP;
  let errorMessageU;

  switch (true) {
    case !userName.length:
      errorMessageU = "";
      break;

    case userName.length !== 11:
      errorMessageU = "لطفا شماره تلفن معتبر 11 رقمی وارد کنید";
      break;

    case !isOnlyNumber:
      errorMessageU = "لطفا عدد وارد کنید";
      break;

    default:
      errorMessageU = "";
      break;
  }

  switch (true) {
    case !password.length:
      errorMessageP = "";
      break;

    case !hasUpperCase:
      errorMessageP = "رمز انتخابی باید حداقل یک حرف بزرگ داشته باشد";
      break;

    case !hasLowercase:
      errorMessageP = "رمز انتخابی باید حداقل یک حرف کوچک داشته باشد";
      break;

    case !hasNumber:
      errorMessageP = "رمز انتخابی باید حداقل یک عدد داشته باشد";
      break;

    case !hasSpecialChar:
      errorMessageP = "رمز انتخابی باید حداقل یک کاراکتر ویژه داشته باشد";
      break;

    case !hasMinLenght:
      errorMessageP = "رمز انتخابی باید حداقل ۸ کاراکتر داشته باشد";
      break;

    default:
      errorMessageP = "";
  }

  return (
    <div className="w-full bg-primary-light h-dvh flex justify-center items-center pt-12">
      <form
        className="w-11/12 h-full flex flex-col justify-start items-center gap-3"
        action=""
      >
        <label className="text-2xl text-primary font-bold mb-8" htmlFor="">
          ساخت حساب کاربری
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className={`${!userName.length ? "border border-neutral-200" : userName.length < 11 || !isOnlyNumber ? "border border-accent" : "border border-green-500"} outline-none px-2 text-sm rounded w-full h-12 bg-white text-text`}
          placeholder="شماره تلفن را وارد کنید"
          minLength={10}
          maxLength={30}
          type="text"
        />
        <p>{errorMessageU}</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={`${!password.length ? "border border-neutral-200" : !hasMinLenght || !hasUpperCase || !hasLowercase || !hasNumber || !hasSpecialChar ? "border border-accent" : "border border-green-500"} outline-none text-text px-2 text-sm rounded w-full h-12 bg-white`}
          placeholder="رمز را وارد کنید"
          minLength={8}
          maxLength={20}
          type="text"
        />
        <p className="text-neutral-700">{errorMessageP}</p>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-sm text-neutral-700 flex justify-start items-center gap-2">
              <div className="w-1.5 h-1.5 mt-0.5 bg-green-600 rounded-full"></div>
              <span>حداقل ۸ کاراکتر</span>
            </div>
            <div className="text-sm text-neutral-700 flex justify-start items-center gap-2">
              <div className="w-1.5 h-1.5 mt-0.5 bg-green-600 rounded-full"></div>
              <span>حداقل یک حرف بزرگ</span>
            </div>
            <div className="text-sm text-neutral-700 flex justify-start items-center gap-2">
              <div className="w-1.5 h-1.5 mt-0.5 bg-green-600 rounded-full"></div>
              <span>حداقل یک حرف کوچک</span>
            </div>
            <div className="text-sm text-neutral-700 flex justify-start items-center gap-2">
              <div className="w-1.5 h-1.5 mt-0.5 bg-green-600 rounded-full"></div>
              <span>حداقل یک عدد</span>
            </div>
            <div className="text-sm text-neutral-700 flex justify-start items-center gap-2">
              <div className="w-1.5 h-1.5 mt-0.5 bg-green-600 rounded-full"></div>
              <span>حداقل یک کاراکتر ویژه</span>
            </div>
          </div>
        </div>
        <button className="bg-primary w-full h-12 rounded text-white mt-5">
          ثبت
        </button>
        <div className="relative w-full">
          <span className="absolute right-0 top-3">
            حساب کاربری دارید ؟{" "}
            <Link to={"/login"} className="text-primary font-bold">
              ورود به حساب
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
