// lib/seo/generateMetadata.ts
import { getProductData } from "@/lib/api";
import { Metadata } from "next";

export async function generateCourseMetadata(
  slug: string,
  lang: string
): Promise<Metadata> {
  const { seo } = await getProductData(slug, lang);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      images: [
        {
          url: seo.image,
          alt: seo.title,
        },
      ],
    },
  };
}
