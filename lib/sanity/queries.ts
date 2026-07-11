import { groq } from "next-sanity";

// Shared projection used by list + detail queries
const postFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "author": author->{name, image, bio},
  "categories": categories[]->{title, "slug": slug.current},
  "tags": tags
`;

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && defined(slug.current) && $category in categories[]->slug.current] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields},
    body
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current
  }
`;

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: import("sanity").Image;
  publishedAt: string;
  estimatedReadingTime?: number;
  author?: {
    name: string;
    image?: import("sanity").Image;
    bio?: unknown;
  };
  categories?: { title: string; slug: string }[];
  tags?: string[];
  body?: unknown;
};
