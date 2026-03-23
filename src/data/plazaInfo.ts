export const plazaInfo = {
  name: 'Plaza Victoria',
  slogan: 'Tu destino de compras en Ixmiquilpan',
  description:
    'Plaza Victoria no es solo un centro comercial; es un punto de encuentro para la comunidad de Ixmiquilpan. Desde nuestra apertura, nos hemos dedicado a ofrecer un espacio seguro, limpio y moderno donde las familias pueden crear memorias. Desde tiendas de moda hasta boutiques locales, joyerías y perfumerías, te traemos lo mejor del comercio al corazón del Valle del Mezquital.',
  address: 'C. Peña y Ramírez 3, Centro, 42300 Ixmiquilpan, Hgo.',
  hours: [
    { days: 'Lunes a Domingo', time: '10:00 AM – 7:00 PM' },
  ],
  hoursNote: '* Los horarios pueden variar en días festivos. Consulta nuestras redes sociales.',
  stats: [
    { value: '10+', label: 'Tiendas' },
    { value: '2',   label: 'Plantas' },
  ],
  features: [
    {
      icon: 'parking',
      title: 'Estacionamiento',
      description: 'Amplio estacionamiento gratuito para que visites con toda comodidad y sin preocupaciones.',
      image: '/plaza/estaciona.jpeg',
    },
    {
      icon: 'store',
      title: 'Tiendas Variadas',
      description: 'Más de 10 tiendas con moda, calzado, joyería, perfumería, importados y más.',
      image: '/plaza/iluminacion.jpeg',
    },
    {
      icon: 'shield',
      title: 'Ambiente Seguro',
      description: 'Personal de seguridad y cámaras CCTV para garantizar tu tranquilidad en todo momento.',
      image: '/plaza/frontalpv.jpeg',
    },
  ],
  mapEmbedUrl:
    'https://maps.google.com/maps?q=C.+Peña+y+Ramírez+3,+Centro,+42300+Ixmiquilpan,+Hidalgo,+Mexico&output=embed&z=16',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=C.+Peña+y+Ramírez+3,+Centro,+42300+Ixmiquilpan,+Hidalgo,+Mexico',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581222458529&locale=es_LA',
  },
} as const;
