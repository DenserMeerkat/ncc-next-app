import Markdown from "markdown-to-jsx";
import prettyDate from "../utils/prettyDate";
import ReportCarousel from "./ReportCarousel";
import ReportBackButton from "./ReportBackButton";
import { Suspense } from "react";

const ReportContent = (props: any) => {
  const title = props.title;
  const date = props.date;
  const location = props.location;
  const formattedDate = prettyDate(date);
  const content = props.content;
  const images = props.images;
  const captions = props.captions;
  return (
    <div className="flex flex-col-reverse sm:flex-col xl:flex-row py-8 justify-center items-center xl:items-start gap-12">
      <div
        className="px-0 sm:px-4 md:px-8 py-8 max-w-4xl rounded-md
        border border-gray-300 dark:border-slate-800
        bg-gray-100 dark:bg-slate-900/[0.4]"
      >
        <div className="w-full flex justify-center md:justify-end items-center">
          <Suspense fallback={<BackButtonFallback />}>
            <ReportBackButton />
          </Suspense>
        </div>
        <div className="my-2">
          <div className="ml-2 sm:ml-4">
            <h1 className="mb-2 text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-200">
              {title}
            </h1>
            <hr />
            <div className="flex flex-wrap flex-col sm:flex-row justify-between">
              <p className="text-sm text-slate-700 dark:text-slate-400 mt-2">
                {location}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400 mt-2">
                {formattedDate}
              </p>
            </div>
          </div>
          <ReportCarousel images={images} captions={captions} />
        </div>
        <article className="px-1 prose prose-sm sm:prose-base max-w-none dark:prose-invert overflow-x-auto">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default ReportContent;

function BackButtonFallback() {
  return (
    <div className="mb-6">
      <div
        className="w-max flex px-1 sm:px-3 items-center rounded-md font-medium
bg-rose-200 dark:bg-slate-800 border border-rose-300 dark:border-slate-700  transition-colors
hover:bg-rose-300 dark:hover:bg-slate-700 hover:border-rose-400 dark:hover:border-slate-600"
      >
        <div className="m-1.5 sm:m-2" />
        <p className="mr-1.5 sm:mr-2 text-sm sm:text-md font-semibold"></p>
      </div>
    </div>
  );
}
