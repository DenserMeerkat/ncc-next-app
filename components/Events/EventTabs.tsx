"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

export const EventTabs = (props: any) => {
  const years: Record<string, React.ReactElement<any>[]> = props.years;
  const contentTail =
    "mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 justify-center m-0";
  return (
    <div className="px-2 md:px-0 my-10 mx-auto max-w-5xl">
      <SectionHeading
        className={"mb-10"}
        icon={FileText}
        title={"Event Reports"}
      />

      <Tabs
        defaultValue={Object.keys(years).reverse()[0]}
        className="flex flex-col items-center sm:items-start sm:flex-row gap-4 lg:gap-10 px-2 sm:px-4"
      >
        <TabsList
          aria-label="tabs example"
          className="py-2 sm:py-3 md:py-4 px-4 flex sm:flex-col gap-4
                rounded-md  border border-rose-300 dark:border-slate-800 
                bg-rose-200 dark:bg-slate-900 h-min"
        >
          <ScrollArea className="sm:max-w-[65px]">
            {Object.entries(years)
              .reverse()
              .map(([key, components]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="my-0.5 md:my-1 md:mx-1 select-none text-gray-800 dark:text-slate-300"
                >
                  {key}
                </TabsTrigger>
              ))}
          </ScrollArea>
        </TabsList>
        <div>
          {Object.entries(years).map(([key, components]) => (
            <TabsContent key={key} value={key} className={contentTail}>
              {years[key]}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default EventTabs;
