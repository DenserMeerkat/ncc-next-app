import fs from "fs";
import matter from "gray-matter";
import { getReportMetadata } from "../../../components/utils/getReportMetadata";
import ReportContent from "../../../components/Events/ReportContent";
import RouteChange from "@/components/common/RouteChange";

const getReportContent = (slug: string) => {
  const folder = "reports/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const reports = getReportMetadata();
  return reports.map((report) => ({
    slug: report.slug,
  }));
};

const ReportPage = (props: any) => {
  const slug = props.params.slug;
  const report = getReportContent(slug);
  const title = report.data.title;
  const date = report.data.date;
  const location = report.data.location;
  const thumb = report.data.thumb;
  const images = report.data.images;
  const captions = report.data.captions;
  const content = report.content;
  return (
    <>
      <RouteChange />
      <ReportContent
        title={title}
        date={date}
        content={content}
        location={location}
        thumb={thumb}
        images={images}
        captions={captions}
      />
    </>
  );
};

export default ReportPage;
