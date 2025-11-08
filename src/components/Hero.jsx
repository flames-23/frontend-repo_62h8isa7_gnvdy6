import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[90vh] items-center">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Full‑Stack Developer crafting playful, modern web experiences
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            I build interactive, scalable products with a focus on performance, accessibility, and delightful UX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">View Projects</a>
            <a href="#contact" className="rounded-md border border-white/20 px-4 py-2 font-medium hover:bg-white/10 transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
