import { getProductData } from "@/lib/api";
import HomePage from "@/pages/HomePage";

export default async function Home() {
  const productData = await getProductData("ielts-course", "bn");

  return (
    <div>
      <HomePage {...productData} />
    </div>
  );
}
