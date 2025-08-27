import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Oculta al bajar, muestra al subir
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) < 5) return; // filtro ruido
      setHidden(y > lastY.current && y > 80);      // oculto si voy hacia abajo
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "/", label: "Inicio" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/sobre", label: "Sobre mí" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-stone-200 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Marca 70/30: logo grande + texto compacto en una línea */}
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
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-rose-600 transition">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-7 h-[2px] bg-stone-900 mb-1" />
          <div className="w-7 h-[2px] bg-stone-900 mb-1" />
          <div className="w-7 h-[2px] bg-stone-900" />
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="py-3 text-stone-800 border-b border-stone-100 last:border-none"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
