export type SpaceType  = 'renta' | 'venta';
export type SpaceFloor = 'Planta Baja' | 'Planta 1' | 'Zona Exterior';

export interface CommercialSpace {
  id:          string;
  unit:        string;
  type:        SpaceType;
  floor:       SpaceFloor;
  size:        number;   // m²
  description: string;
  image:       string;
}

export const availableSpaces: CommercialSpace[] = [
  {
    id:          'local-105-106',
    unit:        'Local 105 – 106',
    type:        'renta',
    floor:       'Planta Baja',
    size:        33,
    description: 'Local doble de 33.01 m² en planta baja con frontal de cristal y máxima visibilidad desde el acceso principal. Espacio amplio, luminoso y listo para ocuparse — ideal para moda, calzado, joyería o cualquier giro comercial. Informes: (759) 688 1818.',
    image:       '/plaza/local-105-106.jpg',
  },
  {
    id:          'espacio-exterior-207',
    unit:        'Espacio Exterior — Zona de Puestos',
    type:        'renta',
    floor:       'Zona Exterior',
    size:        4,
    description: 'Tu negocio al pie de la calle, donde la gente ya está. Espacios desde 4 m² en la zona exterior de Plaza Victoria — al nivel de la calle, con acceso directo desde la banqueta y flujo natural de personas todas las noches. Horario de operación de 6:00 PM a 12:00 AM, ideal para antojitos, bebidas, postres o cualquier giro gastronómico o comercial nocturno. El lugar perfecto para emprender sin barreras: poco espacio, muchos clientes. Informes: Local 207 — (759) 688 1818 / (771) 319 8995.',
    image:       '/plaza/espacio-exterior.jpeg',
  },
  {
    id:          'local-211',
    unit:        'Local 211',
    type:        'renta',
    floor:       'Planta 1',
    size:        22,
    description: 'Local de 22.63 m² en primer nivel con frontal de cristal, acabados modernos y espacio de bodega incluido — listo para ocuparse desde el primer día. Ideal para servicios, estética, consultorio o cualquier giro que requiera privacidad y practicidad. Informes: (772) 111 1321.',
    image:       '/plaza/local-211.jpg',
  },
];
