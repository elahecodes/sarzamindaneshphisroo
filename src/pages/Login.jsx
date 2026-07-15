import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const hasNumber = /^09\d{9}$/.test(userName);

  let errorMessageU = "";
  let errorMessageP = "";

  switch (true) {
    case !userName.length:
      errorMessageU = "";
      break;

    case !hasNumber:
      errorMessageU = "لطفا شماره تلفن معتبر وارد کنید";
      break;

    default:
      errorMessageU = "";
  }

  switch (true) {
    case !password.length:
      errorMessageP = "";
      break;

    case password.length < 8:
      errorMessageP = "رمز عبور باید حداقل ۸ کاراکتر باشد";
      break;

    default:
      errorMessageP = "";
  }

  const isFormValid = hasNumber && password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    console.log({
      userName,
      password,
    });

    // ارسال اطلاعات به API
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-5/12 z-20 h-full flex flex-col justify-start items-center gap-3"
      >
        <label
          htmlFor="username"
          className="text-2xl dark:text-primary-dark text-primary font-bold mb-8"
        >
          ورود به حساب کاربری
        </label>

        <input
          id="username"
          type="text"
          placeholder="شماره موبایل"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={`${
            userName.length === 0
              ? "border-neutral-200 dark:border-bg-dark"
              : hasNumber
                ? "border-green-400"
                : "border-accent"
          } border outline-none px-2 dark:bg-primary/10 dark:text-secondary-text text-sm rounded w-full h-12 text-text bg-white`}
        />

        <p className="text-accent text-sm w-full">{errorMessageU}</p>

        <input
          id="password"
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${
            password.length === 0
              ? "border-neutral-200 dark:border-bg-dark"
              : password.length >= 8
                ? "border-green-400"
                : "border-accent"
          } border outline-none px-2 text-sm rounded w-full h-12 text-text dark:bg-primary/10
                  dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">{errorMessageP}</p>

        <div className="w-full flex justify-between items-center">
          <span className="text-text text-sm hover:text-accent dark:text-accent-dark cursor-pointer transition-all">
            بازیابی رمز عبور
          </span>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? "bg-primary hover:bg-primary/90 cursor-pointer"
              : "bg-neutral-300 cursor-not-allowed dark:bg-neutral-500"
          } w-full h-12 rounded text-white mt-5 transition-all`}
        >
          اعمال
        </button>

        <div className="relative w-full">
          <span className="absolute dark:text-text-dark right-0 top-3">
            حساب کاربری ندارید؟{" "}
            <Link to="/signin" className="text-primary dark:text-primary-dark font-bold">
              ثبت نام
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
