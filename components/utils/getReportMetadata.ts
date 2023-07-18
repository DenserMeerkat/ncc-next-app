import fs from "fs";
import matter from "gray-matter";
import { ReportMetadata } from "./ReportMetadata";

export function getReportMetadata(): ReportMetadata[] {
  const folder = "reports/eventReports/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const reports = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `reports/eventReports/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      location: matterResult.data.location,
      thumb: matterResult.data.thumb,
      images: matterResult.data.images,
      captions: [],
      slug: fileName.replace(".md", ""),
    };
  });
  return reports;
}

export function getLatestReportMetadata(): ReportMetadata[] {
  const folder = "reports/latestReports/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const reports = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `reports/latestReports/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      location: matterResult.data.location,
      thumb: matterResult.data.thumb,
      images: matterResult.data.images,
      captions: [],
      slug: fileName.replace(".md", ""),
    };
  });
  return reports;
}
