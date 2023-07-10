import React from "react";

const Quote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pb-6 pt-4">
      <blockquote
        className="w-fit  mx-auto px-2 min-[330px]:px-3 py-1.5 sm:py-2 md:px-8 rounded-sm sm:rounded-md 
        text-center text-xs sm:text-sm md:text-md lg:text-lg font-medium  sm:border 
        border-rose-200 bg-rose-100 dark:border-slate-700 dark:bg-slate-900"
      >
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
