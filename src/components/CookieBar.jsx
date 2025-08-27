
import { useEffect, useState } from 'react';
export default function CookieBar() {
  const KEY='sr_cookies_ok'; const [show,setShow]=useState(false);
  useEffect(()=>{ const ok=typeof window!=='undefined' && localStorage.getItem(KEY); if(!ok) setShow(true); },[]);
  if(!show) return null;
  return (<div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 border-t border-stone-200 p-4 flex flex-col md:flex-row items-center gap-3 justify-between">
    <p className="text-sm text-stone-700 max-w-3xl">Este sitio utiliza cookies para mejorar tu experiencia. Si continúas navegando, aceptas su uso.</p>
    <button onClick={()=>{ localStorage.setItem(KEY,'1'); setShow(false); }} className="px-4 py-2 rounded-xl bg-stone-900 text-white text-sm">OK</button>
  </div>);
}
