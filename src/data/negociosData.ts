import { 
  ConsultorioDentalImg1Demo, 
  ConsultorioDentalImg2Demo,
  ConsultorioDentalLogoDemo,
  FarmasanaLogoDemo,
  FarmasanaImg1Demo,
  FarmasanaImg2Demo,
  LogoPlazaVictoria,

} from "../assets/images";


export type Negocio = {
    id: number;
    nombre: string;
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
      nombre: "Consultorio Dental",
      descripcion: "Especializastas en el area de la salud bucal.",
      categoria: "Salud",
      logo: ConsultorioDentalLogoDemo,
      imagenes: [
        ConsultorioDentalImg1Demo,
        ConsultorioDentalImg2Demo
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
      nombre: "Farmasana",
      descripcion: "Farmasana, Calidad que Sana",
      categoria: "Salud",
      logo: FarmasanaLogoDemo,
      imagenes: [
        FarmasanaImg1Demo,
        FarmasanaImg2Demo
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
      nombre: "Nombre de tu Negocio",
      descripcion: "Descripción de tu negocio",
      categoria: "Tu giro aqui",
      logo: LogoPlazaVictoria,
      imagenes: [
        FarmasanaImg1Demo,
        FarmasanaImg2Demo
      ],
      horario: "Lunes a Sábado - 11:00 a.m. a 9:00 p.m.",
      ubicacion: "Ubicacion dentro de plaza", // 👈 NUEVO CAMPO
      ruta: "/directorio/farmaciafarmasana",
      contacto: {
        telefono: "7711234567",
        whatsapp: "https://wa.me/5217711234567",
        facebook: "https://facebook.com/la-taqueria",
        instagram: "https://instagram.com/la-taqueria",
      },
    },
  ];
  