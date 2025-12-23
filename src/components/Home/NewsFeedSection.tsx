import React from "react";
import { postsData } from "../../data/postData";
import { FeedLayout } from "./FeedLayout";
import { FeedSidebar, FeedFilter } from "./FeedSidebar";
import { PostFeed } from "./PostFeed";
import { MobileFeedNav } from "./MobileFeedNav";


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

  const scrollToFeedTop = () => {
    const el = document.getElementById("news-feed-top");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHome = () => {
    setActiveFilter(null);
    scrollToFeedTop();
  };

  return (
    <section aria-label="Novedades" className="w-full pt-6 md:pt-4">
      <FeedLayout
        left={
          <FeedSidebar
            filters={AVAILABLE_FILTERS}
            activeFilter={activeFilter}
            onSelectFilter={(key) => setActiveFilter(key)}
            onReset={handleHome}

          />
        }
        center={
          <div className="w-full" id="news-feed-top">
            <div className="mb-4 flex flex-col gap-2 text-center md:text-left">
              <div>
                <h2 className="text-xl font-semibold">Novedades y noticias de Plaza Victoria</h2>
                <p className="text-sm text-zinc-500">
                  Eventos, aperturas y promociones en la plaza.
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
            <div className="pb-20 md:pb-0">
                <PostFeed posts={filteredPosts} activeFilter={activeFilter} />
            </div>

            <MobileFeedNav
                activeFilter={activeFilter}
                onSelectFilter={(key) => setActiveFilter(key)}
                onReset={handleHome}
   
            />

          </div>
        }
      />
    </section>
  );
}
