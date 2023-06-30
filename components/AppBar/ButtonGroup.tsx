import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";

export interface ButtonGroupRef {
  handleNavChange: (page: string) => void;
}

const ButtonGroup = React.forwardRef<ButtonGroupRef>((props: any, ref) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [active, setActive] = useState(
    currentPage === "" ? "home" : currentPage
  );
  const handleNavChange = (page: string) => {
    setActive(page);
  };
  React.useImperativeHandle(ref, () => ({
    handleNavChange,
  }));

  const dividerTail = `min-h-[1em] w-px self-stretch  bg-gray-400 dark:bg-slate-700 select-none`;
  const commonTail = ` py-1 px-5 text-md  select-none transition`;
  const buttonTail = `bg-slate-50 dark:bg-slate-950 font-semibold dark:hover:bg-slate-900 hover:bg-rose-200 ${commonTail}`;
  const activeTail = `bg-red-300 dark:bg-slate-700 font-bold ${commonTail}`;
  return (
    <nav className="flex items-center rounded-md border border-gray-400 dark:border-slate-700 overflow-hidden">
      <Link
        href={"/"}
        onClick={() => setActive("home")}
        className={active === "home" ? activeTail : buttonTail}
      >
        Home
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/about"}
        onClick={() => setActive("about")}
        className={active === "about" ? activeTail : buttonTail}
      >
        About
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/events"}
        onClick={() => setActive("events")}
        className={active === "events" ? activeTail : buttonTail}
      >
        Events
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/gallery"}
        onClick={() => setActive("gallery")}
        className={active === "gallery" ? activeTail : buttonTail}
      >
        Gallery
      </Link>
    </nav>
  );
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
