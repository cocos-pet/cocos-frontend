import { API_BASE_URL } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";
import { components } from "@type/schema";

type PostDetail = components["schemas"]["PostDetailResponse"];

export async function getPostServer(postId: number): Promise<PostDetail | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${API_PATH.POST}/${postId}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}
