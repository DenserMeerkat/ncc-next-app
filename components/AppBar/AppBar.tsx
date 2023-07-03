"use client";
import Link from "next/link";
import ThemeSwitcher from "../AppBar/ThemeSwitcher";
import ButtonGroup, { ButtonGroupRef } from "../AppBar/ButtonGroup";
import { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Menu } from "lucide-react";
import { buttonCSS } from "../common/tailwindCSS";
import * as React from "react";
import NavSheet from "./NavSheet";
import Image from "next/image";

const AppBar = (props: any) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const childRef = useRef<ButtonGroupRef>(null);
  const tailClass = `${buttonCSS}
  transition ease-in-out hover:scale-105`;
  React.useEffect(() => {
    if (isNonMobile) {
      setOpenDrawer(false);
    }
  }, [isNonMobile]);

  const handleClick = (page: string) => {
    if (childRef.current != null) {
      childRef.current.handleNavChange(page);
    }
  };
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
            handleClick("home");
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
            {!isMobile ? `NCC | Anna University` : `NCC | AU`}
          </h1>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {isNonMobile && <ButtonGroup ref={childRef} />}
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
        <NavSheet
          open={openDrawer}
          onOpenChange={setOpenDrawer}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
};

export default AppBar;
