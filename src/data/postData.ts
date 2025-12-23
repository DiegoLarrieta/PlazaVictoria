export type PostType = "image" | "video" | "poster";

export interface Post {
  id: string;
  type: PostType;
  src: string;
  poster?: string; // solo para video
  description: string;
  labels: string[]; // eventos | aperturas | promociones
  date: string;
}

export const postsData: Post[] = [
  {
    id: "evento-posada-navidad",
    type: "video",
    src: "/feed/Videos/posada.mp4",
    description:
      "Así vivimos nuestra posada navideña en la plaza 🎄✨. Hubo entretenimiento para toda la familia, regalos para los niños y un ambiente increíble. Compartimos tamales, café, ponche y muchas sorpresas más durante una noche llena de alegría y convivencia.",
    labels: ["eventos"],
    date: "2024-12-15",
  },
  {
    id: "local-disponible",
    type: "image",
    src: "/feed/Images/navidad.jpg",
    description:
      "¡Tenemos nueva apertura! 🎉 Se inauguró un local de juguetes y artículos para niños, con una gran variedad de ropa y juguetes para todas las edades. Visítalos en el local 206 y descubre todo lo que tienen para ofrecer.",
    labels: ["aperturas"],
    date: "2024-12-10",
  },
  {
    id: "promocion-posada-navidad",
    type: "poster",
    src: "/feed/Posters/posada.jpg",
    description:
      "Te invitamos a nuestra posada navideña 🎅🎁. Acompáñanos de 6:00 pm a 9:00 pm para disfrutar de un evento especial con entretenimiento, regalos y comida tradicional para toda la familia.",
    labels: ["promociones", "eventos"],
    date: "2024-12-08",
  },
  {
    id: "tu-negocio-en-plaza-victoria",
    type: "poster",
    src: "/feed/Posters/marcaenplazavictoria.jpg",
    description:
      "💼 Emprendedor, profesionista, empresario: ¡Tu marca, producto o servicio puede comenzar aquí con nosotros! 🌟 Aún tenemos locales comerciales disponibles para que formes parte de Plaza Victoria. ",
    labels: ["aperturas"],
    date: "2025-12-01",
  },
  {
    id: "promocion-nuevo-local",
    type: "poster",
    src: "/feed/Posters/anunciopv.jpg",
    description:
      "¡No dejes pasar esta oportunidad! Locales 105 y 106 ubicados en la planta baja de la plaza, con una medida de 33.01 m². Una excelente opción para tener uno de los mejores locales de la plaza.",
    labels: ["promociones"],
    date: "2024-11-08",
  },
  {
    id: "anuncio-apertura-estacionamiento",
    type: "image",
    src: "/feed/Images/estacionamientoanuncio.jpg",
    description:
      "🚗 ¡Ahora puedes disfrutar del estacionamiento de Plaza Victoria! Deja tu auto con comodidad mientras visitas nuestras tiendas y eventos.",
    labels: ["aperturas"],
    date: "2025-10-09",
  },

];
