import { getAccessToken } from "@/app/api/token";

type Product = {
  productName: string;
  unique_id: string;
};

// type ProductResponse = {
//   page: number;
//   size: number;
//   total: number;
//   previous_page: number | null;
//   next_page: number | null;
//   items: Product[];
// };

export async function CreateProduct(
  productName: string,
  unique_id: string
): Promise<Product> {
  try {
    const token = await getAccessToken();

    // Get organization_id from sessionStorage
    const organization_id = sessionStorage.getItem("organizationId");
    if (!organization_id) {
      throw new Error("Organization ID is missing from sessionStorage");
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("unique_id", unique_id);
    formData.append("organization_id", organization_id);

    const response = await fetch("/api/products/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create product");
    }

    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

export async function GetProduct(): Promise<Product> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/products/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
