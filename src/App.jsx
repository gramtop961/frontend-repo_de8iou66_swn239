import Hero from './components/Hero';
import Program from './components/Program';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#00FFFF]/30 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00FFFF] shadow-[0_6px_20px_rgba(0,102,255,0.35)]" />
            <span className="text-sm font-semibold tracking-wide">CREAiT</span>
          </div>
          <div className="hidden gap-6 text-sm text-[#666666] sm:flex">
            <a href="#program" className="hover:text-[#1A1A1A] transition">Program</a>
            <a href="#why" className="hover:text-[#1A1A1A] transition">Why Us</a>
            <a href="#apply" className="text-[#FF3366] font-semibold">Apply</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="program"><Program /></div>
        <div id="why"><WhyUs /></div>
        <div id="apply"><CTA /></div>
      </main>

      <footer className="border-t border-[#00FFFF]/30 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#666666] flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} CREAiT. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a className="hover:text-[#1A1A1A]" href="#">Privacy</a>
            <a className="hover:text-[#1A1A1A]" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
