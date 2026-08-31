export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-serif tracking-widest text-[#c9a962]">
              SR SPA
            </div>
            <p className="text-xs text-white/50 tracking-widest uppercase mt-1">
              Spa & Massage · Pune
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <a href="#home" className="hover:text-[#c9a962] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#c9a962] transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#c9a962] transition-colors"
            >
              Services
            </a>
            <a
              href="#offers"
              className="hover:text-[#c9a962] transition-colors"
            >
              Offers
            </a>
            <a
              href="#contact"
              className="hover:text-[#c9a962] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-sm text-white/40 text-center md:text-right">
            © {new Date().getFullYear()} SR Spa Pune.
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
