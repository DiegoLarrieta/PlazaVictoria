import NegociosCard from "../../components/Directorio/DirectorioCard";
import DirectorioCarrousel from "../../components/Directorio/DirectorioCarrousel";
import { negocios } from "../../data/negociosData";


const Directorio = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Los Negocios en Plaza Victoria</h2>
  
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {negocios.map((n) => (
            <NegociosCard key={n.id} negocio={n} />
          ))}
        </div>
  
        {/* Carrusel de marcas */}
        <DirectorioCarrousel />
      </div>
    );
  };
  
  export default Directorio;