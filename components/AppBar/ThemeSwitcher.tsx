"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, RotateCw } from "lucide-react";
import TooltipElement from "../common/TooltipElement";
import { buttonCSS } from "../common/tailwindCSS";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const tailClass = `${buttonCSS}
  transition ease-in-out hover:scale-105`;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const renderThemeChanger = () => {
    if (!mounted)
      return (
        <TooltipElement
          element={<RotateCw className={tailClass} />}
          tooltip={"Loading..."}
        />
      );
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <TooltipElement
          element={
            <Sun onClick={() => setTheme("light")} className={tailClass} />
          }
          tooltip={"Switch to Light mode"}
        />
      );
    } else {
      return (
        <TooltipElement
          element={
            <Moon onClick={() => setTheme("dark")} className={tailClass} />
          }
          tooltip={"Switch to Dark mode"}
        />
      );
    }
  };
  return <div>{renderThemeChanger()}</div>;
};

export default ThemeSwitcher;
