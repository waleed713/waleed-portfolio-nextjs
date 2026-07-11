export default function PostLoading() {
  return (
    <article className="section-container flex flex-col gap-8 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
        <div className="h-6 w-24 animate-pulse rounded-full bg-bg-card" />
        <div className="h-10 w-3/4 animate-pulse rounded bg-bg-card" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-bg-card" />
      </div>
      <div className="mx-auto aspect-[16/9] w-full max-w-4xl animate-pulse rounded-2xl bg-bg-card" />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full animate-pulse rounded bg-bg-card" />
        ))}
      </div>
    </article>
  );
}
