// Q1. Theme Switcher — 4 Marks** Create a Light Mode and Dark Mode
// switcher using `useContext`.

import { createContext, useState } from "react";
const DarkModeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");
  const toggleBtn = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };
  return (
    <DarkModeContext.Provider value={{ theme, toggleBtn }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
