import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
            <Code2 className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
