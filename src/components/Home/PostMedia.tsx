import React from "react";
import type { Post } from "../../data/postData";
import { Volume2, VolumeX, Play } from "lucide-react";

export function PostMedia({ post }: { post: Post }) {
  const isVideo = post.type === "video";
  const [expanded, setExpanded] = React.useState(false);

  if (!isVideo) {
    return (
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
        <img
          src={post.src}
          alt={post.description.slice(0, 80)}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>
    );
  }

  return (
    <VideoBlock
      src={post.src}
      poster={post.poster}
      expanded={expanded}
      onExpand={() => setExpanded(true)}
    />
  );
}

function VideoBlock({
  src,
  poster,
  expanded,
  onExpand,
}: {
  src: string;
  poster?: string;
  expanded: boolean;
  onExpand: () => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [muted, setMuted] = React.useState(true);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  // Observe viewport
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        setInView(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.6 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Autoplay behavior (preview mode)
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // always keep muted state in sync
    v.muted = muted;

    if (expanded) {
      // expanded: let user watch fully
      setShowOverlay(false);
      if (inView) {
        // optional: only play when in view
        v.play().catch(() => {});
      }
      return;
    }

    // preview mode: only if in view
    if (inView) {
      setShowOverlay(false);
      // restart preview when it becomes visible again
      v.currentTime = 0;
      v.play().catch(() => {});
      const t = window.setTimeout(() => {
        // after 10 seconds, pause and show overlay
        v.pause();
        setShowOverlay(true);
      }, 10_000);

      return () => window.clearTimeout(t);
    } else {
      v.pause();
    }
  }, [inView, expanded, muted]);

  const onClickExpand = () => {
    const v = videoRef.current;
    if (!v) return;

    onExpand();
    // reset and play from start (still muted until user toggles)
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="h-auto w-full object-contain"
        // controls only in expanded mode:
        controls={expanded}
        muted={muted}
      />

      {/* Volume button */}
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
