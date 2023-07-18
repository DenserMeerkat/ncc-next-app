"use client";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonGroup from "./ButtonGroup";
import { useMediaQuery } from "@mui/material";
import { Menu } from "lucide-react";
import { buttonCSS } from "../common/tailwindCSS";
import { useState, useEffect } from "react";
import NavSheet from "./NavSheet";
import LogoTitle from "./LogoTitle";

const AppBar = (props: any) => {
  // Hooks
  const [openDrawer, setOpenDrawer] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (isNonMobile) {
      setOpenDrawer(false);
    }
  }, [isNonMobile]);

  // Tailwind CSS
  const tailClass = `${buttonCSS}
  transition ease-in-out hover:scale-105`;

  // Render
  return (
    <header
      className={`sticky top-0 border-b border-gray-400 dark:border-slate-800 z-50
    bg-red-200/[0.4]  dark:bg-slate-950/[0.7] backdrop-filter backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-4 py-2 flex justify-between items-center">
        <LogoTitle />
        <div className="flex items-center gap-4 md:gap-6">
          {isNonMobile && <ButtonGroup />}
          <ThemeSwitcher />
          {!isNonMobile && (
            <Menu
              size={32}
              className={tailClass}
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            />
          )}
        </div>
        <NavSheet open={openDrawer} onOpenChange={setOpenDrawer} />
      </div>
    </header>
  );
};

export default AppBar;
