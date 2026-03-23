import { Link } from 'react-router-dom';
import { MapPin, Clock, Facebook } from 'lucide-react';
import { plazaInfo } from '../../data/plazaInfo';

const navLinks = [
  { label: 'Inicio',           to: '/inicio' },
  { label: 'Tiendas',          to: '/tiendas' },
  { label: 'Novedades',        to: '/novedades' },
  { label: 'Ofertas',          to: '/ofertas' },
  { label: 'Adquiere tu Local',to: '/adquiere-tu-local' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white p-2">
              <img
                src="/logo-plaza-victoria.jpg"
                alt="Plaza Victoria"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">{plazaInfo.slogan}</p>
            {plazaInfo.social.facebook && (
              <a
                href={plazaInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
                className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Visítanos</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{plazaInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Lunes a Domingo · 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Plaza Victoria · Ixmiquilpan, Hidalgo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
