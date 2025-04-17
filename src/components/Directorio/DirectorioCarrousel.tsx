// En el componente o en tu main.tsx
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
      <div className="py-8">
        <h2 className="text-xl font-bold mb-4 text-center">Marcas en Plaza Victoria</h2>
  
        <div ref={sliderRef} className="keen-slider px-4">
            {negocios.map((negocio) => (
            <Link
                to={negocio.ruta}
                key={negocio.id}
                className="keen-slider__slide bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center transition hover:shadow-lg"
            >
                <img
                src={negocio.logo}
                alt={negocio.nombre}
                className="h-20 object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">{negocio.nombre}</p>
            </Link>
            ))}
        </div>
      </div>
    );
  };
  
  export default DirectorioCarrousel;
