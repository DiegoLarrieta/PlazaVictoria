export type PostType = "image" | "video" | "poster";

export type PostMediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

export interface Post {
  id: string;
  slug: string;
  title: string;
  media: PostMediaItem[];
  shareImage: string;
  description: string;
  labels: string[]; // eventos | aperturas | promociones
  date: string;     // "YYYY-MM-DD"
  active?: boolean; // false = expired, hidden from Ofertas (still visible in Novedades)
}

export const postsData: Post[] = [
  {
    id: "feliz-dia-del-nino-plaza-victoria-2026",
    slug: "feliz-dia-del-nino-plaza-victoria-2026",
    title: "🎈 ¡Feliz Día del Niño! — Plaza Victoria te invita el 30 de Abril",
    media: [
      {
        type: "image",
        src: "/feed/Posters/dia-del-nino-2026.jpg",
        alt: "Feliz Día del Niño en Plaza Victoria — 30 de Abril a partir de las 4:00 PM",
      },
    ],
    shareImage: "/feed/Posters/dia-del-nino-2026.jpg",
    description:
      "🎉 ¡Plaza Victoria se viste de fiesta para celebrar a los más importantes!\n\nEste 30 de abril a partir de las 4:00 PM, trae a los peques y disfruta en familia de una tarde que no van a querer que termine.\n\n🎪 Juegos inflables\n🍭 Dulces gratis\n🎭 Show infantil\n🎁 Regalos sorpresa\n\nEntrada libre — solo necesitas venir con ganas de divertirte.\n\n📍 Plaza Victoria — Centro de Ixmiquilpan, Hidalgo\n📅 Jueves 30 de Abril • Desde las 4:00 PM\n\n¡Los esperamos a todos! 👨‍👩‍👧‍👦✨",
    labels: ["eventos"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "boutique-axi-plaza-victoria",
    slug: "boutique-axi-plaza-victoria",
    title: "🤩 Boutique Axi — Moda Femenina ya está en Plaza Victoria",
    media: [
      {
        type: "video",
        src: "/feed/Videos/boutique-axi.mp4",
        poster: "/feed/Images/boutique-axi.jpg",
      },
    ],
    shareImage: "/feed/Images/boutique-axi.jpg",
    description:
      "✨ El estilo que buscabas acaba de llegar — y tiene dirección.\n\nBoutique Axi ya abrió sus puertas en Plaza Victoria con lo mejor en moda femenina: prendas modernas, looks que combinan actitud con tendencia y piezas pensadas para la mujer que quiere verse increíble todos los días.\n\n👗 Ropa femenina moderna y a la moda\n💫 Prendas para el día a día y ocasiones especiales\n🌸 Porque cada mujer merece un guardarropa que la represente\n\nSi llevas tiempo buscando tu tienda favorita de moda — ya la encontraste.\n\n📍 Plaza Victoria Ixmiquilpan — Local 202, Primer Nivel\n\n¡Ven, explora y encuentra tu próximo outfit! 🛍️😍",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "arce-parfum-fragancias-arabes",
    slug: "arce-parfum-fragancias-arabes",
    title: "🌹 Arce Parfum — Fragancias Árabes que Dejan Huella",
    media: [
      {
        type: "video",
        src: "/feed/Videos/arce-parfum.mp4",
        poster: "/feed/Images/arce-parfum.jpg",
      },
    ],
    shareImage: "/feed/Images/arce-parfum.jpg",
    description:
      "✨ Un aroma dice lo que las palabras no pueden — y el tuyo debería ser inolvidable.\n\nEn Arce Parfum te esperan fragancias árabes únicas: intensas, elegantes y profundas, creadas para quienes buscan algo más allá de lo ordinario. Cada esencia es una experiencia sensorial que se queda en la memoria de todos los que te rodean.\n\n🌹 Perfumería árabe auténtica\n💫 Fragancias intensas, únicas y de larga duración\n✨ Para hombre, mujer y ocasiones especiales\n🎁 El regalo más personal que puedes dar\n\nBuscar tu fragancia ideal no es un capricho — es conocerte mejor.\n\n📍 Plaza Victoria Ixmiquilpan — Local 203, Primer Nivel\n\n¡Ven y encuentra la esencia que te define! 🥰⭐️",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "roa-boutique-plaza-victoria",
    slug: "roa-boutique-plaza-victoria",
    title: "🛍️ Roa Boutique — Moda Moderna que Habla por Ti",
    media: [
      {
        type: "video",
        src: "/feed/Videos/roa-boutique.mp4",
        poster: "/feed/Images/roa-boutique.jpg",
      },
    ],
    shareImage: "/feed/Images/roa-boutique.jpg",
    description:
      "✨ Tu estilo es tuyo — Roa Boutique solo te ayuda a expresarlo mejor.\n\nEncuentra ropa moderna, piezas que combinan con todo y looks pensados para la mujer de hoy: versátil, segura y siempre a la moda. Desde lo casual hasta lo que te hace destacar en cualquier ocasión, Roa Boutique tiene exactamente lo que buscabas.\n\n🌸 Ropa moderna y tendencias actuales\n👗 Prendas para cada ocasión y cada estilo\n💫 Porque renovar tu look debería sentirse bien\n\nNo necesitas buscar más lejos — tu próximo outfit favorito ya te está esperando.\n\n📍 Plaza Victoria Ixmiquilpan — Local 104, Planta Baja\n\n¡Ven, pruébate y enamórate de tu nuevo look! 😍🛍️",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "dia-del-nino-plaza-victoria-2026",
    slug: "dia-del-nino-plaza-victoria-2026",
    title: "🎉 ¡Celebra el Día del Niño en Plaza Victoria! — 30 de Abril",
    media: [
      {
        type: "video",
        src: "/feed/Videos/dia-del-nino-plaza-victoria.mp4",
        poster: "/feed/Images/dia-del-nino-plaza-victoria.jpg",
      },
    ],
    shareImage: "/feed/Images/dia-del-nino-plaza-victoria.jpg",
    description:
      "🎈 ¡El mejor día del año para los peques se celebra en Plaza Victoria!\n\nEste 30 de abril te invitamos a vivir una tarde que los niños no van a olvidar — llena de diversión, sorpresas, juegos y toda la alegría que se merecen.\n\n🎁 Sorpresas especiales para los niños\n🍭 Dulces y mucha diversión\n🎊 Actividades para toda la familia\n👨‍👩‍👧‍👦 Porque los momentos en familia son los que más valen\n\nMarca el calendario, avísale a los pequeños y preséntate con toda la familia.\n\n📍 Plaza Victoria — Centro de Ixmiquilpan, Hidalgo\n📅 Jueves 30 de Abril\n\n¡Los esperamos con los brazos abiertos! 🥳✨",
    labels: ["eventos"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "ammonite-plata-brillo-unico",
    slug: "ammonite-plata-brillo-unico",
    title: "💎 Joyería que Roba Miradas — Ammonite Plata en Plaza Victoria",
    media: [
      {
        type: "video",
        src: "/feed/Videos/ammonite-plata-joyeria.mp4",
        poster: "/feed/Images/ammonite-plata-joyeria.jpg",
      },
    ],
    shareImage: "/feed/Images/ammonite-plata-joyeria.jpg",
    description:
      "✨ Hay accesorios que completan un outfit — y hay piezas que lo transforman por completo.\n\nEn Ammonite Plata encontrarás joyería diseñada para mujeres que saben lo que quieren: elegancia sin esfuerzo, detalles que se notan y piezas que cuentan tu historia sin decir una sola palabra.\n\n💎 Collares, aretes, pulseras y accesorios únicos\n✨ Desde el look casual hasta la ocasión especial\n🎁 El regalo perfecto para ti o para quien más quieres\n\nPorque el brillo que llevas puesta no es casualidad — es una decisión.\n\n📍 Plaza Victoria Ixmiquilpan — encuéntranos adentro del plaza\n\n¡Ven y descubre tu próxima pieza favorita! 💫",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "mycloset-ofertas-tiempo-limitado",
    slug: "mycloset-ofertas-tiempo-limitado",
    title: "🔥 ¡Ofertas por Tiempo Limitado en My Closet Boutique! — Solo por Hoy",
    media: [
      {
        type: "video",
        src: "/feed/Videos/mycloset-ofertas-temporada.mp4",
        poster: "/feed/Images/mycloset-ofertas-temporada.jpg",
      },
    ],
    shareImage: "/feed/Images/mycloset-ofertas-temporada.jpg",
    description:
      "🚨 ¡ALERTA DE OFERTA! Las prendas que querías, al precio que esperabas — y solo por tiempo limitado.\n\nEn My Closet Boutique tenemos descuentos increíbles en ropa de temporada para que renueves tu guardarropa sin gastar de más. Looks completos, colores que marcan tendencia y piezas únicas que no encontrarás en otro lugar.\n\n💃 Porque verse bien no debería ser un lujo — debería ser una decisión que tomas hoy.\n\n🏷️ Descuentos exclusivos en ropa en tendencia\n👗 Outfits listos para lucir al instante\n⏳ Solo por tiempo limitado — las tallas se agotan rápido\n\n📍 Plaza Victoria Ixmiquilpan — Locales 110 y 111, Planta Baja\n\n¡Ven hoy y lleva el outfit que mereces antes de que se agote! 🛍️🔥",
    labels: ["promociones"],
    active: true,
    date: "2026-04-21",
  },
  {
    id: "como-llegar-plaza-victoria",
    slug: "como-llegar-plaza-victoria",
    title: "📍 ¿Cómo Llegar a Plaza Victoria? — Ixmiquilpan, Hidalgo",
    media: [
      {
        type: "video",
        src: "/feed/Videos/como-llegar-plaza-victoria.mp4",
        poster: "/feed/Images/como-llegar-plaza-victoria.jpg",
      },
    ],
    shareImage: "/feed/Images/como-llegar-plaza-victoria.jpg",
    description:
      "📍 ¿Ya sabes dónde estamos?\n\nPlaza Victoria está en el corazón de Ixmiquilpan — y llegar es más fácil de lo que imaginas.\n\nDale play al video y descubre cómo encontrarnos desde cualquier punto de la ciudad. Sin rodeos, sin complicaciones.\n\n🛍️ Tiendas, moda, accesorios, gastronomía y mucho más te esperan.\n\n📌 Estamos en el Centro de Ixmiquilpan, Hidalgo.\n\n¡Te esperamos hoy! ✨",
    labels: ["eventos"],
    active: true,
    date: "2026-04-02",
  },
  {
    id: "mycloset-nueva-coleccion-accesorios",
    slug: "mycloset-nueva-coleccion-accesorios",
    title: "✨ Nueva Colección — Outfits y Accesorios en My Closet Boutique",
    media: [
      {
        type: "image",
        src: "/feed/Images/mycloset-nueva-coleccion-1.jpg",
        alt: "Outfits de temporada — My Closet Boutique Plaza Victoria",
      },
      {
        type: "image",
        src: "/feed/Images/mycloset-nueva-coleccion-2.jpg",
        alt: "Collar de charms dorados — My Closet Boutique Plaza Victoria",
      },
      {
        type: "image",
        src: "/feed/Images/mycloset-nueva-coleccion-3.jpg",
        alt: "Collar con dije de caballito de mar — My Closet Boutique Plaza Victoria",
      },
      {
        type: "image",
        src: "/feed/Images/mycloset-nueva-coleccion-4.jpg",
        alt: "Collar sol dorado con charms — My Closet Boutique Plaza Victoria",
      },
    ],
    shareImage: "/feed/Images/mycloset-nueva-coleccion-1.jpg",
    description:
      "✨ La moda que llevas puesta dice todo lo que no necesitas decir.\n\nEn My Closet Boutique acabamos de renovar nuestra colección con prendas y accesorios que combinan estilo, elegancia y actitud — todo en un solo lugar.\n\n👗 Outfits de temporada listos para lucir\n📿 Collares artesanales y accesorios únicos\n💛 Piezas que complementan cualquier look\n\nPorque los detalles marcan la diferencia, y tú lo sabes.\n\n📍 Plaza Victoria Ixmiquilpan — Locales 110 y 111, Planta Baja (junto al elevador)\n\n¡Ven, pruébate y enamórate! 🛍️💚",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-02",
  },
  {
    id: "tienda-naturista-plaza-victoria",
    slug: "tienda-naturista-plaza-victoria",
    title: "🌿 Tu Salud Natural Está Aquí — Tienda Naturista en Plaza Victoria",
    media: [
      {
        type: "video",
        src: "/feed/Videos/tienda-naturista.mp4",
        poster: "/feed/Images/tienda-naturista.jpg",
      },
    ],
    shareImage: "/feed/Images/tienda-naturista.jpg",
    description:
      "🌿✨ ¿Quieres mejorar tu salud de forma natural y sin complicaciones?\n\nEn nuestra Tienda Naturista encontrarás todo lo que tu cuerpo necesita para sentirse bien por dentro y brillar por fuera. Productos 100% naturales, suplementos de alta calidad, líneas de cuidado de la piel y soluciones de bienestar integral — todo en un solo lugar.\n\n💚 Porque tu salud es tu mayor inversión, y la naturaleza tiene lo que necesitas.\n\n✅ Productos naturales y suplementos\n✅ Cuidado de la piel\n✅ Bienestar y vida saludable\n\n📍 Plaza Victoria — Local 112, Planta Baja\n\n¡Da el primer paso hoy y comienza tu camino hacia una vida más plena y saludable! 🌱",
    labels: ["aperturas"],
    active: true,
    date: "2026-04-02",
  },
  {
    id: "oferta-skinny-jeans-claus-aldana",
    slug: "oferta-skinny-jeans-claus-aldana",
    title: "👖 Skinny Jeans de Temporada — Boutique Clau's Aldana",
    media: [
      {
        type: "image",
        src: "/feed/Posters/skinny-jeans-claus-aldana.jpg",
        alt: "Oferta Skinny Jeans — Boutique Clau's Aldana, Plaza Victoria Local 202",
      },
    ],
    shareImage: "/feed/Posters/skinny-jeans-claus-aldana.jpg",
    description:
      "👖✨ ¡Los Skinny Jeans que estabas buscando ya están aquí!\n\nEn Boutique Clau's Aldana encontrarás la mejor selección de skinny jeans con el ajuste perfecto, el color ideal y la calidad que mereces — todo a precios que te van a encantar.\n\n🏷️ Aprovecha nuestras ofertas especiales en jeans y renueva tu look con el estilo que está marcando tendencia esta temporada.\n\n📍 Plaza Victoria | Local 202, Primer Nivel — Centro Ixmiquilpan\n\n¡Ven, pruébatelos y enamórate! 🛍️🌸",
    labels: ["promociones"],
    active: true,
    date: "2026-03-22",
  },
  {
    id: "oferta-boutique-claus-aldana-nueva-temporada",
    slug: "oferta-boutique-claus-aldana-nueva-temporada",
    title: "🌸 Nueva Temporada, Nuevos Looks — Boutique Clau's Aldana",
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuento-claus-aldana.jpg",
        alt: "Oferta especial — Descuentos en todas las prendas en Boutique Clau's Aldana",
      },
    ],
    shareImage: "/feed/Posters/descuento-claus-aldana.jpg",
    description:
      "🌸✨ Nueva Temporada, Nuevos Looks en Boutique Clau's Aldana.\n\n¡Renueva tu guardarropa con las mejores prendas de la nueva temporada y aprovecha los descuentos especiales que tenemos para ti! Faldas, blusas, vestidos y mucho más con los colores y estilos que están marcando tendencia.\n\n🏷️ Descuentos en todas las prendas\n📍 Plaza Victoria | Local 202, Primer Nivel — Centro Ixmiquilpan\n\n¡Ven y encuentra tu mejor outfit! 👏🥰",
    labels: ["promociones"],
    active: true,
    date: "2026-03-22",
  },
  {
    id: "my-closet-boutique-elegancia-que-se-nota",
    slug: "my-closet-boutique-elegancia-que-se-nota",
    title: "My Closet Boutique — Elegancia que se nota, estilo que perdura 👗",
    media: [
      {
        type: "video",
        src: "/feed/Videos/mycloset-boutique.mp4",
        poster: "/feed/Images/mycloset-boutique.jpg",
      },
    ],
    shareImage: "/feed/Images/mycloset-boutique.jpg",
    description:
      "My Closet Boutique 👗🛍️\n\nElegancia que se nota, estilo que perdura.\n\nDescubre tu mejor versión en uno de los espacios de moda femenina más queridos de Ixmiquilpan. My Closet Boutique te espera con las últimas tendencias en ropa, accesorios y mucho más, todo pensado para la mujer que sabe lo que quiere.\n\n📍 Plaza Victoria | Locales 110 y 111\n🕙 Lunes a Sábado — 11:00 AM a 8:00 PM\n\n¡Visítanos y descubre tu mejor versión! 🌸",
    labels: ["aperturas"],
    date: "2026-03-22",
  },
  {
    id: "estacionamiento-pension-plaza-victoria",
    slug: "estacionamiento-pension-plaza-victoria",
    title: "🚗 Estaciona tu Auto con Total Seguridad en Plaza Victoria",
    media: [
      {
        type: "image",
        src: "/feed/Posters/pension-plaza-victoria.jpg",
        alt: "Estacionamiento Pensión Noche y Día — Plaza Victoria Ixmiquilpan",
      },
    ],
    shareImage: "/feed/Posters/pension-plaza-victoria.jpg",
    description:
      "🚗✨ ¡Estaciona tu auto en un lugar seguro y de confianza!\n\nEn Plaza Victoria contamos con servicio de Pensión de Día y de Noche para brindarte la comodidad y tranquilidad que mereces. Tu auto estará protegido con cámaras de seguridad 24/7 en pleno centro de Ixmiquilpan.\n\n✅ Cámaras de seguridad 24/7\n📍 Ubicado en el Centro de Ixmiquilpan\n🅿️ Lugares disponibles\n📞 Informes: Local 108 — (759) 688 1818 / (771) 319 8995\n\nNo pongas en riesgo tu patrimonio. ¡Aparta tu lugar hoy y conduce tranquilo!",
    labels: ["eventos"],
    date: "2026-03-22",
  },
  {
    id: "el-regalo-perfecto-de-san-valentin-se-encuentra-en-plaza-victoria",
    slug: "el-regalo-perfecto-de-san-valentin-se-encuentra-en-plaza-victoria",
    title: "✨ El Regalo Perfecto de San Valentín se Encuentra en Plaza Victoria ✨",
    media: [
      {
        type: "video",
        src: "/feed/Videos/sanvalentinpv.mp4",
        poster: "/feed/Images/sanvalentinpv.jpg",
      }
    ],
    shareImage: "/feed/Images/sanvalentinpv.jpg",
    description:
      "✨ El Regalo Perfecto de San Valentín se Encuentra en Plaza Victoria ✨\n\n¡Descubre los mejores regalos para San Valentín en Plaza Victoria! 🎁\n\nEncontrarás una amplia variedad de productos para regalar a tu pareja, familia o amigos. ¡No pierdas esta oportunidad de encontrar el regalo perfecto!",
    labels: ["promociones"],
    active: false,
    date: "2026-02-14",
  },
  {
    id: "local-comercial-en-venta-plaza-victoria",
    slug: "local-comercial-en-venta-plaza-victoria",
    title: "✨ Local Comercial en Venta en Plaza Victoria ✨",
    media: [
      {
        type: "video",
        src: "/feed/Videos/videorestaurante.mp4",
        poster: "/feed/Images/localventa.jpg",
      }
    ],
    shareImage: "/feed/Images/localventa.jpg",
    description:
      "✨ Local Comercial en Venta en Plaza Victoria ✨\n\n¡Descubre el espacio perfecto para tu negocio en Plaza Victoria!\n\nLocal comercial disponible para venta en la zona central de Ixmiquilpan.",
    labels: ["eventos"],
    date: "2026-02-14",
  },
  {
    id: "renta-local-comercial-plaza-victoria",
    slug: "renta-local-comercial-plaza-victoria-ixmiquilpan",
    title: "✨ Dale a tu Negocio el Espacio que Merece ✨",
    media: [
      {
        type: "image",
        src: "/feed/Posters/rentalocalpv.jpg",
        alt: "Renta de Local Comercial en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Posters/rentalocalpv.jpg",
    description:
      "✨ Dale a tu Negocio el Espacio que Merece ✨\n\nRenta de Local Comercial en Plaza Victoria Centro Ixmiquilpan.\n\n‼️ Un Espacio Funcional, Listo para Ocuparse y Comenzar a Generar Ventas Desde el Primer Día. 💥\n\n📍 Ubicación Estratégica en el Corazón de la Ciudad de Ixmiquilpan.\n\n💘 Aprovecha Nuestro Precio Especial del 14 de Febrero y Enamórate del Lugar Perfecto para tu Negocio.\n\n¡Es el Momento Ideal para dar el Siguiente Paso en Plaza Victoria! 🥰",
    labels: ["promociones"],
    active: false,
    date: "2026-02-12",
  },
  {
    id: "bienvenida-ammonite-plata",
    slug: "bienvenida-ammonite-plata",
    title: "✨ Bienvenida a Plaza Victoria ✨",
    media: [
      {
        type: "image",
        src: "/feed/Images/ammonitep1.jpg",
        alt: "Bienvenida Ammonite Plata - Joyería"
      },
      {
        type: "image",
        src: "/feed/Images/ammonitep2.jpg",
        alt: "Ammonite Plata - Joyería en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Images/ammoniteplata1.jpg",
    description:
      "✨ Bienvenida a Plaza Victoria ✨\n\nEn Plaza Victoria nos llena de orgullo recibir a Ammonite Plata, una joyería que llega para brillar con estilo, detalle y elegancia.\n\nLes deseamos el mayor de los éxitos en esta nueva etapa y agradecemos la confianza de unirse a nuestra familia.\n\nQue cada joya cuente una historia… y que esta sea el inicio de muchas más. 💎\n\n¡Bienvenidos a Plaza Victoria!",
  labels: ["aperturas"],
  date: "2026-02-12",
  },
  {
    id: "inaguracion-boutique-claus-aldana",
    slug: "inaguracion-boutique-claus-aldana",
    title: "¡Inauguración de Boutique Claus Aldana!",
    media: [
      {
        type: "image",
        src: "/feed/Images/boutiquepost1.jpg",
        alt: "Inauguración Boutique Claus Aldana"
      },
      {
        type: "image",
        src: "/feed/Images/boutiquep2.jpg",
        alt: "Boutique Claus Aldana - Moda Femenina"
      }
    ],
    shareImage: "/feed/Images/boutiquepost1.jpg",
    description:
      "👗💖 ¡Plaza Victoria les da la más cordial bienvenida a la inauguración de Boutique Claus Aldana! Hoy abrimos las puertas de un nuevo espacio dedicado a la moda femenina, con ropa para dama para todos los estilos. Gracias por ser parte de este momento especial. ¡Les deseamos una experiencia llena de estilo y elegancia!",
    labels: ["aperturas"],
    date: "2026-01-24",
  },
  {
    id: "video-principal-plaza-victoria",
    slug: "video-introduccion-plaza-victoria",
    title: "Descubre Plaza Victoria: El mejor centro comercial de Ixmiquilpan",
    media: [
      {
        type: "video",
        src: "/feed/Videos/videoinstitucional.mp4",
        poster: "/feed/Images/videoinstitucional.jpg",
      },
    ],
    shareImage: "/feed/Images/videoinstitucional.jpg",
    description:
      "🎥 Descubre Plaza Victoria, el corazón comercial de Ixmiquilpan...",
    labels: ["eventos"],
    date: "2026-01-05",
  },
  {
    id: "reyes-magos-en-plaza-victoria",
    slug: "reyes-magos-en-plaza-victoria",
    title: "¡Asi se vivió el Día de Reyes en Plaza Victoria!",
    media: [
      {
        type: "image",
        src: "/feed/Images/diareyes2.jpg",
        alt: "Día de Reyes en Plaza Victoria",
      },
      {
        type: "image",
        src: "/feed/Images/diareyes3.jpg",
        alt: "Día de Reyes en Plaza Victoria",
      },
      {
        type: "image",
        src: "/feed/Images/diareyes1.jpg",
        alt: "Día de Reyes en Plaza Victoria",
      },
    ],
    shareImage: "/feed/Images/reyesmagospv.jpg",
    description:
      "👑🎉 ¡Así se vivió el Día de Reyes en Plaza Victoria! ...",
    labels: ["eventos"],
    date: "2026-01-07",
  },
  {
      id: "reyes-magos-plaza-victoria",
      slug: "reyes-magos-plaza-victoria",
      title: "¡Celebra el Día de Reyes en Plaza Victoria!",
      media: [
        { 
          type: "image",
          src: "/feed/Posters/reyesmagos.jpeg", 
          alt: "Día de Reyes" 
        },
      ],
      shareImage: "/feed/Posters/reyesmagos.jpeg",
      description:
        "👑🎉 ¡Celebra el Día de Reyes en Plaza Victoria! Ven con tu familia y disfruta de actividades especiales, sorpresas y la visita de los Reyes Magos. No olvides traer tu carta y compartir la magia de esta tradición con nosotros. ¡Te esperamos el 6 de enero! 🎁✨",
      labels: ["eventos"],
      date: "2025-01-03",
  },
  {
      id: "dias-festivos-anuncio",
      slug: "dias-festivos-anuncio",
      title: "Estos son los dias en que Plaza Victoria estará cerrado",
      media: [
        { 
          type: "image",
          src: "/feed/Posters/daysoff.jpg",
          alt: "Días festivos de Plaza Victoria"
        },
      ],
      shareImage: "/feed/Posters/daysoff.jpg",
      description:
        "📢 ¡Atención clientes de Plaza Victoria! Les informamos que estaremos cerrados los días 25 de diciembre y 1 de enero para celebrar las festividades navideñas y de Año Nuevo. 🎄🎉 Agradecemos su comprensión y les deseamos unas felices fiestas. ¡Nos vemos pronto!",
      labels: ["eventos"],
      date: "2025-12-22",
  },
  {
    id: "santa-en-plaza-victoria",
    slug: "santa-en-plaza-victoria",
    title: "¡Santa Claus ha llegado a Plaza Victoria!",
    media: [
      { 
        type: "image",
        src: "/feed/Posters/santapv.jpg" ,
        alt: "Santa Claus en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Posters/santapv.jpg",
    description:
      "¡Santa Claus ha llegado a Plaza Victoria! 🎅 Ven a tomarte una foto con él y comparte tus deseos navideños. Estará con nosotros el 23 de diciembre, ¡no te lo pierdas!",
    labels: ["eventos"],
    date: "2025-12-20",
  },
  {
    id: "evento-posada-navidad",
    slug: "evento-posada-navidad",
    title: "¡Te invitamos a nuestra Posada Navideña!",
    media: [
      { 
        type: "video",
        src: "/feed/Videos/posada.mp4",
        poster: "/feed/Images/posada-poster.jpg"
      },
    ],
    shareImage: "/feed/Images/navidad.jpg",
    description:
      "🎄✨ ¡Te invitamos a nuestra Posada Navideña en Plaza Victoria! Disfruta de entretenimiento para toda la familia, regalos especiales para los niños y delicias tradicionales como tamales y ponche. 🎁🍴 ¡Un evento totalmente gratuito que no te puedes perder!,",
    labels: ["eventos"],
    date: "2025-12-15",
  },
  {
    id: "venta-local-comercial-204",
    slug: "venta-local-comercial-204",
    title: "¡Locales comerciales en Plaza Victoria!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/localpvdescuento.jpg" ,
        alt: "Locales comerciales en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Posters/localpvdescuento.jpg",
    description:
      "Haz que tu negocio esté donde la ciudad se mueve, donde las oportunidades pasan y los clientes llegan. 😄 Plaza Victoria te acompaña en tu crecimiento.",
    labels: ["promociones"],
    active: false,
    date: "2025-12-11",
  },
  {
    id: "Posada-Navideña-2025",
    slug: "posada-navidena-2025",
    title: "¡Únete a nuestra Posada Navideña 2025!",
    media: [
      { 
        type: "image",
        src: "/feed/Images/navidad.jpg",
        alt: "Posada Navideña en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Images/navidad.jpg",
    description:
      "🎄 ¡Únete a nuestra Posada Navideña en Plaza Victoria! Ven con tu familia y amigos para disfrutar de una noche mágica, comida tradicional y la visita especial de Santa Claus. ¡No te lo pierdas!",
    labels: ["eventos"],
    date: "2025-12-10",
  },
  {
    id: "promocion-posada-navidad",
    slug: "promocion-posada-navidad",
    title: "¡Disfruta de nuestra Posada Navideña!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/posada.jpg",
        alt: "Posada Navideña en Plaza Victoria"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuentojugeteriatresangelitos.jpg",
        alt: "Descuento Juguetería Tres Ángelitos"
      }
    ],
    shareImage: "/feed/Posters/descuentojugeteriatresangelitos.jpg",
    description:
      "🎉 ¡Llegó el Buen Fin a Juguetería Victoria! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra juguetes y artículos para niños de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
    labels: ["promociones"],
    active: false,
    date: "2025-11-07",
  },
  {
    id: "Buenfin-montana-hats",
    slug: "buenfin-montana-hats",
    title: "¡Buen Fin en Montana Hats!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuentomontanahats.jpg",
        alt: "Descuento Montana Hats"
      }
    ],
    shareImage: "/feed/Posters/descuentomontanahats.jpg",
    description:
      "🎉 ¡Llegó el Buen Fin a Montana Hats! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra gorras y accesorios de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
    labels: ["promociones"],
    active: false,
    date: "2025-11-07",
  },
  {
    id: "Buenfin-boutique-my-closet",
    slug: "buenfin-boutique-my-closet",
    title: "¡Buen Fin en Boutique My Clóset!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuentomyboutique.jpg",
        alt: "Descuento Boutique My Clóset"
      }
    ],
    shareImage: "/feed/Posters/descuentomyboutique.jpg",
    description:
      "🎉 ¡Llegó el Buen Fin a Boutique My Clóset! Aprovecha nuestras increíbles ofertas y descuentos en ropa, accesorios, bolsas y calzado de las mejores marcas. ¡No te lo pierdas!",
    labels: ["promociones"],
    active: false,
    date: "2025-11-07",
  },
  {
    id: "Buenfin-sneakers-warriors",
    slug: "buenfin-sneakers-warriors",
    title: "¡Buen Fin en Sneakers Warriors!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuentosneakerwarriors.jpg",
        alt: "Descuento Sneakers Warriors"
      }
    ],
    shareImage: "/feed/Posters/descuentosneakerwarriors.jpg",
    description:
      "🎉 ¡Llegó el Buen Fin a Sneaker Warriors! Aprovecha nuestras increíbles ofertas y descuentos en productos seleccionados. Encuentra el mejor calzado de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
    labels: ["promociones"],
    active: false,
    date: "2025-11-07",
  },
  {
    id: "Buenfin-novedades-gedri",
    slug: "buenfin-novedades-gedri",
    title: "¡Buen Fin en Novedades Gedri!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/descuentonovgedri.jpg",
        alt: "Descuento Novedades Gedri"
      }
    ],
    shareImage: "/feed/Posters/descuentonovgedri.jpg",
    description:
      "🎉 ¡Llegó el Buen Fin a Novedades Gedri! Aprovecha nuestras increíbles ofertas y descuentos en toda la tienda. Encuentra ropa y accesorios de las mejores marcas a precios irresistibles. ¡No te lo pierdas!",
    labels: ["promociones"],
    active: false,
    date: "2025-11-07",
  },
  {
    id: "inaguracion-jugeteria-tres-angelitos",
    slug: "inaguracion-jugeteria-tres-angelitos",
    title: "¡Inauguración de Juguetería Tres Angelitos!",
    media: [
      {
        type: "image",
        src: "/feed/Posters/inaguracionjugeteria.jpg",
        alt: "Inauguración Juguetería Tres Angelitos"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Images/arceparfurminaguracion.jpg",
        alt: "Inauguración Arce Parfum"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Posters/marcaenplazavictoria.jpg",
        alt: "Tu negocio en Plaza Victoria"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Images/hallowenpv2.jpg",
        alt: "Halloween Plaza Victoria"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Images/montanahatsinaguracion.jpg",
        alt: "Inauguración Montana Hats"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Posters/halloweenanuncio.jpg",
        alt: "Halloween en Plaza Victoria"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Posters/anunciopv.jpg",
        alt: "Locales comerciales disponibles en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Posters/anunciopv.jpg",
    description:
      "¡No dejes pasar esta oportunidad! Locales 105 y 106 ubicados en la planta baja de la plaza, con una medida de 33.01 m². Una excelente opción para tener uno de los mejores locales de la plaza.",
    labels: ["promociones"],
    active: false,
    date: "2024-10-15",
  },
  {
    id: "inaguracion-sneakers-warriors",
    slug: "inaguracion-sneakers-warriors",
    title: "¡Inauguración de Sneakers Warriors!",
    media: [
      {
        type: "image",
        src: "/feed/Images/sneakerswarriorsinauguracion.jpg",
        alt: "Inauguración Sneakers Warriors"
      }
    ],
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
    media: [
      {
        type: "image",
        src: "/feed/Images/estacionamientoanuncio.jpg",
        alt: "Apertura del estacionamiento en Plaza Victoria"
      }
    ],
    shareImage: "/feed/Images/estacionamientoanuncio.jpg",
    description:
      "🚗 ¡Ahora puedes disfrutar del estacionamiento de Plaza Victoria! Deja tu auto con comodidad mientras visitas nuestras tiendas y eventos.",
    labels: ["aperturas"],
    date: "2025-10-09",
  },
];
