"use client";
import Link from "next/link";
import { CardHeader, CardTitle } from "@/components/ui/card";
import prettyDate from "../utils/prettyDate";
import Image from "next/legacy/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ReportPreview = (props: any) => {
  const title = props.title;
  const location = props.location;
  const thumb = props.thumb;
  const date = props.date;
  const slug = props.slug;
  const formattedDate = prettyDate(date);
  const backPage = props.backPage;

  return (
    <Link
      key={slug + title}
      href={{ pathname: `/events/${slug}`, query: { backPage: backPage } }}
      className="border border-gray-300 dark:border-slate-700 rounded-md 
    transition  drop-shadow-sm hover:drop-shadow-lg min-w-[200px] md:max-w-[330.73px]
    hover:scale-[101%] bg-sky-100 dark:bg-slate-900/[0.8]
    hover:bg-sky-200 dark:hover:bg-slate-800 select-none overflow-hidden flex flex-col"
    >
      <AspectRatio ratio={7 / 5} className="relative">
        <Image src={thumb} layout="fill" alt={title} />
      </AspectRatio>
      <CardHeader className="p-2 md:p-3 border-b">
        <CardTitle className="text-[0.8rem] sm:text-[0.9rem] md:text-base">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </CardTitle>
      </CardHeader>
      <div className="p-2 md:p-3">
        <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.78rem] dark:text-slate-400 tracking-tight">
          {location}
        </p>
        <div className="flex justify-end">
          <p
            className="w-max text-[0.7rem] font-medium dark:text-slate-400 rounded-sm
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
