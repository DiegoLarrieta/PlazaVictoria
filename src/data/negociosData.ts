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
      sobre: "Especializastas en el area de la salud bucal.",
      descripcion: "Consultorio Dental con la mejor atención y calidad, contamos con la mejor tecnologia para cuidar tu salud bucal.",
      categoria: "Salud",
      logo: "negocios/Dentista/ConsultorioDentalDemo.jpeg",
      imagenes: [
        "negocios/Dentista/consultoriodental.jpg",
        "negocios/Dentista/consultorioaparatodemo.webp"
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Planta Baja - Local 8", // 👈 NUEVO CAMPO
      ruta: "/directorio/consultoriodental",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      }
    },
    // Puedes agregar más negocios...
    {
      id: 2,
      nombre: "Juguetería Victoria",
      sobre: "Farmasana, Calidad que Sana",
      descripcion: "Farmasana es una farmacia que se dedica a la venta de medicamentos y productos de salud y bienestar. Ofrecemos una amplia gama de productos farmacéuticos, así como asesoría profesional para el cuidado de tu salud.",
      categoria: "Salud",
      logo: "negocios/Farmacia/faramasanalogo.jpeg",
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
      categoria: "Tu giro aqui",
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
      id: 4,
      nombre: "Boutique my clóset",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Tu giro aqui",
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
      categoria: "Tu giro aqui",
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
      id: 6,
      nombre: "Novedades Gedri",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Tu giro aqui",
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
      id: 7,
      nombre: "Boutique my clóset",
      sobre: "Descripción de tu negocio",
      descripcion: "Descripción de lo que es tu negocio , productos o servicios que ofreces y cualquier otra información relevante.",
      categoria: "Tu giro aqui",
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
  