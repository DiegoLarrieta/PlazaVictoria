const amenidades = [
    {
      nombre: "Elevadores",
      icono: "/plaza/elevador.jpeg", // Coloca tus íconos en /public/iconos/
      descripcion: "Fácil acceso a todos los niveles.",
    },
    {
      nombre: "Escaleras",
      icono: "/plaza/escaleras.jpeg",
      descripcion: "Conexión fluida entre pisos.",
    },
    {
      nombre: "Estacionamiento",
      icono: "/plaza/estaciona.jpeg",
      descripcion: "Amplio espacio para visitantes y locatarios.",
    },
    {
      nombre: "Área de alimentos",
      icono: "/plaza/alimentos.jpeg",
      descripcion: "Espacio ideal para negocios gastronómicos.",
    },
    {
      nombre: "Baños",
      icono: "/plaza/banos.jpeg",
      descripcion: "Disponibles en todos los niveles para comodidad de todos.",
    },
    {
      nombre: "Iluminacion",
      icono: "/plaza/iluminacion.jpeg",
      descripcion: "Espacios bien iluminados para una mejor experiencia.",
    }
  ];
  
  const Amenidades = () => {
    return (
      <section
        id="amenidades"
        className="py-16 px-4 bg-[#f9f9f9]"
        aria-label="Amenidades de Plaza Victoria"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Amenidades de Plaza Victoria
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {amenidades.map((item, index) => (
              <article
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow hover:shadow-md transition"
                aria-label={`Amenidad: ${item.nombre}`}
              >
                <img
                  src={item.icono}
                  alt={`Ícono de ${item.nombre}`}
                  className="h-30 w-30 mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-[#dfc3c0] mb-2">
                  {item.nombre}
                </h3>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Amenidades;
  