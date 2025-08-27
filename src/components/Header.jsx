import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const lastY = useRef(0);

  // Oculta al bajar, muestra al subir
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) < 5) return;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-stone-200 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Marca */}
        <a href="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Logo Sieterosas"
            className="h-24 w-24 rounded-full object-cover shrink-0"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold tracking-wide text-gray-600 text-2xl">
              Sieterosas
            </span>
            <span className="font-serif font-medium text-black text-xl">
              | Fotografía
            </span>
          </div>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
          <a href="/" className="hover:text-rose-600 transition">Inicio</a>

          {/* Portfolio con desplegable */}
          <div className="relative group">
            <a href="/portfolio" className="hover:text-rose-600 transition">Portfolio</a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                            absolute left-0 mt-3 w-56 rounded-xl border border-stone-200 bg-white shadow-lg p-2">
              <a href="/portfolio/bodas" className="block px-3 py-2 rounded-lg hover:bg-stone-50">Bodas</a>
              <a href="/portfolio/comuniones" className="block px-3 py-2 rounded-lg hover:bg-stone-50">Comuniones</a>
              <a href="/portfolio/newborn" className="block px-3 py-2 rounded-lg hover:bg-stone-50">Newborn</a>
              <a href="/portfolio/eventos" className="block px-3 py-2 rounded-lg hover:bg-stone-50">Eventos</a>
            </div>
          </div>

          <a href="/sobre" className="hover:text-rose-600 transition">Sobre mí</a>
          <a href="/contacto" className="hover:text-rose-600 transition">Contacto</a>
        </nav>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Abrir menú"
          onClick={() => {
            setMobileOpen(v => !v);
            if (mobileOpen) setMobilePortfolioOpen(false);
          }}
        >
          <div className="w-7 h-[2px] bg-stone-900 mb-1" />
          <div className="w-7 h-[2px] bg-stone-900 mb-1" />
          <div className="w-7 h-[2px] bg-stone-900" />
        </button>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col text-stone-800">
            <a href="/" className="py-3 border-b border-stone-100">Inicio</a>

            {/* Portfolio móvil con submenú */}
            <button
              className="py-3 text-left border-b border-stone-100 flex items-center justify-between"
              onClick={() => setMobilePortfolioOpen(v => !v)}
              aria-expanded={mobilePortfolioOpen}
            >
              <span>Portfolio</span>
              <span className={`transition ${mobilePortfolioOpen ? "rotate-90" : ""}`}>›</span>
            </button>
            {mobilePortfolioOpen && (
              <div className="pl-4 pb-2">
                <a href="/portfolio/bodas" className="block py-2">Bodas</a>
                <a href="/portfolio/comuniones" className="block py-2">Comuniones</a>
                <a href="/portfolio/newborn" className="block py-2">Newborn</a>
                <a href="/portfolio/eventos" className="block py-2">Eventos</a>
              </div>
            )}

            <a href="/sobre" className="py-3 border-t border-stone-100">Sobre mí</a>
            <a href="/contacto" className="py-3 border-t border-stone-100">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}
