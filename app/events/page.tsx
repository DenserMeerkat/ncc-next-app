import { getReportMetadata } from "../../components/utils/getReportMetadata";
import ReportPreview from "@/components/Events/ReportPreview";
import { EventTabs } from "@/components/Events/EventTabs";
import EventInfo from "@/components/Events/EventInfo";
import RouteChange from "@/components/common/RouteChange";

export default function Events() {
  const reportMetadata = getReportMetadata();
  const years: Record<string, React.ReactElement<any>[]> = {};
  reportMetadata.map((report) => {
    const reportYear = report.date.split("-")[2];
    years[reportYear] = [
      ...(years[reportYear] || []),
      <ReportPreview backPage={"Events"} key={report.slug} {...report} />,
    ];
  });
  return (
    <main className="pb-10">
      <RouteChange />
      <EventInfo />
      <EventTabs years={years} />
    </main>
  );
}
