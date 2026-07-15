import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  // اعتبارسنجی شماره تلفن
  const isValidPhone = /^09\d{9}$/.test(userName);

  // اعتبارسنجی رمز عبور
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isPasswordValid =
    hasMinLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar;

  const canSubmit = isValidPhone && isPasswordValid;

  let errorMessageP = "";
  let errorMessageU = "";

  // پیام خطای شماره تلفن
  switch (true) {
    case !userName.length:
      errorMessageU = "";
      break;

    case !isValidPhone:
      errorMessageU = "لطفا شماره تلفن معتبر وارد کنید";
      break;

    default:
      errorMessageU = "";
  }

  // پیام خطای رمز
  switch (true) {
    case !password.length:
      errorMessageP = "";
      break;

    case !hasUpperCase:
      errorMessageP = "رمز انتخابی باید حداقل یک حرف بزرگ داشته باشد";
      break;

    case !hasLowerCase:
      errorMessageP = "رمز انتخابی باید حداقل یک حرف کوچک داشته باشد";
      break;

    case !hasNumber:
      errorMessageP = "رمز انتخابی باید حداقل یک عدد داشته باشد";
      break;

    case !hasSpecialChar:
      errorMessageP = "رمز انتخابی باید حداقل یک کاراکتر ویژه داشته باشد";
      break;

    case !hasMinLength:
      errorMessageP = "رمز انتخابی باید حداقل ۸ کاراکتر داشته باشد";
      break;

    default:
      errorMessageP = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    console.log({
      phone: userName,
      password,
    });

    // ارسال اطلاعات به سرور
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-5/12 z-20 h-full flex flex-col justify-start items-center gap-3"
      >
        <label className="text-2xl text-primary dark:text-primary-dark font-bold mb-8">
          ساخت حساب کاربری
        </label>

        {/* شماره تلفن */}
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="شماره تلفن را وارد کنید"
          maxLength={11}
          className={`${
            !userName.length
              ? "border-neutral-200 dark:border-bg-dark"
              : !isValidPhone
              ? "border-accent"
              : "border-green-500"
          } border outline-none px-2 text-sm rounded w-full h-12
          bg-white dark:bg-primary/10
          text-text dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">
          {errorMessageU}
        </p>

        {/* رمز عبور */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز را وارد کنید"
          minLength={8}
          maxLength={20}
          className={`${
            !password.length
              ? "border-neutral-200 dark:border-bg-dark"
              : !isPasswordValid
              ? "border-accent"
              : "border-green-500"
          } border outline-none px-2 text-sm rounded w-full h-12
          bg-white dark:bg-primary/10
          text-text dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">
          {errorMessageP}
        </p>

        {/* شرایط رمز */}
        <div className="w-full flex flex-col gap-2 dark:text-secondary-text">
          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                hasMinLength
                  ? "bg-green-500"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span>حداقل ۸ کاراکتر</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                hasUpperCase
                  ? "bg-green-500"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span>حداقل یک حرف بزرگ (A-Z)</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                hasLowerCase
                  ? "bg-green-500"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span>حداقل یک حرف کوچک (a-z)</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                hasNumber
                  ? "bg-green-500"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span>حداقل یک عدد</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                hasSpecialChar
                  ? "bg-green-500"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span>حداقل یک کاراکتر ویژه (!@#$...)</span>
          </div>
        </div>

        <button
          disabled={!canSubmit}
          className={`w-full h-12 rounded text-white transition-all mt-5 ${
            canSubmit
              ? "bg-primary hover:bg-primary/90 cursor-pointer"
              : "bg-neutral-300 dark:bg-neutral-500 cursor-not-allowed"
          }`}
        >
          ثبت
        </button>

        <div className="relative w-full">
          <span className="absolute right-0 top-3 dark:text-text-dark">
            حساب کاربری دارید؟
            <Link
              to="/login"
              className="text-primary dark:text-primary-dark font-bold mr-2"
            >
              ورود به حساب
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

