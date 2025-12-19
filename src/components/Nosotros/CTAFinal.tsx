const CTAFinal = () => {
    return (
      <section
        className="relative bg-[#ffca7e] text-white py-20 px-6 overflow-hidden"
        aria-label="Llamado a la acción para agendar cita en Plaza Victoria"
      >
        {/* Imagen de fondo opcional con capa de color */}
        <img
          src="/plaza/cta-fondo.png"
          alt="Interior de Plaza Victoria"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
  
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para conocer tu nuevo espacio?
          </h2>
          <p className="text-md md:text-lg mb-8">
            Agenda una cita hoy mismo y descubre por qué Plaza Victoria es el lugar ideal para invertir y hacer crecer tu negocio.
          </p>
          <a
            href="/agendar"
            className="bg-white text-[#0e6886] px-6 py-3 rounded-full font-semibold shadow hover:bg-[#c4a9a2] hover:text-white transition"
            aria-label="Ir a la página de agendar cita"
          >
            Agendar visita
          </a>
        </div>
      </section>
    );
  };
  
  export default CTAFinal;
  