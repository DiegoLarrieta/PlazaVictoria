import { Link } from "react-router-dom";
import { Negocio } from "../../data/negociosData";

type Props = {
  negocio: Negocio;
};

const getCategoriaColor = (categoria: string) => {
  switch (categoria.toLowerCase()) {
    case "tecnología":
      return "bg-blue-500";
    case "alimentos":
      return "bg-red-500";
    case "ropa":
      return "bg-purple-500";
    case "belleza":
      return "bg-pink-500";
    case "salud":
      return "bg-green-500";
    case "servicios":
      return "bg-yellow-500 text-black";
    case "entretenimiento":
      return "bg-indigo-500";
    case "hogar":
      return "bg-orange-500"; // Si usas esto, agrégalo en tailwind.config.js
    case "papelería":
      return "bg-cyan-500";
    default:
      return "bg-gray-500";
  }
};

const DirectorioCard = ({ negocio }: Props) => {
  return (
    <article
      className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-200"
      aria-label={`Negocio: ${negocio.nombre}`}
    >
      {/* Logo */}
      <img
        src={negocio.logo}
        alt={`Logo del negocio ${negocio.nombre} en Plaza Victoria, Ixmiquilpan`}
        loading="lazy"
        className="w-full h-40 object-contain p-4 bg-[#fdf8f7]"
      />

      {/* Info */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">
          {negocio.nombre}
        </h3>

        <p className="text-sm text-gray-500">
          {negocio.sobre}
        </p>

        <p className="text-sm text-gray-500 italic">
          {negocio.ubicacion}
        </p>

        {/* Categoría */}
        <div className="flex justify-start mt-1">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${getCategoriaColor(
              negocio.categoria
            )}`}
          >
            {negocio.categoria}
          </span>
        </div>

        {/* Botón */}
        <Link
          to={negocio.ruta}
          className="mt-3 inline-block bg-[#dfc3c0] text-white text-sm px-4 py-2 rounded hover:opacity-90"
          aria-label={`Ver más sobre ${negocio.nombre} en Plaza Victoria, Ixmiquilpan`}
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default DirectorioCard;
