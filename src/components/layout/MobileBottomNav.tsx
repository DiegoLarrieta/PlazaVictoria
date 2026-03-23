import { NavLink } from 'react-router-dom';
import { Home, Store, Newspaper, Tag, Key } from 'lucide-react';

const tabs = [
  { to: '/inicio',             label: 'Inicio',    icon: Home },
  { to: '/tiendas',            label: 'Tiendas',   icon: Store },
  { to: '/novedades',          label: 'Novedades', icon: Newspaper },
  { to: '/ofertas',            label: 'Ofertas',   icon: Tag },
  { to: '/adquiere-tu-local',  label: 'Local',     icon: Key },
];

export default function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-100 bg-white/95 backdrop-blur-sm md:hidden"
      aria-label="Navegación inferior"
    >
      <div className="flex">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-zinc-400'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
