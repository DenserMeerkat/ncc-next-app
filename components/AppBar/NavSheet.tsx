"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import React from "react";

const NavSheet = (props: any) => {
  var open = props.open;
  const onOpenChange = props.onOpenChange;
  const handleClick = props.handleClick;
  const commonTail = `my-3 px-8 py-2 rounded-md border select-none text-center`;
  const buttonTail = `${commonTail} border-gray-400 hover:bg-rose-200 dark:hover:bg-slate-800 dark:border-slate-700 
  text-gray-900 dark:text-slate-300 font-semibold transition-colors`;
  const activeTail = `${commonTail} bg-red-300 dark:bg-slate-700 pointer-events-none font-extrabold 
  border-rose-500 dark:border-slate-600 text-gray-900 dark:text-slate-300`;
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerHeight < 350);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [active, setActive] = useState(
    currentPage === "" ? "home" : currentPage
  );

  const handleNavClick = (page: string) => {
    setActive(page);
    handleClick(page);
    onOpenChange(false);
  };
  return (
    <Sheet defaultOpen={false} open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[200px] rounded-l-md ">
        <SheetHeader></SheetHeader>
        <SheetDescription>
          <ScrollArea className="h-screen">
            <div
              className={`flex flex-col py-4 pt-8 pb-12 ${
                isSmallWindow ? "pr-6" : ""
              }`}
            >
              <Link
                href={"/"}
                onClick={() => handleNavClick("home")}
                className={active === "home" ? activeTail : buttonTail}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                onClick={() => handleNavClick("about")}
                className={active === "about" ? activeTail : buttonTail}
              >
                About
              </Link>
              <Link
                href={"/events"}
                onClick={() => handleNavClick("events")}
                className={active === "events" ? activeTail : buttonTail}
              >
                Events
              </Link>
              <Link
                href={"/gallery"}
                onClick={() => handleNavClick("gallery")}
                className={active === "gallery" ? activeTail : buttonTail}
              >
                Gallery
              </Link>
            </div>
          </ScrollArea>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
