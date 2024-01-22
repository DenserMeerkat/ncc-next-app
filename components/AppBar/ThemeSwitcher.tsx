"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, RotateCw } from "lucide-react";
import TooltipElement from "../common/TooltipElement";
import { buttonCSS } from "../common/tailwindCSS";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const tailClass = `${buttonCSS} transition ease-in-out hover:scale-105`;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const renderThemeChanger = () => {
    if (!mounted)
      return (
        <TooltipElement
          element={
            <button className={"flex items-center justify-center"}>
              <RotateCw className={tailClass} />
            </button>
          }
          tooltip={"Loading..."}
        />
      );
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <TooltipElement
          element={
            <button
              className={"flex items-center justify-center"}
              onClick={() => setTheme("light")}
            >
              <Sun className={tailClass} />
            </button>
          }
          tooltip={"Light mode"}
        />
      );
    } else {
      return (
        <TooltipElement
          element={
            <button
              className={"flex items-center justify-center"}
              onClick={() => setTheme("dark")}
            >
              <Moon className={tailClass} />
            </button>
          }
          tooltip={"Dark mode"}
        />
      );
    }
  };
  return <div>{renderThemeChanger()}</div>;
};

export default ThemeSwitcher;
