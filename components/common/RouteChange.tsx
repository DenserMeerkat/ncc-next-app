"use client";
import { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { AppStateContext } from "../utils/AppStateContext";

const RouteChange = () => {
  const pathName = usePathname();
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  useEffect(() => {
    const currentPage = pathName.split("/")[1];
    switch (currentPage) {
      case "":
        setActivePage("home");
        break;
      case "about":
        setActivePage("about");
        break;
      case "members":
        setActivePage("members");
        break;
      case "events":
        setActivePage("events");
        break;
      case "gallery":
        setActivePage("gallery");
        break;
      default:
        setActivePage("home");
        break;
    }
  }, [pathName, setActivePage]);
  return <div></div>;
};

export default RouteChange;
