import { ApiResponse, ProductData } from "./types";

const API_BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1";

export const getProductData = async (
  slug: string,
  lang: string
): Promise<ProductData> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${slug}?lang=${lang}`, {
      method: "GET",
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: ApiResponse = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to load data", error);
    throw error;
  }
};
