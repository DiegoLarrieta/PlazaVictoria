import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Heart } from 'lucide-react';
import type { Post } from '../../../data/postData';
import { formatDate } from '../../../lib/formatDate';

interface OfertaCardProps {
  post: Post;
}

export default function OfertaCard({ post }: OfertaCardProps) {
  const firstMedia = post.media[0];
  const imgSrc =
    post.shareImage ||
    (firstMedia?.type === 'image'
      ? firstMedia.src
      : firstMedia?.type === 'video'
      ? firstMedia.poster ?? ''
      : '');

  return (
    <Link
      to={`/novedades/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={post.title}
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-48 w-full bg-zinc-100" />
        )}

        {/* PROMO badge */}
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
          Promoción
        </span>

        {/* Heart — decorative */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
          <Heart className="h-3.5 w-3.5 text-zinc-300" />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="text-sm font-bold leading-snug text-zinc-900 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description snippet */}
        <p className="text-xs leading-relaxed text-zinc-500 line-clamp-2 flex-1">
          {post.description.replace(/\n/g, ' ')}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-50 pt-3">
          <span className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            Ver más
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
