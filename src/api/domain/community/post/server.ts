import { cache } from "react";
import * as Sentry from "@sentry/nextjs";
import { API_BASE_URL } from "@api/index.ts";
import { API_PATH } from "@api/constants/apiPath.ts";
import { components } from "@type/schema";

type PostDetail = components["schemas"]["PostDetailResponse"];

export const getPostServer = cache(async (postId: number): Promise<PostDetail | null> => {
  try {
    return await Sentry.startSpan(
      {
        name: "getPostServer",
        op: "http.client",
      },
      async () => {
        const res = await fetch(`${API_BASE_URL}/${API_PATH.POST}/${postId}`, {
          next: { revalidate: 300 },
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data ?? null;
      },
    );
  } catch (error) {
    Sentry.captureException(error);
    return null;
  }
});
