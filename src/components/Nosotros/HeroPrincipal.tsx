const HeroPrincipal = () => {
  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden"
      aria-label="Sección de inicio con presentación de Plaza Victoria en Ixmiquilpan Hidalgo"
    >
      {/* Imagen de fondo optimizada */}
      <img
        src="/plaza/InicioPlazaVictoria.png"
        alt="Fachada de Plaza Victoria, centro comercial en Ixmiquilpan Hidalgo"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Locales comerciales en Ixmiquilpan, Hidalgo
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-xl drop-shadow-sm">
          Plaza Victoria es el centro comercial más completo de Ixmiquilpan, ideal para encontrar todo lo que necesitas en un solo lugar.
        </p>
        <a
          href="#porque-invertir"
          className="bg-white text-[#0e6886] px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#dfc3c0] hover:text-white transition"
          aria-label="Conocer más sobre Plaza Victoria y sus locales comerciales en Ixmiquilpan"
        >
          Conocer más
        </a>
      </div>
    </section>
  );
};

export default HeroPrincipal;
