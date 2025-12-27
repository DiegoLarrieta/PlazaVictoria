const InfoPlaza = () => {
    return (
      <section
        id="sobre-plaza"
        className="py-16 px-4 bg-white"
        aria-label="Información general sobre Plaza Victoria"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen ilustrativa */}
          <img
            src="/plaza/ConocePlazaVictoria.jpeg"
            alt="Vista frontal de Plaza Victoria en Ixmiquilpan"
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
  
          {/* Contenido textual */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Conoce Plaza Victoria
            </h2>
  
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              <strong>Plaza Victoria</strong> ofrece un nuevo espacio comercial ubicado en el centro de Ixmiquilpan, Hidalgo.
              Frente al Jardín Municipal y a unos pasos del monumento a la Diana Cazadora.
            </p>
  
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Con una superficie total de <strong>1,500 m² distribuidos en 3 niveles</strong>,
              albergará <strong>32 locales comerciales</strong> con tamaños que varían desde
              <strong>10 m² hasta 170 m²</strong>, adaptándose a distintos tipos de negocios.
            </p>
  
            <p className="text-gray-700 text-sm leading-relaxed">
              Se estima que <strong>más de 1,500 personas ingresarán diariamente</strong> a la plaza, lo que representa una
              afluencia constante de clientes potenciales para cada negocio.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default InfoPlaza;
  