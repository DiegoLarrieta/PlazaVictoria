import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { negocios } from "../../data/negociosData";

const DirectorioCarrousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
    drag: true,
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  return (
    <section
      className="py-8"
      aria-label="Carrusel de marcas de negocios en Plaza Victoria, Ixmiquilpan"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Marcas en Plaza Victoria
      </h2>

      <div ref={sliderRef} className="keen-slider px-4">
        {negocios.map((negocio) => (
          <Link
            to={negocio.ruta}
            key={negocio.id}
            aria-label={`Conocer más sobre ${negocio.nombre} en Plaza Victoria, Ixmiquilpan`}
            className="keen-slider__slide bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center transition hover:shadow-lg"
          >
            <article className="text-center">
              <img
                src={negocio.logo}
                alt={`Logo de ${negocio.nombre} ubicado en Plaza Victoria, Ixmiquilpan`}
                className="h-20 object-contain mb-2"
                loading="lazy"
              />
              <h3 className="text-sm font-medium">{negocio.nombre}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DirectorioCarrousel;
