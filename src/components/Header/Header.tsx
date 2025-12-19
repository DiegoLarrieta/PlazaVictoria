import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { LogoHeaderPlazaVictoria } from "../../assets/images";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Nosotros", path: "/nosotros" },
    { label: "Locales", path: "/locales" },
    { label: "Directorio", path: "/directorio" },
    { label: "Agendar cita", path: "/agendar" },
  ];

  return (
    <header className="w-full shadow-md bg-[#dfc3c0] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo y nombre */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoHeaderPlazaVictoria} alt="Logo Plaza Victoria" className="h-10 w-auto" />
          <span className="font-semibold text-xl text-gray-800">Plaza Victoria</span>
        </Link>

        {/* Menú en desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menú hamburguesa */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl p-1">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
