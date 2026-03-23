import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, Calendar, Store, Tag } from 'lucide-react';
import { postsData } from '../../data/postData';
import PostCard from './components/PostCard';

const SITE_URL = 'https://plazavictoria.mx';

const filters = [
  { key: null,          label: 'Todos',       icon: LayoutGrid },
  { key: 'eventos',     label: 'Eventos',     icon: Calendar },
  { key: 'aperturas',   label: 'Aperturas',   icon: Store },
  { key: 'promociones', label: 'Promociones', icon: Tag },
] as const;

type FilterKey = 'eventos' | 'aperturas' | 'promociones' | null;

export default function Novedades() {
  const [active, setActive] = useState<FilterKey>(null);

  const filtered = useMemo(
    () =>
      active
        ? postsData.filter((p) => p.labels.includes(active))
        : postsData,
    [active],
  );

  return (
    <>
      <Helmet>
        <title>Novedades | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Entérate de los últimos eventos, aperturas y promociones de Plaza Victoria en Ixmiquilpan, Hidalgo."
        />
        <link rel="canonical" href={`${SITE_URL}/novedades`} />
        <meta property="og:title"       content="Novedades | Plaza Victoria" />
        <meta property="og:description" content="Eventos, aperturas y promociones en Plaza Victoria Ixmiquilpan." />
        <meta property="og:url"         content={`${SITE_URL}/novedades`} />
        <meta property="og:type"        content="website" />
      </Helmet>

      <div className="mx-auto max-w-2xl px-4 py-10 md:px-6">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">Novedades</h1>
          <p className="mt-2 text-zinc-500">
            Eventos, aperturas y promociones en Plaza Victoria.
          </p>
        </div>

        {/* Category filter — horizontal scroll */}
        <div
          className="mb-8 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filtrar publicaciones"
        >
          {filters.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={label}
                onClick={() => setActive(key as FilterKey)}
                aria-pressed={isActive}
                className="flex shrink-0 flex-col items-center gap-1.5 focus-visible:outline-none"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-zinc-200 bg-white text-zinc-400 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-zinc-500'}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feed */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-5">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-base font-semibold text-zinc-700">No hay publicaciones en esta categoría.</p>
            <button
              onClick={() => setActive(null)}
              className="mt-3 text-sm font-medium text-primary hover:underline"
            >
              Ver todas
            </button>
          </div>
        )}
      </div>
    </>
  );
}
