import Link from "next/link";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import { AppStateContext } from "../utils/AppStateContext";

const ButtonGroup = (props: any) => {
  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };

  // Tailwind CSS
  const dividerTail = `min-h-[1em] w-px self-stretch  bg-rose-300 dark:bg-slate-700 select-none`;
  const commonTail = ` py-1 px-4 lg:px-5 text-md  select-none transition`;
  const buttonTail = `bg-slate-50 dark:bg-slate-950 font-semibold dark:hover:bg-slate-900 hover:bg-rose-200 ${commonTail}`;
  const activeTail = `bg-red-300 dark:bg-slate-700 font-bold ${commonTail}`;

  // Render
  return (
    <nav className="flex items-center rounded-md border border-rose-300 dark:border-slate-700 overflow-hidden">
      <Link
        href={"/"}
        onClick={() => handleNavItemClick("home")}
        className={activePage === "home" ? activeTail : buttonTail}
      >
        Home
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/about"}
        onClick={() => handleNavItemClick("about")}
        className={activePage === "about" ? activeTail : buttonTail}
      >
        About
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/members"}
        onClick={() => handleNavItemClick("members")}
        className={activePage === "members" ? activeTail : buttonTail}
      >
        Members
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/events"}
        onClick={() => handleNavItemClick("events")}
        className={activePage === "events" ? activeTail : buttonTail}
      >
        Events
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/gallery"}
        onClick={() => handleNavItemClick("gallery")}
        className={activePage === "gallery" ? activeTail : buttonTail}
      >
        Gallery
      </Link>
    </nav>
  );
};

export default ButtonGroup;
