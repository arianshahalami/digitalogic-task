import { useEffect, useState } from "react";

export const useColorMode = () => {
   const [theme, setTheme] = useState<"dark" | "light">("light");

   const toggleColorMode = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
   };

   const changeHtmlTheme = (theme: "dark" | "light") => {
      document.documentElement.setAttribute("data-theme", theme);
   };

   useEffect(() => {
      const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      if (prefersDarkTheme.matches) {
         setTheme("dark");
         return;
      }

      const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
      if (prefersLightTheme.matches) {
         setTheme("light");
      }
   }, []);

   useEffect(() => {
      changeHtmlTheme(theme);
   }, [theme]);

   return { colorMode: theme, toggleColorMode };
};
