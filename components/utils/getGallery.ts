import { gallery } from "@/resources/gallery";

export function getGallery(slug: string) {
  return gallery.find((item) => item.slug === slug);
}
