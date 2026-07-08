import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark((prev) => !prev);

  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
      setDark(true)
    }else {
      setDark(false)
    }
    console.log(theme);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("theme", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
