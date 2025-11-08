import { useEffect, useState } from 'react';

const projectsData = [
  {
    title: 'Realtime Chat App',
    description: 'WebSocket-powered chat with authentication and message persistence.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    link: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'Headless storefront with product search, cart, and Stripe checkout.',
    tags: ['Next.js', 'FastAPI', 'Stripe', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Custom data visualizations with role-based access and export tools.',
    tags: ['React', 'D3', 'FastAPI', 'PostHog'],
    link: '#'
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10">
      {children}
    </span>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-white/70 mt-2">A selection of recent work showcasing end-to-end product building.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block rounded-md border border-white/20 px-4 py-2 font-medium hover:bg-white/10 transition">Work with me</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, idx) => (
            <a key={idx} href={p.link} className={`group relative rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06] ${mounted ? 'opacity-100' : 'opacity-0'} duration-700`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 ring-1 ring-inset ring-white/10 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-white/70 mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
