export type SpaceType  = 'renta' | 'venta';
export type SpaceFloor = 'Planta Baja' | 'Planta 1';

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
    description: 'Amplio local doble en planta baja con excelente visibilidad desde el acceso principal. Ideal para moda, calzado o accesorios.',
    image:       '/plaza/iluminacion.jpeg',
  },
  {
    id:          'local-107',
    unit:        'Local 107',
    type:        'renta',
    floor:       'Planta Baja',
    size:        28,
    description: 'Local estratégico con flujo constante de visitantes. Perfecto para tienda de accesorios, joyería o servicios especializados.',
    image:       '/plaza/escaleras.jpeg',
  },
  {
    id:          'local-201',
    unit:        'Local 201',
    type:        'venta',
    floor:       'Planta 1',
    size:        45,
    description: 'Espacioso local en planta alta con acabados modernos y buena iluminación. Inversión segura en zona comercial de alta demanda.',
    image:       '/plaza/ConocePlazaVictoria.jpeg',
  },
  {
    id:          'local-204',
    unit:        'Local 204',
    type:        'renta',
    floor:       'Planta 1',
    size:        22,
    description: 'Local compacto ideal para boutique, perfumería o joyería. Ubicado en corredor de alto tráfico peatonal en planta alta.',
    image:       '/plaza/pvside.jpeg',
  },
  {
    id:          'local-108',
    unit:        'Local 108',
    type:        'venta',
    floor:       'Planta Baja',
    size:        40,
    description: 'Local esquinero con doble acceso y máxima visibilidad. Acabados listos para ocuparse. Oportunidad única de inversión en planta baja.',
    image:       '/plaza/frontalpv.jpeg',
  },
];
