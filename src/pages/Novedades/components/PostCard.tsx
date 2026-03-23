import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, PlayCircle, MoreHorizontal, Images } from 'lucide-react';
import type { Post } from '../../../data/postData';
import { formatDateShort } from '../../../lib/formatDate';

const labelDisplay: Record<string, string> = {
  eventos:     'Evento',
  aperturas:   'Apertura',
  promociones: 'Promoción',
};

const labelStyle: Record<string, string> = {
  eventos:     'text-blue-600',
  aperturas:   'text-emerald-600',
  promociones: 'text-primary-700',
};

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [copied, setCopied] = useState(false);

  const firstMedia = post.media[0];
  const isVideo    = firstMedia?.type === 'video';
  const mediaSrc   = isVideo
    ? (firstMedia.poster ?? '')
    : (firstMedia as { type: 'image'; src: string }).src;

  const label      = post.labels[0] ?? 'eventos';
  const labelText  = labelDisplay[label]  ?? label;
  const labelColor = labelStyle[label]    ?? 'text-zinc-500';

  const handleShare = async () => {
    const url = `${window.location.origin}/novedades/${post.slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user dismissed share sheet
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">

      {/* Author header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-zinc-100 bg-zinc-50 p-0.5 shrink-0">
            <img
              src="/logo-plaza-victoria.jpg"
              alt="Plaza Victoria"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 leading-none">Plaza Victoria</p>
            <p className="mt-0.5 text-xs text-zinc-400">
              {formatDateShort(post.date)}
              <span className="mx-1">·</span>
              <span className={`font-medium ${labelColor}`}>{labelText}</span>
            </p>
          </div>
        </div>
        <MoreHorizontal className="h-4 w-4 text-zinc-300" aria-hidden="true" />
      </div>

      {/* Media */}
      <Link to={`/novedades/${post.slug}`} className="block relative" tabIndex={-1} aria-hidden="true">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 sm:aspect-video">
          {mediaSrc ? (
            <img
              src={mediaSrc}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-zinc-100">
              <Images className="h-10 w-10 text-zinc-300" />
            </div>
          )}

          {/* Video overlay */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                <PlayCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
          )}

          {/* Multiple media indicator */}
          {post.media.length > 1 && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
              <Images className="h-3 w-3" />
              {post.media.length}
            </div>
          )}
        </div>
      </Link>

      {/* Footer */}
      <div className="px-4 pb-4 pt-3">
        {/* Share bar */}
        <div className="mb-3 flex items-center justify-between border-b border-zinc-50 pb-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-primary"
            aria-label="Compartir publicación"
          >
            <Share2 className="h-3.5 w-3.5" />
            {copied ? '¡Enlace copiado!' : 'Compartir'}
          </button>
          <Link
            to={`/novedades/${post.slug}`}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Ver más →
          </Link>
        </div>

        {/* Caption */}
        <Link to={`/novedades/${post.slug}`} className="block group">
          <p className="text-sm font-semibold text-zinc-900 leading-snug group-hover:text-primary transition-colors line-clamp-1">
            {post.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 line-clamp-2">
            {post.description.replace(/\n/g, ' ')}
          </p>
        </Link>
      </div>
    </article>
  );
}
