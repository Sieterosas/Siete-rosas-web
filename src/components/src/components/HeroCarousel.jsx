import React, { useEffect, useState } from "react";

/**
 * Uso:
 * <HeroCarousel images={[
 *  "/hero/01.webp",
 *  "/hero/02.webp",
 *  "/hero/03.webp",
 *  "/hero/04.webp",
 *  "/hero/05.webp",
 * ]}/>
 */
export default function HeroCarousel({ images = [], interval = 5000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Hero ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Capa para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Texto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow">
          FOTOGRAFÍA DE EVENTOS
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-stone-100/95">
          Fotografíamos <span className="font-semibold">historias de amor</span>. La historia la escribís
          vosotros; nosotros la contamos con imágenes.
        </p>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
