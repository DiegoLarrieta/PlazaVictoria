export type Negocio = {
    id: number;
    nombre: string;
    sobre: string;
    descripcion: string;
    categoria: string;
    logo: string;
    imagenes: string[];
    horario: string;
    ubicacion: string; // 👈 NUEVO CAMPO
    ruta: string;
    contacto?: {
      telefono?: string;
      whatsapp?: string;
      facebook?: string;
      instagram?: string;
      sitioWeb?: string;
    };
  };

  export const negocios: Negocio[] = [
    {
      id: 1,
      nombre: "Sneakers Warriors",
      sobre: "Sneakers Warriors es la tienda de calzado deportivo y casual más completa de Ixmiquilpan. Encontrarás los mejores tenis para hombre y mujer: desde sneakers de moda y zapatillas para el gym, hasta calzado casual de uso diario. Manejamos marcas reconocidas a precios competitivos, con novedades que llegan constantemente. Si buscas el par perfecto para complementar tu estilo o rendir al máximo en cada paso, Sneakers Warriors es tu destino en Plaza Victoria.",
      descripcion: "En Sneakers Warriors encontrarás la más completa selección de calzado deportivo y casual para hombre y mujer en Ixmiquilpan. Desde sneakers de las marcas más reconocidas hasta modelos casuales de uso diario, nuestra tienda renueva constantemente su catálogo para que siempre encuentres algo que se adapte a tu estilo y presupuesto. El par perfecto te está esperando.",
      categoria: "Calzado",
      logo: "negocios/sneakers-warriors/logo.jpg",
      imagenes: [
        "negocios/sneakers-warriors/snw1.jpg",
        "negocios/sneakers-warriors/snw2.jpg",
        "negocios/sneakers-warriors/snw3.jpg",
        "negocios/sneakers-warriors/snw4.jpg"
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta Baja - Local 101", // 👈 NUEVO CAMPO
      ruta: "/directorio/sneakerswarriors",
      contacto: {
        telefono: "7721909826",
        whatsapp: "https://wa.me/5217721909826",
        facebook: "https://www.facebook.com/profile.php?id=61580163395431&locale=es_LA",
      }
    },
    // Puedes agregar más negocios...
    {
      id: 3,
      nombre: "Montana Hats",
      sobre: "Montana Hats es la tienda especialista en gorras y accesorios de moda en Ixmiquilpan. Con una selección curada de modelos clásicos, snapbacks y gorras estructuradas con las tendencias actuales, aquí encontrarás la pieza perfecta para completar cualquier look. Calidad garantizada y atención personalizada para que salgas con el estilo que buscas.",
      descripcion: "Montana Hats es la tienda especializada en gorras y accesorios de moda que Ixmiquilpan necesitaba. Con una selección cuidada de modelos clásicos, snapbacks y gorras estructuradas con las últimas tendencias, aquí siempre encontrarás la pieza ideal para complementar tu look. Calidad real, variedad constante y atención que hace la diferencia.",
      categoria: "Gorras",
      logo: "negocios/montana-hats/logo.jpg",
      imagenes: [
        "negocios/montana-hats/montana1.jpg",
        "negocios/montana-hats/montana2.jpg",
      ],
      horario: "Lunes a Domingo - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta Baja - Local 109", // 👈 NUEVO CAMPO
      ruta: "/directorio/montana-hats",
      contacto: {
        telefono: "7721055772",
        whatsapp: "https://wa.me/5217721055772",
        facebook: "https://www.facebook.com/profile.php?id=61584617230442",
      },
    },                 
    {
      id: 5,
      nombre: "My Closet Boutique",
      sobre: "Desde 2006, My Closet Boutique viste a la mujer ixmiquilpense con estilo, elegancia y personalidad. Encontrarás ropa femenina de calidad, bolsos, accesorios y calzado cuidadosamente seleccionados para cada ocasión: desde looks casuales para el día a día hasta opciones sofisticadas para eventos especiales. Más de 18 años siendo el lugar favorito de las mujeres que saben lo que quieren.",
      descripcion: "Con más de 18 años vistiendo a la mujer ixmiquilpense, My Closet Boutique es sinónimo de buen gusto y calidad. Encontrarás ropa femenina, bolsos, accesorios y calzado seleccionados con criterio para cada ocasión, desde el look casual perfecto hasta el outfit que te hará brillar en cualquier evento especial. Porque la moda con carácter nunca pasa de moda.",
      categoria: "Ropa",
      logo: "negocios/boutique-my-closet/logo.jpg",
      imagenes: [
        "negocios/boutique-my-closet/mycloset1.jpg",
        "negocios/boutique-my-closet/mycloset2.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta Baja - Local 110 y 111", // 👈 NUEVO CAMPO
      ruta: "/directorio/my-closet-boutique",
      contacto: {
        facebook: "https://www.facebook.com/MyClosetBoutiqueoficial",
      },
    },
    {
      id: 6,
      nombre: "Arce Parfum",
      sobre: "Arce Parfum es la perfumería de referencia en Ixmiquilpan. Descubre una exclusiva selección de fragancias para hombre y mujer: desde perfumes frescos y cotidianos hasta aromas de noche sofisticados e irresistibles. Nuestros asesores te guían para encontrar la fragancia ideal que exprese tu personalidad. Porque el aroma correcto lo cambia todo.",
      descripcion: "Arce Parfum es la perfumería que Ixmiquilpan estaba esperando. Descubre una exclusiva selección de fragancias para hombre y mujer, desde aromas frescos y cotidianos hasta perfumes de noche sofisticados e irresistibles. Nuestros asesores te acompañan para encontrar la fragancia que mejor exprese quién eres, porque el aroma correcto lo cambia todo.",
      categoria: "Perfumeria",
      logo: "negocios/arce-parfum/logo.jpg",
      imagenes: [
        "negocios/arce-parfum/arceparfum1.jpg",
        "negocios/arce-parfum/arceparfum2.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta 1 - Local 203", // 👈 NUEVO CAMPO
      ruta: "/directorio/arce-parfum",
      contacto: {
        telefono: "6646737772",
        whatsapp: "https://wa.me/5216646737772",
        facebook: "https://www.facebook.com/profile.php?id=61555987635888&locale=es_LA",
        instagram: "https://www.instagram.com/arceparfum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      id: 8,
      nombre: "Ammonite Plata",
      sobre: "En Ammonite Plata, cada joya cuenta una historia. Somos una joyería especializada en plata .925 con diseños únicos, artesanales y contemporáneos: collares, aretes, pulseras y anillos que combinan tradición y tendencia. Ideal para regalar en ocasiones especiales o para lucirte en el día a día. Si buscas joyería de calidad real en Ixmiquilpan, Ammonite Plata es tu respuesta.",
      descripcion: "Ammonite Plata es la joyería que transforma cada pieza en un recuerdo. Especialistas en plata .925 con diseños artesanales y contemporáneos, encontrarás collares, aretes, pulseras y anillos únicos que combinan tradición, estilo y calidad real. Ya sea para un regalo especial o para consentirte a ti mismo, aquí cada joya tiene algo que decir.",
      categoria: "Joyeria",
      logo: "negocios/ammonite-plata/logo.jpg",
      imagenes: [
        "negocios/ammonite-plata/ammonite1.jpg",
        "negocios/ammonite-plata/ammonite2.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta Baja - Local 212", // 👈 NUEVO CAMPO
      ruta: "/directorio/ammonite-plata",
      contacto: {
        telefono: "7721605565",
        whatsapp: "https://wa.me/5217721605565",
        facebook: "https://www.facebook.com/ammonite.plata925",
      },
    },
    {
      id: 9,
      nombre: "Mishel Morales",
      sobre: "Mishel Morales trae directamente de Estados Unidos una amplia variedad de productos importados de calidad: artículos de temporada, accesorios, artículos del hogar y mucho más, todo a precios accesibles. Si te gusta encontrar cosas diferentes, únicas y de primera calidad que no consigues en cualquier tienda, Mishel Morales es la que estabas buscando.",
      descripcion: "Mishel Morales trae directamente de Estados Unidos una selección de productos importados que no encontrarás en cualquier tienda: artículos de temporada, accesorios, artículos del hogar y mucho más, todo con la calidad que caracteriza a los productos de importación y a precios sorprendentemente accesibles. Si buscas algo diferente y especial, aquí siempre hay algo nuevo esperándote.",
      categoria: "Importados",
      logo: "negocios/mishel-morales/logo.jpg",
      imagenes: [
        "negocios/mishel-morales/mishel2.jpg",
        "negocios/mishel-morales/mishel3.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Planta Baja - Local 213",
      ruta: "/directorio/mishel-morales",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/mishel-morales",
        instagram: "https://instagram.com/mishel-morales",
      },
    },
    {
      id: 10,
      nombre: "Mundo BB",
      sobre: "Mundo BB es el rincón más especial de Plaza Victoria, pensado para los más pequeños del hogar. Encuentra ropa, juguetes y accesorios para bebés y niños de alta calidad, seleccionados con cariño para que cada etapa de su crecimiento esté llena de alegría. Porque los mejores momentos comienzan con los mejores productos.",
      descripcion: "Mundo BB es el lugar más especial de Plaza Victoria para los más pequeños del hogar. Encontrarás ropa, juguetes y accesorios para bebés y niños seleccionados con cariño y estándares de calidad que los papás agradecen. Porque equipar cada etapa del crecimiento de tu hijo con los mejores productos es una de las mejores inversiones que puedes hacer.",
      categoria: "Juguetes",
      logo: "negocios/mundo-bb/logo.jpg",
      imagenes: [
        "negocios/mundo-bb/mundobb1.jpg",
        "negocios/mundo-bb/mundobb2.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta 1 - Local 212", // 👈 NUEVO CAMPO
      ruta: "/directorio/mundo-bb",
      contacto: {
        telefono: "7722450860",
        whatsapp: "https://wa.me/5217722450860",
        facebook: "https://www.facebook.com/profile.php?id=61559396662553",
      },
    },
    {
      id: 11,
      nombre: "Boutique Clau's Aldana",
      sobre: "Boutique Clau's Aldana es sinónimo de moda femenina con carácter. Encontrarás una selección fresca y actualizada de ropa para dama: desde outfits casuales y modernos para el día a día hasta looks que te harán destacar en cualquier ocasión especial. Atención personalizada, buen gusto y siempre las últimas tendencias. Porque vestirte bien es una forma de respetarte a ti misma.",
      descripcion: "Boutique Clau's Aldana llega a Plaza Victoria con una propuesta de moda femenina fresca, actual y con personalidad. Encontrarás una selección de ropa para dama que va desde outfits casuales y modernos para el día a día, hasta looks que te harán destacar en cualquier evento especial. Atención personalizada, tendencias reales y el buen gusto que toda mujer merece.",
      categoria: "Ropa",
      logo: "negocios/boutique-claus-aldana/logo.jpg",
      imagenes: [
        "negocios/boutique-claus-aldana/claus1.jpg",
        "negocios/boutique-claus-aldana/claus2.jpg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 8:00 p.m.",
      ubicacion: "Planta Baja - Local 214", // 👈 NUEVO CAMPO
      ruta: "/directorio/boutique-claus-aldana",
      contacto: {
        facebook: "https://www.facebook.com/profile.php?id=61586652196276",
      },
    }
    
  ];

  /*
  Tiendas de plaza Victoria 
101- sneakers warriors
102- juguetería Victoria
109- Montana hats
110- boutique my clóset
113- novedades Gedri
203- Arce parfum
212- tres angelitos juguetes & boutique
  */
  