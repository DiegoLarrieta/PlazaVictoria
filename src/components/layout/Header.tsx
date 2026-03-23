import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Inicio',    to: '/inicio' },
  { label: 'Tiendas',   to: '/tiendas' },
  { label: 'Novedades', to: '/novedades' },
  { label: 'Ofertas',   to: '/ofertas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link to="/inicio" className="flex items-center">
          <img
            src="/logo-plaza-victoria.jpg"
            alt="Plaza Victoria"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-zinc-600 hover:text-zinc-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button to="/adquiere-tu-local" size="sm">
            Adquiere tu Local
          </Button>
        </div>

        {/* Mobile spacer to balance hamburger */}
        <div className="w-9 md:hidden" aria-hidden="true" />
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary' : 'text-zinc-700 hover:bg-zinc-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 border-t border-zinc-100 pt-3">
              <Button
                to="/adquiere-tu-local"
                size="sm"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Adquiere tu Local
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
