export default function BlogLoading() {
  return (
    <section className="section-container flex flex-col gap-10 py-16">
      <div className="mx-auto h-10 w-48 animate-pulse rounded-lg bg-bg-card" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-border">
            <div className="aspect-[8/5] w-full animate-pulse bg-bg-card" />
            <div className="flex flex-col gap-3 p-6">
              <div className="h-4 w-20 animate-pulse rounded bg-bg-card" />
              <div className="h-5 w-full animate-pulse rounded bg-bg-card" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-bg-card" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
