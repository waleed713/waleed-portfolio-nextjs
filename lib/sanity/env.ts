export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === "") {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[sanity/env] ${errorMessage} — using a placeholder for now.`);
    }
    // Fall back to a placeholder during build/dev when Sanity isn't configured yet,
    // so the rest of the site can still be built and previewed.
    return "placeholder" as unknown as T;
  }
  return v;
}
