import getReportMetadata from "../../components/utils/getReportMetadata";
import ReportPreview from "@/components/Events/ReportPreview";
import { EventTabs } from "@/components/Events/EventTabs";

export default function Events() {
  const reportMetadata = getReportMetadata();
  const years: Record<string, React.ReactElement<any>[]> = {};
  reportMetadata.map((report) => {
    const reportYear = report.date.split("-")[2];
    years[reportYear] = [
      ...(years[reportYear] || []),
      <ReportPreview key={report.slug} {...report} />,
    ];
  });
  return (
    <main>
      <EventTabs years={years} />
    </main>
  );
}
