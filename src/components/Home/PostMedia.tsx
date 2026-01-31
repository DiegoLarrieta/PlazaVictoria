import React from "react";
import type { Post, PostMediaItem } from "../../data/postData";
import { Volume2, VolumeX, Play } from "lucide-react";

export function PostMedia({ post }: { post: Post }) {
  const items = post.media ?? [];
  const [index, setIndex] = React.useState(0);

  // Reset al cambiar de post
  React.useEffect(() => {
    setIndex(0);
  }, [post.id]);

  if (items.length === 0) return null;

  // Caso simple: un solo media
  if (items.length === 1) {
    return (
      <SingleMedia
        item={items[0]}
        title={post.title}
        description={post.description}
      />
    );
  }

  // Carrusel
  const canPrev = index > 0;
  const canNext = index < items.length - 1;

  const prev = () => canPrev && setIndex((i) => i - 1);
  const next = () => canNext && setIndex((i) => i + 1);

  // Swipe mobile (simple)
  const startX = React.useRef<number | null>(null);
  const startY = React.useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const sx = startX.current;
    const sy = startY.current;
    if (sx == null || sy == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;

    // Solo si fue más horizontal que vertical (para no romper el scroll)
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }

    startX.current = null;
    startY.current = null;
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-none">
              {/* ✅ aspect-video fijo para consistencia y evitar CLS */}
              <div className="aspect-video w-full">
                <SingleMedia
                  item={item}
                  title={post.title}
                  description={post.description}
                  // ✅ Solo el slide activo puede autoplay/preview
                  isActive={i === index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas SIEMPRE visibles */}
      <button
        type="button"
        onClick={prev}
        disabled={!canPrev}
        aria-label="Anterior"
        className={[
          "absolute left-3 top-1/2 -translate-y-1/2",
          "h-10 w-10 rounded-full bg-black/55 text-white backdrop-blur",
          "flex items-center justify-center",
          "disabled:opacity-40 disabled:cursor-not-allowed",
        ].join(" ")}
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        disabled={!canNext}
        aria-label="Siguiente"
        className={[
          "absolute right-3 top-1/2 -translate-y-1/2",
          "h-10 w-10 rounded-full bg-black/55 text-white backdrop-blur",
          "flex items-center justify-center",
          "disabled:opacity-40 disabled:cursor-not-allowed",
        ].join(" ")}
      >
        ›
      </button>

      {/* Puntitos indicativos */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={[
              "h-2 w-2 rounded-full",
              i === index ? "bg-zinc-900" : "bg-zinc-300",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

function SingleMedia({
  item,
  title,
  description,
  isActive = true,
}: {
  item: PostMediaItem;
  title: string;
  description: string;
  isActive?: boolean;
}) {
  if (item.type === "video") {
    return <VideoBlock src={item.src} poster={item.poster} isActive={isActive} />;
  }

  // ✅ Posters (flyers) se muestran completos (contain) para no recortar texto
  const isPoster = item.src.includes("/feed/Posters/");

  return (
    <div className={["h-full w-full", isPoster ? "bg-black" : "bg-zinc-50"].join(" ")}>
      <img
        src={item.src}
        alt={item.alt ?? title ?? description.slice(0, 80)}
        loading="lazy"
        decoding="async"
        className={[
          "h-full w-full",
          isPoster ? "object-contain" : "object-cover",
        ].join(" ")}
      />
    </div>
  );
}

function VideoBlock({
  src,
  poster,
  isActive,
}: {
  src: string;
  poster?: string;
  isActive: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [muted, setMuted] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  // Observe viewport
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold: 0.6 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Sync muted state
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
  }, [muted]);

  // ✅ Behavior:
  // - Si no está activo (slide no visible): PAUSA y quita overlay (sin reset)
  // - Si no está en viewport: PAUSA (sin reset)
  // - Preview: autoplay (muted) por 10s y overlay, sin reset automático
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (!isActive) {
      v.pause();
      setShowOverlay(false);
      return;
    }

    if (!inView) {
      v.pause();
      return;
    }

    if (expanded) {
      setShowOverlay(false);
      v.play().catch(() => {});
      return;
    }

    // Preview mode (10s)
    setShowOverlay(false);

    // ✅ Ya NO reseteamos v.currentTime = 0 aquí (solo pause/resume)
    v.play().catch(() => {});

    const t = window.setTimeout(() => {
      v.pause();
      setShowOverlay(true);
    }, 10_000);

    return () => window.clearTimeout(t);
  }, [inView, expanded, isActive]);

  const onClickExpand = () => {
    const v = videoRef.current;
    if (!v) return;

    setExpanded(true);
    setShowOverlay(false);

    // ✅ Al expandir sí empezamos desde el inicio
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
        controls={expanded}
        muted={muted}
      />

      {/* Volume toggle */}
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/70"
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        title={muted ? "Activar sonido" : "Silenciar"}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      {/* Overlay after 10s preview */}
      {!expanded && showOverlay && (
        <div className="absolute inset-0 grid place-items-center bg-black/45">
          <button
            type="button"
            onClick={onClickExpand}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow hover:bg-zinc-100"
          >
            <Play className="h-4 w-4" />
            Ver video completo
          </button>
        </div>
      )}
    </div>
  );
}
