import { Clock, MapPin, Navigation } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { plazaInfo } from '../../../data/plazaInfo';

export default function HoursLocationSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="hours-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Hours */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 id="hours-heading" className="text-xl font-bold text-zinc-900">Horario</h2>
            </div>

            <div className="space-y-3">
              {plazaInfo.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between border-b border-zinc-100 pb-3"
                >
                  <span className="font-medium text-zinc-700">{h.days}</span>
                  <span className="font-semibold text-primary">{h.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-400">{plazaInfo.hoursNote}</p>
          </div>

          {/* Location */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-bold text-zinc-900">Encuéntranos</h2>
            </div>

            <p className="mb-5 text-zinc-600">{plazaInfo.address}</p>

            <Button href={plazaInfo.mapDirectionsUrl} size="sm" className="mb-6">
              <Navigation className="mr-2 h-4 w-4" aria-hidden="true" />
              Cómo llegar
            </Button>

            {/* Map embed */}
            <div className="overflow-hidden rounded-xl border border-zinc-100 shadow-sm">
              <iframe
                src={plazaInfo.mapEmbedUrl}
                className="h-52 w-full"
                loading="lazy"
                title="Ubicación de Plaza Victoria en Ixmiquilpan, Hidalgo"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
