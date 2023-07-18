"use client";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ReportBackButton = () => {
  const searchParams = useSearchParams();
  const backPage = searchParams.get("backPage") || "Events";
  return (
    <button className="mb-6">
      <Link
        href={backPage === "Home" ? "/" : "/events"}
        className="w-max flex px-1 sm:px-3 items-center rounded-md font-medium
bg-rose-200 dark:bg-slate-800 border border-rose-300 dark:border-slate-700  transition-colors
hover:bg-rose-300 dark:hover:bg-slate-700 hover:border-rose-400 dark:hover:border-slate-600"
      >
        <ArrowLeftSquare className="m-1.5 sm:m-2" />
        <p className="mr-1.5 sm:mr-2 text-sm sm:text-md font-semibold">
          {`Return to ${backPage}`}
        </p>
      </Link>
    </button>
  );
};

export default ReportBackButton;
