import { Info, Maximize2 } from 'lucide-react';
import type { CommercialSpace } from '../../../data/spacesData';

const typeLabel: Record<CommercialSpace['type'], string> = {
  renta: 'En Renta',
  venta: 'En Venta',
};

const typeBadge: Record<CommercialSpace['type'], string> = {
  renta: 'bg-primary     text-white',
  venta: 'bg-zinc-900    text-white',
};

interface SpaceCardProps {
  space: CommercialSpace;
  onRequestInfo: (unit: string) => void;
}

export default function SpaceCard({ space, onRequestInfo }: SpaceCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={space.image}
          alt={`${space.unit} — Plaza Victoria`}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />

        {/* Type badge */}
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide shadow ${typeBadge[space.type]}`}>
          {typeLabel[space.type]}
        </span>

        {/* Floor badge */}
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {space.floor}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-zinc-900 leading-snug">{space.unit}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-primary">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            {space.size} m²
          </span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-zinc-500 line-clamp-3">
          {space.description}
        </p>

        {/* CTA */}
        <button
          onClick={() => onRequestInfo(space.unit)}
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Info className="h-4 w-4" aria-hidden="true" />
          Solicitar Información
        </button>
      </div>
    </article>
  );
}
