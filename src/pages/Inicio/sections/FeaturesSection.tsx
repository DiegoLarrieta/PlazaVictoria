import { Car, ShoppingBag, Shield } from 'lucide-react';
import { plazaInfo } from '../../../data/plazaInfo';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  parking: Car,
  store:   ShoppingBag,
  shield:  Shield,
};

export default function FeaturesSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 id="features-heading" className="text-3xl font-bold text-zinc-900">
            ¿Por qué visitar Plaza Victoria?
          </h2>
          <p className="mt-3 text-zinc-500">
            Todo lo que necesitas para una experiencia de compras cómoda y agradable.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plazaInfo.features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Feature image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
