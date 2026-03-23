import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Share2, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { postsData } from '../../data/postData';
import { formatDate } from '../../lib/formatDate';

const SITE_URL = 'https://plazavictoria.mx';

const labelDisplay: Record<string, string> = {
  eventos:     'Evento',
  aperturas:   'Apertura',
  promociones: 'Promoción',
};
const labelStyle: Record<string, string> = {
  eventos:     'text-blue-700   bg-blue-50',
  aperturas:   'text-emerald-700 bg-emerald-50',
  promociones: 'text-primary-700 bg-primary-50',
};

export default function NovedadDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const post = postsData.find((p) => p.slug === slug);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [copied, setCopied]         = useState(false);
  const [playing, setPlaying]       = useState(false);
  const [posterError, setPosterError] = useState(false);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-lg font-semibold text-zinc-700">Publicación no encontrada.</p>
        <Link to="/novedades" className="mt-4 text-sm font-medium text-primary hover:underline">
          Ver novedades
        </Link>
      </div>
    );
  }

  const url     = `${SITE_URL}/novedades/${post.slug}`;
  const ogImage = post.shareImage ? `${SITE_URL}${post.shareImage}` : undefined;
  const label   = post.labels[0] ?? 'eventos';
  const current = post.media[mediaIndex];
  const hasMany = post.media.length > 1;

  const prev = () => { setMediaIndex((i) => Math.max(0, i - 1)); setPlaying(false); setPosterError(false); };
  const next = () => { setMediaIndex((i) => Math.min(post.media.length - 1, i + 1)); setPlaying(false); setPosterError(false); };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // dismissed
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Plaza Victoria`}</title>
        <meta name="description" content={post.description.slice(0, 160).replace(/\n/g, ' ')} />
        <link rel="canonical" href={url} />
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={post.title} />
        <meta property="og:description" content={post.description.slice(0, 160).replace(/\n/g, ' ')} />
        <meta property="og:url"         content={url} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={post.title} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context':      'https://schema.org',
            '@type':         'Article',
            headline:        post.title,
            datePublished:   post.date,
            publisher: {
              '@type': 'Organization',
              name:    'Plaza Victoria',
              url:     SITE_URL,
            },
            ...(ogImage && { image: ogImage }),
          })}
        </script>
      </Helmet>

      <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">

        {/* Back */}
        <Link
          to="/novedades"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Novedades
        </Link>

        <article className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">

          {/* Author header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-100 bg-zinc-50 p-0.5">
                <img src="/logo-plaza-victoria.jpg" alt="Plaza Victoria" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Plaza Victoria</p>
                <p className="text-xs text-zinc-400">{formatDate(post.date)}</p>
              </div>
            </div>
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${labelStyle[label]}`}>
              {labelDisplay[label]}
            </span>
          </div>

          {/* Media */}
          <div className="relative bg-zinc-900">
            {current.type === 'image' ? (
              <img
                src={current.src}
                alt={current.alt ?? post.title}
                className="w-full object-contain max-h-[70vh] min-h-[30vh]"
              />
            ) : (
              <div className="relative min-h-[40vh] flex items-center justify-center">
                {!playing ? (
                  <>
                    {current.poster && !posterError ? (
                      <img
                        src={current.poster}
                        alt={post.title}
                        className="w-full object-contain max-h-[70vh]"
                        onError={() => setPosterError(true)}
                      />
                    ) : (
                      <div className="w-full min-h-[40vh]" />
                    )}
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20"
                      aria-label="Reproducir video"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform hover:scale-110">
                        <PlayCircle className="h-9 w-9 text-primary" />
                      </div>
                    </button>
                  </>
                ) : (
                  <video
                    src={current.src}
                    poster={current.poster}
                    controls
                    autoPlay
                    className="w-full max-h-[70vh]"
                  />
                )}
              </div>
            )}

            {/* Carousel controls */}
            {hasMany && (
              <>
                <button
                  onClick={prev}
                  disabled={mediaIndex === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm disabled:opacity-30 transition-opacity hover:bg-black/70"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  disabled={mediaIndex === post.media.length - 1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm disabled:opacity-30 transition-opacity hover:bg-black/70"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {post.media.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setMediaIndex(i); setPlaying(false); setPosterError(false); }}
                      className={`h-1.5 rounded-full transition-all ${
                        i === mediaIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="px-4 pb-6 pt-4">
            {/* Share */}
            <div className="mb-4 flex items-center justify-between border-b border-zinc-50 pb-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-primary"
              >
                <Share2 className="h-3.5 w-3.5" />
                {copied ? '¡Enlace copiado!' : 'Compartir publicación'}
              </button>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-zinc-900 leading-snug md:text-2xl">
              {post.title}
            </h1>

            {/* Description */}
            <div className="mt-3 space-y-2">
              {post.description.split('\n').filter(Boolean).map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-zinc-600">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Back CTA */}
        <div className="mt-6 text-center">
          <Link
            to="/novedades"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← Ver todas las novedades
          </Link>
        </div>
      </div>
    </>
  );
}
