const HeroPrincipal = () => {
    return (
      <section
        className="relative h-[90vh] w-full overflow-hidden"
        aria-label="Sección de bienvenida Plaza Victoria"
      >
        {/* Imagen de fondo optimizada */}
        <img
          src="/imagenes/hero.jpg"
          alt="Vista de Plaza Victoria desde el exterior"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
  
        {/* Contenido centrado */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Invierte en Plaza Victoria
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-xl drop-shadow-sm">
            Locales comerciales en el corazón de Ixmiquilpan con plusvalía y visibilidad garantizada.
          </p>
          <a
            href="#porque-invertir"
            className="bg-white text-[#dfc3c0] px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#dfc3c0] hover:text-white transition"
            aria-label="Conocer más sobre los beneficios de invertir"
          >
            Conocer más
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroPrincipal;
  