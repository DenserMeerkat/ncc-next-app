import React from "react";
import SectionHeading from "../common/SectionHeading";
import { FlagTriangleRight } from "lucide-react";

const AboutVideo = () => {
  return (
    <div className=" relative h-max py-10">
      <div className=" max-w-6xl mx-auto">
        <SectionHeading
          className="mb-6"
          icon={FlagTriangleRight}
          title="An Incredible Journey"
        />
      </div>
      <div className=" max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <div className="md:p-1 lg:p-2 md:border border border-gray-400 dark:border-slate-700 md:rounded-md">
            <iframe
              className="w-full h-full md:rounded-md"
              src="https://www.youtube.com/embed/iF7vxaO3LlQ"
              title="NCC Army - An Incredible Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
