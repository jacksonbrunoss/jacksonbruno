import React, { useState, useEffect } from "react";
import StyledGlobal from "./theme/styleds.js";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <StyledGlobal />
        <Navbar />
        <Hero />
        <About />
      </>
    </ThemeProvider>
  );
}

export default App;
