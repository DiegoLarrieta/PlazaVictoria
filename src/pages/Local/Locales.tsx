import Piso1Viewer from "../../components/Renders3D/3DPiso1";
const Locales = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Modelo 3D Planta Baja
      </h2>

      <Piso1Viewer />
    </div>
  );
};
export default Locales;