import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";

const isConfigured = projectId !== "placeholder" && /^[a-z0-9-]+$/.test(projectId);

export const client = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
    })
  : null;

/**
 * Thin wrapper around client.fetch that never throws during build if
 * Sanity isn't configured yet. This lets the rest of the site (portfolio
 * sections, sitemap, etc.) build and run even before the CMS is connected —
 * the blog will simply show an empty state.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags },
    });
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}
