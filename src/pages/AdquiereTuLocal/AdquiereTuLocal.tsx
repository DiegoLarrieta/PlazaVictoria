import { useState, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, KeyRound, Tag } from 'lucide-react';
import { availableSpaces } from '../../data/spacesData';
import SectionLabel from '../../components/ui/SectionLabel';
import SpaceCard from './components/SpaceCard';
import ContactForm from './components/ContactForm';

const SITE_URL = 'https://plazavictoria.mx';

type FilterType = 'todos' | 'renta' | 'venta';

const filters: { key: FilterType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'todos', label: 'Todos',    icon: LayoutGrid },
  { key: 'renta', label: 'En Renta', icon: KeyRound },
  { key: 'venta', label: 'En Venta', icon: Tag },
];

export default function AdquiereTuLocal() {
  const [activeFilter, setActiveFilter]     = useState<FilterType>('todos');
  const [selectedUnit, setSelectedUnit]     = useState('');
  const formRef                             = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      activeFilter === 'todos'
        ? availableSpaces
        : availableSpaces.filter((s) => s.type === activeFilter),
    [activeFilter],
  );

  const handleRequestInfo = (unit: string) => {
    setSelectedUnit(unit);
    // Small delay so state updates before scroll
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <Helmet>
        <title>Adquiere tu Local | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Locales comerciales en renta y venta en Plaza Victoria, Ixmiquilpan. Espacios modernos con alta plusvalía y ubicación estratégica en el corazón del Valle del Mezquital."
        />
        <link rel="canonical" href={`${SITE_URL}/adquiere-tu-local`} />
        <meta property="og:title"       content="Adquiere tu Local | Plaza Victoria Ixmiquilpan" />
        <meta property="og:description" content="Locales comerciales en renta y venta con alta plusvalía en Ixmiquilpan." />
        <meta property="og:url"         content={`${SITE_URL}/adquiere-tu-local`} />
        <meta property="og:type"        content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type':    'RealEstateAgent',
            name:       'Plaza Victoria — Locales Comerciales',
            url:        `${SITE_URL}/adquiere-tu-local`,
            address: {
              '@type':         'PostalAddress',
              streetAddress:   'C. Peña y Ramírez 3',
              addressLocality: 'Ixmiquilpan',
              addressRegion:   'Hidalgo',
              postalCode:      '42300',
              addressCountry:  'MX',
            },
          })}
        </script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">

        {/* ── Header ───────────────────────────────────── */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <SectionLabel>Oportunidades Comerciales</SectionLabel>
            <h1 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
              Adquiere tu Local en Plaza Victoria
            </h1>
            <p className="mt-3 text-zinc-500 leading-relaxed">
              Haz crecer tu negocio en el centro comercial más moderno de Ixmiquilpan.
              Locales con alta plusvalía, ubicación estratégica y promoción digital incluida.
            </p>
          </div>

          {/* "Custom space" banner */}
          <div className="flex items-center justify-between rounded-2xl border border-primary/20 bg-primary-50 p-5">
            <div>
              <p className="text-sm font-semibold text-zinc-900">¿Buscas un espacio personalizado?</p>
              <p className="mt-0.5 text-xs text-zinc-500">
                Nuestro equipo de gestión está aquí para ayudarte.
              </p>
            </div>
            <button
              onClick={() => handleRequestInfo('')}
              className="ml-4 shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contactar
            </button>
          </div>
        </div>

        {/* ── Filter tabs ───────────────────────────────── */}
        <div
          className="mb-8 flex gap-2 border-b border-zinc-100 pb-0"
          role="group"
          aria-label="Filtrar por tipo"
        >
          {filters.map(({ key, label, icon: Icon }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${isActive ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                  {key === 'todos'
                    ? availableSpaces.length
                    : availableSpaces.filter((s) => s.type === key).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Spaces grid ──────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((space) => (
              <SpaceCard
                key={space.id}
                space={space}
                onRequestInfo={handleRequestInfo}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 py-20 text-center">
            <p className="text-base font-semibold text-zinc-700">
              No hay locales disponibles en esta categoría.
            </p>
            <button
              onClick={() => setActiveFilter('todos')}
              className="mt-3 text-sm font-medium text-primary hover:underline"
            >
              Ver todos los locales
            </button>
          </div>
        )}

        {/* ── Divider ──────────────────────────────────── */}
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            ¿Te interesa algún local?
          </span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* ── Contact form ──────────────────────────────── */}
        <ContactForm ref={formRef} preselectedUnit={selectedUnit} />
      </div>
    </>
  );
}
