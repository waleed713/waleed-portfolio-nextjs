import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";
import type { Image as SanityImage } from "sanity";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string } }) => {
      const url = urlForImage(value)?.width(1200).url();
      if (!url) return null;
      return (
        <span className="my-8 block overflow-hidden rounded-2xl border border-border">
          <Image
            src={url}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full"
          />
        </span>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-purple underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

export function PostBody({ value }: { value: unknown }) {
  return (
    <div className="prose-portfolio prose max-w-none">
      <PortableText value={value as never} components={components} />
    </div>
  );
}
