import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

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
      errorMessageU = t("login.errors.phone");
      break;

    default:
      errorMessageU = "";
  }

  switch (true) {
    case !password.length:
      errorMessageP = "";
      break;

    case password.length < 8:
      errorMessageP = t("login.errors.password");
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

    // ارسال به API
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-5/12 h-full flex flex-col justify-start items-center gap-3"
      >
        <label
          htmlFor="username"
          className="text-2xl font-bold mb-8 text-primary dark:text-primary-dark"
        >
          {t("login.title")}
        </label>

        <input
          id="username"
          type="text"
          value={userName}
          placeholder={t("login.mobilePlaceholder")}
          onChange={(e) => setUserName(e.target.value)}
          className={`${
            userName.length === 0
              ? "border-neutral-200 dark:border-bg-dark"
              : hasNumber
              ? "border-green-400"
              : "border-accent"
          } border outline-none px-2 rounded w-full h-12 text-sm bg-white text-text dark:bg-primary/10 dark:text-secondary-text`}
        />

        <p className="text-accent text-sm w-full">
          {errorMessageU}
        </p>

        <input
          id="password"
          type="password"
          value={password}
          placeholder={t("login.passwordPlaceholder")}
          onChange={(e) => setPassword(e.target.value)}
          className={`${
            password.length === 0
              ? "border-neutral-200 dark:border-bg-dark"
              : password.length >= 8
              ? "border-green-400"
              : "border-accent"
          } border outline-none px-2 bg-white rounded w-full h-12 text-sm text-text dark:bg-primary/10 dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">
          {errorMessageP}
        </p>

        <div className="w-full flex justify-between items-center">
          <span className="text-sm cursor-pointer transition-all text-text hover:text-accent dark:text-accent-dark">
            {t("login.forgotPassword")}
          </span>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`${
            isFormValid
              ? "bg-primary hover:bg-primary/90 cursor-pointer"
              : "bg-neutral-300 dark:bg-neutral-500 cursor-not-allowed"
          } w-full h-12 rounded text-white mt-5 transition-all`}
        >
          {t("login.submit")}
        </button>

        <div className="relative w-full">
          <span className="absolute right-0 top-3 dark:text-text-dark">
            {t("login.noAccount")}{" "}
            <Link
              to="/signin"
              className="text-primary dark:text-primary-dark font-bold"
            >
              {t("login.signup")}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;