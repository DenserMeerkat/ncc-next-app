import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import prettyDate from "../utils/prettyDate";
import Image from "next/legacy/image";

const ReportPreview = (props: any) => {
  const title = props.title;
  const location = props.location;
  const thumb = props.thumb;
  const date = props.date;
  const slug = props.slug;
  const formattedDate = prettyDate(date);
  return (
    <Link
      key={slug + title}
      href={`/events/${slug}`}
      className="border border-gray-300 dark:border-slate-700 rounded-md 
    transition  drop-shadow-sm hover:drop-shadow-2xl min-w-[200px] max-w-[330.73px]
    hover:scale-[101%] bg-sky-100 dark:bg-slate-900/[0.8]
    hover:bg-sky-200 dark:hover:bg-slate-800 select-none overflow-hidden flex flex-col"
    >
      <div className="relative flex rounded-t-sm object-contain h-40 w-64 sm:h-44">
        <Image src={thumb} layout="fill" alt="Broken Image" />
      </div>
      <CardHeader className="p-3 pt-4 border-b">
        <CardTitle>
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </CardTitle>
      </CardHeader>
      <div className="p-3">
        <p className="text-sm dark:text-slate-400 tracking-tight">{location}</p>
        <div className="flex justify-end">
          <p
            className="w-max text-xs font-medium dark:text-slate-400 rounded-sm
          mt-2 px-2 py-0.5 bg-sky-50 dark:bg-slate-800/[0.8] "
          >
            {formattedDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ReportPreview;
