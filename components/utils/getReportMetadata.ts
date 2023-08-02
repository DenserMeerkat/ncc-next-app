import fs from "fs";
import matter from "gray-matter";
import { ReportMetadata } from "./interfaces";

export function getReportMetadata(): ReportMetadata[] {
  const folder = "reports/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const reports = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`reports/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      location: matterResult.data.location,
      thumb: matterResult.data.thumb,
      images: matterResult.data.images,
      captions: matterResult.data.captions,
      slug: fileName.replace(".md", ""),
    };
  });
  return reports;
}
