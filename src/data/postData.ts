export type PostType = "image" | "video" | "poster";

export interface Post {
  id: string;
  slug: string;           // NUEVO
  title: string;          // NUEVO
  type: PostType;
  src: string;
  poster?: string; // solo para video
  shareImage: string;     // NUEVO (para og:image)
  description: string;
  labels: string[]; // eventos | aperturas | promociones
  date: string;     // "YYYY-MM-DD"
}

export const postsData: Post[] = [
    {
        id: "dias-festivos-anuncio",
        slug: "dias-festivos-anuncio",
        title: "Estos son los dias en que Plaza Victoria estará cerrado",
        type: "poster",
        src: "/feed/Posters/daysoff.jpg",
        shareImage: "/feed/Posters/daysoff.jpg",
        description:
          "📢 ¡Atención clientes de Plaza Victoria! Les informamos que estaremos cerrados los días 25 de diciembre y 1 de enero para celebrar las festividades navideñas y de Año Nuevo. 🎄🎉 Agradecemos su comprensión y les deseamos unas felices fiestas. ¡Nos vemos pronto!",
        labels: ["eventos"],
        date: "2024-12-22",
    },
    {
      id: "santa-en-plaza-victoria",
      slug: "santa-en-plaza-victoria",
      title: "¡Santa Claus ha llegado a Plaza Victoria!",
      type: "poster",
      src: "/feed/Posters/santapv.jpg",
      shareImage: "/feed/Posters/santapv.jpg",
      description:
        "¡Santa Claus ha llegado a Plaza Victoria! 🎅 Ven a tomarte una foto con él y comparte tus deseos navideños. Estará con nosotros el 23 de diciembre, ¡no te lo pierdas!",
      labels: ["eventos"],
      date: "2024-12-20",
    },
    {
      id: "evento-posada-navidad",
      slug: "evento-posada-navidad",
      title: "¡Te invitamos a nuestra Posada Navideña!",
      type: "video",
      src: "/feed/Videos/posada.mp4",
      shareImage: "/feed/Images/navidad.jpg",
      description:
        "🎄✨ ¡Te invitamos a nuestra Posada Navideña en Plaza Victoria! Disfruta de entretenimiento para toda la familia, regalos especiales para los niños y delicias tradicionales como tamales y ponche. 🎁🍴 ¡Un evento totalmente gratuito que no te puedes perder!,",
      labels: ["eventos"],
      date: "2024-12-15",
    },
    {
      id: "venta-local-comercial-204",
      slug: "venta-local-comercial-204",
      title: "¡Locales comerciales en Plaza Victoria!",
      type: "poster",
      src: "/feed/Posters/localpvdescuento.jpg",
      shareImage: "/feed/Posters/localpvdescuento.jpg",
      description:
        "Haz que tu negocio esté donde la ciudad se mueve, donde las oportunidades pasan y los clientes llegan. 😄 Plaza Victoria te acompaña en tu crecimiento.",
      labels: ["promociones"],
      date: "2025-12-11",
    },
    {
      id: "Posada-Navideña-2025",
      slug: "posada-navidena-2025",
      title: "¡Únete a nuestra Posada Navideña 2025!",
      type: "image",
      src: "/feed/Images/navidad.jpg",
      shareImage: "/feed/Images/navidad.jpg",
      description:
        "🎄 ¡Únete a nuestra Posada Navideña en Plaza Victoria! Ven con tu familia y amigos para disfrutar de una noche mágica, comida tradicional y la visita especial de Santa Claus. ¡No te lo pierdas!",
      labels: ["eventos"],
      date: "2024-12-10",
    },
    {
      id: "promocion-posada-navidad",
      slug: "promocion-posada-navidad",
      title: "¡Disfruta de nuestra Posada Navideña!",
      type: "poster",
      src: "/feed/Posters/posada.jpg",
      shareImage: "/feed/Posters/posada.jpg",
      description:
        "Te invitamos a nuestra posada navideña 🎅🎁. Acompáñanos de 6:00 pm a 9:00 pm para disfrutar de un evento especial con entretenimiento, regalos y comida tradicional para toda la familia.",
      labels: ["eventos"],
      date: "2025-12-08",
    },
    {
      id: "Buenfin-jugeteria-victoria",
      slug: "buenfin-jugeteria-victoria",
      title: "¡Buen Fin en Juguetería Victoria!",
      type: "poster",
      src: "/feed/Posters/descuentojugeteriatresangelitos.jpg",
      shareImage: "/feed/Posters/descuentojugeteriatresangelitos.jpg",
      description:
        "🎉 ¡Llegó el Buen Fin a Juguetería Victoria! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra juguetes y artículos para niños de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
      labels: ["promociones"],
      date: "2025-11-07",
    },
    {
      id: "Buenfin-montana-hats",
      slug: "buenfin-montana-hats",
      title: "¡Buen Fin en Montana Hats!",
      type: "poster",
      src: "/feed/Posters/descuentomontanahats.jpg",
      shareImage: "/feed/Posters/descuentomontanahats.jpg",
      description:
        "🎉 ¡Llegó el Buen Fin a Montana Hats! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra gorras y accesorios de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
      labels: ["promociones"],
      date: "2025-11-07",
    },
    {
      id: "Buenfin-boutique-my-closet",
      slug: "buenfin-boutique-my-closet",
      title: "¡Buen Fin en Boutique My Clóset!",
      type: "poster",
      src: "/feed/Posters/descuentomyboutique.jpg",
      shareImage: "/feed/Posters/descuentomyboutique.jpg",
      description:
        "🎉 ¡Llegó el Buen Fin a Boutique My Clóset! Aprovecha nuestras increíbles ofertas y descuentos en ropa, accesorios, bolsas y calzado de las mejores marcas. ¡No te lo pierdas!",
      labels: ["promociones"],
      date: "2025-11-07",
    },
    {
      id: "Buenfin-sneakers-warriors",
      slug: "buenfin-sneakers-warriors",
      title: "¡Buen Fin en Sneakers Warriors!",
      type: "poster",
      src: "/feed/Posters/descuentosneakerwarriors.jpg",
      shareImage: "/feed/Posters/descuentosneakerwarriors.jpg",
      description:
        "🎉 ¡Llegó el Buen Fin a Sneaker Warriors! Aprovecha nuestras increíbles ofertas y descuentos en productos seleccionados. Encuentra el mejor calzado de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
      labels: ["promociones"],
      date: "2025-11-07",
    },
    {
      id: "Buenfin-novedades-gedri",
      slug: "buenfin-novedades-gedri",
      title: "¡Buen Fin en Novedades Gedri!",
      type: "poster",
      src: "/feed/Posters/descuentonovgedri.jpg",
      shareImage: "/feed/Posters/descuentonovgedri.jpg",
      description:
        "🎉 ¡Llegó el Buen Fin a Novedades Gedri! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra ropa y accesorios de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
      labels: ["promociones"],
      date: "2025-11-07",
    },
    {
      id: "inaguracion-jugeteria-tres-angelitos",
      slug: "inaguracion-jugeteria-tres-angelitos",
      title: "¡Inauguración de Juguetería Tres Angelitos!",
      type: "poster",
      src: "/feed/Posters/inaguracionjugeteria.jpg",
      shareImage: "/feed/Posters/inaguracionjugeteria.jpg",
      description:
        "🧸 ¡Inauguración de Juguetería Tres Angelitos en Plaza Victoria! Ven y descubre la mejor selección de ropa, juguetes y artículos para niños de todas las edades. Aprovecha nuestras ofertas especiales de apertura y encuentra el regalo perfecto para tus pequeños.",
      labels: ["aperturas"],
      date: "2025-11-03",
    },
    {
      id: "inaguracion-arceparfum",
      slug: "inaguracion-arceparfum",
      title: "¡Inauguración de Arce Parfum!",
      type: "image",
      src: "/feed/Images/arceparfurminaguracion.jpg",
      shareImage: "/feed/Images/arceparfurminaguracion.jpg",
      description:
        "🌸 ¡Inauguración de Arce Parfum en Plaza Victoria! Ven y descubre la mejor selección de perfumes y fragancias para todas las ocasiones. Aprovecha nuestras ofertas especiales de apertura y encuentra tu aroma ideal.",
      labels: ["aperturas"],
      date: "2025-10-25",
    },
    {
      id: "tu-negocio-en-plaza-victoria",
      slug: "tu-negocio-en-plaza-victoria",
      title: "¡Tu negocio en Plaza Victoria!",
      type: "poster",
      src: "/feed/Posters/marcaenplazavictoria.jpg",
      shareImage: "/feed/Posters/marcaenplazavictoria.jpg",
      description:
        "💼 Emprendedor, profesionista, empresario: ¡Tu marca, producto o servicio puede comenzar aquí con nosotros! 🌟 Aún tenemos locales comerciales disponibles para que formes parte de Plaza Victoria.",
      labels: ["aperturas"],
      date: "2025-10-22",
    },
    {
      id: "evento-halloween-plaza-victoria",
      slug: "evento-halloween-plaza-victoria",
      title: "¡Así se vivió Halloween en Plaza Victoria!",
      type: "image",
      src: "/feed/Images/hallowenpv2.jpg",
      shareImage: "/feed/Images/hallowenpv2.jpg",
      description:
        "Así es como se vivió Halloween en Plaza Victoria 🎃👻. Gracias a todos los que nos acompañaron y disfrutaron de un día lleno de diversión y sorpresas espeluznantes. ¡Nos vemos en el próximo evento!",
      labels: ["eventos"],
      date: "2025-10-30",
    },
    {
      id: "inaguracion-montana-hats",
      slug: "inaguracion-montana-hats",
      title: "¡Inauguración de Montana Hats!",
      type: "image",
      src: "/feed/Images/montanahatsinaguracion.jpg",
      shareImage: "/feed/Images/montanahatsinaguracion.jpg",
      description:
        "🎩 ¡Inauguración de Montana Hats en Plaza Victoria! Ven y descubre la mejor selección de gorras y accesorios de moda para todas las ocasiones. Aprovecha nuestras ofertas especiales de apertura y encuentra el estilo perfecto para ti.",
      labels: ["aperturas"],
      date: "2025-10-18",
    },
    {
      id: "anuncio-hallowen",
      slug: "anuncio-hallowen",
      title: "¡Prepárate para Halloween en Plaza Victoria!",
      type: "poster",
      src: "/feed/Posters/halloweenanuncio.jpg",
      shareImage: "/feed/Posters/halloweenanuncio.jpg",
      description:
        "🎃 ¡Prepárate para Halloween en Plaza Victoria! Ven y disfruta de nuestras actividades especiales, concursos de disfraces y sorpresas espeluznantes para toda la familia. ¡No te lo pierdas!",
      labels: ["eventos"],
      date: "2025-10-16",
    },
    {
      id: "promocion-nuevo-local",
      slug: "promocion-nuevo-local",
      title: "¡Locales comerciales disponibles!",
      type: "poster",
      src: "/feed/Posters/anunciopv.jpg",
      shareImage: "/feed/Posters/anunciopv.jpg",
      description:
        "¡No dejes pasar esta oportunidad! Locales 105 y 106 ubicados en la planta baja de la plaza, con una medida de 33.01 m². Una excelente opción para tener uno de los mejores locales de la plaza.",
      labels: ["promociones"],
      date: "2024-10-15",
    },
    {
      id: "inaguracion-sneakers-warriors",
      slug: "inaguracion-sneakers-warriors",
      title: "¡Inauguración de Sneakers Warriors!",
      type: "image",
      src: "/feed/Images/sneakerswarriorsinauguracion.jpg",
      shareImage: "/feed/Images/sneakerswarriorsinauguracion.jpg",
      description:
        "👟 ¡Inauguración de Sneakers Warriors en Plaza Victoria! Ven y descubre la mejor selección de calzado deportivo y casual para todas las edades. Aprovecha nuestras ofertas especiales de apertura y encuentra el par perfecto para ti.",
      labels: ["aperturas"],
      date: "2025-10-11",
    },
    {
      id: "anuncio-apertura-estacionamiento",
      slug: "anuncio-apertura-estacionamiento",
      title: "¡Apertura del estacionamiento en Plaza Victoria!",
      type: "image",
      src: "/feed/Images/estacionamientoanuncio.jpg",
      shareImage: "/feed/Images/estacionamientoanuncio.jpg",
      description:
        "🚗 ¡Ahora puedes disfrutar del estacionamiento de Plaza Victoria! Deja tu auto con comodidad mientras visitas nuestras tiendas y eventos.",
      labels: ["aperturas"],
      date: "2025-10-09",
    },
  ];
