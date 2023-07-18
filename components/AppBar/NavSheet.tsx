"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { AppStateContext } from "../utils/AppStateContext";

const NavSheet = (props: any) => {
  // Props
  var open = props.open;
  const onOpenChange = props.onOpenChange;

  // Tailwind CSS
  const commonTail = `my-3 px-8 py-2 rounded-md border select-none text-center`;
  const buttonTail = `${commonTail} border-gray-400 hover:bg-rose-200 dark:hover:bg-slate-800 dark:border-slate-700 
  text-gray-900 dark:text-slate-300 font-semibold transition-colors`;
  const activeTail = `${commonTail} bg-red-300 dark:bg-slate-700 pointer-events-none font-extrabold 
  border-rose-500 dark:border-slate-600 text-gray-900 dark:text-slate-300`;

  // Hooks
  const [isSmallWindow, setIsSmallWindow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerHeight < 380);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  const handleNavItemClick = (page: string) => {
    onOpenChange(false);
  };

  // Render
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
                onClick={() => handleNavItemClick("home")}
                className={activePage === "home" ? activeTail : buttonTail}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                onClick={() => handleNavItemClick("about")}
                className={activePage === "about" ? activeTail : buttonTail}
              >
                About
              </Link>
              <Link
                href={"/members"}
                onClick={() => handleNavItemClick("members")}
                className={activePage === "members" ? activeTail : buttonTail}
              >
                Members
              </Link>
              <Link
                href={"/events"}
                onClick={() => handleNavItemClick("events")}
                className={activePage === "events" ? activeTail : buttonTail}
              >
                Events
              </Link>
              <Link
                href={"/gallery"}
                onClick={() => handleNavItemClick("gallery")}
                className={activePage === "gallery" ? activeTail : buttonTail}
              >
                Gallery
              </Link>
              <div></div>
            </div>
          </ScrollArea>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
