import React from "react";
import SectionHeading from "../common/SectionHeading";
import { MdOutlineNewReleases } from "react-icons/md";
import LatestReports from "./LatestReports";
import { getReportMetadata } from "../utils/getReportMetadata";
import ReportPreview from "../Events/ReportPreview";
import { ReportMetadata } from "../utils/interfaces";

const Latest: React.FC = () => {
  var reportMetadata: ReportMetadata[] = getReportMetadata();
  reportMetadata.sort((a, b) => {
    const dateA = new Date(
      Number(a.date.slice(6, 10)),
      Number(a.date.slice(3, 5)) - 1,
      Number(a.date.slice(0, 2))
    );
    const dateB = new Date(
      Number(b.date.slice(6, 10)),
      Number(b.date.slice(3, 5)) - 1,
      Number(b.date.slice(0, 2))
    );
    return dateB.getTime() - dateA.getTime();
  });
  reportMetadata = reportMetadata.slice(0, 7);
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
        <div className="px-1 sm:px-2 md:px-4">
          <LatestReports years={years} />
        </div>
      </div>
    </div>
  );
};

export default Latest;
