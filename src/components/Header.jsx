import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo + Nombre */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo Siete Rosas" className="h-10 w-10 rounded-full" />
          <span className="text-lg font-serif font-semibold text-gray-800">Siete Rosas</span>
        </a>

        {/* Menú */}
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-rose-500">Inicio</a>
          <a href="/portfolio" className="hover:text-rose-500">Portfolio</a>
          <a href="/servicios" className="hover:text-rose-500">Servicios</a>
          <a href="/sobre" className="hover:text-rose-500">Sobre</a>
          <a href="/contacto" className="hover:text-rose-500">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
