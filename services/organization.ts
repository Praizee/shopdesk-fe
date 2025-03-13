import { getAccessToken } from "@/app/api/token";

type OrganizationItem = {
  id: string;
  name: string;
  mission: string;
  vision: string;
  initials: string | null;
  currency_code: string;
  business_type: string;
  tagline: string;
  slug: string;
  image_url: string;
  is_deleted: boolean;
  date_created: string;
  last_updated: string;
  date_created_db: string;
  last_updated_db: string;
};

type OrganizationResponse = {
  data: OrganizationItem[];
};

export async function GetOrganization(): Promise<OrganizationResponse> {
  try {
    const token = await getAccessToken();

    const response = await fetch(`/api/auth/organization`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch organizations");
    }

    const result: OrganizationResponse = await response.json();

    // Save the first organization's ID and name to sessionStorage
    if (result.data.length > 0) {
      const firstOrg = result.data[0];

      // Save to sessionStorage for client-side use
      // sessionStorage.setItem("organizationId", firstOrg.id);
      // sessionStorage.setItem("organizationName", firstOrg.name);

      // Set cookies for server-side access
      document.cookie = `organizationId=${firstOrg.id}; path=/; max-age=900`; // expires in 15 minutes
      document.cookie = `organizationName=${firstOrg.name}; path=/; max-age=900`; // 86400 - 1 day
    }

    return result;
  } catch (error) {
    console.error("Error fetching organizations:", error);
    throw error;
  }
}

// export async function GetOrganization(): Promise<OrganizationResponse> {
//   try {
//     const token = await getAccessToken();

//     const response = await fetch(`/api/auth/organization`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to fetch organizations");
//     }

//     const result: OrganizationResponse = await response.json();

//     // Save the first organization's ID, and name to sessionStorage
//     if (result.data.length > 0) {
//         const firstOrg = result.data[0];
//         sessionStorage.setItem("organizationId", firstOrg.id);
//         sessionStorage.setItem("organizationName", firstOrg.name);
//         // console.log("Saved Organization:", firstOrg.id, firstOrg.name);
//       }

//     return result;
//   } catch (error) {
//     console.error("Error fetching organizations:", error);
//     throw error;
//   }
// }
