import React from "react";
import { postsData } from "../../data/postData";
import { FeedLayout } from "./FeedLayout";
import { FeedSidebar, FeedFilter } from "./FeedSidebar";
import { PostFeed } from "./PostFeed";

const AVAILABLE_FILTERS: FeedFilter[] = [
  { key: "eventos", label: "Eventos" },
  { key: "aperturas", label: "Aperturas" },
  { key: "promociones", label: "Promociones" },
];

export function NewsFeedSection() {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const filteredPosts = React.useMemo(() => {
    if (!activeFilter) return postsData;
    return postsData.filter((p) => p.labels.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section aria-label="Novedades" className="w-full">
      <FeedLayout
        left={
          <FeedSidebar
            filters={AVAILABLE_FILTERS}
            activeFilter={activeFilter}
            onSelectFilter={(key) => setActiveFilter(key)}
            onReset={() => setActiveFilter(null)}
          />
        }
        center={
          <div className="w-full">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">Novedades</h2>
                <p className="text-sm text-zinc-500">
                  Eventos, aperturas y promociones de la plaza.
                </p>
              </div>

              {/* Estado de filtro en desktop/tablet */}
              <div className="hidden md:flex items-center gap-2">
                {activeFilter ? (
                  <button
                    type="button"
                    onClick={() => setActiveFilter(null)}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm hover:bg-zinc-50"
                    aria-label="Quitar filtro"
                    title="Quitar filtro"
                  >
                    Filtro: <span className="font-medium">{activeFilter}</span> ✕
                  </button>
                ) : (
                  <span className="text-sm text-zinc-500">Mostrando: Todos</span>
                )}
              </div>
            </div>

            {/* Filtros en mobile (sin hover) */}
            <div className="mb-4 flex md:hidden items-center gap-2 overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveFilter(null)}
                className={`shrink-0 rounded-full border px-3 py-1 text-sm ${
                  activeFilter === null
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                Todos
              </button>
              {AVAILABLE_FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActiveFilter(f.key)}
                  className={`shrink-0 rounded-full border px-3 py-1 text-sm ${
                    activeFilter === f.key
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <PostFeed posts={filteredPosts} activeFilter={activeFilter} />
          </div>
        }
      />
    </section>
  );
}
