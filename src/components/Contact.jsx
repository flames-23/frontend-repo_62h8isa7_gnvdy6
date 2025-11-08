import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // For now just simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
        <p className="mt-2 text-white/80">Have a project in mind or want to collaborate? Let’s talk.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input required name="name" placeholder="Your name" className="rounded-lg bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400" />
          <input required type="email" name="email" placeholder="Email" className="rounded-lg bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea required name="message" placeholder="Tell me about your project" rows={5} className="rounded-lg bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400" />
          <div className="flex items-center gap-3">
            <button type="submit" className="rounded-md bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition">Send</button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
