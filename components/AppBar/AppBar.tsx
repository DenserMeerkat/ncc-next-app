"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonGroup from "./ButtonGroup";
import { useMediaQuery } from "@mui/material";
import { Menu } from "lucide-react";
import { buttonCSS } from "../common/tailwindCSS";
import { useState, useEffect, useContext } from "react";
import NavSheet from "./NavSheet";
import Image from "next/image";
import { AppStateContext } from "../utils/AppStateContext";

const AppBar = (props: any) => {
  // Hooks
  const [openDrawer, setOpenDrawer] = useState(false);
  const pageTitleToggle = useMediaQuery("(min-width: 900px)");
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (isNonMobile) {
      setOpenDrawer(false);
    }
  }, [isNonMobile]);

  // Tailwind CSS
  const tailClass = `${buttonCSS}
  transition ease-in-out hover:scale-105`;

  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };

  // Render
  return (
    <header
      className={`sticky top-0 border-b border-gray-400 dark:border-slate-800 z-50
    bg-red-200/[0.4]  dark:bg-slate-950/[0.7] backdrop-filter backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-4 py-2 flex justify-between items-center">
        <Link
          href={"/"}
          className="flex dark:hover:bg-slate-900 hover:bg-rose-200 py-1.5 px-3 rounded-md items-center cursor-pointer
          border border-transparent  hover:border-rose-300 dark:hover:border-slate-700"
          onClick={() => {
            handleNavItemClick("home");
          }}
        >
          <div className="h-7 mr-4">
            <Image
              width={18}
              height={30}
              src="/images/logos/ncc_logo.png"
              alt="NCC logo"
            />
          </div>
          <h1 className="text-lg font-extrabold dark:font-bold ">
            {pageTitleToggle ? `NCC | Anna University` : `NCC | AU`}
          </h1>
        </Link>
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
