import SectionLabel from '../../../components/ui/SectionLabel';
import { plazaInfo } from '../../../data/plazaInfo';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div>
            <SectionLabel>Acerca de Plaza Victoria</SectionLabel>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl"
            >
              El Mejor Centro Comercial de Ixmiquilpan
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {plazaInfo.description}
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-10 border-t border-zinc-100 pt-6">
              {plazaInfo.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="h-10 w-px bg-zinc-200" aria-hidden="true" />}
                  <div>
                    <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-sm text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/plaza/ConocePlazaVictoria.jpeg"
              alt="Interior de Plaza Victoria, Ixmiquilpan Hidalgo"
              className="h-80 w-full object-cover md:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
