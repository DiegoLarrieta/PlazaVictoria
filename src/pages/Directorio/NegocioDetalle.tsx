import { useParams, useNavigate } from "react-router-dom";
import { negocios } from "../../data/negociosData";

const NegocioDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Buscar negocio por ruta
  const negocio = negocios.find((n) => n.ruta.endsWith(slug || ""));

  if (!negocio) {
    // Si no se encuentra, redirecciona
    navigate("/directorio");
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{negocio.nombre}</h1>

      {/* Logo y categoría */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
        <img
          src={negocio.logo}
          alt={`Logo de ${negocio.nombre}`}
          className="w-40 h-40 object-contain bg-white border rounded p-2"
        />
        <div>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Categoría:</strong> {negocio.categoria}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Ubicación:</strong> {negocio.ubicacion}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Horario:</strong> {negocio.horario}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 mb-6">{negocio.descripcion}</p>

      {/* Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {negocio.imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagen ${i + 1} de ${negocio.nombre}`}
            className="w-full h-60 object-cover rounded shadow"
          />
        ))}
      </div>

      {/* Contacto */}
      {negocio.contacto && (
        <div className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold mb-2">Contacto</h2>
          {negocio.contacto.telefono && <p>📞 {negocio.contacto.telefono}</p>}
          {negocio.contacto.whatsapp && (
            <a
              href={negocio.contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Enviar mensaje por WhatsApp
            </a>
          )}
          {negocio.contacto.facebook && (
            <a
              href={negocio.contacto.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:underline"
            >
              Visitar Facebook
            </a>
          )}
          {negocio.contacto.instagram && (
            <a
              href={negocio.contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-pink-600 hover:underline"
            >
              Visitar Instagram
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default NegocioDetalle;
