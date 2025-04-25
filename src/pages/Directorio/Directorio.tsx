import { Helmet } from "react-helmet";
import DirectorioCard from "../../components/Directorio/DirectorioCard";
import DirectorioCarrousel from "../../components/Directorio/DirectorioCarrousel";
import { negocios } from "../../data/negociosData";

const Directorio = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* SEO */}
      <Helmet>
        <title>Directorio de Negocios | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Explora el directorio de negocios en Plaza Victoria, el centro comercial más moderno de Ixmiquilpan. Encuentra farmacias, consultorios, tiendas y más en una ubicación privilegiada."
        />
      </Helmet>

      {/* Título con keywords */}
      <h1
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        aria-label="Directorio de negocios en Plaza Victoria Ixmiquilpan"
      >
        Negocios en Plaza Victoria, Ixmiquilpan
      </h1>

      {/* Grid de tarjetas de negocios */}
      <section
        aria-label="Tarjetas con información de negocios disponibles"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
      >
        {negocios.map((n) => (
          <DirectorioCard key={n.id} negocio={n} />
        ))}
      </section>

      {/* Carrusel de marcas destacadas */}
      <section
        aria-label="Marcas destacadas en Plaza Victoria"
        className="pt-8 border-t"
      >
        <DirectorioCarrousel />
      </section>
    </div>
  );
};

export default Directorio;
