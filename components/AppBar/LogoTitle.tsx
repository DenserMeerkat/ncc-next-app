"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import Image from "next/legacy/image";
import { AppStateContext } from "../utils/AppStateContext";
import { useMediaQuery } from "@mui/material";

const LogoTitle = () => {
  const pageTitleToggle = useMediaQuery("(min-width: 900px)");
  // ImageURL
  const nccLogo = "/images/logos/ncc_logo.png";
  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };
  return (
    <Link
      href={"/"}
      className="flex dark:hover:bg-slate-900 hover:bg-rose-200 py-1.5 px-3 rounded-md items-center cursor-pointer
          border border-transparent  hover:border-rose-300 dark:hover:border-slate-700 transition-colors"
      onClick={() => {
        handleNavItemClick("home");
      }}
    >
      <div className="h-7 mr-4">
        <Image
          width={18}
          height={27}
          src={nccLogo}
          blurDataURL={nccLogo.replace("images", "min_images")}
          alt="NCC logo"
        />
      </div>
      <h1 className="text-lg font-extrabold dark:font-bold ">
        {pageTitleToggle ? `NCC | Anna University` : `NCC | AU`}
      </h1>
    </Link>
  );
};

export default LogoTitle;
