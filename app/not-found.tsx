import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <span className="text-gradient text-7xl font-bold">404</span>
      <h1 className="text-2xl">Page not found</h1>
      <p className="max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-border-glass bg-bg-card px-6 py-2.5 font-medium text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
