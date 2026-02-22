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
      sobre: "Encuentra los mejores sneakers para hombres y mujeres en Sneakers Warriors. Nuestra tienda ofrece una amplia variedad de tenis al mejor precio, con las últimas tendencias en calzado deportivo y casual. ¡Visítanos y encuentra tu par perfecto!",
      descripcion: "Sneakers Warriors es una tienda especializada en calzado deportivo y casual. Ofrecemos una amplia variedad de zapatillas de las mejores marcas, ideales para deportistas y amantes del estilo urbano. Nuestro compromiso es brindar productos de alta calidad y un servicio excepcional a nuestros clientes.",
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
      sobre: "Montana Hats es una tienda especializada en gorras de alta calidad. Ofrecemos una amplia variedad de gorras para todos los gustos y estilos, desde modelos clásicos hasta tendencias actuales.",
      descripcion: "En Montana Hats encontraras las mejores gorras para complementar tu estilo. Nuestra tienda se dedica a ofrecer productos de alta calidad, con diseños únicos y una atención personalizada para cada cliente. Ya sea que busques una gorra para el día a día o para ocasiones especiales, en Montana Hats tenemos la opción perfecta para ti.",
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
      sobre: "Abrimos nuestras puertas en 2006 Bolsos, ropa y accesorios👗👠💍 todo para lucir bella en todo momento. Calidad y buen gusto nos distinguen✨",
      descripcion: "My Closet Boutique es una tienda de moda que ofrece una cuidada selección de ropa, accesorios y vestidos para mujeres que buscan estilo y calidad. Desde prendas casuales hasta opciones más elegantes, nuestra boutique se dedica a brindar a nuestras clientas las últimas tendencias en moda, asegurando que cada visita sea una experiencia única y satisfactoria.",
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
      sobre: "La mejor perfumería de Ixmiquilpan, con una amplia variedad de fragancias para todos los gustos y ocasiones.",
      descripcion: "En Arce Parfum, encontrarás una exquisita selección de fragancias para cada ocasión. Nuestra tienda se especializa en perfumes de alta calidad, ofreciendo una variedad de aromas para hombres y mujeres. Ya sea que busques un perfume para uso diario o una fragancia especial para momentos únicos, en Arce Parfum tenemos la opción perfecta para ti.",
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
      sobre: "Ammonite Plata es una joyería especializada en piezas de plata de alta calidad en plata .925, con diseños únicos y elegantes para cada ocasión.",
      descripcion: "Ammonite Plata es una joyería especializada en piezas de plata de alta calidad en plata .925, con diseños únicos y elegantes para cada ocasión. Ofrecemos una amplia variedad de joyas hechas a mano, incluyendo collares, aretes, pulseras y anillos. Cada pieza es cuidadosamente elaborada para ofrecer un estilo único y una calidad excepcional.",
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
      sobre: "Productos importados directamente de USA con calidad y variedad",
      descripcion: "¡Bienvenido a Mishel Morales! Un espacio que llega con una gran variedad de productos importados directamente de USA, pensados en ofrecer calidad y excelentes opciones para todos. 🛍️🇺🇸 Visítanos y descubre nuestras mejores ofertas.",
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
      sobre: "Mundo BB es una tienda especializada en productos para bebés y niños pequeños, ofreciendo una amplia variedad de artículos de alta calidad para garantizar el bienestar de los más pequeños.",
      descripcion: "En Mundo BB, encontrarás una encantadora selección de productos para bebés y niños pequeños. Nuestra tienda se dedica a ofrecer artículos de alta calidad, con diseños únicos y una atención personalizada para cada cliente. Ya sea que busques ropa, juguetes o accesorios para tu pequeño, en Mundo BB tenemos la opción perfecta para ti.",
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
      sobre: "Boutique Clau's Aldana es una tienda de moda que ofrece una cuidada selección de ropa, accesorios y vestidos para mujeres que buscan estilo y calidad. Desde prendas casuales hasta opciones más elegantes, nuestra boutique se dedica a brindar a nuestras clientas las últimas tendencias en moda, asegurando que cada visita sea una experiencia única y satisfactoria.",
      descripcion: "Boutique Clau's Aldana es una tienda de moda que ofrece una cuidada selección de ropa, accesorios y vestidos para mujeres que buscan estilo y calidad. Desde prendas casuales hasta opciones más elegantes, nuestra boutique se dedica a brindar a nuestras clientas las últimas tendencias en moda, asegurando que cada visita sea una experiencia única y satisfactoria.",
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
  