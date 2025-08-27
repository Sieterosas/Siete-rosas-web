import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-28">

        {/* Bloque logo + texto */}
        <a href="/" className="flex items-center gap-4">
          {/* Logo más grande */}
          <div className="shrink-0">
            <img
              src="/logo.png"
              alt="Logo Sieterosas"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>

          {/* Texto en la misma línea */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold tracking-wide text-gray-600 text-2xl">
              Sieterosas
            </span>
            <span className="font-serif font-medium text-black text-xl">
              | Fotografía
            </span>
          </div>
        </a>

        {/* Menú a la derecha */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
          <a href="/" className="hover:text-rose-600 transition">Inicio</a>
          <a href="/portfolio" className="hover:text-rose-600 transition">Portfolio</a>
          <a href="/sobre" className="hover:text-rose-600 transition">Sobre mí</a>
          <a href="/contacto" className="hover:text-rose-600 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}


