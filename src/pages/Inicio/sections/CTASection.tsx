import Button from '../../../components/ui/Button';

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-20"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <img
        src="/plaza/cta-fondo.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-white md:text-4xl">
          ¿Listo para comenzar tu experiencia de compras?
        </h2>
        <p className="mt-4 text-primary-100 md:text-lg">
          Únete a miles de visitantes y descubre por qué Plaza Victoria es el mejor
          destino de compras en Ixmiquilpan.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/tiendas" variant="white" size="lg">
            Ver Directorio de Tiendas
          </Button>
          <Button to="/novedades" variant="ghost-white" size="lg">
            Ver Novedades
          </Button>
        </div>
      </div>
    </section>
  );
}
