const razones = [
    {
      titulo: "Inversión inteligente",
      texto: "Un local comercial es el mejor lugar donde puedes invertir tu dinero.",
    },
    {
      titulo: "Ubicación estratégica",
      texto: "Tu inversión está segura debido a la ubicación y demanda de espacios comerciales.",
    },
    {
      titulo: "Plusvalía estable",
      texto: "Al estar ubicado en la zona centro, tu local comercial tendrá una plusvalía continua.",
    },
    {
      titulo: "Promoción digital",
      texto: "Tu negocio será promovido en nuestra página web, atrayendo más clientes.",
    },
    {
      titulo: "Ingreso mensual",
      texto: "Puedes rentar tu local comercial y generar ingresos mientras tu inversión crece.",
    },
    {
      titulo: "Estacionamiento exclusivo",
      texto: "Únicos locales comerciales en el centro de Ixmiquilpan con estacionamiento propio.",
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
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                aria-label={`Razón ${index + 1}: ${razon.titulo}`}
              >
                <h3 className="text-lg font-semibold mb-2 text-[#dfc3c0]">
                  {razon.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{razon.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PorQueInvertir;
  