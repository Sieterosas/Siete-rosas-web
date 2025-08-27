import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        
        {/* Logo + Marca */}
        <a href="/" className="flex items-center space-x-5">
          <img src="/logo.png" alt="Logo Siete Rosas" className="h-20 w-20 rounded-full object-cover" />
          <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">
            Siete Rosas <span className="text-black">| Fotografía</span>
          </span>
        </a>

        {/* Menú */}
        <nav className="space-x-8 text-base font-medium text-gray-700">
          <a href="/" className="hover:text-rose-600 transition">Inicio</a>
          <a href="/portfolio" className="hover:text-rose-600 transition">Portfolio</a>
          <a href="/servicios" className="hover:text-rose-600 transition">Servicios</a>
          <a href="/sobre" className="hover:text-rose-600 transition">Sobre</a>
          <a href="/contacto" className="hover:text-rose-600 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

