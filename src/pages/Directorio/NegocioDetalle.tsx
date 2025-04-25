import { useParams, useNavigate } from "react-router-dom";
import { negocios } from "../../data/negociosData";
import { Helmet } from "react-helmet";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";


const NegocioDetalle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Buscar negocio por ruta
  const negocio = negocios.find((n) => n.ruta.endsWith(slug || ""));

  if (!negocio) {
    navigate("/directorio", { replace: true });
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* SEO dinámico */}
      <Helmet>
        <title>{`${negocio.nombre} | ${negocio.categoria} en Plaza Victoria, Ixmiquilpan`}</title>
        <meta
          name="description"
          content={`${negocio.nombre} en Plaza Victoria, Ixmiquilpan. ${negocio.sobre}. Horario: ${negocio.horario}. Ubicación: ${negocio.ubicacion}.`}
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{negocio.nombre}</h1>

      {/* Logo y categoría */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
        <img
          src={`/${negocio.logo}`}
          alt={`Logo de ${negocio.nombre} ubicado en Plaza Victoria, Ixmiquilpan`}
          loading="lazy"
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
          <p className="text-gray-600 text-sm mb-1 pt-1">
            <strong>{negocio.sobre}</strong> 
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
            src={`/${img}`} // ← Esto corrige el problema
            alt={`Vista del local ${negocio.nombre} en Plaza Victoria, imagen ${i + 1}`}
            className="w-full h-60 object-cover rounded shadow"
            loading="lazy"
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
              className="flex items-center gap-2 text-green-600 hover:underline"
              aria-label={`Contactar a ${negocio.nombre} por WhatsApp`}
            >
              <FaWhatsapp className="text-lg" />
              Contactar por WhatsApp
            </a>
          )}
          {negocio.contacto.facebook && (
            <a
              href={negocio.contacto.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
              aria-label={`Seguir a ${negocio.nombre} en Facebook`}
            >
              <FaFacebook className="text-lg" />
              Síguenos en Facebook
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default NegocioDetalle;
