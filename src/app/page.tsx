// app/page.tsx
import { getProductData } from "@/lib/api";
import { generateCourseMetadata } from "@/lib/seo/generateMetadata";
import HomePage from "@/pages/HomePage";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  const lang = typeof params?.lang === "string" ? params.lang : "en";
  return await generateCourseMetadata("ielts-course", lang);
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const lang = typeof params?.lang === "string" ? params.lang : "en";

  const productData = await getProductData("ielts-course", lang);

  return (
    <div>
      <HomePage {...productData} />
    </div>
  );
}
