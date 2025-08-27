
import { useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const nav=[{href:'/',label:'Inicio'},{href:'/#portfolio',label:'Portfolio'},{href:'/servicios',label:'Servicios'},{href:'/sobre',label:'Sobre'},{href:'/contacto',label:'Contacto'}];
  return (<header className="sticky top-0 z-50 backdrop-blur bg-stone-50/90 border-b border-stone-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-stone-400" aria-hidden />
        <span className="font-serif text-lg"><span className="font-light">Siete </span><span className="font-medium">Rosas</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-8">{nav.map(n=>(<a key={n.href} href={n.href} className="text-sm hover:opacity-80">{n.label}</a>))}</nav>
      <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Abrir menú"><div className="w-6 h-[2px] bg-stone-900 mb-1"/><div className="w-6 h-[2px] bg-stone-900 mb-1"/><div className="w-6 h-[2px] bg-stone-900"/></button>
    </div>
    {open&&(<div className="md:hidden border-t border-stone-200 bg-stone-50"><div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">{nav.map(n=>(<a key={n.href} href={n.href} className="py-2" onClick={()=>setOpen(false)}>{n.label}</a>))}</div></div>)}
  </header>);
}
