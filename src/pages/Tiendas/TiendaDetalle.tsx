import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MapPin, Clock, Phone, Share2 } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { negocios } from '../../data/negociosData';

const SITE_URL = 'https://plazavictoria.mx';

const categoryStyle: Record<string, string> = {
  Calzado:    'text-primary-700 bg-primary-50',
  Ropa:       'text-rose-700   bg-rose-50',
  Gorras:     'text-blue-700   bg-blue-50',
  Perfumeria: 'text-purple-700 bg-purple-50',
  Joyeria:    'text-amber-700  bg-amber-50',
  Importados: 'text-emerald-700 bg-emerald-50',
  Juguetes:   'text-orange-700 bg-orange-50',
};

interface ActionBtnProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function ActionBtn({ href, icon, label }: ActionBtnProps) {
  return (
    <a
      href={href}
      target={href.startsWith('tel:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1.5 group"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-700 transition-colors">
        {label}
      </span>
    </a>
  );
}

export default function TiendaDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const negocio = negocios.find((n) => n.ruta.endsWith(`/${slug}`));

  if (!negocio) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-lg font-semibold text-zinc-700">Tienda no encontrada.</p>
        <Link to="/tiendas" className="mt-4 text-sm font-medium text-primary hover:underline">
          Ver todas las tiendas
        </Link>
      </div>
    );
  }

  const canonicalSlug = negocio.ruta.replace('/directorio/', '');
  const ogImage = negocio.imagenes[0] ? `${SITE_URL}/${negocio.imagenes[0]}` : undefined;
  const badgeStyle = categoryStyle[negocio.categoria] ?? 'text-zinc-700 bg-zinc-100';

  const { contacto } = negocio;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: negocio.nombre,
        text: negocio.sobre,
        url: `${SITE_URL}/tiendas/${canonicalSlug}`,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${negocio.nombre} | Plaza Victoria Ixmiquilpan`}</title>
        <meta
          name="description"
          content={`${negocio.nombre} en Plaza Victoria, Ixmiquilpan. ${negocio.sobre}. Horario: ${negocio.horario}. ${negocio.ubicacion}.`}
        />
        <link rel="canonical" href={`${SITE_URL}/tiendas/${canonicalSlug}`} />
        <meta property="og:title"       content={`${negocio.nombre} | Plaza Victoria`} />
        <meta property="og:description" content={negocio.sobre} />
        <meta property="og:url"         content={`${SITE_URL}/tiendas/${canonicalSlug}`} />
        <meta property="og:type"        content="website" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context':  'https://schema.org',
            '@type':     'Store',
            name:        negocio.nombre,
            description: negocio.descripcion,
            address: {
              '@type':         'PostalAddress',
              streetAddress:   `Plaza Victoria, ${negocio.ubicacion}`,
              addressLocality: 'Ixmiquilpan',
              addressRegion:   'Hidalgo',
              postalCode:      '42300',
              addressCountry:  'MX',
            },
          })}
        </script>
      </Helmet>

      {/* ── Mobile image hero ─────────────────────────────── */}
      <div className="relative h-64 w-full overflow-hidden md:hidden">
        <img
          src={`/${negocio.imagenes[0] ?? negocio.logo}`}
          alt={negocio.nombre}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Mobile top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
          <Link
            to="/tiendas"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
            aria-label="Volver"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <button
            onClick={handleShare}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
            aria-label="Compartir"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {/* Dots indicator */}
        {negocio.imagenes.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {negocio.imagenes.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-10">

        {/* ── Desktop back link ─────────────────────────────── */}
        <Link
          to="/tiendas"
          className="mb-6 hidden items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors md:inline-flex"
        >
          <ArrowLeft className="h-4 w-4" />
          Directorio de Tiendas
        </Link>

        {/* ── Store header ──────────────────────────────────── */}
        <div className="mb-8 flex items-start gap-5">
          {/* Logo */}
          <div className="hidden shrink-0 items-center justify-center md:flex">
            <div className="h-36 w-36 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-3 shadow-sm">
              <img
                src={`/${negocio.logo}`}
                alt={`Logo de ${negocio.nombre}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Mobile: logo small + info inline */}
          <div className="flex items-start gap-3 md:hidden">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-1.5">
              <img src={`/${negocio.logo}`} alt={negocio.nombre} className="h-full w-full object-contain" />
            </div>
            <div>
              <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badgeStyle}`}>
                {negocio.categoria}
              </span>
              <h1 className="mt-0.5 text-lg font-bold text-zinc-900 leading-tight">{negocio.nombre}</h1>
              <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                <MapPin className="h-3 w-3 text-primary" />
                {negocio.ubicacion}
              </p>
            </div>
          </div>

          {/* Desktop: full info */}
          <div className="hidden md:block">
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${badgeStyle}`}>
              {negocio.categoria}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">{negocio.nombre}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              Plaza Victoria · {negocio.ubicacion}
            </p>
          </div>
        </div>

        {/* ── Action buttons ────────────────────────────────── */}
        {contacto && (
          <div className="mb-8 flex items-center gap-6 overflow-x-auto pb-1">
            {contacto.telefono && (
              <ActionBtn
                href={`tel:${contacto.telefono}`}
                icon={<Phone className="h-5 w-5" />}
                label="Llamar"
              />
            )}
            {contacto.whatsapp && (
              <ActionBtn
                href={contacto.whatsapp}
                icon={<FaWhatsapp className="h-5 w-5" />}
                label="WhatsApp"
              />
            )}
            {contacto.facebook && (
              <ActionBtn
                href={contacto.facebook}
                icon={<FaFacebook className="h-5 w-5" />}
                label="Facebook"
              />
            )}
            {contacto.instagram && (
              <ActionBtn
                href={contacto.instagram}
                icon={<FaInstagram className="h-5 w-5" />}
                label="Instagram"
              />
            )}
          </div>
        )}

        {/* ── About + Contact card (side by side on desktop) ── */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_340px]">

          {/* About */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-zinc-900">
              <span className="block h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
              Acerca de la Tienda
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600">{negocio.descripcion}</p>

            {/* Mini info cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-zinc-100 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Ubicación</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{negocio.ubicacion} · Plaza Victoria</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-100 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Horario</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{negocio.horario}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark contact card */}
          <div className="rounded-2xl bg-zinc-900 p-6 text-white">
            <h3 className="mb-5 text-base font-semibold">Contáctanos</h3>

            <div className="mb-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4 text-primary-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Plaza Victoria</p>
                  <p className="text-xs text-zinc-400">{negocio.ubicacion}</p>
                  <p className="text-xs text-zinc-400">Ixmiquilpan, Hidalgo</p>
                </div>
              </div>

              {contacto?.telefono && (
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-4 w-4 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Teléfono</p>
                    <p className="text-xs text-zinc-400">{contacto.telefono}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Social links */}
            <div className="space-y-2">
              {contacto?.whatsapp && (
                <a
                  href={contacto.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Enviar mensaje por WhatsApp
                </a>
              )}
              <div className="flex gap-2 pt-1">
                {contacto?.facebook && (
                  <a
                    href={contacto.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <FaFacebook className="h-3.5 w-3.5" />
                    Facebook
                  </a>
                )}
                {contacto?.instagram && (
                  <a
                    href={contacto.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <FaInstagram className="h-3.5 w-3.5" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Gallery ───────────────────────────────────────── */}
        {negocio.imagenes.length > 0 && (
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-zinc-900">
              <span className="block h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
              Galería de la Tienda
            </h2>

            {negocio.imagenes.length === 1 ? (
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`/${negocio.imagenes[0]}`}
                  alt={`${negocio.nombre} — interior`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr_1fr] md:[grid-template-rows:200px_200px]">
                {/* First image — large, spans 2 rows on desktop */}
                <div className="col-span-2 overflow-hidden rounded-2xl md:col-span-1 md:[grid-row:1/3]">
                  <img
                    src={`/${negocio.imagenes[0]}`}
                    alt={`${negocio.nombre} — imagen 1`}
                    className="h-52 w-full object-cover md:h-full"
                    loading="lazy"
                  />
                </div>

                {/* Remaining images */}
                {negocio.imagenes.slice(1).map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl">
                    <img
                      src={`/${img}`}
                      alt={`${negocio.nombre} — imagen ${i + 2}`}
                      className="h-44 w-full object-cover md:h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
