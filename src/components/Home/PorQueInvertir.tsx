const razones = [
  {
    titulo: "Inversión inteligente",
    texto: "Invertir en un local comercial en Ixmiquilpan es una de las formas más seguras y rentables de hacer crecer tu dinero.",
    icono: "/iconos/inversion.png",
  },
  {
    titulo: "Ubicación estratégica",
    texto: "Plaza Victoria se ubica en el centro de Ixmiquilpan, una zona de alta afluencia ideal para cualquier tipo de negocio.",
    icono: "/iconos/ubicacion.png",
  },
  {
    titulo: "Plusvalía estable",
    texto: "Los locales en Plaza Victoria aumentan su valor con el tiempo gracias a su ubicación y constante flujo de personas.",
    icono: "/iconos/plusvalia.png",
  },
  {
    titulo: "Promoción digital",
    texto: "Tu negocio estará presente en nuestra página web, ayudándote a ganar visibilidad en Ixmiquilpan y alrededores.",
    icono: "/iconos/promocion.png",
  },
  {
    titulo: "Ingreso mensual",
    texto: "Puedes generar ingresos al rentar tu local comercial, asegurando un retorno constante de inversión.",
    icono: "/iconos/ingreso.png",
  },
  {
    titulo: "Estacionamiento exclusivo",
    texto: "Plaza Victoria es la única plaza comercial del centro de Ixmiquilpan con estacionamiento privado para clientes.",
    icono: "/iconos/estacionamiento.png",
  },
];

  
  const PorQueInvertir = () => {
    return (
      <section
        id="porque-invertir"
        className="bg-[#f8f8f8] py-16 px-4"
        aria-label="Razones para invertir en Plaza Victoria"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            ¿Por qué invertir en Plaza Victoria?
          </h2>
  
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {razones.map((razon, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
                aria-label={`Razón ${index + 1}: ${razon.titulo}`}
              >
                {/* Imagen de cada razón */}
                <img
                  src={razon.icono}
                  alt={`Ícono representando: ${razon.titulo.toLowerCase()}`}
                  className="h-16 w-16 mb-4"
                  loading="lazy"
                />

                {/* Título */}
                <h3 className="text-lg font-semibold mb-2 text-[#0e6886]">
                  {razon.titulo}
                </h3>

                {/* Texto SEO-friendly */}
                <p className="text-gray-600 text-sm">{razon.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PorQueInvertir;
  