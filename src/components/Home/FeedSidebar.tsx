import React from "react";
import { Home, PartyPopper, Store, Tag } from "lucide-react";

export type FeedFilter = { key: string; label: string };

export function FeedSidebar({
  filters,
  activeFilter,
  onSelectFilter,
  onReset,
}: {
  filters: FeedFilter[];
  activeFilter: string | null;
  onSelectFilter: (key: string) => void;
  onReset: () => void;
}) {
  const iconByKey: Record<string, React.ReactNode> = {
    eventos: <PartyPopper className="h-5 w-5" />,
    aperturas: <Store className="h-5 w-5" />,
    promociones: <Tag className="h-5 w-5" />,
  };

  return (
    <div className="sticky top-24 flex flex-col items-center gap-3">
      {/* Home / reset */}
      <IconButton
        label="Todos"
        active={activeFilter === null}
        onClick={onReset}
        icon={<Home className="h-5 w-5" />}
      />

      <div className="h-px w-10 bg-zinc-200" />

      {filters.map((f) => (
        <IconButton
          key={f.key}
          label={f.label}
          active={activeFilter === f.key}
          onClick={() => onSelectFilter(f.key)}
          icon={iconByKey[f.key] ?? <span className="text-sm">?</span>}
        />
      ))}
    </div>
  );
}

function IconButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        onClick={onClick}
        className={`grid h-11 w-11 place-items-center rounded-xl border transition ${
          active
            ? "border-zinc-900 bg-zinc-900 text-white"
            : "border-zinc-200 bg-white hover:bg-zinc-50"
        }`}
        aria-label={label}
      >
        {icon}
      </button>

      {/* Tooltip (hover) */}
      <div className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 opacity-0 transition group-hover:opacity-100">
        <div className="rounded-lg bg-zinc-900 px-3 py-1 text-xs text-white shadow">
          {label}
        </div>
      </div>
    </div>
  );
}
