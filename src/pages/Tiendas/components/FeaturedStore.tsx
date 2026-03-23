import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Negocio } from '../../../data/negociosData';

interface FeaturedStoreProps {
  negocio: Negocio;
}

export default function FeaturedStore({ negocio }: FeaturedStoreProps) {
  const slug = negocio.ruta.replace('/directorio/', '');

  return (
    <div className="mb-6 md:hidden">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Tienda Destacada
      </p>
      <Link
        to={`/tiendas/${slug}`}
        className="group relative flex h-44 w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <img
          src={`/${negocio.imagenes[0]}`}
          alt={negocio.nombre}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Destacado
        </span>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-bold text-white">{negocio.nombre}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-300">
            {negocio.sobre.slice(0, 50)}…
            <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </Link>
    </div>
  );
}
