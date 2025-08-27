
export default function FloatingWhatsApp({ phone='34600000000', text='Hola, me gustaría información', label='WhatsApp' }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (<a href={url} target="_blank" rel="noopener" aria-label={label} className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full bg-amber-300/90 hover:bg-amber-300 text-stone-900 flex items-center justify-center shadow-lg">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.9A10 10 0 0 0 3 20l.6 2.2 2.3-.6A10 10 0 1 0 20 3.9ZM8.7 7.8c-.2 0-.6.1-.8.4-.2.2-.8.7-.8 1.7s.8 2.1.9 2.2c.1.1 1.6 2.6 3.9 3.6 2.3 1 2.4.7 2.8.7.4 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.7-.4s-1.3-.6-1.5-.7c-.2-.1-.4-.1-.6.2-.2.2-.6.7-.7.8-.1.1-.3.1-.5 0-.2-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.4 0-.2 0-.3 0-.4 0-.1-.1-.3-.2-.4-.1-.1-.5-1-1.1-1Z"/></svg>
  </a>);
}
