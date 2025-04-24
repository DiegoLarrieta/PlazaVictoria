const Footer = () => {
    return (
        <footer className="w-full bg-[#dfc3c0] text-gray-800 py-[20px]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
  
          {/* Ubicación */}
          <div>
            <h3 className="font-semibold mb-2 text-base">Ubicación</h3>
            <p>Plaza Victoria<br />Ixmiquilpan, Hidalgo, México</p>
            <a
              href="https://maps.app.goo.gl/yPLrj1PUFybcJMUt6" // Reemplaza con enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline mt-2 inline-block"
            >
              Ver en Google Maps
            </a>
          </div>
  
          {/* Derechos reservados */}
          <div className="text-sm md:text-right">
            <p>© 2025 Plaza Victoria.<br />Todos los derechos reservados.</p>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  