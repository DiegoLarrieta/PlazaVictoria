import React from "react";
import { Home, PartyPopper, Store, Tag } from "lucide-react";

type NavItem = {
  key: string | null; // null = todos
  label: string;
  icon: React.ReactNode;
};

export function MobileFeedNav({
  activeFilter,
  onSelectFilter,
  onReset,
}: {
  activeFilter: string | null;
  onSelectFilter: (key: string) => void;
  onReset: () => void;
}) {
  const [hidden, setHidden] = React.useState(false);
  const lastYRef = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const lastY = lastYRef.current;

      // umbral para evitar flicker con scroll mínimo
      const delta = y - lastY;
      const threshold = 12;

      if (Math.abs(delta) < threshold) return;

      // si baja => ocultar, si sube => mostrar
      if (delta > 0) setHidden(true);
      else setHidden(false);

      lastYRef.current = y;
    };

    // init
    lastYRef.current = window.scrollY || 0;

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: NavItem[] = [
    { key: null, label: "Inicio", icon: <Home className="h-6 w-6" /> },
    { key: "eventos", label: "Eventos", icon: <PartyPopper className="h-6 w-6" /> },
    { key: "aperturas", label: "Aperturas", icon: <Store className="h-6 w-6" /> },
    { key: "promociones", label: "Promociones", icon: <Tag className="h-6 w-6" /> },
  ];

  return (
    <nav
      aria-label="Filtros de novedades"
      className={[
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "border-t border-zinc-200 bg-white/95 backdrop-blur",
        "transition-transform duration-200",
        hidden ? "translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-3">
        {items.map((it) => {
          const isActive =
            it.key === null ? activeFilter === null : activeFilter === it.key;

          const onClick = () => {
            if (it.key === null) onReset();
            else onSelectFilter(it.key);
          };

          return (
            <button
              key={String(it.key)}
              type="button"
              onClick={onClick}
              className={[
                "grid h-11 w-11 place-items-center rounded-xl",
                "transition",
                isActive ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100",
              ].join(" ")}
              aria-label={it.label}
              title={it.label}
            >
              {it.icon}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
