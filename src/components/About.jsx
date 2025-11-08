export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
        <p className="mt-4 text-white/80">
          I’m a full‑stack developer who loves crafting thoughtful products from pixel to production. I work across the stack with modern tooling, CI/CD, testing, and cloud deployments. My sweet spot is building playful interactions that feel fast and polished, while keeping codebases maintainable and scalable.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-white/60">Core</p>
            <p className="mt-1">TypeScript, Python, React, FastAPI</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-white/60">Cloud & Data</p>
            <p className="mt-1">AWS, Docker, MongoDB, PostgreSQL</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-white/60">DX</p>
            <p className="mt-1">Vite, Vitest, Playwright, CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
