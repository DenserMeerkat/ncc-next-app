export interface ReportMetadata {
  title: string; // title of the report
  date: string; // date of the report
  location: string; // location of the report
  thumb: string; // thumbnail image of the report
  images: string[]; // images of the report
  captions: string[]; // captions of the images
  slug: string; // slug of the report
}

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}
