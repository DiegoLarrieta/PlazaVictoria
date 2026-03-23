import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { negocios } from '../../data/negociosData';
import TiendaCard from './components/TiendaCard';

const SITE_URL = 'https://plazavictoria.mx';

// Derive unique categories from data — order matters for display
const CATEGORY_ORDER = ['Calzado', 'Ropa', 'Gorras', 'Perfumeria', 'Joyeria', 'Importados', 'Juguetes'];
const CATEGORY_LABEL: Record<string, string> = {
  Calzado:    'Calzado',
  Ropa:       'Moda',
  Gorras:     'Gorras',
  Perfumeria: 'Perfumería',
  Joyeria:    'Joyería',
  Importados: 'Importados',
  Juguetes:   'Juguetes',
};

const existingCategories = CATEGORY_ORDER.filter((c) =>
  negocios.some((n) => n.categoria === c)
);

export default function Tiendas() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return negocios.filter((n) => {
      const matchesCategory =
        activeCategory === 'Todas' || n.categoria === activeCategory;
      const matchesSearch =
        !q ||
        n.nombre.toLowerCase().includes(q) ||
        n.categoria.toLowerCase().includes(q) ||
        n.descripcion.toLowerCase().includes(q) ||
        n.ubicacion.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      <Helmet>
        <title>Tiendas | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Explora el directorio de tiendas de Plaza Victoria. Calzado, moda, joyería, perfumería, importados y más en el centro comercial de Ixmiquilpan, Hidalgo."
        />
        <link rel="canonical" href={`${SITE_URL}/tiendas`} />
        <meta property="og:title"       content="Tiendas | Plaza Victoria Ixmiquilpan" />
        <meta property="og:description" content="Encuentra tu tienda favorita en Plaza Victoria." />
        <meta property="og:url"         content={`${SITE_URL}/tiendas`} />
        <meta property="og:type"        content="website" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Directorio de Tiendas
          </h1>
          <p className="mt-2 text-zinc-500">
            Encuentra tus marcas favoritas y descubre las novedades en Plaza Victoria.
          </p>
        </div>

        {/* Search + category filters */}
        <div className="mb-8 flex flex-col gap-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Busca una tienda, marca o categoría..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:max-w-md"
              aria-label="Buscar tiendas"
            />
          </div>

          {/* Category pills — horizontal scroll on mobile */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filtrar por categoría"
          >
            {['Todas', ...existingCategories].map((cat) => {
              const isActive = activeCategory === cat;
              const label = cat === 'Todas' ? 'Todas' : (CATEGORY_LABEL[cat] ?? cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'border border-zinc-200 bg-white text-zinc-600 hover:border-primary/40 hover:text-zinc-900'
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-5 text-sm text-zinc-400">
          {filtered.length === 1
            ? '1 tienda encontrada'
            : `${filtered.length} tiendas encontradas`}
        </p>

        {/* Store grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((negocio) => (
              <TiendaCard key={negocio.id} negocio={negocio} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-semibold text-zinc-700">
              No encontramos tiendas con ese criterio.
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Intenta con otro nombre o categoría.
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('Todas'); }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Ver todas las tiendas
            </button>
          </div>
        )}
      </div>
    </>
  );
}
