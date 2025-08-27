import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/portfolio/bodas", label: "Bodas" },
    { href: "/portfolio/comuniones", label: "Comuniones" },
    { href: "/portfolio/newborn", label: "Newborn" },
    { href: "/portfolio/eventos", label: "Eventos" }, // usa "Social" si prefieres solo cambiando el label
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-stone-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Marca 70/30: logo grande + texto compacto */}
        <a href="/" className="flex items-center gap-4">
          {/* LOGO (≈70% protagonismo) */}
          <img
            src="/logo.png"
            alt="Logo Sieterosas"
            className="h-24 w-24 rounded-full object-cover shrink-0"
          />

          {/* TEXTO (≈30% protagonismo) */}
          <div className="leading-none">
            <span className="block font-serif font-bold tracking-wide text-gray-500 text-xl md:text-2xl">
              Sieterosas
            </span>
            <span className="block font-serif font-semibold text-black text-lg md:text-xl">
              | Fotografía
            </span>
          </div>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-rose-600 transition">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa (móvil) */}
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

      {/* Menú móvil desplegable */}
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


