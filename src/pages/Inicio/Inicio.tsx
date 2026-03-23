import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import FeaturesSection from './sections/FeaturesSection';
import HoursLocationSection from './sections/HoursLocationSection';
import CTASection from './sections/CTASection';

const SITE_URL = 'https://plazavictoria.mx';

export default function Inicio() {
  return (
    <>
      <Helmet>
        <title>Plaza Victoria | El Mejor Centro Comercial en Ixmiquilpan, Hidalgo</title>
        <meta
          name="description"
          content="Plaza Victoria, el mejor centro comercial de Ixmiquilpan, Hidalgo. Más de 10 tiendas de moda, calzado, joyería y perfumería en 3 plantas modernas. Abierto lunes a domingo, 10 AM – 7 PM. ¡Visítanos!"
        />
        <link rel="canonical" href={`${SITE_URL}/inicio`} />
        <meta property="og:title"       content="Plaza Victoria | El Mejor Centro Comercial en Ixmiquilpan" />
        <meta property="og:description" content="Moda, calzado, joyería, perfumería y más en 3 plantas en el corazón de Ixmiquilpan. Abierto todos los días." />
        <meta property="og:url"         content={`${SITE_URL}/inicio`} />
        <meta property="og:type"        content="website" />
        <meta property="og:image"       content={`${SITE_URL}/imagenes/og-banner.jpg`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type':    'ShoppingCenter',
            name:       'Plaza Victoria',
            url:        SITE_URL,
            address: {
              '@type':          'PostalAddress',
              streetAddress:    'C. Peña y Ramírez 3',
              addressLocality:  'Ixmiquilpan',
              addressRegion:    'Hidalgo',
              postalCode:       '42300',
              addressCountry:   'MX',
            },
            openingHoursSpecification: {
              '@type':     'OpeningHoursSpecification',
              dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
              opens:       '10:00',
              closes:      '19:00',
            },
          })}
        </script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HoursLocationSection />
      <CTASection />
    </>
  );
}
