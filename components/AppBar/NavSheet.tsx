import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import TooltipElement from "../common/TooltipElement";
import { on } from "events";

const NavSheet = (props: any) => {
  var open = props.open;
  const onOpenChange = props.onOpenChange;
  const handleClick = props.handleClick;
  const commonTail = `my-3 px-8 py-2 rounded-md border select-none text-center`;
  const buttonTail = `${commonTail} border-gray-400 dark:border-slate-700 text-gray-900 dark:text-slate-300`;
  const activeTail = `${commonTail} bg-rose-200 dark:bg-slate-700 pointer-events-none font-semibold 
  border-rose-300 dark:border-slate-600 text-gray-900 dark:text-slate-300`;
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
          <div className="flex flex-col py-4 pt-8">
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
