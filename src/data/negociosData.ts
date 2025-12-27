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
      sobre: "Encuentra los mejores modelos de calzado al mejor precio",
      descripcion: "Sneakers Warriors es una tienda especializada en calzado deportivo y casual. Ofrecemos una amplia variedad de zapatillas de las mejores marcas, ideales para deportistas y amantes del estilo urbano. Nuestro compromiso es brindar productos de alta calidad y un servicio excepcional a nuestros clientes.",
      categoria: "Calzado",
      logo: "negocios/sneakers-warriors/logo.jpg",
      imagenes: [
        "negocios/sneakers-warriors/snw1.jpg",
        "negocios/sneakers-warriors/snw2.jpg",
        "negocios/sneakers-warriors/snw3.jpg",
        "negocios/sneakers-warriors/snw4.jpg"
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
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
      id: 2,
      nombre: "Juguetería Victoria",
      sobre: "Farmasana, Calidad que Sana",
      descripcion: "Farmasana es una farmacia que se dedica a la venta de medicamentos y productos de salud y bienestar. Ofrecemos una amplia gama de productos farmacéuticos, así como asesoría profesional para el cuidado de tu salud.",
      categoria: "Jugeteria",
      logo: "negocios/jugeteria-victoria/logo.png",
      imagenes: [
        "negocios/Farmacia/farmasana1.webp",
        "negocios/Farmacia/farmasana2.webp"
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Planta Baja - Local 8", // 👈 NUEVO CAMPO
      ruta: "/directorio/farmaciafarmasana",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
    {
      id: 3,
      nombre: "Montana Hats",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Gorras",
      logo: "negocios/montana-hats/logo.jpg",
      imagenes: [
        "negocios/NegocioDemo/negociodemo1.jpeg",
        "negocios/NegocioDemo/negociodemo2.jpeg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/nombre-de-tu-negocio",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },                
    {
      id: 4,
      nombre: "Novedades Gedri",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Ropa",
      logo: "negocios/NegocioDemo/logonegociodemo.png",
      imagenes: [
        "negocios/NegocioDemo/negociodemo1.jpeg",
        "negocios/NegocioDemo/negociodemo2.jpeg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/nombre-de-tu-negocio",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
    {
      id: 5,
      nombre: "Boutique my clóset",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Ropa",
      logo: "negocios/boutique-my-closet/logo.jpg",
      imagenes: [
        "negocios/NegocioDemo/negociodemo1.jpeg",
        "negocios/NegocioDemo/negociodemo2.jpeg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/nombre-de-tu-negocio",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
    {
      id: 6,
      nombre: "Arce Parfum",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Perfumeria",
      logo: "negocios/arce-parfum/logo.jpg",
      imagenes: [
        "negocios/NegocioDemo/negociodemo1.jpeg",
        "negocios/NegocioDemo/negociodemo2.jpeg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/nombre-de-tu-negocio",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
    {
      id: 7,
      nombre: "Tres Angelitos",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Infantil",
      logo: "negocios/tres-angelitos/logo.png",
      imagenes: [
        "negocios/NegocioDemo/negociodemo1.jpeg",
        "negocios/NegocioDemo/negociodemo2.jpeg",
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/nombre-de-tu-negocio",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
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
  