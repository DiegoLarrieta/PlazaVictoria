import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tag } from 'lucide-react';
import { postsData } from '../../data/postData';
import SectionLabel from '../../components/ui/SectionLabel';
import OfertaCard from './components/OfertaCard';

const SITE_URL = 'https://plazavictoria.mx';

// Only active posts tagged as promociones
const ofertasPosts = postsData.filter((p) => p.labels.includes('promociones') && p.active !== false);

export default function Ofertas() {
  // Sorted by date descending (most recent first)
  const sorted = useMemo(
    () => [...ofertasPosts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  return (
    <>
      <Helmet>
        <title>Ofertas y Promociones | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Descubre las mejores ofertas y promociones de las tiendas de Plaza Victoria en Ixmiquilpan, Hidalgo. Descuentos exclusivos en moda, calzado, joyería y más."
        />
        <link rel="canonical" href={`${SITE_URL}/ofertas`} />
        <meta property="og:title"       content="Ofertas y Promociones | Plaza Victoria" />
        <meta property="og:description" content="Descuentos exclusivos de las tiendas de Plaza Victoria." />
        <meta property="og:url"         content={`${SITE_URL}/ofertas`} />
        <meta property="og:type"        content="website" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-3 w-3" />
                Ofertas Exclusivas
              </span>
            </SectionLabel>
            <h1 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
              Descuentos &amp; Promociones
            </h1>
            <p className="mt-2 max-w-lg text-zinc-500">
              Descubre las mejores ofertas seleccionadas de las tiendas de Plaza Victoria.
              Tus marcas favoritas, ahora con precios inmejorables.
            </p>
          </div>

          {/* Count badge */}
          <div className="shrink-0 rounded-full border border-primary/20 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
            {sorted.length} {sorted.length === 1 ? 'promoción disponible' : 'promociones disponibles'}
          </div>
        </div>

        {/* Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <OfertaCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 py-24 text-center">
            <Tag className="mb-3 h-10 w-10 text-zinc-200" />
            <p className="text-base font-semibold text-zinc-700">
              No hay promociones activas en este momento.
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Vuelve pronto, ¡tendremos novedades para ti!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
