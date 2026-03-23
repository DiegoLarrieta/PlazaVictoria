import Button from '../../../components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Bienvenida a Plaza Victoria">
      {/* Background image */}
      <img
        src="/plaza/InicioPlazaVictoria.png"
        alt="Fachada de Plaza Victoria, centro comercial en Ixmiquilpan Hidalgo"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-md md:text-6xl">
          Vive la experiencia
          <br />
          de comprar en{' '}
          <span className="text-primary-300">Ixmiquilpan</span>
        </h1>

        <p className="mt-5 max-w-xl text-base text-zinc-200 md:text-lg">
          Descubre Plaza Victoria, tu destino de moda, calzado, joyería y estilo
          en el corazón del Valle del Mezquital.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button to="/tiendas" size="lg">
            Explorar Tiendas
          </Button>
          <Button to="/novedades" variant="ghost-white" size="lg">
            Ver Novedades
          </Button>
        </div>
      </div>
    </section>
  );
}
