export const plazaInfo = {
  name: 'Plaza Victoria',
  slogan: 'Tu destino de compras en Ixmiquilpan',
  description:
    'Plaza Victoria es el centro comercial de referencia en Ixmiquilpan, Hidalgo. Con más de 10 tiendas especializadas en 3 plantas modernas, te ofrecemos la mejor experiencia de compra en el corazón de la ciudad: moda para toda la familia, calzado de marcas, joyería fina, perfumería, ropa femenina, accesorios importados y mucho más. Un espacio limpio, seguro y familiar donde cada visita se convierte en un momento especial. Si buscas tiendas en Ixmiquilpan, Plaza Victoria es tu destino.',
  address: 'C. Peña y Ramírez 3, Centro, 42300 Ixmiquilpan, Hgo.',
  hours: [
    { days: 'Lunes a Domingo', time: '10:00 AM – 7:00 PM' },
  ],
  hoursNote: '* Los horarios pueden variar en días festivos. Consulta nuestras redes sociales.',
  stats: [
    { value: '10+', label: 'Tiendas' },
    { value: '3',   label: 'Plantas' },
  ],
  features: [
    {
      icon: 'parking',
      title: 'Estacionamiento Propio',
      description: 'Olvídate de buscar dónde dejar tu auto. Contamos con estacionamiento público con cámaras de seguridad 24/7, a tan solo $20 por hora. Lunes a Sábado 8 AM–8 PM, Domingos 9 AM–5 PM.',
      image: '/plaza/estacionamiento-publico.jpeg',
    },
    {
      icon: 'store',
      title: 'Variedad de Tiendas',
      description: 'Más de 10 tiendas especializadas en moda, calzado de marcas, joyería fina, perfumería, ropa femenina, accesorios importados y más. Todo bajo un mismo techo en el centro de Ixmiquilpan.',
      image: '/plaza/tiendas-interior.jpeg',
    },
    {
      icon: 'shield',
      title: 'Ambiente Seguro',
      description: 'Tu tranquilidad es nuestra prioridad. Cámaras CCTV en todo el recinto, acceso controlado y personal capacitado para que compres con total confianza en un espacio limpio y familiar.',
      image: '/plaza/corredor-interior.jpeg',
    },
  ],
  mapEmbedUrl:
    'https://maps.google.com/maps?q=C.+Peña+y+Ramírez+3,+Centro,+42300+Ixmiquilpan,+Hidalgo,+Mexico&output=embed&z=16',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=C.+Peña+y+Ramírez+3,+Centro,+42300+Ixmiquilpan,+Hidalgo,+Mexico',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581222458529&locale=es_LA',
  },
  contactWhatsapp: '5217596881818',
} as const;
