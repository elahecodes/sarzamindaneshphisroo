import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const isValidPhone = /^09\d{9}$/.test(userName);

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

  switch (true) {
    case !userName.length:
      errorMessageU = "";
      break;

    case !isValidPhone:
      errorMessageU = t("signup.errors.phone");
      break;

    default:
      errorMessageU = "";
  }

  switch (true) {
    case !password.length:
      errorMessageP = "";
      break;

    case !hasUpperCase:
      errorMessageP = t("signup.errors.upperCase");
      break;

    case !hasLowerCase:
      errorMessageP = t("signup.errors.lowerCase");
      break;

    case !hasNumber:
      errorMessageP = t("signup.errors.number");
      break;

    case !hasSpecialChar:
      errorMessageP = t("signup.errors.specialChar");
      break;

    case !hasMinLength:
      errorMessageP = t("signup.errors.minLength");
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
    <div className="w-full h-screen flex justify-center items-center pt-12">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-5/12 h-full flex flex-col justify-start items-center gap-3"
      >
        <label className="text-2xl text-primary dark:text-primary-dark font-bold mb-8">
          {t("signup.title")}
        </label>

        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          maxLength={11}
          placeholder={t("signup.phonePlaceholder")}
          className={`${
            !userName.length
              ? "border-neutral-200 dark:border-bg-dark"
              : !isValidPhone
              ? "border-accent"
              : "border-green-500"
          } border outline-none px-2 text-sm rounded w-full h-12 bg-white dark:bg-primary/10 text-text dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">
          {errorMessageU}
        </p>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          minLength={8}
          maxLength={20}
          placeholder={t("signup.passwordPlaceholder")}
          className={`${
            !password.length
              ? "border-neutral-200 dark:border-bg-dark"
              : !isPasswordValid
              ? "border-accent"
              : "border-green-500"
          } border outline-none px-2 text-sm rounded w-full h-12 bg-white dark:bg-primary/10 text-text dark:text-secondary-text`}
        />

        <p className="text-accent dark:text-accent-dark text-sm w-full">
          {errorMessageP}
        </p>

        <div className="w-full flex flex-col gap-2 dark:text-secondary-text">
          {[
            { ok: hasMinLength, text: t("signup.passwordRules.minLength") },
            { ok: hasUpperCase, text: t("signup.passwordRules.upperCase") },
            { ok: hasLowerCase, text: t("signup.passwordRules.lowerCase") },
            { ok: hasNumber, text: t("signup.passwordRules.number") },
            { ok: hasSpecialChar, text: t("signup.passwordRules.specialChar") },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.ok
                    ? "bg-green-500"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <button
          disabled={!canSubmit}
          className={`w-full h-12 rounded text-white transition-all mt-5 ${
            canSubmit
              ? "bg-primary hover:bg-primary/90 cursor-pointer"
              : "bg-neutral-300 dark:bg-neutral-500 cursor-not-allowed"
          }`}
        >
          {t("signup.submit")}
        </button>

        <div className="relative w-full">
          <span className="absolute right-0 top-3 dark:text-text-dark">
            {t("signup.haveAccount")}
            <Link
              to="/login"
              className="text-primary dark:text-primary-dark font-bold mr-2"
            >
              {t("signup.login")}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;