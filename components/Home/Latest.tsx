import React from "react";
import SectionHeading from "../common/SectionHeading";
import { MdOutlineNewReleases } from "react-icons/md";
import { LatestReports } from "./LatestReports1";
import { getLatestReportMetadata } from "../utils/getReportMetadata";
import ReportPreview from "../Events/ReportPreview";

const Latest = () => {
  const reportMetadata = getLatestReportMetadata();
  const years: React.ReactElement<any>[] = [];
  reportMetadata.map((report) => {
    years.push(
      <ReportPreview backPage={"Home"} key={report.slug} {...report} />
    );
  });
  return (
    <div className=" relative overflow-clip  h-fit py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          className="mb-6"
          icon={MdOutlineNewReleases}
          title={"What's New"}
        />
        <div className="px-2 sm:px-3 md:px-6">
          <LatestReports years={years} />
        </div>
      </div>
    </div>
  );
};

export default Latest;
