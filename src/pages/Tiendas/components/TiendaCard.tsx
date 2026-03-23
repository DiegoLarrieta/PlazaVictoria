import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Negocio } from '../../../data/negociosData';

const categoryStyle: Record<string, string> = {
  Calzado:    'text-primary-700 bg-primary-50',
  Ropa:       'text-rose-700   bg-rose-50',
  Gorras:     'text-blue-700   bg-blue-50',
  Perfumeria: 'text-purple-700 bg-purple-50',
  Joyeria:    'text-amber-700  bg-amber-50',
  Importados: 'text-emerald-700 bg-emerald-50',
  Juguetes:   'text-orange-700 bg-orange-50',
};

const categoryLabel: Record<string, string> = {
  Calzado:    'Calzado',
  Ropa:       'Moda',
  Gorras:     'Gorras',
  Perfumeria: 'Perfumería',
  Joyeria:    'Joyería',
  Importados: 'Importados',
  Juguetes:   'Juguetes',
};

interface TiendaCardProps {
  negocio: Negocio;
}

export default function TiendaCard({ negocio }: TiendaCardProps) {
  const slug = negocio.ruta.replace('/directorio/', '');
  const style = categoryStyle[negocio.categoria] ?? 'text-zinc-700 bg-zinc-100';
  const label = categoryLabel[negocio.categoria] ?? negocio.categoria;

  return (
    <Link
      to={`/tiendas/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Logo area */}
      <div className="relative flex h-40 items-center justify-center bg-zinc-50 p-4">
        <img
          src={`/${negocio.logo}`}
          alt={`Logo de ${negocio.nombre}`}
          className="max-h-24 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Heart icon — decorative */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
          <Heart className="h-3.5 w-3.5 text-zinc-300" />
        </div>
      </div>

      {/* Info area */}
      <div className="flex flex-col gap-1 p-4">
        <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style}`}>
          {label}
        </span>
        <p className="mt-1 font-semibold text-zinc-900 leading-snug group-hover:text-primary transition-colors">
          {negocio.nombre}
        </p>
        <p className="text-xs text-zinc-400">{negocio.ubicacion}</p>
      </div>
    </Link>
  );
}
