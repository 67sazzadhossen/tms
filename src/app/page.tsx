// app/page.tsx
import { getProductData } from "@/lib/api";
import HomePage from "@/pages/HomePage";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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
