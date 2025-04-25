export const subcats = [
  // *****************************************
  /// JINETE
  // *****************************************
  {
    "nombre": 'sombrero de palma',
    "portador": 'jinete',
    "etiqueta": ['faena'],
    "cat": 'sombreros',
    "dependencies": [
      'toquillas',
      'ribetes',
      'chapetas'
    ],
  },
  {
    "nombre": 'sombrero de fieltro',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'sombreros',
    "dependencies": [
      'toquillas',
      'ribetes',
      'chapetas'
    ],
  },
  {
    "nombre": 'toquillas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'sombreros',
    "require": ['sombrero de palma', 'sombrero de fieltro'],
    "requiremessage": "Requiere un sombrero de palma o fieltro."
  },
  {
    "nombre": 'ribetes',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'sombreros',
    "require": ['sombrero de palma', 'sombrero de fieltro'],
    "requiremessage": "Requiere un sombrero de palma o fieltro."
  },
  {
    "nombre": 'chapetas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'sombreros',
    "require": ['sombrero de palma', 'sombrero de fieltro'],
    "requiremessage": "Requiere un sombrero de palma o fieltro."
  },
  {
    "nombre": 'estilos antiguos',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'sombreros'
  },
  {
    "nombre": 'chaquetillas y similares',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'traje'
  },
  {
    "nombre": 'broches',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'traje'
  },
  {
    "nombre": 'chalecos',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'traje',
    "dependencies": ['reloj de bolsillo'],
    "restrictedmessage": "No se usa con camisa pachuqueña de cuello militar."
  },
  {
    "nombre": 'camisas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'traje'
  },
  {
    "nombre": 'pantalón',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'traje'
  },
  {
    "nombre": 'refuerzos de pantalón',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'traje'
  },
  {
    "nombre": 'cuello pachuqueño',
    "portador": 'jinete',
    "etiqueta": ['faena'],
    "cat": 'corbatas',
    "restrictedmessage": 'Solo con camisas pachuqueñas.'
  },
  {
    "nombre": 'cuello normal',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'corbatas',
    "restrictedmessage": 'Solo con camisas civiles.'
  },
  {
    "nombre": 'textiles',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'accesorios',
    "allowsame": true
  },
  {
    "nombre": 'reloj de bolsillo',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'accesorios',
    "require": ['chalecos'],
    "requiremessage": "Solo con CHALECO."
  },
  {
    "nombre": 'hebillas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'accesorios',
    "require": ['cinturones'],
    "requiremessage": "Solo con CINTURÓN."
  },
  {
    "nombre": 'cinturones',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'accesorios',
    "dependencies": ['hebillas']
  },
  {
    "nombre": 'botines',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    "cat": 'calzado'
  },
  {
    "nombre": 'botas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala'],
    "cat": 'calzado',
    "restricted": ['chaparreras'],
    "restrictedmessage": "No se usan botas Jalisco con chaparreras."
  },
  {
    "nombre": 'chaparreras',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala'],
    "cat": 'prendas de trabajo',
    "restricted": ['botas'],
    "restrictedmessage": "No se usan con cuadrilera o botas Jalisco."
  },
  {
    "nombre": 'espuelas',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'prendas de trabajo'
  },
  {
    "nombre": 'protecciones para lazar',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala'],
    "cat": 'prendas de trabajo'
  },
  {
    "nombre": 'guantes',
    "portador": 'jinete',
    "etiqueta": ['faena', 'media gala', 'gala'],
    "cat": 'prendas de trabajo'
  },
  // *****************************************
  /// CABALLO
  // *****************************************
  {
    "nombre": 'sin sobresalir',
    "portador": 'caballo',
    "etiqueta": ['faena'],
    "cat": 'sudaderos'
  },
  {
    "nombre": 'sobresaliendo',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'sudaderos'
  },
  {
    "nombre": 'tipo',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'fustes'
  },
  {
    "nombre": 'cabezas',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'fustes',
    "require": ['tipo'],
    "requiremessage": "Requiere elegir antes un TIPO de fuste."
  },

  {
    "nombre": 'turma',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala'],
    "cat": 'fustes',
    "require": ['cabezas'],
    "requiremessage": "Requiere elegir antes una CABEZA."
  },
  {
    "nombre": 'surcos',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala'],
    "cat": 'fustes',
    "require": ['tipo'],
    "requiremessage": "Requiere elegir antes un TIPO de fuste."
  },
  {
    "nombre": 'torzales',
    "portador": 'caballo',
    "etiqueta": ['media gala', 'gala'],
    "cat": 'fustes',
    "require": ['surcos'],
    "requiremessage": "Requiere antes un SURCO para el torzal.",
  },
  {
    "nombre": 'bastos',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje',
    "dependencies": [
      'cantinas'
    ]
  },
  {
    "nombre": 'cantinas',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje',
  },
  {
    "nombre": 'enreatados',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'contraenreatados',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'murciélago',
    "portador": 'caballo',
    "etiqueta": ['faena'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'arciones',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'cuadrileras',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'contralátigo',
    "portador": 'caballo',
    "etiqueta": ['media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'cuartero',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cueraje'
  },
  {
    "nombre": 'con tapa',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'cincho'
  },
  {
    "nombre": 'sin tapa',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala'],
    "cat": 'cincho'
  },
  {
    "nombre": 'adornos',
    "portador": 'caballo',
    "etiqueta": ['gala', 'gran gala'],
    "cat": 'cincho'
  },
  {
    "nombre": 'estribos',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'herraje'
  },
  {
    "nombre": 'herraje',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'herraje'
  },
  {
    "nombre": 'pecho y encuentro',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'aditamentos',
    "restrictedmessage": 'No se usa con gargantones de hilo.'
  },
  {
    "nombre": 'barrigueras',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala'],
    "cat": 'aditamentos'
  },
  {
    "nombre": 'protectores',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala'],
    "cat": 'aditamentos'
  },
  {
    "nombre": 'cuartas',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'aditamentos'
  },
  {
    "nombre": 'antiguos',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'aditamentos'
  },
  {
    "nombre": 'atrás de la teja',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'aditamentos'
  },
  {
    "nombre": 'frenos',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'arreos de cabeza',
    "restrictedmessage": 'No se puede usar con falsa rienda.',
  },
  {
    "nombre": 'cabezadas',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'arreos de cabeza',
    "restrictedmessage": 'No se puede usar con falsa rienda.',
  },
  {
    "nombre": 'riendas',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'arreos de cabeza',
    "restrictedmessage": 'No se puede usar con falsa rienda.',
  },
  {
    "nombre": 'bozal y bozalillo',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'arreos de cabeza',
    "restrictedmessage": 'No se puede usar con falsa rienda.',
  },
  {
    "nombre": 'ronzales y gargantones',
    "portador": 'caballo',
    "etiqueta": ['faena', 'media gala', 'gala', 'gran gala'],
    "cat": 'arreos de cabeza',
    "restrictedmessage": 'No se puede usar con falsa rienda.',
  },
]