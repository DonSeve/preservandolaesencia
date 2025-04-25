export const products = [
  // DESCRIPCIÓN DE CAMPOS:
  // variante: nombre interno, para uso <Menu/> y script de productLogic
  // nombrecompleto: opcional para mostrar en <InfoCol/> (ej: 'sombrero de paja', no 'A1C1')
  // cat: categoría
  // subcat: subcategoría
  // etiqueta: lista de nivel de etiqueta del producto, <Etiquette/>
  // portador: jinete o caballo, <Portador/>
  // runway: nombre de archivo para imágen principal, <Runway/>, static/img/runway/jinete o static/img/runway/caballo
  // back: nombre de archivo para imagen de espejo (jinete), static/img/runway/jinete/back
  // cabeza: nombre de archivo para imagen de cabeza (caballo), static/img/runway/caballo/cabeza
  // garrocha: nombre de archivo para imagen lado garrocha (caballo), static/img/runway/caballo/garrocha
  // preview: imagen para menú de sombreros, <Preview/>
  // replacecat: lista de subcategorías donde el nuevo producto reemplaza uno existente
  // extraimg: objeto para cuando un producto es multi-imagen (nombre de imagen extra con su propio z-index)
  // modify: lista de productos cuya imagen cambia en presencia de éste
  // dependencies: lista de productos que deben desaparecer junto con éste
  // zindex: z-index de runway
  // version: objeto con imágenes a usar por nuevo producto en presencia de otros (variante: archivo de imagen)
  // text: lista de parrafos para usar en <InfoCol/>
  // descImg: lista de imagenes para usar en <InfoCol/>
  // descLink: links para usar en <InfoCol/>
  // restricted: lista de productos (variante) cuya presencia impide agregar el producto
  // restrictedMessage: texto mostrado cuando un producto está restringido
  // restrictSubcat: lista de subcategorias restringidas por el producto
  // require: lista de productos (variante) cuya presencia es requerida para agregar el producto
  // requireMessage: texto mostrado cuando un producto necesita cumplir un requerimiento
  // *****************************************
  // *****************************************
  // SOMBREROS
  // *****************************************
  // *****************************************
  {
    variante: 'barbuquejo',
    cat: 'sombreros',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    runway: 'sombrero-barbuquejo-con.avif',
    zindex: 25,
  },
  // *****************************************
  // SOMBRERO DE PALMA
  // *****************************************
  {
    variante: 'A1C1',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A1C1.avif',
    preview: 'sombrero-palma-A1C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A1C2',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A1C2.avif',
    preview: 'sombrero-palma-A1C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A1C3',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A1C3.avif',
    preview: 'sombrero-palma-A1C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ],
    zindex: 26
  },
  {
    variante: 'A2C1',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A2C1.avif',
    preview: 'sombrero-palma-A2C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A2C2',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A2C2.avif',
    preview: 'sombrero-palma-A2C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A2C3',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A2C3.avif',
    preview: 'sombrero-palma-A2C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A3C1',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A3C1.avif',
    preview: 'sombrero-palma-A3C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A3C2',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A3C2.avif',
    preview: 'sombrero-palma-A3C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  {
    variante: 'A3C3',
    nombrecompleto: 'sombrero de palma',
    cat: 'sombreros',
    subcat: 'sombrero de palma',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-palma-A3C3.avif',
    preview: 'sombrero-palma-A3C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de fieltro'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. Aunque ahora no se permiten los sombreros de palma en suertes peligrosas, esto es un error: el sombrero, para defender bien la cabeza no tiene que forzosamente quedar indemne después de un golpe. Si se quiebra con el golpe, querrá decir que ya cumplió su función de proteger la cabeza al amortiguar el golpe y tendrá que ser remplazado, la misma lógica se utiliza con los cascos para bicicletas y motos.',
      'La palma puede ser de distintos tipos y origenes, como: palma real, soyate, trigo, piña, etc. Entre más fina es la trenza de palma utilizada y por lo tanto más vueltas lleva, más fino será.'
    ]
  },
  // *****************************************
  // SOMBRERO DE FIELTRO
  // *****************************************
  {
    variante: 'A1C1',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A1C1.avif',
    preview: 'sombrero-fieltro-A1C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A1C2',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A1C2.avif',
    preview: 'sombrero-fieltro-A1C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A1C3',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A1C3.avif',
    preview: 'sombrero-fieltro-A1C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A2C1',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A2C1.avif',
    preview: 'sombrero-fieltro-A2C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A2C2',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A2C2.avif',
    preview: 'sombrero-fieltro-A2C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A2C3',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A2C3.avif',
    preview: 'sombrero-fieltro-A2C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A3C1',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A3C1.avif',
    preview: 'sombrero-fieltro-A3C1-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A3C2',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A3C2.avif',
    preview: 'sombrero-fieltro-A3C2-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  {
    variante: 'A3C3',
    nombrecompleto: 'sombrero de fieltro',
    cat: 'sombreros',
    subcat: 'sombrero de fieltro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-fieltro-A3C3.avif',
    preview: 'sombrero-fieltro-A3C3-preview.avif',
    replacecat: ['estilos antiguos', 'sombrero de palma'],
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    modify: [
      'forro de sombrero',
      'casquito',
      'chapetón',
      'frenito',
      'herradura',
      'herradura 2',
      'media esfera de plata',
      'monograma',
      'torito'
    ],
    dependencies: ['forro de sombrero', 'barbuquejo'],
    zindex: 26,
    text: [
      'La altura de la copa y el tipo de ala puede variar según el estilo deseado. El ancho del ala o falda debe ir en relación del ancho de los hombros. El fieltro puede ser de diferentes materiales: lana, conejo, castor, nutria, etc. Siendo los más comunes actualmente los de lana y conejo.'
    ]
  },
  // *****************************************
  // TOQUILLAS
  // *****************************************
  {
    variante: 'calabrote',
    nombrecompleto: 'toquilla de calabrote',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-calabrote.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'El nudo siempre del lado izquierdo. El material depende de la categoría del traje. (los plateados y dorados no van bien con traje de faena)'
    ]
  },
  {
    variante: 'chorizo',
    nombrecompleto: 'toquilla de chorizo',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-chorizo.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: ['Generalmente de gamuza de colores naturales.']
  },
  {
    variante: 'cordón A',
    nombrecompleto: 'toquilla de cordón A',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-cordon.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: ['Hay muchos tipos, este solo es un ejemplo. El nudo siempre del lado izquierdo.']
  },
  {
    variante: 'cordón B',
    nombrecompleto: 'toquilla de cordón B',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-cordon2.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: ['Hay muchos tipos, este solo es un ejemplo. El nudo siempre del lado izquierdo.']
  },
  {
    variante: 'crin',
    nombrecompleto: 'toquilla de crin',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'toquillas-crin.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'Parecido al de calabrote, pero de calibre menor. Puede llevar botones de hilo y escobetilla hecha con la misma crin.'
    ]
  },
  {
    variante: 'cuero piteado',
    nombrecompleto: 'toquilla de cuero piteado',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-cueropiteado.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'La forma del cuero y los motivos bordados pueden variar. De preferencia solo grecas y flores (los animales si no están muy bien hechos se ven corrientes).'
    ]
  },
  {
    variante: 'galón francés',
    nombrecompleto: 'toquilla de galón francés',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-galon.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'Para sombreros de categoría Gala, gran gala y ceremonia. La parte ancha va en la parte inferior del ala y no por encima.'
    ]
  },
  {
    variante: 'paño lomo',
    nombrecompleto: 'toquilla de paño lomo',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-pano-lomo.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'Las toquillas de paño y con forma de “lomo” son muy tradicionales, el fieltro puede ser de diferentes colores (siempre serios) y tener bordados con variados motivos en hilo, seda, canutillo, etc.'
    ]
  },
  {
    variante: 'paño recto',
    nombrecompleto: 'toquilla de paño recto',
    cat: 'sombreros',
    subcat: 'toquillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'toquillas-pano-recto.avif',
    replacecat: ['estilos antiguos'],
    zindex: 30,
    text: [
      'Las toquillas de paño y con forma de “lomo” son muy tradicionales, el fieltro puede ser de diferentes colores (siempre serios) y tener bordados con variados motivos en hilo, seda, canutillo, etc.'
    ]
  },
  // *****************************************
  // CHAPETAS
  // *****************************************
  {
    variante: 'casquito',
    nombrecompleto: 'chapeta de casquito',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-casquito-1.avif',
      A1C2: 'chapetas-casquito-2.avif',
      A1C3: 'chapetas-casquito-3.avif',
      A2C1: 'chapetas-casquito-1.avif',
      A2C2: 'chapetas-casquito-2.avif',
      A2C3: 'chapetas-casquito-3.avif',
      A3C1: 'chapetas-casquito-1.avif',
      A3C2: 'chapetas-casquito-2.avif',
      A3C3: 'chapetas-casquito-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'chapetón',
    nombrecompleto: 'chapeta de chapetón',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-chapeton-1.avif',
      A1C2: 'chapetas-chapeton-2.avif',
      A1C3: 'chapetas-chapeton-3.avif',
      A2C1: 'chapetas-chapeton-1.avif',
      A2C2: 'chapetas-chapeton-2.avif',
      A2C3: 'chapetas-chapeton-3.avif',
      A3C1: 'chapetas-chapeton-1.avif',
      A3C2: 'chapetas-chapeton-2.avif',
      A3C3: 'chapetas-chapeton-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.',
      'Lo ideal es que el chapetón haga juego con el herraje.'
    ]
  },
  {
    variante: 'frenito',
    nombrecompleto: 'chapeta de frenito',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-frenito-1.avif',
      A1C2: 'chapetas-frenito-2.avif',
      A1C3: 'chapetas-frenito-3.avif',
      A2C1: 'chapetas-frenito-1.avif',
      A2C2: 'chapetas-frenito-2.avif',
      A2C3: 'chapetas-frenito-3.avif',
      A3C1: 'chapetas-frenito-1.avif',
      A3C2: 'chapetas-frenito-2.avif',
      A3C3: 'chapetas-frenito-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'herradura',
    nombrecompleto: 'chapeta de herradura',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-herradura-1.avif',
      A1C2: 'chapetas-herradura-2.avif',
      A1C3: 'chapetas-herradura-3.avif',
      A2C1: 'chapetas-herradura-1.avif',
      A2C2: 'chapetas-herradura-2.avif',
      A2C3: 'chapetas-herradura-3.avif',
      A3C1: 'chapetas-herradura-1.avif',
      A3C2: 'chapetas-herradura-2.avif',
      A3C3: 'chapetas-herradura-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'herradura 2',
    nombrecompleto: 'chapeta de herradura 2',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-herraduracaballo-1.avif',
      A1C2: 'chapetas-herraduracaballo-2.avif',
      A1C3: 'chapetas-herraduracaballo-3.avif',
      A2C1: 'chapetas-herraduracaballo-1.avif',
      A2C2: 'chapetas-herraduracaballo-2.avif',
      A2C3: 'chapetas-herraduracaballo-3.avif',
      A3C1: 'chapetas-herraduracaballo-1.avif',
      A3C2: 'chapetas-herraduracaballo-2.avif',
      A3C3: 'chapetas-herraduracaballo-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'hilo con bellota',
    nombrecompleto: 'chapeta de hilo con bellota',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-hiloconbellota-1.avif',
      A1C2: 'chapetas-hiloconbellota-2.avif',
      A1C3: 'chapetas-hiloconbellota-3.avif',
      A2C1: 'chapetas-hiloconbellota-1.avif',
      A2C2: 'chapetas-hiloconbellota-2.avif',
      A2C3: 'chapetas-hiloconbellota-3.avif',
      A3C1: 'chapetas-hiloconbellota-1.avif',
      A3C2: 'chapetas-hiloconbellota-2.avif',
      A3C3: 'chapetas-hiloconbellota-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'media esfera de plata',
    nombrecompleto: 'chapeta de media esfera de plata',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-mediaesfera-1.avif',
      A1C2: 'chapetas-mediaesfera-2.avif',
      A1C3: 'chapetas-mediaesfera-3.avif',
      A2C1: 'chapetas-mediaesfera-1.avif',
      A2C2: 'chapetas-mediaesfera-2.avif',
      A2C3: 'chapetas-mediaesfera-3.avif',
      A3C1: 'chapetas-mediaesfera-1.avif',
      A3C2: 'chapetas-mediaesfera-2.avif',
      A3C3: 'chapetas-mediaesfera-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  {
    variante: 'monograma',
    nombrecompleto: 'chapeta de monograma',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-monograma-1.avif',
      A1C2: 'chapetas-monograma-2.avif',
      A1C3: 'chapetas-monograma-3.avif',
      A2C1: 'chapetas-monograma-1.avif',
      A2C2: 'chapetas-monograma-2.avif',
      A2C3: 'chapetas-monograma-3.avif',
      A3C1: 'chapetas-monograma-1.avif',
      A3C2: 'chapetas-monograma-2.avif',
      A3C3: 'chapetas-monograma-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.',
      'Hecho con las iniciales o el fierro del charro, y bordado directamente sobre el sombrero. Remplaza a la chapeta'
    ]
  },
  {
    variante: 'torito',
    nombrecompleto: 'chapeta de torito',
    cat: 'sombreros',
    subcat: 'chapetas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'chapetas-torito-1.avif',
      A1C2: 'chapetas-torito-2.avif',
      A1C3: 'chapetas-torito-3.avif',
      A2C1: 'chapetas-torito-1.avif',
      A2C2: 'chapetas-torito-2.avif',
      A2C3: 'chapetas-torito-3.avif',
      A3C1: 'chapetas-torito-1.avif',
      A3C2: 'chapetas-torito-2.avif',
      A3C3: 'chapetas-torito-3.avif'
    },
    replacecat: ['estilos antiguos'],
    zindex: 31,
    text: [
      'Hay muchos tipos de chapetas, estas son solo algunos ejemplos. El material y estilo van de acuerdo con la categoría. Siempre se colocan un poco más arriba del centro de la copa, para no lastimar por dentro la cabeza.'
    ]
  },
  // *****************************************
  // RIBETES
  // *****************************************
  {
    variante: 'ribete A',
    nombrecompleto: 'ribete A',
    cat: 'sombreros',
    subcat: 'ribetes',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'ribetes-1.avif',
    replacecat: ['estilos antiguos'],
    zindex: 27,
    text: [
      'El material y adornos van de acuerdo con la categoría y generalmente haciendo juego con la toquilla, ejemplo: si la toquilla es de cuero piteado el ribete será de cuero y el piteado tendrá los mismos motivos que la toquilla. La parte ancha va en la parte inferior del ala y no por encima. Los ribetes de galón francés son para categoría de Gala en adelante.Los adornos aislados en el ribete no son correctos. La distancia máxima aproximada entre adornos separados entre sí no debe superar los 2cm.'
    ]
  },
  {
    variante: 'ribete B',
    nombrecompleto: 'ribete B',
    cat: 'sombreros',
    subcat: 'ribetes',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'ribetes-2.avif',
    replacecat: ['estilos antiguos'],
    zindex: 27,
    text: [
      'El material y adornos van de acuerdo con la categoría y generalmente haciendo juego con la toquilla, ejemplo: si la toquilla es de cuero piteado el ribete será de cuero y el piteado tendrá los mismos motivos que la toquilla. La parte ancha va en la parte inferior del ala y no por encima. Los ribetes de galón francés son para categoría de Gala en adelante.Los adornos aislados en el ribete no son correctos. La distancia máxima aproximada entre adornos separados entre sí no debe superar los 2cm.'
    ]
  },

  // *****************************************
  // ESTILO ANTIGUO
  // *****************************************
  {
    variante: 'Cocula',
    nombrecompleto: 'sombrero estilo Cocula',
    cat: 'sombreros',
    subcat: 'estilos antiguos',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'sombrero-cocula.avif',
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    replacecat: ['sombrero de palma', 'sombrero de fieltro', 'ribetes', 'toquillas', 'chapetas'],
    dependencies: ['barbuquejo'],
    zindex: 33,
  },
  {
    variante: 'Zapata',
    nombrecompleto: 'sombrero estilo Zapata',
    cat: 'sombreros',
    subcat: 'estilos antiguos',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'sombrero-zapata.avif',
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    replacecat: ['sombrero de palma', 'sombrero de fieltro', 'ribetes', 'toquillas', 'chapetas'],
    dependencies: ['barbuquejo'],
    zindex: 33
  },
  {
    variante: 'Alfaro',
    nombrecompleto: 'sombrero estilo Alfaro',
    cat: 'sombreros',
    subcat: 'estilos antiguos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-alfaro.avif',
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    replacecat: ['sombrero de palma', 'sombrero de fieltro', 'ribetes', 'toquillas', 'chapetas'],
    dependencies: ['barbuquejo'],
    zindex: 33
  },
  {
    variante: 'Poblano',
    nombrecompleto: 'sombrero estilo Poblano',
    cat: 'sombreros',
    subcat: 'estilos antiguos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'sombrero-poblano.avif',
    extraimg: {
      archivo: 'sombrero-barbuquejo-sin.avif',
      zindex: 24
    },
    replacecat: [
      'sombrero de palma',
      'sombrero de fieltro',
      'ribetes',
      'toquillas',
      'chapetas',
    ],
    dependencies: ['barbuquejo'],
    zindex: 33
  },
  // *****************************************
  // CALZADO
  // *****************************************
  {
    variante: 'botas Jalisco',
    nombrecompleto: 'botas Jalisco',
    cat: 'calzado',
    subcat: 'botas',
    etiqueta: ['faena', 'media gala'],
    portador: 'jinete',
    runway: 'calzado-jalisco.avif',
    replacecat: ['botines'],
    restricted: [
      'tapabalazo con media bot.',
      'tapabalazo con bot. entera',
      'pantalón con aletón',
      'tapabalazo con aletón y media bot.',
      'tapabalazo con aletilla y bot. entera',
      'pantalón liso con media bot.',
      'pantalón liso con bot. entera',
      'pantalón con aletón',
      'pantalón con aletón y tarugos',
      'pantalón con aletón y media bot.'
    ],
    restrictedmessage: 'No se usan con pantalón de aletón, aletilla o botonadura.',
    zindex: 7,
    text: [
      'Se usan en la categoría de faena, con pantalones lisos, sin aletón ni botonadura completa. No se usan con chaparreras.',
      'Ahora es común verlas en las adelitas y charras cuando montan a caballo en las escaramuzas.',
      'Pueden ir sin la herradura. De colores serios. No de puntas chatas o cuadradas, ni bordados en el empeine como botas texanas. La suela no debe de ser gruesa y si lleva textura que no se note, ni sea de color claro.',
      'El tacón recto (espuelero).'
    ]
  },
  {
    variante: 'botas Jalisco con suela volada',
    nombrecompleto: 'botas Jalisco con suela volada',
    cat: 'calzado',
    subcat: 'botas',
    etiqueta: ['faena', 'media gala'],
    portador: 'jinete',
    runway: 'calzado-jalisco-volada.avif',
    replacecat: ['botines'],
    restricted: [
      'tapabalazo con media bot.',
      'tapabalazo con bot. entera',
      'pantalón con aletón',
      'tapabalazo con aletón y media bot.',
      'tapabalazo con aletilla y bot. entera',
      'pantalón liso con media bot.',
      'pantalón liso con bot. entera',
      'pantalón con aletón',
      'pantalón con aletón y tarugos',
      'pantalón con aletón y media bot.'
    ],
    restrictedmessage: 'No se usan con pantalón de aletón, aletilla o botonadura.',
    zindex: 7,
    text: [
      'Se usan en la categoría de faena, con pantalones lisos, sin aletón ni botonadura completa. No se usan con chaparreras.',
      'Ahora es común verlas en las adelitas y charras cuando montan a caballo en las escaramuzas.',
      'Pueden ir sin la herradura. De colores serios. No de puntas chatas o cuadradas, ni bordados en el empeine como botas texanas. La suela no debe de ser gruesa y si lleva textura que no se note, ni sea de color claro.',
      'El tacón recto (espuelero). La suela con parrilla (suela volada) debe ser discreta y no exagerada.'
    ]
  },
  {
    variante: 'botines',
    nombrecompleto: 'botines',
    cat: 'calzado',
    subcat: 'botines',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'calzado-botines.avif',
    replacecat: ['botas'],
    zindex: 2,
    text: [
      'De una sola pieza, de colores serios. El negro solo es para el traje de ceremonia. No de puntas chatas o cuadradas, ni bordados en el empeine como botas texanas. La suela no debe de ser gruesa y si lleva textura que no se note, ni sea de color claro. El tacón recto (espuelero).'
    ]
  },
  {
    variante: 'botines con suela volada',
    nombrecompleto: 'botines con suela volada',
    cat: 'calzado',
    subcat: 'botines',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'calzado-botines-volada.avif',
    replacecat: ['botas'],
    zindex: 2,
    text: [
      'De una sola pieza, de colores serios. El negro solo es para el traje de ceremonia.No de puntas chatas o cuadradas, ni bordados en el empeine como botas texanas. La suela no debe de ser gruesa y si llevatextura que no se note, ni sea de color claro. El tacón recto (espuelero). La suela con parrilla (suela volada) debe ser discreta y no exagerada.'
    ]
  },
  // *****************************************
  // BROCHES
  // *****************************************
  {
    variante: '1 broche',
    nombrecompleto: '1 broche',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-1broche-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-1broche-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-1broche-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-1broche-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '1 broche doble',
    nombrecompleto: '1 broche doble',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-1brochedoble-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-1brochedoble-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-1brochedoble-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-1brochedoble-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '1 broche triple',
    nombrecompleto: '1 broche triple',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-1brochetriple-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-1brochetriple-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-1brochetriple-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-1brochetriple-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '2 broches dobles',
    nombrecompleto: '2 broches dobles',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-2brochesdobles-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-2brochesdobles-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-2brochesdobles-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-2brochesdobles-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 broches',
    nombrecompleto: '3 broches',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3broches-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3broches-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3broches-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3broches-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 broches chicos',
    nombrecompleto: '3 broches chicos',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3brocheschicos-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3brocheschicos-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3brocheschicos-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3brocheschicos-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 botones',
    nombrecompleto: '3 botones',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3botones-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3botones-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3botones-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3botones-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '6 botones',
    nombrecompleto: '6 botones',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['gran gala'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-6botones-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-6botones-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-6botones-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-6botones-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 alamares redondos',
    nombrecompleto: '3 alamares redondos',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3alamaresredondos-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3alamaresredondos-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3alamaresredondos-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3alamaresredondos-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '1 tarugo',
    nombrecompleto: '1 tarugo',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-1tarugo-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-1tarugo-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-1tarugo-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-1tarugo-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '1 tarugo con alamares',
    nombrecompleto: '1 tarugo con alamares',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-1tarugo-alamares-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-1tarugo-alamares-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-1tarugo-alamares-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-1tarugo-alamares-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 tarugos',
    nombrecompleto: '3 tarugos',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3tarugos-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3tarugos-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3tarugos-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3tarugos-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  {
    variante: '3 tarugos con alamares',
    nombrecompleto: '3 tarugos con alamares',
    cat: 'traje',
    subcat: 'broches',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: '',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla',
    version: {
      'chaqueta cuello redondo': 'broches-3tarugos-alamares-chaqueta.avif',
      'chaqueta cuello de picos': 'broches-3tarugos-alamares-chaqueta.avif',
      'chaquetilla cuello redondo': 'broches-3tarugos-alamares-chaquetilla.avif',
      'chaquetilla cuello de picos': 'broches-3tarugos-alamares-chaquetilla.avif'
    },
    zindex: 20,
    text: [
      'La cantidad de broches y el material de estos depende de la categoría del traje y del tipo de chaqueta o chaquetilla. Por lo general, cuando se llevan solapas de pico, se llevan tres botones o broches. En Faena si el broche es de plata será uno solo y la montura llevará herraje expuesto. De Media Gala para arriba los broches o botones serán de plata, pero podrán ir acompañados de alamares de gamuza, en cambio en faena los botones o tarugos serán de hueso o cuerno.'
    ]
  },
  // *****************************************
  // CHAQUETILLAS Y SIMILARES
  // *****************************************
  {
    variante: 'blusa de nudo cuello normal',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'blusa-nudo-normal.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'blusa-nudo-normal-pistola.avif',
      'pistola con funda recortada': 'blusa-nudo-normal-pistola.avif',
      navaja: 'blusa-nudo-normal.avif',
      cuchillo: 'blusa-nudo-normal.avif'
    },
    modify: ['paliacate'],
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'blusa de nudo cuello militar',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'blusa-nudo-militar.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'blusa-nudo-militar-pistola.avif',
      'pistola con funda recortada': 'blusa-nudo-militar-pistola.avif',
      navaja: 'blusa-nudo-militar.avif',
      cuchillo: 'blusa-nudo-militar.avif'
    },
    modify: ['paliacate'],
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'blusa de pretina cuello normal',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'blusa-pretina-normal.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'blusa-pretina-normal-pistola.avif',
      'pistola con funda recortada': 'blusa-pretina-normal-pistola.avif',
      navaja: 'blusa-pretina-normal.avif',
      cuchillo: 'blusa-pretina-normal.avif'
    },
    modify: ['paliacate'],
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'blusa de pretina cuello normal cerrado arriba',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'blusa-pretina-normal-cerradoarriba.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'blusa-pretina-normal-cerradoarriba-pistola.avif',
      'pistola con funda recortada': 'blusa-pretina-normal-cerradoarriba-pistola.avif',
      navaja: 'blusa-pretina-normal-cerradoarriba.avif',
      cuchillo: 'blusa-pretina-normal-cerradoarriba.avif'
    },
    modify: ['paliacate'],
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'blusa de pretina cuello militar',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'blusa-pretina-militar.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'blusa-pretina-militar-pistola.avif',
      'pistola con funda recortada': 'blusa-pretina-militar-pistola.avif',
      navaja: 'blusa-pretina-militar.avif',
      cuchillo: 'blusa-pretina-militar.avif'
    },
    modify: ['paliacate'],
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'tapatía',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'tapatia.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'tapatia-pistola.avif',
      'pistola con funda recortada': 'tapatia-pistola.avif',
      navaja: 'tapatia.avif',
      cuchillo: 'tapatia.avif'
    },
    text: [
      'De corte recto, no acinturado. Debe de ser larga, formar arrugas al anudarse y cubrir el cinturón. (si no, parece ombliguera)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-blusas.avif'
    ]
  },
  {
    variante: 'chazarilla cuello militar',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'chazarilla-militar.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chazarilla-militar-pistola.avif',
      'pistola con funda recortada': 'chazarilla-militar-pistola.avif',
      navaja: 'chazarilla-militar.avif',
      cuchillo: 'chazarilla-militar.avif'
    },
    modify: ['paliacate'],
    text: [
      'Las chazarillas se parecen en la forma a las blusas, pero suelen de ser de telas más gruesas, de gamuza o cuero, además de llevar forro por dentro.',
      'Suelen llevar unas aberturas a los costados del tórax.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chazarillas.avif'
    ]
  },
  {
    variante: 'chazarilla cuello normal',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'chazarilla-normal.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chazarilla-normal-pistola.avif',
      'pistola con funda recortada': 'chazarilla-normal-pistola.avif',
      navaja: 'chazarilla-normal.avif',
      cuchillo: 'chazarilla-normal.avif'
    },
    modify: ['paliacate'],
    text: [
      'Las chazarillas se parecen en la forma a las blusas, pero suelen de ser de telas más gruesas, de gamuza o cuero, además de llevar forro por dentro.',
      'Suelen llevar unas aberturas a los costados del tórax.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chazarillas.avif'
    ]
  },
  {
    variante: 'chaqueta cuello redondo',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaqueta-redondo.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chaqueta-redondo-pistola.avif',
      'pistola con funda recortada': 'chaqueta-redondo-pistola.avif',
      navaja: 'chaqueta-redondo.avif',
      cuchillo: 'chaqueta-redondo.avif'
    },
    modify: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    dependencies: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    restricted: ['pachuqueña cuello militar'],
    restrictedmessage: 'No se usa con camisa pachuqueña de cuello militar.',
    text: [
      'Las chaquetas son un poco más largas que las chaquetillas (de ahí que estas últimas sean el diminutivo de las primeras) y suelen estar menos acinturadas. Es un corte más antiguo y suelen usarse más con solapas de pico y tres botones o broches en frente.',
      'Normalmente llevan solo un bolsillo en la parte superior izquierda, pero puede llevar también del otro lado. Antiguamente se usaron los bolsillos “cerilleros”, que iban del lado derecho, justo arriba del bolsillo y de tamaño mucho menor. (aprox. la mitad del bolsillo normal)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaquetillas.avif'
    ]
  },

  {
    variante: 'chaqueta cuello de picos',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaqueta-picos.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chaqueta-picos-pistola.avif',
      'pistola con funda recortada': 'chaqueta-picos-pistola.avif',
      navaja: 'chaqueta-picos.avif',
      cuchillo: 'chaqueta-picos.avif'
    },
    modify: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    dependencies: [
      'inglesa',
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    restricted: ['pachuqueña cuello militar'],
    restrictedmessage: 'No se usa con camisa pachuqueña de cuello militar.',
    text: [
      'Las chaquetas son un poco más largas que las chaquetillas (de ahí que estas últimas sean el diminutivo de las primeras) y suelen estar menos acinturadas. Es un corte más antiguo y suelen usarse más con solapas de pico y tres botones o broches en frente.',
      'Normalmente llevan solo un bolsillo en la parte superior izquierda, pero puede llevar también del otro lado. Antiguamente se usaron los bolsillos “cerilleros”, que iban del lado derecho, justo arriba del bolsillo y de tamaño mucho menor. (aprox. la mitad del bolsillo normal)',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaquetillas.avif'
    ]
  },
  {
    variante: 'chaquetilla cuello redondo',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaquetilla-redondo.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chaquetilla-redondo-pistola.avif',
      'pistola con funda recortada': 'chaquetilla-redondo-pistola.avif',
      navaja: 'chaquetilla-redondo.avif',
      cuchillo: 'chaquetilla-redondo.avif'
    },
    modify: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    dependencies: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    restricted: ['pachuqueña cuello militar'],
    restrictedmessage: 'No se usa con camisa pachuqueña de cuello militar.',
    text: [
      'A pesar de ser más cortas que las chaquetas, deben de cubrir el cinturón. (No uses el pantalón tan abajo) Su corte es más acinturado y estilizado, ideal para gente más bien alta y delgada. Si se usan del buen largo, lo mismo que el pantalón, al estar montados la camisa y el cinturón no se verán por detrás.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaquetillas.avif'
    ]
  },
  {
    variante: 'chaquetilla cuello de picos',
    cat: 'traje',
    subcat: 'chaquetillas y similares',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaquetilla-picos.avif',
    zindex: 19,
    version: {
      'pistola con funda normal': 'chaquetilla-picos-pistola.avif',
      'pistola con funda recortada': 'chaquetilla-picos-pistola.avif',
      navaja: 'chaquetilla-picos.avif',
      cuchillo: 'chaquetilla-picos.avif'
    },
    modify: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    dependencies: [
      '1 broche',
      '1 broche doble',
      '1 broche triple',
      '2 broches dobles',
      '3 broches',
      '3 broches chicos',
      '3 botones',
      '6 botones',
      '3 alamares redondos',
      '1 tarugo',
      '1 tarugo con alamares',
      '3 tarugos',
      '3 tarugos con alamares',
      'pañuelo'
    ],
    restricted: ['pachuqueña cuello militar'],
    restrictedmessage: 'No se usa con camisa pachuqueña de cuello militar.',
    text: [
      'A pesar de ser más cortas que las chaquetas, deben de cubrir el cinturón. (No uses el pantalón tan abajo) Su corte es más acinturado y estilizado, ideal para gente más bien alta y delgada. Si se usan del buen largo, lo mismo que el pantalón, al estar montados la camisa y el cinturón no se verán por detrás.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaquetillas.avif'
    ]
  },
  // *****************************************
  // PRENDAS DE LLUVIA
  // *****************************************
  {
    variante: 'manga de hule',
    cat: 'prendas de lluvia',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'lluvia-manga_hule.avif',
    replacecat: ['prendas de abrigo'],
    zindex: 24,
    text: [
      'Las mangas de hule son como jorongos amplios de manta impregnados de hule por el lado exterior, y sirven para protegerse de la lluvia. Cuando no se usan se lleva enrollado como sarape atrás de la teja, o dentro de un maletín o portamangas. Si se llevan dos mangas, una se puede embrocar en la cabeza de la silla para que supla a las armas de agua.'
    ]
  },
  {
    variante: 'forro de sombrero',
    cat: 'prendas de lluvia',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    version: {
      A1C1: 'forro-A1C1.avif',
      A1C2: 'forro-A1C2.avif',
      A1C3: 'forro-A1C3.avif',
      A2C1: 'forro-A2C1.avif',
      A2C2: 'forro-A2C2.avif',
      A2C3: 'forro-A2C3.avif',
      A3C1: 'forro-A3C1.avif',
      A3C2: 'forro-A3C2.avif',
      A3C3: 'forro-A3C3.avif'
    },
    require: ['A1C1', 'A1C2', 'A1C3', 'A2C1', 'A2C2', 'A2C3', 'A3C1', 'A3C2', 'A3C3'],
    requiremessage: 'Requiere un sombrero de palma o fieltro.',
    zindex: 32,
    text: [
      'Pueden ser de plástico, aunque antes se hacían del mismo material que las mangas de hule, es decir de manta impregnada de hule o caucho.'
    ]
  },
  // *****************************************
  // CHALECOS
  // *****************************************
  {
    variante: 'chaleco normal',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaleco-normal.avif',
    version: {
      'pistola con funda normal': 'chaleco-normal-pistola.avif',
      'pistola con funda recortada': 'chaleco-normal-pistola.avif',
      navaja: 'chaleco-normal-navaja.avif',
      cuchillo: 'chaleco-normal-cuchillo.avif'
    },
    modify: ['inglesa'],
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco normal sin botones',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'chaleco-normal-sinbotones.avif',
    version: {
      'pistola con funda normal': 'chaleco-normal-sinbotones-pistola.avif',
      'pistola con funda recortada': 'chaleco-normal-sinbotones-pistola.avif',
      navaja: 'chaleco-normal-sinbotones-navaja.avif',
      cuchillo: 'chaleco-normal-sinbotones-cuchillo.avif'
    },
    modify: ['inglesa'],
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco normal con solapas',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'cermonia'],
    portador: 'jinete',
    runway: 'chaleco-normal-solapas.avif',
    version: {
      'pistola con funda normal': 'chaleco-normal-solapas-pistola.avif',
      'pistola con funda recortada': 'chaleco-normal-solapas-pistola.avif',
      navaja: 'chaleco-normal-solapas-navaja.avif',
      cuchillo: 'chaleco-normal-solapas-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco normal con tarugos',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'chaleco-normal-tarugos.avif',
    version: {
      'pistola con funda normal': 'chaleco-normal-tarugos-pistola.avif',
      'pistola con funda recortada': 'chaleco-normal-tarugos-pistola.avif',
      navaja: 'chaleco-normal-tarugos-navaja.avif',
      cuchillo: 'chaleco-normal-tarugos-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco normal con alamares',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'chaleco-normal-alamares.avif',
    version: {
      'pistola con funda normal': 'chaleco-normal-alamares-pistola.avif',
      'pistola con funda recortada': 'chaleco-normal-alamares-pistola.avif',
      navaja: 'chaleco-normal-alamares-navaja.avif',
      cuchillo: 'chaleco-normal-alamares-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco recto',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'cermonia'],
    portador: 'jinete',
    runway: 'chaleco-recto.avif',
    version: {
      'pistola con funda normal': 'chaleco-recto-pistola.avif',
      'pistola con funda recortada': 'chaleco-recto-pistola.avif',
      navaja: 'chaleco-recto-navaja.avif',
      cuchillo: 'chaleco-recto-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco recto sin botones',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'cermonia'],
    portador: 'jinete',
    runway: 'chaleco-recto-sinbotones.avif',
    version: {
      'pistola con funda normal': 'chaleco-recto-sinbotones-pistola.avif',
      'pistola con funda recortada': 'chaleco-recto-sinbotones-pistola.avif',
      navaja: 'chaleco-recto-sinbotones-navaja.avif',
      cuchillo: 'chaleco-recto-sinbotones-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  {
    variante: 'chaleco recto con tarugos',
    cat: 'traje',
    subcat: 'chalecos',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'chaleco-recto-tarugos.avif',
    version: {
      'pistola con funda normal': 'chaleco-recto-tarugos-pistola.avif',
      'pistola con funda recortada': 'chaleco-recto-tarugos-pistola.avif',
      navaja: 'chaleco-recto-tarugos-navaja.avif',
      cuchillo: 'chaleco-recto-tarugos-cuchillo.avif'
    },
    dependencies: ['inglesa'],
    zindex: 17,
    text: [
      'El chaleco DEBE cubrir el cinturón y sobre todo no dejar ver la camisa por debajo, esto sucede principalmente por usar el pantalón demasiado bajo.',
      'Suelen tener dos bolsillos en la parte baja, pero pueden llevar en la parte alta. El largo y forma de los picos que se forman abajo puede variar, también pueden ser rectos.',
      'Según el estilo del traje, pueden llevar solapas, que serán del mismo tipo que la chaquetilla.',
      'No se usan con blusas o chazarillas, ni son obligatorios en cualquier categoría.',
      'Se suele dejar el ultimo botón sin abotonar.',
      'El material de los botones debe ser del mismo que la chaquetilla, y pueden ser de distintos tipos: pueden ir ocultos (sin solapas y con adornos), normales o con alamares.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):'
    ],
    descImg: [
      'adornos-chaleco.avif'
    ]
  },
  // *****************************************
  // CAMISAS
  // *****************************************
  {
    variante: 'civil',
    nombrecompleto: 'camisa civil',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'camisa-civil.avif',
    back: 'camisa-back.avif',
    zindex: 2,
    restrictsubcat: ['cuello pachuqueño'],
    text: [
      'Solo se puede usar cuando se lleva chaqueta encima pero no podrá quitarsela y quedarse solo en camisa. No es de buen gusto usar camisa de color obscuro con chaquetilla. Esto solo se ve bien en categoría de Faena y con chazarillas o blusas.'
    ]
  },
  {
    variante: 'camisa de pretina',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'camisa-pretina-normal.avif',
    version: {
      'pistola con funda normal': 'camisa-pretina-normal-pistola.avif',
      'pistola con funda recortada': 'camisa-pretina-normal-pistola.avif'
    },
    restrictsubcat: ['cuello pachuqueño'],
    zindex: 19,
    text: [
      'Debe cubrir el cinturón. La forma y cantidad de bolsillos puede variar. No llevan forro.',
      'Por debajo se suele usar una camiseta fajada.',
      'Se usan con el cuello cerrado. (Si se usan por encima de una camisa, ya funcionarían como blusa y en esos casos el cuello va abierto.)',
      'Si se llegan a adornar será de manera más discreta que las blusas y chazarillas.'
    ]
  },
  {
    variante: 'camisa de pretina cuello pachuqueño (militar)',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'camisa-pretina-militar.avif',
    version: {
      'pistola con funda normal': 'camisa-pretina-militar-pistola.avif',
      'pistola con funda recortada': 'camisa-pretina-militar-pistola.avif'
    },
    restrictsubcat: ['cuello pachuqueño'],
    zindex: 19,
    text: [
      'Debe cubrir el cinturón. La forma y cantidad de bolsillos puede variar. No llevan forro.',
      'Por debajo se suele usar una camiseta fajada.',
      'Se usan con el cuello cerrado. (Si se usan por encima de una camisa, ya funcionarían como blusa y en esos casos el cuello va abierto.)',
      'Si se llegan a adornar será de manera más discreta que las blusas y chazarillas.'
    ]
  },
  {
    variante: 'camisa de nudo',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'camisa-nudo.avif',
    version: {
      'pistola con funda normal': 'camisa-nudo-pistola.avif',
      'pistola con funda recortada': 'camisa-nudo-pistola.avif'
    },
    zindex: 19,
    text: [
      'El corte del tórax debe de ser recto, no acinturado, deben de ser largas (como si se fueran a fajar). Ya amarrado el nudo se deben formar arrugas y debe cubrir el cinturón. (si no, parece ombliguera)',
      'La forma y cantidad de bolsillos puede variar. No llevan forro.',
      'Por debajo se suele usar una camiseta fajada.',
      'Se usan con el cuello cerrado. (Si se usan por encima de una camisa, ya funcionarían como blusa y en esos casos el cuello va abierto.)',
      'Si se llegan a adornar será de manera más discreta que las blusas y chazarillas.'
    ]
  },
  {
    variante: 'camisa de nudo cuello pachuqueño',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'camisa-nudo-militar.avif',
    version: {
      'pistola con funda normal': 'camisa-nudo-militar-pistola.avif',
      'pistola con funda recortada': 'camisa-nudo-militar-pistola.avif'
    },
    zindex: 19,
    text: [
      'El corte del tórax debe de ser recto, no acinturado, deben de ser largas (como si se fueran a fajar). Ya amarrado el nudo se deben formar arrugas y debe cubrir el cinturón. (si no, parece ombliguera)',
      'La forma y cantidad de bolsillos puede variar. No llevan forro.',
      'Por debajo se suele usar una camiseta fajada.',
      'Se usan con el cuello cerrado. (Si se usan por encima de una camisa, ya funcionarían como blusa y en esos casos el cuello va abierto.)',
      'Si se llegan a adornar será de manera más discreta que las blusas y chazarillas.'
    ]
  },
  {
    variante: 'pachuqueña cuello militar',
    nombrecompleto: 'camisa pachuqueña de cuello militar',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'camisa-pachuquena-militar.avif',
    back: 'camisa-back.avif',
    restricted: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos',
      'chaleco normal',
      'chaleco normal sin botones',
      'chaleco normal con solapas',
      'chaleco normal con tarugos',
      'chaleco recto',
      'chaleco recto sin botones',
      'chaleco recto con tarugos'
    ],
    restrictsubcat: ['cuello normal', 'chalecos'],
    restrictedmessage: 'No se usa con chalecos, chaquetas o chaquetillas.',
    zindex: 2,
    text: [
      'Pueden ser acinturadas o no. De colores serios, no saturados o afeminados. Sin logotipos ni fierros que no sean el propio. (¿No llevarías el fierro de otro como si fueras ganado de su propiedad, no?) Este tipo de cuello no es compatible con chaquetas y chaquetillas.'
    ]
  },
  {
    variante: 'pachuqueña cuello normal',
    nombrecompleto: 'camisa pachuqueña de cuello normal',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'camisa-pachuquena-normal.avif',
    back: 'camisa-back.avif',
    restrictsubcat: ['cuello normal'],
    zindex: 2,
    text: [
      'Pueden ser acinturadas o no. De colores serios, no saturados o afeminados. En categorías de Media Gala para arriba, siempre de tonos claros.',
      'Sin logotipos ni fierros que no sean el propio. (¿No llevarías el fierro de otro como si fueras ganado de su propiedad, no?)',
      'Fíjate que las solapas del cuello no se levanten ni que sean muy pequeñas.'
    ]
  },
  {
    variante: 'pachuqueña cuello normal con botones',
    nombrecompleto: 'camisa pachuqueña de cuello normal con botones',
    cat: 'traje',
    subcat: 'camisas',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'camisa-pachuquena-normal-botones.avif',
    back: 'camisa-back.avif',
    restrictsubcat: ['cuello normal'],
    zindex: 2,
    text: [
      'Pueden ser acinturadas o no. De colores serios, no saturados o afeminados. En categorías de Media Gala para arriba, siempre de tonos claros.',
      'Sin logotipos ni fierros que no sean el propio. (¿No llevarías el fierro de otro como si fueras ganado de su propiedad, no?)',
      'Fíjate que las solapas del cuello no se levanten ni que sean muy pequeñas.'
    ]
  },
  // *****************************************
  // PANTALONES
  // *****************************************
  {
    variante: 'tapabalazo',
    nombrecompleto: 'pantalón tapabalazo',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-faena.avif',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'tapabalazo con media bot.',
    nombrecompleto: 'pantalón tapabalazo con media botonadura',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['media gala'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-mediagala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    modify: [
      'refuerzo de cuadrilera',
    ],
    zindex: 5,
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'tapabalazo con bot. entera',
    nombrecompleto: 'pantalón tapabalazo con botonadura entera',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-botentera-gala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Los botones que cierran el tapabalazo suelen ser de mayor tamaño que el resto. La cadenilla siempre queda del otro lado del aletón o aletilla.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'tapabalazo con aletón',
    nombrecompleto: 'pantalón tapabalazo con aletón',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-aleton-faena.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Pueden llevar tarugos o botones de distintos materiales, parecido al tapabalazo (pues en realidad son el vestigio de ellos). En esos casos de un lado (frontal) queda el botón y de otro lado la cadenilla o lo que lo sujete, tipo trenza de gamuza o cordón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'tapabalazo con aletón y media bot.',
    nombrecompleto: 'pantalón tapabalazo con aletón y media botonadura',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['media gala'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-aleton-mediagala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Pueden llevar tarugos o botones de distintos materiales, parecido al tapabalazo (pues en realidad son el vestigio de ellos). En esos casos de un lado (frontal) queda el botón y de otro lado la cadenilla o lo que lo sujete, tipo trenza de gamuza o cordón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'tapabalazo con aletilla bot. entera',
    nombrecompleto: 'pantalón tapabalazo con aletilla y botonadura entera',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'pantalon-tapabalazo-aletilla-botentera-gala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Es un corte muy tradicional, evolución de las portañuelas (abertura frontal de las calzoneras antiguas). Por debajo del tapabalazo están los bolsillos del pantalón. Pueden estar cerrados con tres o más botones en los costados y con uno o dos en la parte frontal. El material de los botones dependerá de la categoría y estilo del traje. Este tipo de pantalón puede llevar aletón, aletilla o liso.',
      'Los botones que cierran el tapabalazo suelen ser de mayor tamaño que el resto. La cadenilla siempre queda del otro lado del aletón o aletilla.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón liso',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'pantalon-liso-faena.avif',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
      'refuerzo de botas',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón liso con media bot.',
    nombrecompleto: 'pantalón liso con media botonadura',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['media gala'],
    portador: 'jinete',
    runway: 'pantalon-liso-mediabot-mediagala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
      'refuerzo de botas',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón liso con bot. entera',
    nombrecompleto: 'pantalón liso con botonadura entera',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'pantalon-liso-botentera-gala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón con aletón',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'pantalon-liso-aleton-faena.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
      'refuerzo de botas',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Pueden llevar tarugos o botones de distintos materiales, parecido al tapabalazo (pues en realidad son el vestigio de ellos). En esos casos de un lado (frontal) queda el botón y de otro lado la cadenilla o lo que lo sujete, tipo trenza de gamuza o cordón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón con aletón y tarugos',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'pantalon-liso-aleton-tarugos-faena.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
      'refuerzo de botas',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Pueden llevar tarugos o botones de distintos materiales, parecido al tapabalazo (pues en realidad son el vestigio de ellos). En esos casos de un lado (frontal) queda el botón y de otro lado la cadenilla o lo que lo sujete, tipo trenza de gamuza o cordón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'pantalón con aletón y media bot.',
    nombrecompleto: 'pantalón con aletón y media botonadura',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['media gala'],
    portador: 'jinete',
    runway: 'pantalon-liso-aleton-mediabot-mediagala.avif',
    restricted: ['botas Jalisco', 'botas Jalisco con suela volada'],
    restrictedmessage: 'Botas Jalisco no se usan con pantalones de aletón, aletilla o botonadura.',
    zindex: 5,
    modify: [
      'refuerzo de cuadrilera',
      'refuerzo de botas',
    ],
    text: [
      'El pantalón debe de ser suficientemente alto en la cintura para que, si se usa chaleco, este cubra el cinturón y no se vea la camisa por debajo, ni por detrás. Deben permitir todos los movimientos. Deben de ser mucho más largos que un pantalón civil, para que al estar sentados no se separen del tacón y montados de la espuela, este largo extra formará el fuelle debajo de la pantorrilla. Deben tener forma de campana en la forma inferior para cubrir correctamente hasta medio empeine y parte de tacón.',
      'Pueden llevar tarugos o botones de distintos materiales, parecido al tapabalazo (pues en realidad son el vestigio de ellos). En esos casos de un lado (frontal) queda el botón y de otro lado la cadenilla o lo que lo sujete, tipo trenza de gamuza o cordón.',
      'Zonas que se pueden adornar (OJO: los adornos son opcionales y no hace falta adornar todas las zonas marcadas):',
    ],
    descImg: [
      'adornos-pantalon.avif'
    ],
    descLink: 'https://youtu.be/NtuKH-4HtGc?si=bPEsz8z8l3NQ8Szn'
  },
  {
    variante: 'añadir mecapal',
    nombrecompleto: 'mecapal',
    cat: 'traje',
    subcat: 'pantalón',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: '',
    back: 'pantalon-mecapal-back.avif',
    zindex: 5,
    allowsame: true,
    text: [
      'Se puede aplicar a cualquier pantalón y cualquier categoría. Este cintito servía para ajustar el pantalón, por lo que debe quedar cerca de la pretina del pantalón.'
    ]
  },
  // *****************************************
  // REFUERZOS PANTALON
  // *****************************************
  {
    variante: "calavera",
    cat: "traje",
    subcat: "refuerzos de pantalón",
    etiqueta: ['faena'],
    portador: "jinete",
    back: 'refuerzos-calavera-liso.avif',
    require: ['pantalón liso'],
    requiremessage: 'Requiere un pantalón liso',
    allowsame: true,
    zindex: 6,
    text: [
      'Del mismo color que los adornos y refuerzos de gamuza que lleva el pantalón. Si va solo, que el color no sea muy llamativo.'
    ]
  },
  {
    variante: "cachiruleado 1",
    cat: "traje",
    subcat: "refuerzos de pantalón",
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: "jinete",
    runway: "refuerzos-cachiruleado1-liso.avif",
    require: [
      'pantalón liso',
      'pantalón liso con media bot.',
      'pantalón liso con bot. entera'
    ],
    requiremessage: 'Requiere un pantalón liso',
    allowsame: false,
    zindex: 6,
    text: [
      'La forma y el área que ocupa puede variar según los adornos y estilo, lo mismo que las orillas. Puede además llevar botonadura si la categoría lo exige.'
    ]
  },
  {
    variante: "cachiruleado 2",
    cat: "traje",
    subcat: "refuerzos de pantalón",
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: "jinete",
    runway: "refuerzos-cachiruleado2-liso.avif",
    require: [
      'pantalón liso',
      'pantalón liso con media bot.',
      'pantalón liso con bot. entera'
    ],
    requiremessage: 'Requiere un pantalón liso',
    allowsame: false,
    zindex: 6,
    text: [
      'La forma y el área que ocupa puede variar según los adornos y estilo, lo mismo que las orillas. Puede además llevar botonadura si la categoría lo exige.'
    ]
  },
  {
    variante: "refuerzo de cuadrilera",
    cat: "traje",
    subcat: "refuerzos de pantalón",
    etiqueta: ['faena', 'media gala'],
    portador: "jinete",
    allowsame: true,
    version: {
      'pantalón liso': 'refuerzos-cuadrilera-liso.avif',
      'pantalón liso con media bot.': 'refuerzos-cuadrilera-liso.avif',
      'tapabalazo': 'refuerzos-cuadrilera-tapabalazo.avif',
      'tapabalazo con media bot.': 'refuerzos-cuadrilera-tapabalazo.avif',
      'tapabalazo con aletón': 'refuerzos-cuadrilera-tapabalazo-aleton.avif',
      'pantalón con aletón': 'refuerzos-cuadrilera-aleton.avif',
      'pantalón con aletón y tarugos': 'refuerzos-cuadrilera-aleton.avif',
      'pantalón con aletón y media bot.': 'refuerzos-cuadrilera-aleton.avif',
    },
    require: [
      'pantalón liso',
      'pantalón liso con media bot.',
      'tapabalazo',
      'tapabalazo con media bot.',
      'tapabalazo con aletón',
      'tapabalazo con aletón y media bot.',
      'pantalón con aletón',
      'pantalón con aletón y tarugos', ,
      'pantalón con aletón y media bot.',
    ],
    requiremessage: 'Requiere un pantalón',
    zindex: 6,
    text: [
      'Para que se vea bonita, lo ideal es que toda la parte alta del pantalón sea de gamuza (pretina, presillas, etc.)'
    ]
  },
  {
    variante: "refuerzo de botas",
    cat: "traje",
    subcat: "refuerzos de pantalón",
    etiqueta: ['faena', 'media gala'],
    portador: "jinete",
    runway: "",
    allowsame: true,
    version: {
      'pantalón liso': 'refuerzos-botas-liso.avif',
      'pantalón liso con media bot.': 'refuerzos-botas-liso.avif',
      'pantalón con aletón': 'refuerzos-botas-aleton.avif',
      'pantalón con aletón y tarugos': 'refuerzos-botas-aleton.avif',
      'pantalón con aletón y media bot.': 'refuerzos-botas-aleton.avif',
    },
    require: [
      'pantalón liso',
      'pantalón liso con media bot.',
      'pantalón con aletón',
      'pantalón con aletón y tarugos', ,
      'pantalón con aletón y media bot.',
    ],
    requiremessage: 'Requiere un pantalón liso o de aletón',
    zindex: 6,
    text: [
      'La gamuza utilizada debe ser la misma de la greca o demás refuerzos si es que los lleva, o hacer juego con la tela del pantalón o el resto del traje. Siempre lo más discreto es lo mejor.'
    ]
  },
  // *****************************************
  // CORBATAS
  // *****************************************
  {
    variante: 'corbata de tiento',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-tiento.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'La mancuernilla puede ser de botones metálicos con cadenilla o de tarugos unidos con gamuza o cordón. Usar gamuza de tonos naturales.'
    ]
  },
  {
    variante: 'corbata de tiento con nudo mariposa',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-monotiento.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'Usar gamuza de tonos naturales y el corte en las puntas que sea armonioso.'
    ]
  },
  {
    variante: 'Armendáriz',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-armendariz.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'Este no es su nombre real (lo desconozco). La mascada o pañoleta va por encima del cuello de la camisa, se fija con un anillo metálico o d cuerno, y las puntas sobrantes se meten en la camisa.'
    ]
  },
  {
    variante: 'pañoleta',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-panoleta.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'Esta manera es más informal y no es adecuada para festejos importantes, tipo jaripeos, charreadas, etc. Puede ser con nudo o con anillo y la tela puede ser un paliacate, de seda, etc.'
    ]
  },
  {
    variante: 'gargantón',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-garganton.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'No usen corbatines de gargantón que tratan de ser multifunción, pues cuando se usan con pachuqueña de cuello militar o pachuqueño, los sobrantes se ven. Las formas de las borlas o escobetillas puede variar según diseño. El alamar no debe ser muy grande.'
    ],
    descImg: [
      'medidas-gargantones.webp'
    ]
  },
  {
    variante: 'rebocito',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-rebocito.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'La tela es tejida en telar, igual que si fuera un rebozo. El nudo de mariposa debe parecer nudo de mariposa y no moño de caja de regalo o bolsas infladas. La mancuernilla puede ser de botones metálicos con cadenilla o de tarugos unidos con gamuza o cordón.'
    ],
    descLink: 'https://youtu.be/67Jzh4w9ilA?si=OvIyDUEwx2Ts7Bhj'
  },
  {
    variante: 'corbata',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-corbata.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'La tela puede variar de color y tramado. Siempre colores serios y varoniles.',
      'El nudo de mariposa debe parecer nudo de mariposa y no moño de caja de regalo o bolsas infladas. La mancuernilla puede ser de botones metálicos con cadenilla o de tarugos unidos con gamuza o cordón.'
    ],
    descLink: 'https://youtu.be/67Jzh4w9ilA?si=OvIyDUEwx2Ts7Bhj'
  },
  {
    variante: 'mascada',
    cat: 'corbatas',
    subcat: 'cuello pachuqueño',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-pachuqueno-mascada.avif',
    zindex: 23,
    replacecat: ['cuello normal'],
    text: [
      'Puede ir anudada o con anillo. Por su largo no es apto para travesear, a menos que se trabe en el chaleco o entre los orificios de la ojalera de la camisa. Suelen ir encima de la camisa.',
    ]
  },
  {
    variante: 'inglesa',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'corbata-normal-inglesa.avif',
    version: {
      'chaleco normal': 'corbata-normal-inglesa.avif',
      'chaleco normal sin botones': 'corbata-normal-inglesa.avif',
      'chaleco normal con solapas': 'corbata-normal-inglesa.avif',
      'chaleco normal con tarugos': 'corbata-normal-inglesa.avif',
      'chaleco normal con alamares': 'corbata-normal-inglesa.avif',
      'chaleco recto': 'corbata-normal-inglesa.avif',
      'chaleco recto sin botones': 'corbata-normal-inglesa.avif',
      'chaleco recto con tarugos': 'corbata-normal-inglesa.avif'
    },
    replacecat: ['cuello pachuqueño'],
    require: [
      'chaqueta cuello de picos',
      'chaleco normal',
      'chaleco normal con solapas',
      'chaleco normal con alamares',
      'chaleco recto',
      'chaleco recto con solapas'
    ],
    requiremessage: 'Solo con chaleco y chaqueta de cuello de picos',
    zindex: 23,
    text: [
      'Esta corbata no se usó tanto como para que llegara a ser de uso regular en los mexicanos que usaban el traje nacional, por eso los charros que crearon las primeras asociaciones y posteriormente la FMCh, decidieron no incluirla. Por lo que si se porta hay que hacerlo correctamente según ese último periodo donde el traje de charro estaba “vivo”.',
      `   - usar corbatas de colores obscuros, sin trama ni dibujo y de colores serios<br>
          - usar chaleco, si no andaría papaloteando al galopar<br>
          - llevar chaqueta en vez de chaquetilla y que ésta sea de solapa de picos y tres botones o broches<br>
      `
    ]
  },
  {
    variante: 'paliacate',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-normal-paliacate.avif',
    version: {
      'blusa de nudo cuello normal': 'corbata-normal-paliacate-blusa-normal.avif',
      'blusa de nudo cuello militar': 'corbata-normal-paliacate-blusa-militar.avif',
      'blusa de pretina cuello normal': 'corbata-normal-paliacate-blusa-normal.avif',
      'blusa de pretina cuello normal cerrado arriba': 'corbata-normal-paliacate-blusa-normal.avif',
      'blusa de pretina cuello militar': 'corbata-normal-paliacate-blusa-militar.avif',
      'chazarilla cuello normal': 'corbata-normal-paliacate-chazarilla-picos.avif',
      'chazarilla cuello militar': 'corbata-normal-paliacate-chazarilla-militar.avif'
    },
    replacecat: ['cuello pachuqueño'],
    zindex: 23,
    text: [
      'Esta manera es más informal y no es adecuada para festejos importantes, tipo jaripeos, charreadas, etc. Puede ser con nudo o con anillo.'
    ]
  },
  {
    variante: 'pañoleta',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'corbata-normal-panoleta.avif',
    zindex: 23,
    replacecat: ['cuello pachuqueño'],
    text: [
      'Esta manera es más informal y no es adecuada para festejos importantes, tipo jaripeos, charreadas, etc. Puede ser con nudo o con anillo y la tela puede ser un paliacate, de seda, etc.'
    ]
  },
  {
    variante: 'gargantón',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'corbata-normal-garganton.avif',
    zindex: 23,
    replacecat: ['cuello pachuqueño'],
    text: [
      'Las formas de las borlas o escobetillas pueden variar según diseño. El alamar no debe ser muy grande. A mi parecer se ven mejor cuando se portan con chazarilla en vez de chaquetilla y por lo tanto en categoría de faena.'
    ],
    descImg: [
      'medidas-gargantones.webp'
    ]
  },
  {
    variante: 'rebocito',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'corbata-normal-rebocito.avif',
    zindex: 23,
    replacecat: ['cuello pachuqueño'],
    text: [
      'La tela es tejida en telar, igual que si fuera un rebozo. El nudo de mariposa debe parecer nudo de mariposa y no moño de caja de regalo o bolsas infladas. Prefiere siempre corbatas que realmente se anudan y no de las de utilería, sé auténtico.'
    ],
    descLink: 'https://youtu.be/67Jzh4w9ilA?si=OvIyDUEwx2Ts7Bhj'
  },
  {
    variante: 'corbata',
    cat: 'corbatas',
    subcat: 'cuello normal',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'corbata-normal-corbata.avif',
    zindex: 23,
    replacecat: ['cuello pachuqueño'],
    text: [
      'La tela puede variar de color y tramado. Siempre colores serios y varoniles.',
      'El nudo de mariposa debe parecer nudo de mariposa y no moño de caja de regalo o bolsas infladas. Prefiere siempre corbatas que realmente se anudan y no de las de utilería, sé auténtico.'
    ],
    descLink: 'https://youtu.be/67Jzh4w9ilA?si=OvIyDUEwx2Ts7Bhj'
  },
  // *****************************************
  // PRENDAS DE ABRIGO
  // *****************************************
  {
    variante: 'ruana',
    cat: 'prendas de abrigo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'abrigo-ruana1.avif',
    extraimg: {
      archivo: 'abrigo-ruana2.avif',
      zindex: 22
    },
    restricted: ['manga de hule'],
    restrictedmessage: 'No se puede usar junto con una manga de hule',
    zindex: 1,
    text: [
      'La ruana charra es originalmente una prenda masculina, aunque ahora la usen las adelitas y charras. Lo ideal es que se usen en temporadas de frio cuando el chaleco (opcional) y la chaquetilla no es suficiente. Es una prenda más elegante y formal que el sarape o jorongo. Se sujetan con un broche en el cuello, y la orilla suele llevar flecos.'
    ]
  },
  {
    variante: 'sarape',
    cat: 'prendas de abrigo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'abrigo-sarape.avif',
    restricted: ['manga de hule'],
    restrictedmessage: 'No se puede usar junto con una manga de hule',
    zindex: 22,
    text: [
      'Debe ser de medidas reales para poderse usar en caso de frio, y no ser de esos que solo son de utilería. No es soporte publicitario ni playera deportiva para poner el nombre de jugador. Los colores deben ser serios y hacer juego con el resto de los textiles del ajuar. Los flecos caen de lado de montar en el caso de las sillas en las que se monta a horcajada y del lado de la garrocha en las albardas. Se sujetan con los tientos saraperos. Hay muchas maneras de portarlos a pie y a caballo. Cuando se llevan a pie y no se usa para abrigarse, se suele llevar doblado longitudinalmente y sobre el hombro izquierdo (para tener la mano derecha libre).',
      'La diferencia entre sarape y jorongo es que este último tiene en medio una abertura o bocamanga por donde se pasa la cabeza cuando se usa.'
    ],
    descLink: 'https://youtu.be/vOSI-bjWbak?si=S6vPNxpgkDMaN5r2'
  },
  {
    variante: 'jorongo',
    cat: 'prendas de abrigo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'abrigo-jorongo.avif',
    zindex: 22,
    restricted: ['manga de hule'],
    restrictedmessage: 'No se puede usar junto con una manga de hule',
    text: [
      'Debe ser de medidas reales para poderse usar en caso de frio, y no ser de esos que solo son de utilería. No es soporte publicitario ni playera deportiva para poner el nombre de jugador. Los colores deben ser serios y hacer juego con el resto de los textiles del ajuar. Los flecos caen de lado de montar en el caso de las sillas en las que se monta a horcajada y del lado de la garrocha en las albardas. Se sujetan con los tientos saraperos. Hay muchas maneras de portarlos a pie y a caballo. Cuando se llevan a pie y no se usa para abrigarse, se suele llevar doblado longitudinalmente y sobre el hombro izquierdo (para tener la mano derecha libre).',
      'La diferencia entre sarape y jorongo es que este último tiene en medio una abertura o bocamanga por donde se pasa la cabeza cuando se usa.'
    ],
    descLink: 'https://youtu.be/vOSI-bjWbak?si=S6vPNxpgkDMaN5r2'
  },
  // *****************************************
  // *****************************************
  // PRENDAS DE TRABAJO
  // *****************************************
  // *****************************************
  {
    variante: 'guantes normales',
    cat: 'prendas de trabajo',
    subcat: 'guantes',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'guantes-normal.avif',
    zindex: 16,
    text: [
      'Lo más tradicional es que lleven las puntas de los dedos recortadas. Cuando no se usan se pueden poner en las cantinas, en el cuartero o sujetas de un tarugo de las chaparreras.'
    ]
  },
  {
    variante: 'guantes de manilla',
    cat: 'prendas de trabajo',
    subcat: 'guantes',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'guantes-manilla.avif',
    zindex: 16,
    text: [
      'Son guantes sin dedos, que se usan para pialar. Cuando no se usan se pueden poner en las cantinas, en el cuartero o sujetas de un tarugo de las chaparreras.'
    ]
  },
  // *****************************************
  // CHAPARRERAS
  // *****************************************
  {
    variante: 'chaparreras de tientos',
    cat: 'prendas de trabajo',
    subcat: 'chaparreras',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'chaparreras-tientos.avif',
    back: 'chaparreras-tientos-back.avif',
    version: {
      'pistola con funda normal': 'chaparreras-tientos-pistola.avif',
      'pistola con funda recortada': 'chaparreras-tientos-pistola.avif',
      navaja: 'chaparreras-tientos-navaja.avif',
      cuchillo: 'chaparreras-tientos-cuchillo.avif'
    },
    zindex: 14,
    text: [
      'Las chaparreras más tradicionales son las que se atan con tiento y llevan la rozadera derecha más grande.',
      'Lo más deseable es que sean de gamuza y no carnaza. No uses chaparreras con cintito en frente (tipo chaparreras gringas) y con chapetones que no sirven de nada. Deben de estar bien cortadas para que no se suban, despegándose de la espuela. La manera más fina de ponerle adornos es directamente sobre las partes de cuero (rozaderas y aletones) y no en ribetes que luego se pegarán y coserán.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  {
    variante: 'chaparreras de tientos con rozaderas cortas',
    cat: 'prendas de trabajo',
    subcat: 'chaparreras',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'chaparreras-tientos-rozaderascortas.avif',
    back: 'chaparreras-tientos-back.avif',
    version: {
      'pistola con funda normal': 'chaparreras-tientos-rozaderascortas-pistola.avif',
      'pistola con funda recortada': 'chaparreras-tientos-rozaderascortas-pistola.avif',
      navaja: 'chaparreras-tientos-rozaderascortas-navaja.avif',
      cuchillo: 'chaparreras-tientos-rozaderascortas-cuchillo.avif'
    },
    zindex: 14,
    text: [
      'Las chaparreras más tradicionales son las que se atan con tiento y llevan la rozadera derecha más grande.',
      'Lo más deseable es que sean de gamuza y no carnaza. No uses chaparreras con cintito en frente (tipo chaparreras gringas) y con chapetones que no sirven de nada. Deben de estar bien cortadas para que no se suban, despegándose de la espuela. La manera más fina de ponerle adornos es directamente sobre las partes de cuero (rozaderas y aletones) y no en ribetes que luego se pegarán y coserán.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  {
    variante: 'chaparreras de cinturón atrás',
    cat: 'prendas de trabajo',
    subcat: 'chaparreras',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'chaparreras-cinturon.avif',
    back: 'chaparreras-cinturon-back.avif',
    version: {
      'pistola con funda normal': 'chaparreras-cinturon-pistola.avif',
      'pistola con funda recortada': 'chaparreras-cinturon-pistola.avif',
      navaja: 'chaparreras-cinturon-navaja.avif',
      cuchillo: 'chaparreras-cinturon-cuchillo.avif'
    },
    zindex: 14,
    text: [
      'Las chaparreras más tradicionales son las que se atan con tiento y llevan la rozadera derecha más grande.',
      'Lo más deseable es que sean de gamuza y no carnaza. No uses chaparreras con cintito en frente (tipo chaparreras gringas) y con chapetones que no sirven de nada. Deben de estar bien cortadas para que no se suban, despegándose de la espuela. La manera más fina de ponerle adornos es directamente sobre las partes de cuero (rozaderas y aletones) y no en ribetes que luego se pegarán y coserán.',
      'Si no están bien hechas a medida y la hebilla queda muy abajo puede lastimar en caso de caídas.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  {
    variante: 'chaparreras de cinturón atrás con rozaderas cortas',
    cat: 'prendas de trabajo',
    subcat: 'chaparreras',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'chaparreras-cinturon-rozaderascortas.avif',
    back: 'chaparreras-cinturon-back.avif',
    version: {
      'pistola con funda normal': 'chaparreras-cinturon-rozaderascortas-pistola.avif',
      'pistola con funda recortada': 'chaparreras-cinturon-rozaderascortas-pistola.avif',
      navaja: 'chaparreras-cinturon-rozaderascortas-navaja.avif',
      cuchillo: 'chaparreras-cinturon-rozaderascortas-cuchillo.avif'
    },
    zindex: 14,
    text: [
      'Las chaparreras más tradicionales son las que se atan con tiento y llevan la rozadera derecha más grande.',
      'Lo más deseable es que sean de gamuza y no carnaza. No uses chaparreras con cintito en frente (tipo chaparreras gringas) y con chapetones que no sirven de nada. Deben de estar bien cortadas para que no se suban, despegándose de la espuela. La manera más fina de ponerle adornos es directamente sobre las partes de cuero (rozaderas y aletones) y no en ribetes que luego se pegarán y coserán.',
      'Si no están bien hechas a medida y la hebilla queda muy abajo puede lastimar en caso de caídas.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  {
    variante: 'añadir pialeras',
    cat: 'prendas de trabajo',
    subcat: 'chaparreras',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'chaparreras-pialeras.avif',
    allowsame: true,
    zindex: 14,
    modify: ['espuelas jinetas', 'espuelas coleadoras'],
    text: [
      'Unas chaparreras bien cortadas y a medida no necesitarán pialeras. Cuando se usan sirven para asegurar que las chaparreras no se subirán ni se despegarán de la espuela y que el aletón quedará bien abajo y al montar estará pegado al estribo en su parte baja.'
    ]
  },
  // *****************************************
  // ESPUELAS
  // *****************************************
  {
    variante: 'espuelas jinetas',
    cat: 'prendas de trabajo',
    subcat: 'espuelas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'espuelas-jinetas.avif',
    version: {
      'añadir pialeras': 'espuelas-jinetas-pialeras.avif'
    },
    zindex: 3,
    text: [
      'Entre las Jinetas y las coleadoras, las jinetas son las más tradicionales. No hay que exagerar en el tamaño de la rodaja. Son ideales para la gente alta. Lo más bonito es que la caja sea del alto del tacón y lo cubra totalmente. Prefiere espuelas de rodaja grande que a las de casquillejos larguísimos y rodajas diminutas. Siempre van en el tacón.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13',
    descImg: [
      'espuelas1.webp',
      'espuelas2.webp'
    ]
  },
  {
    variante: 'espuelas coleadoras',
    cat: 'prendas de trabajo',
    subcat: 'espuelas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'espuelas-coleadoras.avif',
    version: {
      'añadir pialeras': 'espuelas-coleadoras-pialeras.avif'
    },
    zindex: 3,
    text: [
      'Se llaman así porque por la rodaja de menor tamaño (por lo tanto, los casquillejos serán más cortos) se facilita más el acto de arcionar al colear. Por todo lo demás son iguales que las jinetas'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  // *****************************************
  // PROTECCIONES PARA LAZAR
  // *****************************************
  {
    variante: 'culera',
    cat: 'prendas de trabajo',
    subcat: 'protecciones para lazar',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'proteccioneslazar-culera.avif',
    back: 'proteccioneslazar-culera-back.avif',
    version: {
      'pistola con funda normal': 'proteccioneslazar-culera-pistola.avif',
      'pistola con funda recortada': 'proteccioneslazar-culera-pistola2.avif',
      navaja: 'proteccioneslazar-culera-navaja.avif',
      cuchillo: 'proteccioneslazar-culera-cuchillo.avif'
    },
    zindex: 10,
    text: [
      'También se le llama cuadrilera, pero puse este otro nombre para diferenciarla de las cuadrileras que suelen ponerse en el asiento de l montura. Suelen ser de gamuza, con hebillas en frente. Sirven par proteger al charro y al pantalón cuando se chorrea a cuadril en las manganas a pie, y se ponen por debajo de las chaparreras.'
    ]
  },
  {
    variante: 'cuadrilera',
    cat: 'prendas de trabajo',
    subcat: 'protecciones para lazar',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'proteccioneslazar-cuadrilera.avif',
    version: {
      'pistola con funda normal': 'proteccioneslazar-cuadrilera-pistola.avif',
      'pistola con funda recortada': 'proteccioneslazar-cuadrilera-pistola.avif',
      navaja: 'proteccioneslazar-cuadrilera-navaja.avif',
      cuchillo: 'proteccioneslazar-cuadrilera-cuchillo.avif'
    },
    restrictsubcat: ['chaparreras'],
    restricted: ['chaparreras de tientos', 'chaparreras de tientos con rozaderas cortas', 'chaparreras de cinturón atrás', 'chaparreras de cinturón atrás con rozaderas cortas'],
    restrictedmessage: 'No se usa con chaparreras',
    zindex: 13,
    text: [
      'Pueden usarse para lazar a caballo (pierna derecha) o a pie (parte trasera de la pierna izquierda). Lo ideal es que lleve cuatro tientos para que fijarla en la cadera y pierna y que no se mueva. Cuando no se usa, se lleva en el asiento de la montura sujeta de las argollas del enreatado.'
    ]
  },
  // *****************************************
  // ARREOS DE TRABAJO
  // *****************************************
  {
    variante: 'vara',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'arreostrabajo-vara.avif',
    zindex: 15,
    allowsame: true,
    text: [
      'Hecha de membrillo. Sirve para arrendar y para suplir la pierna derecha cuando la mujer la usa al montar en albarda.'
    ]
  },
  {
    variante: 'reata',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'arreostrabajo-reata.avif',
    zindex: 15,
    allowsame: true,
    text: [
      'Hecha de lechuguila, pero existen de pábilo (algodón) y de cuero crudo (sogas), aunque para charrear solo las de lechuguilla funcionan bien por su temple para florear y porque se chorrea mejor con ellas.',
      'Si usas de plástico que solo sea para practicar, pero si te vistes de charro trata de evitarlas o busca que sean de colores serios o similares al ixtle.'
    ]
  },
  // *****************************************
  // ARMAS
  // *****************************************
  {
    variante: 'cuchillo',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'armas-cuchillo.avif',
    zindex: 9,
    modify: [
      'blusa de pretina cuello normal',
      'blusa de pretina cuello militar',
      'blusa de pretina cuello normal cerrado arriba',
      'blusa de nudo cuello militar',
      'blusa de nudo cuello normal',
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos',
      'chazarilla cuello normal',
      'chazarilla cuello militar',
      'chaleco normal',
      'chaleco normal sin botones',
      'chaleco normal con solapas',
      'chaleco normal con tarugos',
      'chaleco normal con alamares',
      'chaleco recto',
      'chaleco recto sin botones',
      'chaleco recto con tarugos',
      'tapatía',
      'chaparreras de tientos',
      'chaparreras de tientos con rozaderas cortas',
      'chaparreras de cinturón atrás',
      'chaparreras de cinturón atrás con rozaderas cortas',
      'culera',
      'cuadrilera'
    ],
    text: [
      'Si se porta en el cinturón, solo es adecuado en las categorías de faena y media gala. En las restantes y de manera general también se puede llevar en las cantinas de la montura o incluso en el aletón izquierdo de las chaparreras. La funda debe hacer juego con el resto del cueraje.'
    ]
  },
  {
    variante: 'navaja',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'jinete',
    runway: 'armas-navaja.avif',
    zindex: 9,
    modify: [
      'blusa de pretina cuello normal',
      'blusa de pretina cuello militar',
      'blusa de pretina cuello normal cerrado arriba',
      'blusa de nudo cuello militar',
      'blusa de nudo cuello normal',
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos',
      'chazarilla cuello normal',
      'chazarilla cuello militar',
      'chaleco normal',
      'chaleco normal sin botones',
      'chaleco normal con solapas',
      'chaleco normal con tarugos',
      'chaleco normal con alamares',
      'chaleco recto',
      'chaleco recto sin botones',
      'chaleco recto con tarugos',
      'tapatía',
      'chaparreras de tientos',
      'chaparreras de tientos con rozaderas cortas',
      'chaparreras de cinturón atrás',
      'chaparreras de cinturón atrás con rozaderas cortas',
      'culera',
      'cuadrilera'
    ],
    text: [
      'Si se porta en el cinturón, solo es adecuado en las categorías de faena y media gala. En las restantes y de manera general también se puede llevar en las cantinas de la montura. La funda debe hacer juego con el resto del cueraje.'
    ]
  },
  {
    variante: 'pistola con funda normal',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'armas-pistola-normal.avif',
    modify: [
      'blusa de pretina cuello normal',
      'blusa de pretina cuello militar',
      'blusa de pretina cuello normal cerrado arriba',
      'blusa de nudo cuello militar',
      'blusa de nudo cuello normal',
      'camisa de pretina',
      'camisa de pretina cuello pachuqueño (militar)',
      'camisa de nudo',
      'camisa de nudo cuello pachuqueño',
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos',
      'chazarilla cuello normal',
      'chazarilla cuello militar',
      'chaleco normal',
      'chaleco normal sin botones',
      'chaleco normal con solapas',
      'chaleco normal con tarugos',
      'chaleco normal con alamares',
      'chaleco recto',
      'chaleco recto sin botones',
      'chaleco recto con tarugos',
      'tapatía',
      'chaparreras de tientos',
      'chaparreras de tientos con rozaderas cortas',
      'chaparreras de cinturón atrás',
      'chaparreras de cinturón atrás con rozaderas cortas',
      'culera',
      'cuadrilera'
    ],
    zindex: 9,
    text: [
      'La funda norma es la más adecuada porque la recortada no protege la silla del posible golpeteo del cañón en la teja y el pantalón cuando se guarda el revolver en la funda después de haber disparado (estar caliente). Lo ideal es que vaya con cinturón con carrillera, salvo en la categoría gran gala y ceremonia.'
    ]
  },
  {
    variante: 'pistola con funda recortada',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'armas-pistola-recortada.avif',
    zindex: 9,
    modify: [
      'blusa de pretina cuello normal',
      'blusa de pretina cuello militar',
      'blusa de pretina cuello normal cerrado arriba',
      'blusa de nudo cuello militar',
      'blusa de nudo cuello normal',
      'camisa de pretina',
      'camisa de pretina cuello pachuqueño (militar)',
      'camisa de nudo',
      'camisa de nudo cuello pachuqueño',
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos',
      'chazarilla cuello normal',
      'chazarilla cuello militar',
      'chaleco normal',
      'chaleco normal sin botones',
      'chaleco normal con solapas',
      'chaleco normal con tarugos',
      'chaleco normal con alamares',
      'chaleco recto',
      'chaleco recto sin botones',
      'chaleco recto con tarugos',
      'tapatía',
      'chaparreras de tientos',
      'chaparreras de tientos con rozaderas cortas',
      'chaparreras de cinturón atrás',
      'chaparreras de cinturón atrás con rozaderas cortas',
      'culera',
      'cuadrilera'
    ],
    text: [
      'Menos tradicional que la completa. Se ve bien en revólveres de cañones o muy largos o muy cortos. Tienen los inconvenientes que pueden dañar a teja de la silla, y si se dispara y se enfunda la pistola el cañon sigue caliente.'
    ]
  },
  // *****************************************
  // PROTECCIONES PARA LAZAR
  // *****************************************

  // *****************************************
  // ACCESORIOS TEXTILES
  // *****************************************
  {
    variante: 'pañuelo',
    cat: 'accesorios',
    subcat: 'textiles',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'accesorios-panuelo.avif',
    require: [
      'chaqueta cuello redondo',
      'chaqueta cuello de picos',
      'chaquetilla cuello redondo',
      'chaquetilla cuello de picos'
    ],
    requiremessage: 'Solo con chaqueta o chaquetilla.',
    allowsame: true,
    zindex: 21,
    text: [
      'Se coloca en el bolsillo superior izquierdo de las chaquetas y chaquetillas. Debe de hacer juego con el traje, pero no ser idéntico que la corbata. Hay muchas formas de ponerlo.'
    ]
  },
  {
    variante: 'ceñidor',
    cat: 'accesorios',
    subcat: 'textiles',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'accesorios-cenidor.avif',
    back: 'cenidor-back.avif',
    allowsame: true,
    zindex: 6,
    text: [
      'Por lo general esta realizado igual que los rebozos, dan dos vueltas a la cintura. Las puntas deben quedar colgando del lado izquierdo. Por encima se pone el cinturón. Prefiere siempre los ceñidores de verdad y no los de utilería, sé auténtico.'
    ],
    descLink: 'https://youtu.be/8XcTfGNH39I?si=7_us1GDLjm3oCF13'
  },
  // *****************************************
  // HEBILLAS
  // *****************************************
  {
    variante: 'hebilla normal',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena'],
    portador: 'jinete',
    runway: 'hebillas-normal.avif',
    restricted: ['cinturón con peto', 'cinturón con peto y carrillera'],
    restrictedmessage: 'Para cinturones de 1 hebilla.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: 'hebilla cuadrada',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-cuadrada.avif',
    restricted: ['cinturón con peto', 'cinturón con peto y carrillera'],
    restrictedmessage: 'Para cinturones de 1 hebilla.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: 'hebilla de herradura horizontal',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-herradura-horizontal.avif',
    restricted: ['cinturón con peto', 'cinturón con peto y carrillera'],
    restrictedmessage: 'Para cinturones de 1 hebilla.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: 'hebilla rectangular',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala'],
    portador: 'jinete',
    runway: 'hebillas-rectangular.avif',
    restricted: ['cinturón con peto', 'cinturón con peto y carrillera'],
    restrictedmessage: 'Para cinturones de 1 hebilla.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: 'hebilla de herradura vertical',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-herradura-vertical.avif',
    restricted: ['cinturón con peto', 'cinturón con peto y carrillera'],
    restrictedmessage: 'Para cinturones de 1 hebilla.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: '2 hebillas cuadradas',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-2cuadrada.avif',
    restricted: ['cinturón', 'cinturón con carrillera'],
    restrictedmessage: 'Para cinturones con peto.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: '2 hebillas de herradura horizontal',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-2herradura-horizontal.avif',
    restricted: ['cinturón', 'cinturón con carrillera'],
    restrictedmessage: 'Para cinturones con peto.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },
  {
    variante: '2 hebillas de herradura vertical',
    cat: 'accesorios',
    subcat: 'hebillas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'hebillas-2herradura-vertical.avif',
    restricted: ['cinturón', 'cinturón con carrillera'],
    restrictedmessage: 'Para cinturones con peto.',
    zindex: 8,
    text: [
      'En la charrería existe una variedad inmensa de formas para las hebillas. Nada justifica usar hebillas de tipo texano, solo el malinchismo y la ignorancia.'
    ]
  },

  // *****************************************
  // RELOJ DE BOLSILLO
  // *****************************************
  {
    variante: 'sencillo',
    cat: 'accesorios',
    subcat: 'reloj de bolsillo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'reloj-sencillo.avif',
    zindex: 18,
    text: [
      'Por lo general se lleva en el bolsillo inferior izquierdo y la cadena sujeta de un botón u ojal. También pueden ir en los bolsillos superiores.'
    ]
  },
  {
    variante: 'sencillo con medalla',
    cat: 'accesorios',
    subcat: 'reloj de bolsillo',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'reloj-sencillo-medalla.avif',
    zindex: 18,
    text: [
      'Por lo general se lleva en el bolsillo inferior izquierdo y la cadena sujeta de un botón u ojal, de donde colgará la medalla. También pueden ir en los bolsillos superiores.'
    ]
  },
  {
    variante: 'doble',
    cat: 'accesorios',
    subcat: 'reloj de bolsillo',
    etiqueta: ['media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'reloj-doble.avif',
    zindex: 18,
    text: [
      'Por lo general se lleva en el bolsillo inferior izquierdo y la cadena pasa por la ojalera y va hasta el otro bolsillo, donde podrá haber otro reloj u otro objeto en el cabo opuesto de la cadena. También pueden ir en los bolsillos superiores.'
    ]
  },
  {
    variante: 'doble con medalla',
    cat: 'accesorios',
    subcat: 'reloj de bolsillo',
    etiqueta: ['gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'reloj-doble-medalla.avif',
    zindex: 18,
    text: [
      'Por lo general se lleva en el bolsillo inferior izquierdo y la cadena pasa por la ojalera, de donde colgará la medalla y el resto de la cadenilla va hasta el otro bolsillo, donde podrá haber otro reloj u otro objeto en el cabo opuesto de la cadena.'
    ]
  },
  // *****************************************
  // CINTURONES
  // *****************************************
  {
    variante: 'cinturón',
    cat: 'accesorios',
    subcat: 'cinturones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'jinete',
    runway: 'cinturon.avif',
    zindex: 6,
    back: 'cinturon-back.avif',
    restrictedmessage: 'Para uso con una sola hebilla.',
    dependencies: [
      'hebilla normal',
      'hebilla cuadrada',
      'hebilla de herradura horizontal',
      'hebilla rectangular',
      'hebilla de herradura vertical'
    ],
    text: [
      'Pueden ser lisos o adornados, haciendo juego con el cueraje de la silla y/o con los botines. Son anchos, de 2 pulgadas aprox.'
    ]
  },
  {
    variante: 'cinturón con carrillera',
    cat: 'accesorios',
    subcat: 'cinturones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'cinturon-carrillera.avif',
    zindex: 6,
    back: 'cinturon-carrillera-back.avif',
    restrictedmessage: 'Para uso con una sola hebilla.',
    dependencies: [
      'hebilla normal',
      'hebilla cuadrada',
      'hebilla de herradura horizontal',
      'hebilla rectangular',
      'hebilla de herradura vertical'
    ],
    text: [
      'Pueden ser lisos o adornados, haciendo juego con el cueraje de la silla y/o con los botines. Son anchos, de 2 pulgadas aprox.',
      'En estos casos siempre se portan con revolver en su funda.'
    ]
  },
  {
    variante: 'cinturón con peto',
    cat: 'accesorios',
    subcat: 'cinturones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'cinturon-peto.avif',
    zindex: 6,
    back: 'cinturon-back.avif',
    dependencies: [
      '2 hebillas cuadradas',
      '2 hebillas de herradura horizontal',
      '2 hebillas de herradura vertical'
    ],
    text: [
      'Pueden ser lisos o adornados, haciendo juego con el cueraje de la silla y/o con los botines. Son anchos, de 2 pulgadas aprox.',
      'En frente llevan un peto que puede variar en su forma, pero por lo general llevan una parte ancha central y los cabos más delgados que entrarán en las hebillas. Por lo general llevan carrillera, pero también puede ir sin ella.'
    ]
  },
  {
    variante: 'cinturón con peto y carrillera',
    cat: 'accesorios',
    subcat: 'cinturones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'jinete',
    runway: 'cinturon-peto_y_carrillera.avif',
    zindex: 6,
    back: 'cinturon-carrillera-back.avif',
    dependencies: [
      '2 hebillas cuadradas',
      '2 hebillas de herradura horizontal',
      '2 hebillas de herradura vertical'
    ],
    text: [
      'Pueden ser lisos o adornados, haciendo juego con el cueraje de la silla y/o con los botines. Son anchos, de 2 pulgadas aprox.',
      'En frente llevan un peto que puede variar en su forma, pero por lo general llevan una parte ancha central y los cabos más delgados que entrarán en las hebillas.',
      'En estos casos siempre se portan con revolver en su funda.'
    ]
  },
  // *****************************************
  // *****************************************
  // *****************************************
  // CABALLO
  // *****************************************
  // *****************************************
  // *****************************************
  // *****************************************
  // SUDADEROS
  // *****************************************
  {
    variante: 'para bastos cuadrados',
    cat: 'sudaderos',
    subcat: 'sin sobresalir',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sinsobresalir-bastos.avif',
    replacecat: ['sobresaliendo'],
    restricted: [
      'basto esqueleto',
      'basto cola de pato',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para bastos cuadrados.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],

  },
  {
    variante: 'para basto cola de pato',
    cat: 'sudaderos',
    subcat: 'sin sobresalir',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sinsobresalir-coladepato.avif',
    replacecat: ['sobresaliendo'],
    restricted: [
      'basto esqueleto',
      'basto cuadrado',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para bastos cola de pato.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],
  },
  {
    variante: 'para basto de esqueleto',
    cat: 'sudaderos',
    subcat: 'sin sobresalir',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sinsobresalir-esqueleto.avif',
    replacecat: ['sobresaliendo'],
    restricted: [
      'basto cuadrado',
      'basto cola de pato',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para basto esqueleto.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],
  },
  {
    variante: 'para bastos cuadrados',
    cat: 'sudaderos',
    subcat: 'sobresaliendo',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sobresaliendo-bastos.avif',
    replacecat: ['sin sobresalir'],
    restricted: [
      'basto esqueleto',
      'basto cola de pato',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para bastos cuadrados.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],
  },
  {
    variante: 'para basto cola de pato',
    cat: 'sudaderos',
    subcat: 'sobresaliendo',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sobresaliendo-coladepato.avif',
    replacecat: ['sin sobresalir'],
    restricted: [
      'basto esqueleto',
      'basto cuadrado',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para basto cola de pato.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],
  },
  {
    variante: 'para basto esqueleto',
    cat: 'sudaderos',
    subcat: 'sobresaliendo',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'sudaderos-sobresaliendo-esqueleto.avif',
    replacecat: ['sin sobresalir'],
    restricted: [
      'basto cuadrado',
      'basto cola de pato',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para basto esqueleto.',
    zindex: 2,
    text: [
      'Las caronas o sudaderos deben tener una forma similar a los bastos de la montura, pudiendo ser exactamente de la misma forma y dimensiones, o sobresalir un poco de manera paralela y uniforme.',
      'Pueden ser de diferentes materiales, aunque no se recomienda el neopreno por dos razones:<br> 1. cuando se usa directo pueden resbalarse por el sudor de caballo y <br>2. con el peso de la montura y jinete el aire del neopreno se escapa y el material se comprime perdiendo su capacidad de amortiguar.',
      'Los colores deben hacer juego con el resto de los textiles. Pueden llevar una rozadera para proteger del roce del látigo y contralátigo y de las arciones. No llevan flecos. No deben tener estilo gringo.'
    ],
  },

  {
    variante: 'mantilla cuadrada',
    cat: 'sudaderos',
    subcat: 'sobresaliendo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'sudaderos-sobresaliendo-mantilla_cuadrada.avif',
    replacecat: ['sin sobresalir'],
    restricted: [
      'basto cuadrado',
      'basto esqueleto',
      'basto cola de pato',
      'basto para cantinas redondas',
      'basto para cantinas redondas, de ojal'
    ],
    restrictedmessage: 'Solo para bastos para cantinas cuadradas.',
    zindex: 2,
    text: [
      'Las mantillas se diferencian de los demás tipos de sudaderos en que llevan flecos SOLO en la parte trasera. No deben llevar flecos en la parte baja. Idealmente deben sobresalir en la parte frontal e inferior para mostrar la greca que suelen llevar, aproximadamente 3 cm o un poco más si el adorno lo requiere, pero no exageradamente a imitación de las sillas gringas.',
      'El material de las mantillas puede ser similar al del resto de los sudaderos, deben de hacer juego con el resto de los textiles. No deben llevar nombres ni publicidad visibles.',
      'Se llaman así porque son una manta pequeña que se solía doblar y poner para proteger la silla y al caballo, de ahí que solo tengan flecos en la parte trasera.',
    ]
  },
  {
    variante: 'mantilla redonda',
    cat: 'sudaderos',
    subcat: 'sobresaliendo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'sudaderos-sobresaliendo-mantilla_redonda.avif',
    replacecat: ['sin sobresalir'],
    restricted: [
      'basto cuadrado',
      'basto esqueleto',
      'basto cola de pato',
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal'
    ],
    restrictedmessage: 'Solo para bastos para cantinas redondas.',
    zindex: 2,
    text: [
      'Las mantillas se diferencian de los demás tipos de sudaderos en que llevan flecos SOLO en la parte trasera. No deben llevar flecos en la parte baja. Idealmente deben sobresalir en la parte frontal e inferior para mostrar la greca que suelen llevar, aproximadamente 3 cm o un poco más si el adorno lo requiere, pero no exageradamente a imitación de las sillas gringas.',
      'El material de las mantillas puede ser similar al del resto de los sudaderos, deben de hacer juego con el resto de los textiles. No deben llevar nombres ni publicidad visibles.',
      'Se llaman así porque son una manta pequeña que se solía doblar y poner para proteger la silla y al caballo, de ahí que solo tengan flecos en la parte trasera.',
      'Se diferencia de la mantilla cuadrada solo en que lleva las esquinas redondeadas para adaptarse a la forma de los bastos de las sillas de cantinas redondas.'
    ]
  },
  // *****************************************
  // FUSTES
  // *****************************************
  {
    variante: 'sin hombros',
    nombrecompleto: 'fuste sin hombros',
    cat: 'fustes',
    subcat: 'tipo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'fustes-tipo-sinhombros.avif',
    zindex: 4,
    text: [
      'Los fustes son, por decirlo de una manera, el esqueleto de una montura es el elemento principal al que todas las demás piezas se ajustarán para formar la silla de montar. Son de maderas y suelen estar cubiertos de manta y retobo, aunque también hay los que solo están barnizados, llamados “maqueados”. Suelen llevar troneras (aberturas) en la teja para diferentes usos, como sujetarse si el caballo repara, para amarrar cosas, para que alguien en ancas se sujete, etc. Algunos fustes no las llevan, como algunos fustes de gran gala que llevan la orilla de la teja plateada y muy fina.',
      'En las tablas o barras del fuste llevan una muesca para sujetar la arción, llamada arcionera. Antiguamente algunos fustes lo llevaban a modo de orificio longitudinal en la misma tabla o barra.',
      'Es el tipo de horqueta más tradicional. En estos casos se suelen usar los enreatados rectos, sin cruzar. En estos fustes la turma solo cubre la cabeza o la horqueta entera.'
    ],
    descImg: [
      'fustes.avif'
    ]
  },
  {
    variante: 'con hombros',
    nombrecompleto: 'fuste con hombros',
    cat: 'fustes',
    subcat: 'tipo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'fustes-tipo-conhombros.avif',
    zindex: 4,
    restricted: ['separado', 'de chorizo'],
    restrictedmessage: 'No compatible con enreatados de chorizo o separados',
    text: [
      'Los fustes son, por decirlo de una manera, el esqueleto de una montura es el elemento principal al que todas las demás piezas se ajustarán para formar la silla de montar. Son de maderas y suelen estar cubiertos de manta y retobo, aunque también hay los que solo están barnizados, llamados “maqueados”. Suelen llevar troneras (aberturas) en la teja para diferentes usos, como sujetarse si el caballo repara, para amarrar cosas, para que alguien en ancas se sujete, etc. Algunos fustes no las llevan, como algunos fustes de gran gala que llevan la orilla de la teja plateada y muy fina.',
      'En las tablas o barras del fuste llevan una muesca para sujetar la arción, llamada arcionera. Antiguamente algunos fustes lo llevaban a modo de orificio longitudinal en la misma tabla o barra.',
      'Un poco más fuertes en estructura que los fustes sin hombros. Pueden llevar surcos para los torzales y por lo tanto la turma puede cubrir solo la cabeza, llegar solo hasta la mitad de los hombros, o cubrir toda la horqueta.'
    ],
    descImg: [
      'fustes.avif'
    ]
  },
  {
    variante: 'plateado',
    nombrecompleto: 'fuste plateado',
    cat: 'fustes',
    subcat: 'tipo',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'fustes-tipo-plateado.avif',
    zindex: 4,
    text: [
      'Los fustes son, por decirlo de una manera, el esqueleto de una montura es el elemento principal al que todas las demás piezas se ajustarán para formar la silla de montar. Son de maderas y suelen estar cubiertos de manta y retobo, aunque también hay los que solo están barnizados, llamados “maqueados”. Suelen llevar troneras (aberturas) en la teja para diferentes usos, como sujetarse si el caballo repara, para amarrar cosas, para que alguien en ancas se sujete, etc. Algunos fustes no las llevan, como algunos fustes de gran gala que llevan la orilla de la teja plateada y muy fina.',
      'En las tablas o barras del fuste llevan una muesca para sujetar la arción, llamada arcionera. Antiguamente algunos fustes lo llevaban a modo de orificio longitudinal en la misma tabla o barra.',
      'Los fustes plateados son aquellos que llevan partes adornadas con plata repujada u otros materiales. Los adornos suelen ir en: el filo de la cabeza, en la parte frontal de la horqueta, en los hombros y en el filo de la teja, aunque puede haber variaciones. Los motivos, diseños y formas pueden variar y harán juego con el resto del herraje de la montura. No llevan turma y son para sillas de Gran Gala, aun así, se ve muy charro que el fuste lleve la corbata marcada del paso de la reata al chorrear. Los fustes con la horqueta y cabeza totalmente forrada de acero inoxidable no son charros ni de buen gusto porque aparte de toscos y feos no permiten chorrear la reata a cabeza de silla.'
    ],
    descImg: [
      'fustes.avif'
    ]
  },
  {
    variante: 'buchón',
    nombrecompleto: 'cabeza tipo buchón',
    cat: 'fustes',
    subcat: 'cabezas',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'fustes-cabezas-buchon.avif',
    zindex: 6,
    modify: ['cabeza'],
    text: [
      'Se llaman así por la similitud con los palomos que tienen el buche hinchado. La forma de la cabeza puede variar según el estilo, incluso hasta semejar una media naranja. Aunque pueden usarse hasta en sillas de Gala, siempre se ven mejores en sillas de faena, pues su aspecto es más tosco.'
    ]
  },
  {
    variante: 'Zaldívar',
    nombrecompleto: 'cabeza tipo Zaldívar',
    cat: 'fustes',
    subcat: 'cabezas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'fustes-cabezas-zaldivar.avif',
    zindex: 6,
    modify: ['cabeza'],
    text: [
      'Se llaman así por el apellido de su inventor, aunque ya desde antes existían fustes con la cabeza con forma similar, tipo “plato”. Son la forma más tradicional y frecuente. No debe de elevarse demasiado ni modificarse para semejarse a las sillas gringas.'
    ]
  },
  {
    variante: 'Colima',
    nombrecompleto: 'cabeza tipo Colima',
    cat: 'fustes',
    subcat: 'cabezas',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'fustes-cabezas-colima.avif',
    zindex: 6,
    modify: ['cabeza'],
    text: [
      'Se llaman así a los fustes que tienen la cabeza totalmente esférica. La forma y tamaño de la esfera o bola puede variar. No hay que exagerar en cabezas demasiado grandes o demasiado chicas. Este tipo de cabezas solo queda bien en sillas de faena.'
    ]
  },
  {
    variante: 'cabeza',
    nombrecompleto: 'turma de cabeza',
    cat: 'fustes',
    subcat: 'turma',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: '',
    zindex: 7,
    version: {
      Colima: 'turma-cabeza-colima.avif',
      Zaldívar: 'turma-cabeza-zaldivar.avif',
      buchón: 'turma-cabeza-buchon.avif'
    },
    text: [
      'Se llama turma a la protección que se puede añadir a la cabeza y horqueta del fuste para protegerlo del roce de la reata y riendas, y prolongarle la “vida” al fuste. La turma puede cubrir solo la cabeza, la cabeza y medios hombros, o la cabeza y la horqueta entera. Está hecha con el escroto de los testículos del toro, por lo que su color puede variar. Es un detalle muy charro, pero no es correcto usarlo en sillas de Gran Gala porque no van bien con los fustes plateados.'
    ]
  },
  {
    variante: 'medio hombros',
    nombrecompleto: 'turma de medios hombros',
    cat: 'fustes',
    subcat: 'turma',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'turma-medio_hombros.avif',
    version: {
      Colima: 'turma-medio-colima.avif',
      Zaldívar: 'turma-medio-zaldivar.avif',
      buchón: 'turma-medio-buchon.avif'
    },
    restricted: ['sin hombros'],
    restrictedmessage: 'Solo en fuste con hombros',
    zindex: 7,
    text: [
      'Se llama turma a la protección que se puede añadir a la cabeza y horqueta del fuste para protegerlo del roce de la reata y riendas, y prolongarle la “vida” al fuste. La turma puede cubrir solo la cabeza, la cabeza y medios hombros, o la cabeza y la horqueta entera. Está hecha con el escroto de los testículos del toro, por lo que su color puede variar. Es un detalle muy charro, pero no es correcto usarlo en sillas de Gran Gala porque no van bien con los fustes plateados.',
      'La turma suele estar delimitada por los torzales que se ajustarán en los surcos.'
    ]
  },
  {
    variante: 'horqueta completa',
    nombrecompleto: 'turma de horqueta completa',
    cat: 'fustes',
    subcat: 'turma',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'turma-horqueta_completa.avif',
    version: {
      Colima: 'turma-completa-colima.avif',
      Zaldívar: 'turma-completa-zaldivar.avif',
      buchón: 'turma-completa-buchon.avif'
    },
    zindex: 7,
    modify: ['cabeza'],
    text: [
      'Se llama turma a la protección que se puede añadir a la cabeza y horqueta del fuste para protegerlo del roce de la reata y riendas, y prolongarle la “vida” al fuste. La turma puede cubrir solo la cabeza, la cabeza y medios hombros, o la cabeza y la horqueta entera. Está hecha con el escroto de los testículos del toro, por lo que su color puede variar. Es un detalle muy charro, pero no es correcto usarlo en sillas de Gran Gala porque no van bien con los fustes plateados.',
      'La orilla de la turma no debe quedar expuesta, sino oculta tras los enreatados.'
    ]
  },
  {
    variante: 'torzales de hombros',
    cat: 'fustes',
    subcat: 'torzales',
    etiqueta: ['media gala', 'gala'],
    portador: 'caballo',
    runway: 'torzales-hombros.avif',
    allowsame: true,
    require: ['surcos de hombros'],
    requiremessage: 'Requiere un surco.',
    zindex: 8,
    text: [
      'Son adornos metálicos que van en los surcos del fuste, ya sea en los hombros o en la teja. Pueden tener forma de cordón, trenza, etc. También pueden proteger el fuste en caso de roce la reata.'
    ],
    descImg: [
      'turma-torzales.jpg'
    ]
  },
  {
    variante: 'torzales de teja',
    cat: 'fustes',
    subcat: 'torzales',
    etiqueta: ['media gala', 'gala'],
    portador: 'caballo',
    runway: 'torzales-teja.avif',
    allowsame: true,
    require: ['surcos de teja'],
    requiremessage: 'Requiere un surco.',
    zindex: 8,
    text: [
      'Son adornos metálicos que van en los surcos del fuste, ya sea en los hombros o en la teja. Pueden tener forma de cordón, trenza, etc. También pueden proteger el fuste en caso de roce la reata.'
    ],
    descImg: [
      'turma-torzales.jpg'
    ]
  },
  {
    variante: 'surcos de hombros',
    cat: 'fustes',
    subcat: 'surcos',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'surcos-hombros.avif',
    allowsame: true,
    dependencies: ['torzales de hombro'],
    zindex: 5,
    text: [
      'Son hendiduras longitudinales que van en los hombros y/o teja y sirven de adorno y para ajustar los torzales cuando la silla los lleva.'
    ]
  },
  {
    variante: 'surcos de teja',
    cat: 'fustes',
    subcat: 'surcos',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'surcos-teja.avif',
    allowsame: true,
    dependencies: ['torzales de teja'],
    zindex: 5,
    text: [
      'Son hendiduras longitudinales que van en los hombros y/o teja y sirven de adorno y para ajustar los torzales cuando la silla los lleva.'
    ]
  },
  // *****************************************
  // CUERAJE
  // *****************************************
  // *****************************************
  // BASTOS
  // *****************************************
  {
    variante: 'basto cuadrado',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'basto-cuadrado.avif',
    restricted: [
      'para basto cola de pato',
      'para basto esqueleto',
      'mantilla cuadrada',
      'mantilla redonda'
    ],
    restrictedmessage: 'Solo con sudadero para basto cuadrado.',
    dependencies: ['murciélago de bastos'],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Las esquinas en los bastos cuadrados pueden ser rectos o redondeados de distintas dimensiones. La línea horizontal debe ser paralela al suelo y las verticales más o menos perpendiculares al suelo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['bastos-cuadrados.avif']
  },
  {
    variante: 'basto esqueleto',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'basto-esqueleto.avif',
    restricted: [
      'para basto cola de pato',
      'para bastos cuadrados',
      'mantilla cuadrada',
      'mantilla redonda'
    ],
    restrictedmessage: 'Solo con sudadero para basto esqueleto.',
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Existe la polémica de este nombre, si solo se refiere a los bastos que apenas sobresalen del fuste en la parte posterior o si aplica para todos los bastos que no llevan cantinas. Otro nombre es “bastos recortados”. Por llevar menos cueraje, son las sillas más ligeras.',
      'En estas monturas lo ideal es llevar arciones con sudaderas.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['bastos-esqueleto.avif']
  },
  {
    variante: 'basto cola de pato',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'basto-coladepato.avif',
    restricted: [
      'para basto esqueleto',
      'para bastos cuadrados',
      'mantilla cuadrada',
      'mantilla redonda'
    ],
    restrictedmessage: 'Solo con sudadero para basto cola de pato.',
    dependencies: ['murciélago cola de pato'],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Se llaman así porque en la parte trasera asemejan a cola de un pato.',
      'En estas monturas lo ideal es llevar arciones con sudaderas.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['bastos-coladepato.avif']
  },
  {
    variante: 'basto para cantinas cuadradas',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'basto-cantina-cuadrada.avif',
    restricted: [
      'para bastos cuadrados',
      'para basto cola de pato',
      'para basto esqueleto',
      'mantilla redonda',
      'sudaderas sencillas',
      'sudaderas dobles'
    ],
    restrictedmessage:
      'Solo con sudadero para bastos para cantinas cuadradas. Si lleva arciones deben ser rectas.',
    modify: ['cantinas de cartera', 'cantinas cuadradas', 'cantinas de vaquerillos'],
    dependencies: [
      'cantinas de cartera',
      'cantinas cuadradas',
      'cantinas de vaquerillos',
      'cantinas redondas'
    ],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Las dimensiones de los bastos pueden variar según el tamaño que llevarán las cantinas (que suelen ser un poco más largas que los bastos), siendo las más largas las más antiguas y tradicionales.',
      'Las esquinas pueden ser rectas o algo redondeadas.',
      'La línea horizontal debe ser paralela al suelo y las verticales más o menos perpendiculares al suelo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['bastos-cantinascuadradas.avif']
  },
  {
    variante: 'basto para cantinas cuadradas, de ojal',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'basto-cantina-cuadrada.avif',
    extraimg: {
      archivo: 'basto-cantina-ojal.avif',
      zindex: 22
    },
    restricted: [
      'para bastos cuadrados',
      'para basto cola de pato',
      'para basto esqueleto',
      'mantilla redonda',
      'sudaderas sencillas',
      'sudaderas dobles'
    ],
    restrictedmessage:
      'Solo con sudadero para bastos para cantinas cuadradas. Si lleva arciones deben ser rectas.',
    modify: ['cantinas de cartera', 'cantinas cuadradas', 'cantinas de vaquerillos'],
    dependencies: [
      'cantinas de cartera',
      'cantinas cuadradas',
      'cantinas de vaquerillos',
      'cantinas redondas'
    ],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Estos bastos solo son correctos y tienen sentido en sillas de bastos largos y con cantinas, ya sean cuadradas, redondas o de cartera. Sirven para ocultar el látigo y mostrar más superficie adornada de los bastos, por lo que solo tienen sentido en sillas de Gala y Gran Gala. Son poco prácticas porque el cinchado se dificulta ya que se tiene que efectuar por debajo del basto. El adorno alrededor de ojal puede variar de forma y adornos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['bastos-cantinasdcuadradas-ojal.avif']
  },
  {
    variante: 'basto para cantinas redondas',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'basto-cantina-redonda.avif',
    restricted: [
      'para bastos cuadrados',
      'para basto cola de pato',
      'para basto esqueleto',
      'mantilla cuadrada',
      'sudaderas sencillas',
      'sudaderas dobles'
    ],
    restrictedmessage:
      'Solo con sudadero para bastos para cantinas redondas. Si lleva arciones deben ser rectas.',
    modify: ['cantinas redondas'],
    dependencies: [
      'cantinas cuadradas',
      'cantinas de cartera',
      'cantinas de vaquerillos',
      'cantinas redondas'
    ],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Las dimensiones de los bastos pueden variar según el tamaño que llevarán las cantinas, siendo las más largas las más antiguas y tradicionales.',
      'Las esquinas son redondeadas en distintas dimensiones según el estilo de la montura.',
      'La línea horizontal debe ser paralela al suelo y las verticales más o menos perpendiculares al suelo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['bastos-cantinasredondas.avif']
  },
  {
    variante: 'basto para cantinas redondas, de ojal',
    cat: 'cueraje',
    subcat: 'bastos',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'basto-cantina-redonda.avif',
    extraimg: {
      archivo: 'basto-cantina-ojal.avif',
      zindex: 22
    },
    restricted: [
      'para bastos cuadrados',
      'para basto cola de pato',
      'para basto esqueleto',
      'mantilla cuadrada',
      'sudaderas sencillas',
      'sudaderas dobles'
    ],
    restrictedmessage:
      'Solo con sudadero para bastos para cantinas redondas. Si lleva arciones deben ser rectas.',
    modify: ['cantinas redondas'],
    dependencies: [
      'cantinas cuadradas',
      'cantinas de cartera',
      'cantinas de vaquerillos',
      'cantinas redondas'
    ],
    zindex: 3,
    text: [
      'Los bastos son dos piezas de cuero que sirven de base para la silla de montar. Suelen estar unidas en la parte posterior por medio de una costura más o menos artística. Puede tener diferentes formas y dimensiones, según el tipo de silla y estilo.',
      'Los adornos pueden variar de material, motivos, formas, estilos, colores, según la categoría y deben hacer juego entre sí.',
      'Las dimensiones de los bastos pueden variar según el tamaño que llevarán las cantinas, siendo las más largas las más antiguas y tradicionales.',
      'Las esquinas son redondeadas en distintas dimensiones según el estilo de la montura.',
      'La línea horizontal debe ser paralela al suelo y las verticales más o menos perpendiculares al suelo.',
      'Estos bastos solo son correctos y tienen sentido en sillas de bastos largos y con cantinas, ya sean cuadradas, redondas o de cartera. Sirven para ocultar el látigo y mostrar más superficie adornada de los bastos, por lo que solo tienen sentido en sillas de Gala y Gran Gala. Son poco prácticas porque el cinchado se dificulta ya que se tiene que efectuar por debajo del basto. El adorno alrededor de ojal puede variar de forma y adornos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['bastos-cantinasredondas-ojal.avif']

  },
  // *****************************************
  // CANTINAS
  // *****************************************
  {
    variante: 'cantinas redondas',
    cat: 'cueraje',
    subcat: 'cantinas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cantinas-redondas.avif',
    version: {
      'basto para cantinas redondas': 'cantinas-redondas.avif',
      'basto para cantinas redondas, de ojal': 'cantinas-redondas.avif'
    },
    require: ['basto para cantinas redondas', 'basto para cantinas redondas, de ojal'],
    requiremessage: 'Requiere un basto para cantinas redondas.',
    modify: ['reata'],
    zindex: 18,
    text: [
      'Las cantinas son dos alforjas o bolsas de cuero unidas entre sí, que se sujetan con los tientos y chapetones a la parte trasera de la montura y sirven para guardar y transportar objetos en su interior. Suelen ponerse encima de las contrareatas, pero han existido monturas que por su diseño las contrareatas quedan por encima de las cantinas. Pueden variar en las dimensiones, en las formas, en los ángulos de sus esquinas, así como la forma de las tapas y la manera en que se cierran.',
      'Estas cantinas tienen la parte baja redonda y las tapas cubren totalmente las cantinas, por lo que el chapetón que las cierra queda en la parte inferior.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',

    ]
  },
  {
    variante: 'cantinas de cartera',
    cat: 'cueraje',
    subcat: 'cantinas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cantinas-cartera.avif',
    version: {
      'basto para cantinas cuadradas': 'cantinas-cartera.avif',
      'basto para cantinas cuadradas, de ojal': 'cantinas-cartera.avif'
    },
    modify: ['reata'],
    require: ['basto para cantinas cuadradas', 'basto para cantinas cuadradas, de ojal'],
    requiremessage: 'Requiere un basto para cantinas cuadradas.',
    zindex: 18,
    text: [
      'Las cantinas son dos alforjas o bolsas de cuero unidas entre sí, que se sujetan con los tientos y chapetones a la parte trasera de la montura y sirven para guardar y transportar objetos en su interior. Suelen ponerse encima de las contrareatas, pero han existido monturas que por su diseño las contrareatas quedan por encima de las cantinas. Pueden variar en las dimensiones, en las formas, en los ángulos de sus esquinas, así como la forma de las tapas y la manera en que se cierran.',
      'Este tipo de cantinas está casi en desuso. Las cantinas están fijas a los bastos y la tapa sale inmediatamente arriba de la cantina. Suelen cerrarse con una correa y/o con hebilla.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['cantinas-cartera.avif']
  },
  {
    variante: 'cantinas cuadradas',
    cat: 'cueraje',
    subcat: 'cantinas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cantinas-cuadradas.avif',
    version: {
      'basto para cantinas cuadradas': 'cantinas-cuadradas.avif',
      'basto para cantinas cuadradas, de ojal': 'cantinas-cuadradas.avif'
    },
    modify: ['reata'],
    require: ['basto para cantinas cuadradas', 'basto para cantinas cuadradas, de ojal'],
    requiremessage: 'Requiere un basto para cantinas cuadradas.',
    zindex: 18,
    text: [
      'Las cantinas son dos alforjas o bolsas de cuero unidas entre sí, que se sujetan con los tientos y chapetones a la parte trasera de la montura y sirven para guardar y transportar objetos en su interior. Suelen ponerse encima de las contrareatas, pero han existido monturas que por su diseño las contrareatas quedan por encima de las cantinas. Pueden variar en las dimensiones, en las formas, en los ángulos de sus esquinas, así como la forma de las tapas y la manera en que se cierran.',
      'Las tapas de las cantinas cuadradas no suelen cubrir completamente las cantinas. El tiento puede ser fijo como el resto de los tientos de la silla o ser más largos y tener margen para anudarlas con un nudo de mariposa, en estos casos llevan las puntas unidas para que el chapetón y el tiento no se salgan.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['cantinas-cuadradas.avif']
  },
  {
    variante: 'cantinas de vaquerillos',
    cat: 'cueraje',
    subcat: 'cantinas',
    etiqueta: ['gran gala'],
    portador: 'caballo',
    runway: 'cantinas-vaquerillos.avif',
    version: {
      'basto para cantinas cuadradas': 'cantinas-vaquerillos.avif',
      'basto para cantinas cuadradas, de ojal': 'cantinas-vaquerillos.avif'
    },
    modify: ['reata'],
    require: ['basto para cantinas cuadradas', 'basto para cantinas cuadradas, de ojal'],
    requiremessage: 'Requiere un basto para cantinas cuadradas.',
    zindex: 38,
    text: [
      'Las cantinas son dos alforjas o bolsas de cuero unidas entre sí, que se sujetan con los tientos y chapetones a la parte trasera de la montura y sirven para guardar y transportar objetos en su interior. Suelen ponerse encima de las contrareatas, pero han existido monturas que por su diseño las contrareatas quedan por encima de las cantinas. Pueden variar en las dimensiones, en las formas, en los ángulos de sus esquinas, así como la forma de las tapas y la manera en que se cierran.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
      'Los vaquerillos son tapas muy largas y con pelo para las cantinas cuadradas. Servían o sirven para proteger el contenido de las cantinas de la lluvia, aunque por su belleza y valor ahora solo se usan en las sillas de Gran Gala, pero técnicamente y por su uso, podrían usarse en otras categorías, pero SIEMPRE con sillas de bastos largos y cantinas, NUNCA con sillas deesqueleto o bastos cortos. El chapetón central sirve para cerrar la tapa a la cantina, como si fuera una cantina normal.',
      'En la parte trasera suelen llevar un ribete de cuero, (generalmente adornado como el resto del cueraje) y del mismo largo que los bastos, en la parte alta llevan el cuero trabajado y adornado como el resto de la montura.',
      'Algunas llevan en la parte inferior otra bolsa extra.',
      'Históricamente han existido de diferentes animales: como chivo, coyote, oso, puma, etc.',
    ],
    descImg: ['cantinas-vaquerillos.avif']
  },
  // *****************************************
  // ENREATADOS
  // *****************************************
  {
    variante: 'cruzado normal',
    nombrecompleto: 'enreatado cruzado normal',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-cruzadonormal.avif',
    zindex: 13,
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Esta manera de cruzar los enreatados es la más usada. OJO, la vuelta que queda cerca del jinete va por encima de la otra, NO al revés.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-cruzados.avif']
  },
  {
    variante: 'de chorizo',
    nombrecompleto: 'enreatado de chorizo',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-chorizo.avif',
    restricted: ['con hombros'],
    restrictedmessage: 'No compatible con fuste con hombros',
    zindex: 13,
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Estos enreatados son de estilo antiguo, para sillas sin hombros. Se llaman así porque llevan volumen hecho por rellenos y con un cordón que les da vuelta y forma. Suelen ir acompañados por contraenreatados del mismo estilo. Si se usan, que sea en sillas que por su estilo vayan de acuerdo con la época (circa, segunda mitad del S.XIX).',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-chorizo.avif']
  },
  {
    variante: 'corbata sin hebilla',
    nombrecompleto: 'enreatado de corbata sin hebilla',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-corbata1.avif',
    restricted: ['chapas en argolla'],
    restrictedmessage: 'No se pueden poner con enreatados de corbata.',
    zindex: 13,
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Estos enreatados van sujetos en un solo punto y dan vuelta a la argolla formando un nudo similar al de una corbata, de ahí su nombre. Pueden ir sujetos con una hebilla, que quedará en la parte frontal del fuste o encima de la argolla. Si el nudo está hecho de forma diferente al descrito y provocaque la argolla se aleje demasiado del fuste (hacia abajo), está mal hecho el nudo y no son charros ni correctos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-corbata-sinhebilla.avif']
  },
  {
    variante: 'corbata 1',
    nombrecompleto: 'enreatado de corbata 2',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-corbata1.avif',
    zindex: 13,
    restricted: ['chapas en argolla'],
    restrictedmessage: 'No se pueden poner con enreatados de corbata.',
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Estos enreatados van sujetos en un solo punto y dan vuelta a la argolla formando un nudo similar al de una corbata, de ahí su nombre. Pueden ir sujetos con una hebilla, que quedará en la parte frontal del fuste o encima de la argolla. Si el nudo está hecho de forma diferente al descrito y provocaque la argolla se aleje demasiado del fuste (hacia abajo), está mal hecho el nudo y no son charros ni correctos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-corbata1.avif']
  },
  {
    variante: 'corbata 2',
    nombrecompleto: 'enreatado de corbata 1',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-corbata2.avif',
    restricted: ['chapas en argolla'],
    restrictedmessage: 'No se pueden poner con enreatados de corbata.',
    zindex: 13,
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Estos enreatados van sujetos en un solo punto y dan vuelta a la argolla formando un nudo similar al de una corbata, de ahí su nombre. Pueden ir sujetos con una hebilla, que quedará en la parte frontal del fuste o encima de la argolla. Si el nudo está hecho de forma diferente al descrito y provocaque la argolla se aleje demasiado del fuste (hacia abajo), está mal hecho el nudo y no son charros ni correctos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-corbata2.avif']
  },
  {
    variante: 'separado',
    nombrecompleto: 'enreatado separado',
    cat: 'cueraje',
    subcat: 'enreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'enreatados-separado.avif',
    restricted: ['con hombros'],
    restrictedmessage: 'No compatible con fuste con hombros',
    zindex: 13,
    text: [
      'Los enreatados son dos piezas de cuero que dando la vuelta a la horqueta del fuste se sujetan con dos chapetones a sendas argollas de cada lado de la montura. De esta argolla también se sujetarán los contraenreatados, y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje o ser de pial doblado longitudinalmente.',
      'Estos enreatados son la manera más antigua entre los presentados, se usan principalmente en fustes sin hombros, y en sillas que tienen argollas de formas diferentes con agarres separados en vez de una argolla circular.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['enreatados-separados.avif', 'argollas.jpg']
  },
  // *****************************************
  // CONTRAENREATADOS
  // *****************************************
  {
    variante: 'rectos',
    nombrecompleto: 'contraenreatado recto',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'contraenreatados-rectas.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'En las sillas de bastos cuadrados, se pueden llevar contraenreatados que tengan las líneas inferior y posterior paralelas a los bastos. El ángulo podrá ser recto o redondeado siguiendo la forma de los bastos.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-rectas.avif']
  },
  {
    variante: 'rectos con fieltro almenillado',
    nombrecompleto: 'contraenreatado recto con fieltro almenillado',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'contraenreatados-rectas-almenillado.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
      'En las sillas de faena de estilo rústico y ranchero se pueden añadir por detrás de los contraenreatados fieltro amarillo almenillado que sobresaldrá por debajo.'
    ],
    descImg: ['contrareatas-rectas.avif']

  },
  {
    variante: 'normal',
    nombrecompleto: 'contraenreatado normal',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'contraenreatados-normal.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-normales.avif']
  },
  {
    variante: 'normal con fieltro almenillado',
    nombrecompleto: 'contraenreatado normal con fieltro almenillado',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'contraenreatados-normal-almenillado.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'En las sillas de faena de estilo rústico se pueden añadir por detrás de los contraenreatados fieltro amarillo almenillado que sobresaldrá por debajo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-normales.avif']
  },
  {
    variante: 'normal con hebilla',
    nombrecompleto: 'contraenreatado normal con hebilla',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'contraenreatados-normal-hebilla.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'Estos contraenreatados no se unen con tiento sino con una hebilla, que podrá tener diferentes formas, debiendo hacer juego con el herraje de la silla.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-normalesconhebilla.avif']
  },
  {
    variante: 'normal con hebilla con fieltro almenillado',
    nombrecompleto: 'contraenreatado normal con hebilla con fieltro almenillado',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'contraenreatados-normal-hebilla-almenillado.avif',
    zindex: 14,
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.', ,
      'Estos contraenreatados no se unen con tiento sino con una hebilla, que podrá tener diferentes formas, debiendo hacer juego con el herraje de la silla.',
      'En las sillas de faena de estilo rústico se pueden añadir por detrás de los contraenreatados fieltro amarillo almenillado que sobresaldrá por debajo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-normalesconhebilla.avif']
  },
  {
    variante: 'contraenreatado de chorizo',
    nombrecompleto: 'contraenreatado de chorizo',
    cat: 'cueraje',
    subcat: 'contraenreatados',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'contraenreatados-chorizo.avif',
    zindex: 14,
    extraimg: {
      archivo: 'contraenreatados-chorizo-encima.avif',
      zindex: 40
    },
    text: [
      'Los contraenreatados o contrareatas son piezas de cuero que circundan el fuste por detrás de la teja y se sujetan con tientos o hebillas a cada una de las argollas de la montura, de esta argolla también se sujetarán los enreatados y el látigo y contralátigo respectivamente, que en conjunto mantienen el fuste en su lugar y sujetan la silla al caballo con ayuda del cincho. Pueden ir adornadas según el cueraje.',
      'Estos contraenreatados son de estilo antiguo, para sillas sin hombros. Se llaman así porque llevan volumen hecho por rellenos y con un cordón que les da vuelta y forma. Suelen ir acompañados por enreatados del mismo estilo. Si se usan, que sea en sillas que por su estilo vayan de acuerdo con la época (circa, segunda mitad del S.XIX). Van por encima de las cantinas.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['contrareatas-chorizo.avif']
  },

  // *****************************************
  // MURCIELAGO
  // *****************************************
  {
    variante: 'murciélago de bastos',
    cat: 'cueraje',
    subcat: 'murciélago',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'murcielago-bastos.avif',
    require: ['basto cuadrado'],
    requiremessage: 'Requiere un basto cuadrado.',
    zindex: 15,
    text: [
      'Son piezas opcionales que se añaden en las sillas de esqueleto, cola de pato o bastos cuadrados, en la parte trasera de los bastos y sirven para tapar la costura de los bastos y contraenreatados; y para dar estructura a la silla. Su forma varía según el diseño de la silla.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['murcielago-bastos.avif']
  },
  {
    variante: 'murciélago cola de pato',
    cat: 'cueraje',
    subcat: 'murciélago',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'murcielago-coladepato.avif',
    require: ['basto cola de pato'],
    requiremessage: 'Requiere un basto cola de pato.',
    zindex: 15,
    text: [
      'Son piezas opcionales que se añaden en las sillas de esqueleto, cola de pato o bastos cuadrados, en la parte trasera de los bastos y sirven para tapar la costura de los bastos y contraenreatados; y para dar estructura a la silla. Su forma varía según el diseño de la silla.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['murcielago-coladepato.avif']
  },
  // *****************************************
  // ARCIONES
  // *****************************************
  {
    variante: 'rectas sencillas',
    nombrecompleto: 'arciones rectas sencillas',
    cat: 'cueraje',
    subcat: 'arciones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'arciones-rectas-sencillas.avif',
    modify: ['sable', 'espada', 'machete'],
    dependencies: ['sable', 'espada', 'machete'],
    zindex: 23,
    text: [
      'Las arciones (NO “los arciones”) cuelgan de las tablas del fuste (manteniéndose en su lugar gracias a las arcioneras) y sujetan los estribos.',
      'Pueden ser rectas o tener sudaderas para proteger el pantalón del sudor del caballo, estas últimas solo son correctas en sillas sin cantinas.',
      'Pueden ser “dobles” es decir dar dos vueltas y sujetarse con tientos, o “sencillas” de una sola vuelta y sujetarse con hebilla. Las dobles son las más tradicionales y las más cómodas y seguras, pero tienen el inconveniente de ser poco practicas al momento de cambiar de largo las arciones, pues toma más tiempo.',
      'La vuelta que queda por encima no se suele bordar porque al ser la que llevará el contacto directo del jinete y por lo tanto más roce, el adorno se dañaría muy pronto. Los adornos en la vuelta inferior, para verse bien, tienen que ocupar toda la parte visible de la arción.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['arciones-rectas-sencillas.avif']
  },
  {
    variante: 'rectas dobles',
    nombrecompleto: 'arciones rectas dobles',
    cat: 'cueraje',
    subcat: 'arciones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'arciones-rectas-dobles.avif',
    modify: ['sable', 'espada', 'machete'],
    dependencies: ['sable', 'espada', 'machete'],
    zindex: 23,
    text: [
      'Las arciones (NO “los arciones”) cuelgan de las tablas del fuste (manteniéndose en su lugar gracias a las arcioneras) y sujetan los estribos.',
      'Pueden ser rectas o tener sudaderas para proteger el pantalón del sudor del caballo, estas últimas solo son correctas en sillas sin cantinas.',
      'Pueden ser “dobles” es decir dar dos vueltas y sujetarse con tientos, o “sencillas” de una sola vuelta y sujetarse con hebilla. Las dobles son las más tradicionales y las más cómodas y seguras, pero tienen el inconveniente de ser poco practicas al momento de cambiar de largo las arciones, pues toma más tiempo.',
      'La vuelta que queda por encima no se suele bordar porque al ser la que llevará el contacto directo del jinete y por lo tanto más roce, el adorno se dañaría muy pronto. Los adornos en la vuelta inferior, para verse bien, tienen que ocupar toda la parte visible de la arción.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['arciones-rectas-dobles.avif']
  },
  {
    variante: 'sudaderas sencillas',
    nombrecompleto: 'arciones con sudaderas sencillas',
    cat: 'cueraje',
    subcat: 'arciones',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'arciones-sudaderas-sencillas.avif',
    modify: ['sable', 'espada', 'machete'],
    restricted: [
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinaas redondas, de ojal'
    ],
    restrictedmessage: 'Incompatible con bastos para cantinas.',
    dependencies: ['sable', 'espada', 'machete'],
    zindex: 23,
    text: [
      'Las arciones (NO “los arciones”) cuelgan de las tablas del fuste (manteniéndose en su lugar gracias a las arcioneras) y sujetan los estribos.',
      'Pueden ser rectas o tener sudaderas para proteger el pantalón del sudor del caballo, estas últimas solo son correctas en sillas sin cantinas.',
      'Pueden ser “dobles” es decir dar dos vueltas y sujetarse con tientos, o “sencillas” de una sola vuelta y sujetarse con hebilla. Las dobles son las más tradicionales y las más cómodas y seguras, pero tienen el inconveniente de ser poco practicas al momento de cambiar de largo las arciones, pues toma más tiempo.',
      'La vuelta que queda por encima no se suele bordar porque al ser la que llevará el contacto directo del jinete y por lo tanto más roce, el adorno se dañaría muy pronto. Los adornos en la vuelta inferior, para verse bien, tienen que ocupar toda la parte visible de la arción.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['arciones-sudaderas-sencillas.avif']
  },
  {
    variante: 'sudaderas dobles',
    nombrecompleto: 'arciones con sudaderas dobles',
    cat: 'cueraje',
    subcat: 'arciones',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'arciones-sudaderas-dobles.avif',
    modify: ['sable', 'espada', 'machete'],
    restricted: [
      'basto para cantinas cuadradas',
      'basto para cantinas cuadradas, de ojal',
      'basto para cantinas redondas',
      'basto para cantinaas redondas, de ojal'
    ],
    restrictedmessage: 'Incompatible con bastos para cantinas.',
    dependencies: ['sable', 'espada', 'machete'],
    zindex: 23,
    text: [
      'Las arciones (NO “los arciones”) cuelgan de las tablas del fuste (manteniéndose en su lugar gracias a las arcioneras) y sujetan los estribos.',
      'Pueden ser rectas o tener sudaderas para proteger el pantalón del sudor del caballo, estas últimas solo son correctas en sillas sin cantinas.',
      'Pueden ser “dobles” es decir dar dos vueltas y sujetarse con tientos, o “sencillas” de una sola vuelta y sujetarse con hebilla. Las dobles son las más tradicionales y las más cómodas y seguras, pero tienen el inconveniente de ser poco practicas al momento de cambiar de largo las arciones, pues toma más tiempo.',
      'La vuelta que queda por encima no se suele bordar porque al ser la que llevará el contacto directo del jinete y por lo tanto más roce, el adorno se dañaría muy pronto. Los adornos en la vuelta inferior, para verse bien, tienen que ocupar toda la parte visible de la arción.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['arciones-sudaderas-dobles.avif']
  },
  // *****************************************
  // CUADRILERAS
  // *****************************************
  {
    variante: 'cuadrilera normal',
    cat: 'cueraje',
    subcat: 'cuadrileras',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuadrileras-normal.avif',
    zindex: 29,
    text: [
      'Las cuadrileras son delantales de cuero que tienen varias funciones: proteger la pierna del jinete cuando laza a pie y a caballo, proteger el fuste del roce y del sol, proteger el asiento de una persona que va en ancas, proteger el retobo de la silla del roce y sudor del jinete, etc. Se sujetan a las argollas de los enreatados por medio de dos de los cuatro tientos que suelen tener (dos para sujetarlo a la cadera y dos para la pierna). Si llevan adorno solo será en la parte superior ya que recibirá menos contacto cuando se lleva en la silla pues quedará cerca de la horqueta.',
      'Pueden llevar en uno de sus lados acolchado o borrega para hacerlas más cómodas, pero esto es opcional.'
    ],
    descImg: ['cuadrilera.avif']
  },
  {
    variante: 'cuadrilera con borrega',
    cat: 'cueraje',
    subcat: 'cuadrileras',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuadrileras-borrega.avif',
    zindex: 29,
    text: [
      'Las cuadrileras son delantales de cuero que tienen varias funciones: proteger la pierna del jinete cuando laza a pie y a caballo, proteger el fuste del roce y del sol, proteger el asiento de una persona que va en ancas, proteger el retobo de la silla del roce y sudor del jinete, etc. Se sujetan a las argollas de los enreatados por medio de dos de los cuatro tientos que suelen tener (dos para sujetarlo a la cadera y dos para la pierna). Si llevan adorno solo será en la parte superior ya que recibirá menos contacto cuando se lleva en la silla pues quedará cerca de la horqueta.',
      'Pueden llevar en uno de sus lados acolchado o borrega para hacerlas más cómodas, pero esto es opcional.'
    ],
    descImg: ['cuadrilera.avif']
  },
  {
    variante: 'cuadrilera acolchada',
    cat: 'cueraje',
    subcat: 'cuadrileras',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'cuadrileras-acolchado.avif',
    zindex: 29,
    text: [
      'Las cuadrileras son delantales de cuero que tienen varias funciones: proteger la pierna del jinete cuando laza a pie y a caballo, proteger el fuste del roce y del sol, proteger el asiento de una persona que va en ancas, proteger el retobo de la silla del roce y sudor del jinete, etc. Se sujetan a las argollas de los enreatados por medio de dos de los cuatro tientos que suelen tener (dos para sujetarlo a la cadera y dos para la pierna). Si llevan adorno solo será en la parte superior ya que recibirá menos contacto cuando se lleva en la silla pues quedará cerca de la horqueta.',
      'Pueden llevar en uno de sus lados acolchado o borrega para hacerlas más cómodas, pero esto es opcional.'
    ],
    descImg: ['cuadrilera.avif']
  },
  {
    variante: 'cuadrilera de asiento forrado',
    cat: 'cueraje',
    subcat: 'cuadrileras',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuadrileras-asientoforrado.avif',
    zindex: 29,
    text: [
      'Las cuadrileras son delantales de cuero que tienen varias funciones: proteger la pierna del jinete cuando laza a pie y a caballo, proteger el fuste del roce y del sol, proteger el asiento de una persona que va en ancas, proteger el retobo de la silla del roce y sudor del jinete, etc. Se sujetan a las argollas de los enreatados por medio de dos de los cuatro tientos que suelen tener (dos para sujetarlo a la cadera y dos para la pierna). Si llevan adorno solo será en la parte superior ya que recibirá menos contacto cuando se lleva en la silla pues quedará cerca de la horqueta.',
      'Pueden llevar en uno de sus lados acolchado o borrega para hacerlas más cómodas, pero esto es opcional.',
      'Algunos fustes suelen llevar en vez de la cuadrilera tradicional, los asientos forrados de cuero para proteger el retobo de a silla.'
    ],
    descImg: ['cuadrilera.avif']
  },

  // *****************************************
  // CONTRALATIGO
  // *****************************************
  {
    variante: 'pasador recto',
    nombrecompleto: 'contralátigo con pasador recto',
    cat: 'cueraje',
    subcat: 'contralátigo',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    garrocha: 'pasador-recto.avif',
    zindex: 2,
    text: [
      'Esta pieza larga de cuero es similar en función, dimensiones y forma al látigo, pero queda del otro lado, de ahí su nombre. Solo lleva un orificio en la punta reforzada. No es charro usar contralátigos sin vueltas, pues son peligrosos y son imitación de las aberraciones gringas. En las sillas de categorías superiores pueden llevar pasadores (de diferentes formas), que son piezas opcionales. No siempre son recomendables pues dificultan ajustar el contralátigo en caso de ser necesario.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: [
      'contralatigo.avif',
      'pasador-recto.avif'
    ]
  },
  {
    variante: 'pasador redondo',
    nombrecompleto: 'contralátigo con pasador redondo',
    cat: 'cueraje',
    subcat: 'contralátigo',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    garrocha: 'pasador-redondo.avif',
    zindex: 2,
    text: [
      'Esta pieza larga de cuero es similar en función, dimensiones y forma al látigo, pero queda del otro lado, de ahí su nombre. Solo lleva un orificio en la punta reforzada. No es charro usar contralátigos sin vueltas, pues son peligrosos y son imitación de las aberraciones gringas. En las sillas de categorías superiores pueden llevar pasadores (de diferentes formas), que son piezas opcionales. No siempre son recomendables pues dificultan ajustar el contralátigo en caso de ser necesario.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: [
      'contralatigo.avif',
      'pasador-redondo.avif'
    ]
  },
  {
    variante: 'pasador con alzacincho',
    nombrecompleto: 'contralátigo con alzacincho',
    cat: 'cueraje',
    subcat: 'contralátigo',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    garrocha: 'pasador-alzacincho.avif',
    zindex: 2,
    text: [
      'Esta pieza larga de cuero es similar en función, dimensiones y forma al látigo, pero queda del otro lado, de ahí su nombre. Solo lleva un orificio en la punta reforzada. No es charro usar contralátigos sin vueltas, pues son peligrosos y son imitación de las aberraciones gringas. En las sillas de categorías superiores pueden llevar pasadores (de diferentes formas), que son piezas opcionales. No siempre son recomendables pues dificultan ajustar el contralátigo en caso de ser necesario.',
      'En sillas de Gala y Gran Gala se solían usar pasadores de doble propósito, que además servían de alzacincho (obviamente esas sillas no llevan alzacincho en el chapetón frontal). Pero tienen el inconveniente de quecuando el caballete o burro es bajo, el cincho arrastrará por el suelo, lo mismo que cuando se cargan para desplazarse y ensillar.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: [
      'contralatigo.avif',
      'pasador-alzacincho.avif'
    ]
  },

  // *****************************************
  // CUARTERO
  // *****************************************
  {
    variante: 'cuartero normal',
    cat: 'cueraje',
    subcat: 'cuartero',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuartero-normal.avif',
    modify: ['cuerno', 'guante'],
    zindex: 43,
    text: [
      'Los cuarteros, sirven para sujetar la cuarta (también se puede colgar el cuernito, guante, etc.). Siempre van en el lado de montar y sujetos del chapetón superior trasero. Pueden tener diferentes diseños, estilos y formas de sujetar la cuarta.',
      'Un detalle muy charro es hacer pasar los tientos de ese chapetón por el pasador y luego por entre la rondana, así no estorbará al tomar la cuarta.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)',
    ],
    descImg: ['cuartero-normal.avif']
  },
  {
    variante: 'cuartero de tarugos',
    cat: 'cueraje',
    subcat: 'cuartero',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'cuartero-cuerotarugo.avif',
    modify: ['cuerno', 'guante'],
    zindex: 43,
    text: [
      'Los cuarteros, sirven para sujetar la cuarta (también se puede colgar el cuernito, guante, etc.). Siempre van en el lado de montar y sujetos del chapetón superior trasero. Pueden tener diferentes diseños, estilos y formas de sujetar la cuarta.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cuartero-tarugo.avif']
  },
  {
    variante: 'cuartero de argolla',
    cat: 'cueraje',
    subcat: 'cuartero',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'cuartero-argolla.avif',
    modify: ['cuerno', 'guante'],
    zindex: 43,
    text: [
      'Los cuarteros, sirven para sujetar la cuarta (también se puede colgar el cuernito, guante, etc.). Siempre van en el lado de montar y sujetos del chapetón superior trasero. Pueden tener diferentes diseños, estilos y formas de sujetar la cuarta.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cuartero-argolla.avif']
  },
  // *****************************************
  // *****************************************
  // CINCHO
  // *****************************************
  // *****************************************
  // *****************************************
  // CON TAPA
  // *****************************************
  {
    variante: 'hebijón derecho',
    cat: 'cincho',
    subcat: 'con tapa',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cincho-contapa-derecho.avif',
    replacecat: ['sin tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'hebijón de flecha',
    cat: 'cincho',
    subcat: 'con tapa',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cincho-contapa-flecha.avif',
    replacecat: ['sin tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'hebijón de bocado',
    cat: 'cincho',
    subcat: 'con tapa',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cincho-contapa-bocado.avif',
    extraimg: {
      archivo: 'chapa-oreja.avif',
      zindex: 16,
    },
    replacecat: ['sin tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'hebijón derecho',
    cat: 'cincho',
    subcat: 'sin tapa',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'cincho-sintapa-derecho.avif',
    replacecat: ['con tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'hebijón de flecha',
    cat: 'cincho',
    subcat: 'sin tapa',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'cincho-sintapa-flecha.avif',
    replacecat: ['con tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'hebijón de bocado',
    cat: 'cincho',
    subcat: 'sin tapa',
    etiqueta: ['faena', 'media gala', 'gala'],
    portador: 'caballo',
    runway: 'cincho-sintapa-bocado.avif',
    extraimg: {
      archivo: 'chapa-oreja.avif',
      zindex: 16,
    },
    replacecat: ['con tapa'],
    zindex: 9,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  {
    variante: 'juguetes',
    cat: 'cincho',
    subcat: 'adornos',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cincho-juguetes.avif',
    zindex: 10,
    text: [
      'Las argollas o hebillas de los cinchos pueden tener el hebijón de varias formas. Pueden llevar por detrás tapa de cuero y fieltro y además llevar chapa, en estos casos el hebijón será de “bocado”. La parte tejida del cincho puede tener diferentes colores y motivos que harán juego con el resto de los textiles de la silla. En las sillas de Gran Gala pueden añadirse botones tejidos con escobetillas de crin a modo de adorno (que de paso también espantarán tábanos y moscas) llamados higuitos, aguacatitos o juguetes.'
    ]
  },
  // *****************************************
  // *****************************************
  // HERRAJE
  // *****************************************
  // *****************************************
  // *****************************************
  // ESTRIBOS
  // *****************************************
  {
    variante: 'estribos normales',
    cat: 'herraje',
    subcat: 'estribos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'estribos-normales.avif',
    zindex: 20,
    text: [
      'Los estribos sirven para ayudar al jinete a mantenerse sobre el caballo de mejor forma y para descansar el peso de la pierna. En la silla charra deben de ser anchos, siendo la parte más ancha similar al ancho de los arciones. Pueden llevar el metal expuesto o forrado, y en ambos casos haciendo juego con el resto de la silla. El pie siempre va engargantado, es decir metido hasta que el tacón toque la base o piso de estribo.'
    ],
    descLink: 'https://youtu.be/PqtdTR1I654?si=u-0-pD3A96QlwZPf'
  },
  {
    variante: 'estribos normales con arrastradera',
    cat: 'herraje',
    subcat: 'estribos',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'estribos-normales-arrastradera.avif',
    zindex: 20,
    text: [
      'Los estribos sirven para ayudar al jinete a mantenerse sobre el caballo de mejor forma y para descansar el peso de la pierna. En la silla charra deben de ser anchos, siendo la parte más ancha similar al ancho de los arciones. Pueden llevar el metal expuesto o forrado, y en ambos casos haciendo juego con el resto de la silla. El pie siempre va engargantado, es decir metido hasta que el tacón toque la base o piso de estribo.'
    ],
    descLink: 'https://youtu.be/PqtdTR1I654?si=u-0-pD3A96QlwZPf',
    descImg: ['estribos-arrastraderas.avif']
  },
  {
    variante: 'estribos normales forrados',
    cat: 'herraje',
    subcat: 'estribos',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'estribos-normales-forrados.avif',
    zindex: 20,
    text: [
      'Los estribos sirven para ayudar al jinete a mantenerse sobre el caballo de mejor forma y para descansar el peso de la pierna. En la silla charra deben de ser anchos, siendo la parte más ancha similar al ancho de los arciones. Pueden llevar el metal expuesto o forrado, y en ambos casos haciendo juego con el resto de la silla. El pie siempre va engargantado, es decir metido hasta que el tacón toque la base o piso de estribo.'
    ],
    descLink: 'https://youtu.be/PqtdTR1I654?si=u-0-pD3A96QlwZPf',
    descImg: ['estribos-forrado.avif']
  },
  {
    variante: 'estribos de tapaderas',
    cat: 'herraje',
    subcat: 'estribos',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'estribos-tapaderas.avif',
    zindex: 20,
    text: [
      'Los estribos sirven para ayudar al jinete a mantenerse sobre el caballo de mejor forma y para descansar el peso de la pierna. En la silla charra deben de ser anchos, siendo la parte más ancha similar al ancho de los arciones. Pueden llevar el metal expuesto o forrado, y en ambos casos haciendo juego con el resto de la silla. El pie siempre va engargantado, es decir metido hasta que el tacón toque la base o piso de estribo.'
    ],
    descLink: 'https://youtu.be/PqtdTR1I654?si=u-0-pD3A96QlwZPf',
    descImg: ['estribos-tapaderas.avif']
  },
  // *****************************************
  // HERRAJE
  // *****************************************
  {
    variante: 'chapetones',
    cat: 'herraje',
    subcat: 'herraje',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'chapeton-frente.avif',
    garrocha: 'chapeton.avif',
    extraimg: [
      {
        archivo: 'chapeton-atras.avif',
        zindex: 25,
      },
      {
        archivo: 'tientos-saraperos.avif',
        zindex: 39,
      },
    ],
    zindex: 12,
    allowsame: true,
    text: [
      'Se llama herraje a todas las piezas de metal de la silla, ya sea expuesto o forrado. Entre ellas se incluye a los estribos, machete, freno, hebillas, argollas, espuelas, chapetones, pasadores, etc.',
      'Los chapetones son piezas generalmente redondas que sirven para unir piezas de la montura y arreos, ya sea con tornillos o tientos (según el caso). Pueden variar en cuanto a: forma, tamaño, material, estilo y adornos, pero siempre haciendo juego con el resto de la silla. Suelen ir acompañados en su parte trasera de rosetones de cuero o pial.'
    ]
  },
  {
    variante: 'chapas en argollas',
    cat: 'herraje',
    subcat: 'herraje',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: '',
    version: {
      'hebijón derecho': 'chapa-oreja.avif',
      'hebijón de flecha': 'chapa-flecha.avif',
      'hebijón de bocado': 'chapa-bocado.avif'
    },
    require: ['hebijón derecho', 'hebijón de flecha', 'hebijón de bocado'],
    requiremessage: 'Requiere un cincho.',
    restricted: [
      'corbata sin hebilla',
      'corbata 1',
      'corbata 2'
    ],
    restrictedmessage: 'No se pueden poner con enreatados de corbata.',
    zindex: 30,
    allowsame: true,
    text: [
      'Las chapas son piezas semicirculares de metal trabajado artísticamente que adornan las argollas de los enreatados y las argollas o hebillas de cincho. Deben hacer juego con el resto del herraje.'
    ]
  },

  // *****************************************
  // *****************************************
  // ADITAMENTOS
  // *****************************************
  // *****************************************
  // *****************************************
  // PECHO Y ENCUENTRO
  // *****************************************
  {
    variante: 'pechera',
    cat: 'aditamentos',
    subcat: 'pecho y encuentro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'pechoyencuentro-pechera.avif',
    zindex: 19,
    text: [
      'Similar a los pechopretales en su función, pero no se sujetan de las argollas de los enreatados ni tienen la misma forma y estructura.',
      'Lo más bonito y tradicional en desfiles y eventos especiales es no usarlo, así el caballo luce el tren anterior, sobre todo en caballos sin problemas de conformación.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['pechera.avif']
  },
  {
    variante: 'pechopretal',
    cat: 'aditamentos',
    subcat: 'pecho y encuentro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'pechoyencuentro-pechopretal.avif',
    zindex: 19,
    text: [
      'Pueden ser de cuero o tejidos. Se sujetan a las argollas de los enreatados y sirven para impedir que la silla se recorra hacia atrás en caballos desbarrigados, en cuestas muy pronunciadas, al colear o jalar a cabeza de silla. Pueden ir forrados de borrega para caballos con piel sensible.',
      'Lo más bonito y tradicional en desfiles y eventos especiales es no usarlo, así el caballo luce el tren anterior, sobre todo en caballos sin problemas de conformación.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['pechopretal-normal.avif'],
    descLink: 'https://youtu.be/V8nj9eR_LFw?si=M8gRwQqiiwtjN4Hi'
  },
  {
    variante: 'pechopretal tejido',
    cat: 'aditamentos',
    subcat: 'pecho y encuentro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'pechoyencuentro-pechopretal-tejido.avif',
    zindex: 19,
    text: [
      'Pueden ser de cuero o tejidos. Se sujetan a las argollas de los enreatados y sirven para impedir que la silla se recorra hacia atrás en caballos desbarrigados, en cuestas muy pronunciadas, al colear o jalar a cabeza de silla. Pueden ir forrados de borrega para caballos con piel sensible.',
      'Lo más bonito y tradicional en desfiles y eventos especiales es no usarlo, así el caballo luce el tren anterior, sobre todo en caballos sin problemas de conformación.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['pechopretal-normal.avif'],
    descLink: 'https://youtu.be/V8nj9eR_LFw?si=M8gRwQqiiwtjN4Hi'
  },
  {
    variante: 'pechopretal forrado',
    cat: 'aditamentos',
    subcat: 'pecho y encuentro',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'pechoyencuentro-pechopretal-forrado.avif',
    zindex: 19,
    text: [
      'Pueden ser de cuero o tejidos. Se sujetan a las argollas de los enreatados y sirven para impedir que la silla se recorra hacia atrás en caballos desbarrigados, en cuestas muy pronunciadas, al colear o jalar a cabeza de silla. Pueden ir forrados de borrega para caballos con piel sensible.',
      'Lo más bonito y tradicional en desfiles y eventos especiales es no usarlo, así el caballo luce el tren anterior, sobre todo en caballos sin problemas de conformación.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['pechopretal-forrado.avif'],
    descLink: 'https://youtu.be/V8nj9eR_LFw?si=M8gRwQqiiwtjN4Hi'
  },
  {
    variante: 'gargantón de cuero',
    cat: 'aditamentos',
    subcat: 'pecho y encuentro',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'pechoyencuentro-garganton.avif',
    zindex: 19,
    text: [
      'Los gargantones de cuero tienen la misma función que las pecheras y pechopretales.',
      'Lo más bonito y tradicional en desfiles y eventos especiales es no usarlo, así el caballo luce el tren anterior, sobre todo en caballos sin problemas de conformación.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['garganton-cuero.avif']
  },
  // *****************************************
  // BARRIGUERAS
  // *****************************************
  {
    variante: 'barriguera en asiento',
    cat: 'aditamentos',
    subcat: 'barrigueras',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'barriguera-asiento.avif',
    zindex: 21,
    text: [
      'Arreo opcional que sirve para impedir que la parte trasera de la silla se levante cuando se chorrea a cabeza de silla en piales y manganas.',
      'La forma en que se sujeta o mantiene en su posición en la silla puede variar.',
      'A veces suele estar sujeto por medio de una correa o cordón al cincho, para impedir que se vaya hacia las verijas. No debe de ir ni apretado ni muy suelto.'
    ]
  },
  {
    variante: 'barriguera de argolla',
    cat: 'aditamentos',
    subcat: 'barrigueras',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'barriguera-argolla.avif',
    zindex: 21,
    text: [
      'Arreo opcional que sirve para impedir que la parte trasera de la silla se levante cuando se chorrea a cabeza de silla en piales y manganas.',
      'La forma en que se sujeta o mantiene en su posición en la silla puede variar.',
      'A veces suele estar sujeto por medio de una correa o cordón al cincho, para impedir que se vaya hacia las verijas. No debe de ir ni apretado ni muy suelto.'
    ]
  },
  // *****************************************
  // PROTECTORES
  // *****************************************
  {
    variante: 'protectores de manos',
    cat: 'aditamentos',
    subcat: 'protectores',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'protectores-manos.avif',
    allowsame: true,
    zindex: 26,
    text: [
      'Los protectores deben de ser de cuero y en colores serios que no desentonen con el resto del cueraje. No son obligatorios y no se deben usar en situaciones en las que no se requieran, como desfiles, eventos importantes, etc.'
    ]
  },
  {
    variante: 'protectores de patas',
    cat: 'aditamentos',
    subcat: 'protectores',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'protectores-patas.avif',
    allowsame: true,
    zindex: 27,
    text: [
      'Los protectores deben de ser de cuero y en colores serios que no desentonen con el resto del cueraje. No son obligatorios y no se deben usar en situaciones en las que no se requieran, como desfiles, eventos importantes, etc.'
    ]
  },
  // *****************************************
  // CUARTAS
  // *****************************************
  {
    variante: 'virote',
    cat: 'aditamentos',
    subcat: 'cuartas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuartas-virote.avif',
    zindex: 42,
    text: [
      'Las cuartas pueden variar en diseño, forma, materiales, adornos, etc. Aqui solo se han puesto tres, pero hay más. El material y adornos deben hacer juego con el resto de la montura y arreos.',
      'Es un error poner cuartas chiquitas para las sillas infantiles, pues el objetivo en caso de usarlas es que se lleguen a aplicar en su lugar correcto, cosa que se dificulta en los niños y más si además la cuarta es corta).',
      'NO se deben usar cuartas de cola de caballo, pues se trata de castigar o llamar la atención, no de espantarle las moscas.'
    ]
  },
  {
    variante: 'normal',
    cat: 'aditamentos',
    subcat: 'cuartas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuartas-normal.avif',
    zindex: 42,
    text: [
      'Las cuartas pueden variar en diseño, forma, materiales, adornos, etc. Aqui solo se han puesto tres, pero hay más. El material y adornos deben hacer juego con el resto de la montura y arreos.',
      'Es un error poner cuartas chiquitas para las sillas infantiles, pues el objetivo en caso de usarlas es que se lleguen a aplicar en su lugar correcto, cosa que se dificulta en los niños y más si además la cuarta es corta).',
      'NO se deben usar cuartas de cola de caballo, pues se trata de castigar o llamar la atención, no de espantarle las moscas.'
    ]
  },
  {
    variante: 'pata de venado',
    cat: 'aditamentos',
    subcat: 'cuartas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cuartas-patavenado.avif',
    zindex: 42,
    text: [
      'Las cuartas pueden variar en diseño, forma, materiales, adornos, etc. Aqui solo se han puesto tres, pero hay más. El material y adornos deben hacer juego con el resto de la montura y arreos.',
      'Es un error poner cuartas chiquitas para las sillas infantiles, pues el objetivo en caso de usarlas es que se lleguen a aplicar en su lugar correcto, cosa que se dificulta en los niños y más si además la cuarta es corta).',
      'NO se deben usar cuartas de cola de caballo, pues se trata de castigar o llamar la atención, no de espantarle las moscas.'
    ]
  },
  // *****************************************
  // ANTIGUOS
  // *****************************************
  {
    variante: 'sarape',
    cat: 'aditamentos',
    subcat: 'atrás de la teja',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'atrasdelateja-sarape.avif',
    zindex: 46,
    text: [
      'Puede ser sarape o jorongo, pero siempre de tamaño real para que tenga sentido y utilidad en caso de necesitarla (en vez de chamarras civiles).',
      'Siempre de colores serios y que hagan juego con el resto de los textiles. Sin letreros, nombres, leyendas y menos aún obscenidades. Los flecos cuelgan de lado de montar, y del lado de la garrocha en las albardas. Se atan con los tientos saraperos.'
    ]
  },
  {
    variante: 'sarape extendido',
    cat: 'aditamentos',
    subcat: 'atrás de la teja',
    etiqueta: ['gran gala'],
    portador: 'caballo',
    runway: 'atrasdelateja-sarape-extendido.avif',
    zindex: 46,
    text: [
      'Puede ser sarape o jorongo, pero siempre de tamaño real para que tenga sentido y utilidad en caso de necesitarla (en vez de chamarras civiles).',
      'Siempre de colores serios y que hagan juego con el resto de los textiles. Sin letreros, nombres, leyendas y menos aún obscenidades. Los flecos cuelgan de lado de montar, y del lado de la garrocha en las albardas. Se atan con los tientos saraperos.',
      'Los sarapes puestos de esta manera solo se ven bien cuando son muy bonitos y se luce su tejido y diseños, y en situaciones donde no se realizarán faenas charras, porque entonces estorbará (más aun toreando a caballo) y se podría dañar, y cuando se llevan vaquerillos, porque de otra manera el sarape puede mancharse con el sudor del caballo, sobre todo si se montará durante algo de tiempo.'
    ]
  },
  {
    variante: 'manga de hule',
    cat: 'aditamentos',
    subcat: 'atrás de la teja',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'atrasdelateja-manga.avif',
    zindex: 46,
    text: [
      'En tiempos de lluvia es mejor llevar manga de hule en vez de sarape. La manga de hule está hecha de manta impregnada de hule o caucho en uno de sus lados. Puede ir enrollada atrás de la teja como un sarape o jorongo o dentro de portamangas o maletín.'
    ]
  },
  {
    variante: 'maletín',
    cat: 'aditamentos',
    subcat: 'atrás de la teja',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'atrasdelateja-maletin.avif',
    zindex: 46,
    text: [
      'El maletín o portamangas, además de portar la manga de hule como su nombre lo indica, sirve para guardar cualquier otro objeto, pues su tapa asegurada con tarugos o botones los mantendrá dentro. Se sujeta por medio de los tientos saraperos a las argollas que suelen tener. Deben hacer juego con el resto del cueraje, y los botones con el herraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['maletin.avif']
  },
  // *****************************************
  // ATRÁS DE LA TEJA
  // *****************************************
  {
    variante: 'armas de agua',
    cat: 'aditamentos',
    subcat: 'antiguos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'antiguos-armasdeagua.avif',
    zindex: 47,
    text: [
      'Estas piezas casi en desuso sirven para proteger las piernas del jinete y parte de la montura en caso de lluvia (también del frío) por medio del pelo que llevan en su parte exterior, el cual puede ser de diferentes animales.',
      'Cuelgan en la parte frontal de la silla y cuando se usan se atan detrás de la cintura del jinete. Son las antecesoras de las chivarras, y estas a su vez de las chaparreras. En caso de lluvia y de no traerlas, se pueden suplir con una segunda manga embrocada en la cabeza de la silla.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['armasdeagua.avif']
  },
  // *****************************************
  // ARREOS DE LA CABEZA
  // *****************************************
  // *****************************************
  // *****************************************
  // FRENOS
  // *****************************************
  {
    variante: 'freno normal',
    cat: 'arreos de cabeza',
    subcat: 'frenos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'freno-normal.avif',
    cabeza: 'freno.avif',
    zindex: 31,
    text: [
      'Hay muchísimos tipos de frenos, tanto en las dimensiones de cada parte, como su material, estilos, adornos, etc. Aquí solo pongo algunos representativos. El freno debe de estar pensado en el caballo que lo usará, tanto en dimensiones, forma y materiales. Creer que todos los caballos usarán el mismo freno es un error. El freno, idealmente debe hacer juego en su parte visible con el resto del herraje. El freno mexicano tiene muchísimas variantes y estilos, y no hace falta copiar los frenos gringos.'
    ],
    descImg: ['partes-freno.jpg'],
  },
  {
    variante: 'freno zacatecano',
    cat: 'arreos de cabeza',
    subcat: 'frenos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'freno-zacatecano.avif',
    cabeza: 'freno.avif',
    zindex: 31,
    modify: ['cabezadas normales'],
    text: [
      'Hay muchísimos tipos de frenos, tanto en las dimensiones de cada parte, como su material, estilos, adornos, etc. Aquí solo pongo algunos representativos. El freno debe de estar pensado en el caballo que lo usará, tanto en dimensiones, forma y materiales. Creer que todos los caballos usarán el mismo freno es un error. El freno, idealmente debe hacer juego en su parte visible con el resto del herraje. El freno mexicano tiene muchísimas variantes y estilos, y no hace falta copiar los frenos gringos.',
      'Este freno es la versión mexicana del freno usado en la monta a la Gineta.',
      'La barbada de argolla parte de la parte alta de bocado, o sea del interior de la boca del caballo. Estos frenos no llevan ni deben llevar trocillos, pues la acción de palanca para la barbada parte de donde se sujeta la argolla al bocado. Ya no se permiten en las competencias oficiales porque los charros han abandonado mucho la equitación y carecen de los conocimientos y sensibilidad para usar adecuadamente este tipo de freno sin dañar al caballo.'
    ],
    descImg: ['partes-freno.jpg']
  },
  {
    variante: 'freno de ruedas',
    cat: 'arreos de cabeza',
    subcat: 'frenos',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'freno-ruedas.avif',
    cabeza: 'freno.avif',
    zindex: 31,
    text: [
      'Hay muchísimos tipos de frenos, tanto en las dimensiones de cada parte, como su material, estilos, adornos, etc. Aquí solo pongo algunos representativos. El freno debe de estar pensado en el caballo que lo usará, tanto en dimensiones, forma y materiales. Creer que todos los caballos usarán el mismo freno es un error. El freno, idealmente debe hacer juego en su parte visible con el resto del herraje. El freno mexicano tiene muchísimas variantes y estilos, y no hace falta copiar los frenos gringos.',
      'Este es solo uno de los tantos ejemplos que existen de frenos charros, donde las patas tienen forma de rueda, pero su accionar es similar a cualquier otro freno.'
    ],
    descImg: ['partes-freno.jpg']
  },
  {
    variante: 'freno de gala',
    cat: 'arreos de cabeza',
    subcat: 'frenos',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'freno-gala.avif',
    cabeza: 'freno.avif',
    zindex: 31,
    text: [
      'Hay muchísimos tipos de frenos, tanto en las dimensiones de cada parte, como su material, estilos, adornos, etc. Aquí solo pongo algunos representativos. El freno debe de estar pensado en el caballo que lo usará, tanto en dimensiones, forma y materiales. Creer que todos los caballos usarán el mismo freno es un error. El freno, idealmente debe hacer juego en su parte visible con el resto del herraje. El freno mexicano tiene muchísimas variantes y estilos, y no hace falta copiar los frenos gringos.',
      'Puse este freno, no porque en la categoría de Gala y Gran Gala se usen frenos de formas diferentes en la manera en que accionan en el caballo, sino para mostrar que, en esas categorías, donde el herraje tiene que ser de mayor calidad, el freno debe de ir haciendo juego y por lo tanto ser más lujoso. Hay muchas formas, motivos y diseños que entran en estas doscategorías, cuya diferencia radica en que los de Gran Gala son mucho más lujosos que los de Gala. La cabezada para ambas categorías deberá hacer juego con el cueraje y el herraje del resto de los arreos y montura.'
    ],
    descImg: ['partes-freno.jpg']
  },
  // *****************************************
  // CABEZADAS
  // *****************************************
  {
    variante: 'cabezadas normales',
    cat: 'arreos de cabeza',
    subcat: 'cabezadas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cabezadas-normales.avif',
    cabeza: 'cabezada.avif',
    zindex: 32,
    version: {
      'freno zacatecano': 'cabezadas-normales-zacatecano.avif'
    },
    text: [
      'La cabezada charra tiene por lo general una sola hebilla para ajustarlo y va del lado de montar. Esto es suficiente cuando se va a usar en caballos con cabezas de tamaño similar, pero en los casos donde esto no aplica, puede llevar hebillas de los dos lados, así la orejera quedará bien en su lugar. La orejera no debe de ser de esas tipo gringo que van como con pasadores que se pueden recorrer hasta cualquier parte, porque no cumplen con la función de impedir que la cabezada se mueva excesivamente para atrás. No hay que abusar en los botones de cuero crudo como adorno, porque estos pueden rozar al caballo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cabezada-normal.avif']
  },
  {
    variante: 'cabezadas de cadenilla',
    cat: 'arreos de cabeza',
    subcat: 'cabezadas',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cabezadas-cadenilla.avif',
    cabeza: 'cabezada.avif',
    zindex: 32,
    text: [
      'La cabezada charra tiene por lo general una sola hebilla para ajustarlo y va del lado de montar. Esto es suficiente cuando se va a usar en caballos con cabezas de tamaño similar, pero en los casos donde esto no aplica, puede llevar hebillas de los dos lados, así la orejera quedará bien en su lugar. La orejera no debe de ser de esas tipo gringo que van como con pasadores que se pueden recorrer hasta cualquier parte, porque no cumplen con la función de impedir que la cabezada se mueva excesivamente para atrás. No hay que abusar en los botones de cuero crudo como adorno, porque estos pueden rozar al caballo.',
      'Estas cabezadas con cadenilla no son muy comunes, ni tampoco muy recomendables, salvo para ocasiones donde se montará tranquilamente (tipo desfile y en monturas de Gala o Gran Gala) y se es un jinete experimentado, con buena mano y se tiene un caballo muy bien arrendado, pues las cadenillas por su grosor, al repartir en una superficie menor el peso del freno, riendas, etc., imprimen más rigor en la nuca.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cabezada-cadenilla.avif']
  },
  {
    variante: 'cabezadas de orejera dividida',
    cat: 'arreos de cabeza',
    subcat: 'cabezadas',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'cabezadas-orejera.avif',
    cabeza: 'cabezadadividida.avif',
    zindex: 32,
    text: [
      'La cabezada charra tiene por lo general una sola hebilla para ajustarlo y va del lado de montar. Esto es suficiente cuando se va a usar en caballos con cabezas de tamaño similar, pero en los casos donde esto no aplica, puede llevar hebillas de los dos lados, así la orejera quedará bien en su lugar. La orejera no debe de ser de esas tipo gringo que van como con pasadores que se pueden recorrer hasta cualquier parte, porque no cumplen con la función de impedir que la cabezada se mueva excesivamente para atrás. No hay que abusar en los botones de cuero crudo como adorno, porque estos pueden rozar al caballo.',
      'Estas cabezadas en vez de tener la orejera diagonal y con chapetones, tiene una ranura que divide la cabezada longitudinalmente en la zona donde está la oreja. Aun así, son más recomendables las orejeras tradicionales.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cabezada-orejera.avif']
  },
  {
    variante: 'cabezadas de gala',
    cat: 'arreos de cabeza',
    subcat: 'cabezadas',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: 'cabezadas-gala.avif',
    cabeza: 'cabezada.avif',
    zindex: 32,
    text: [
      'La cabezada charra tiene por lo general una sola hebilla para ajustarlo y va del lado de montar. Esto es suficiente cuando se va a usar en caballos con cabezas de tamaño similar, pero en los casos donde esto no aplica, puede llevar hebillas de los dos lados, así la orejera quedará bien en su lugar. La orejera no debe de ser de esas tipo gringo que van como con pasadores que se pueden recorrer hasta cualquier parte, porque no cumplen con la función de impedir que la cabezada se mueva excesivamente para atrás. No hay que abusar en los botones de cuero crudo como adorno, porque estos pueden rozar al caballo.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['cabezada-gala.avif']
  },
  // *****************************************
  // RIENDAS
  // *****************************************
  {
    variante: 'riendas lisas',
    cat: 'arreos de cabeza',
    subcat: 'riendas',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'riendas-lisas.avif',
    zindex: 33,
    text: [
      'Las riendas deben de tener el largo adecuado y no como esas larguísimas que usan algunos ahora. Deben ser de mismo material, motivos y colores que el ronzal, bozalillo y gargantón de hilo. La rienda no se toma como si fuera ramo de flores, ni se manquea, y los movimientos deben de ser lo más discretos e imperceptibles posibles.'
    ],
    descLink: 'https://youtu.be/nXI2PaMUzVA?si=pQw5apTtKSEkW96A'
  },
  {
    variante: 'riendas botones',
    cat: 'arreos de cabeza',
    subcat: 'riendas',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'riendas-botones.avif',
    zindex: 33,
    text: [
      'Las riendas deben de tener el largo adecuado y no como esas larguísimas que usan algunos ahora. Deben ser de mismo material, motivos y colores que el ronzal, bozalillo y gargantón de hilo. La rienda no se toma como si fuera ramo de flores, ni se manquea, y los movimientos deben de ser lo más discretos e imperceptibles posibles.'
    ],
    descLink: 'https://youtu.be/nXI2PaMUzVA?si=pQw5apTtKSEkW96A'
  },
  // *****************************************
  // BOZAL Y BOZALILLO
  // *****************************************
  {
    variante: 'bozal',
    cat: 'arreos de cabeza',
    subcat: 'bozal y bozalillo',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'bozal.avif',
    zindex: 34,
    text: [
      'El bozal puede ir solo (sin la jáquima completa) y sujeto por las cabezadas. Dependiendo de su material, irá haciendo juego con las riendas, ronzal, gargantón y resto de los textiles. Si es de cuero crudo con el resto de elementos de ese material.'
    ]
  },
  {
    variante: 'bozalillo',
    cat: 'arreos de cabeza',
    subcat: 'bozal y bozalillo',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'bozalillo.avif',
    zindex: 34,
    text: [
      'Dependiendo de su material, irá haciendo juego con las riendas, ronzal, gargantón y resto de los textiles. El bozalillo tiene una manera correcta y muy charra de colocarse: el bozal por fuera de la cabezada y a la altura de los trocillos, el ahogador sin apretar exageradamente (que quepa un puño), el copete por debajo del frontil. No debe llevar colguijos ni innovaciones en el frontil.'
    ],
    descLink: 'https://youtu.be/hYc7zqlGmak?si=OV0E-83yJOzCvWQB'
  },
  // *****************************************
  // RONZALES Y GARGANTONES
  // *****************************************
  {
    variante: 'ronzal al bozal',
    cat: 'arreos de cabeza',
    subcat: 'ronzales y gargantones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
    portador: 'caballo',
    runway: 'ronzales-bozal.avif',
    require: ['bozal', 'bozalillo'],
    requiremessage: 'Requiere bozal o bozalillo',
    zindex: 35,
    text: [
      'El ronzal sirve para apersogar al caballo cuando nos apeamos y para conducirlo a pie o desde otro caballo si hace falta. (Indispensable en exteriores) Existen varias maneras de colocarlo en cada uno de los extremos, siendo el más común el que se ata al bozal por medio de la gaza que tiene, y el resto se forman vueltas y se atan con el tiento delantero del lado de montar (en el lado contrario en las albardas).'
    ],
    descLink: 'https://youtu.be/bkqvyQSJypQ?si=2mC2kS6mlOLBBc--'
  },
  {
    variante: 'ronzal al cuello',
    cat: 'arreos de cabeza',
    subcat: 'ronzales y gargantones',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'ronzales-cuello.avif',
    zindex: 35,
    text: [
      'El ronzal sirve para apersogar al caballo cuando nos apeamos y para conducirlo a pie o desde otro caballo si hace falta. (Indispensable en exteriores) Existen varias maneras de colocarlo en cada uno de los extremos, siendo el más común el que se ata al bozal por medio de la gaza que tiene, y el resto se forman vueltas y se atan con el tiento delantero del lado de montar (en el lado contrario en las albardas).',
      'Cuando se usa de esta manera y se conduce el caballo a pie, la lazada debe quedar lo más arriba y cerca de la garganta del caballo, para que el caballo la respete.'
    ],
    descLink: 'https://youtu.be/bkqvyQSJypQ?si=2mC2kS6mlOLBBc--'
  },
  {
    variante: 'ronzal anudado como gargantón',
    cat: 'arreos de cabeza',
    subcat: 'ronzales y gargantones',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'ronzales-anudado.avif',
    restrictsubcat: ['pecho y encuentro'],
    restricted: [
      'pechera',
      'pechopretal',
      'pechopretal tejido',
      'pechopretal forrado',
      'gargantón de cuero'
    ],
    restrictedmessage: 'No se usa con pechera, pechopretal o gargantón de cuero',
    zindex: 1,
    text: [
      'El ronzal sirve para apersogar al caballo cuando nos apeamos y para conducirlo a pie o desde otro caballo si hace falta. (Indispensable en exteriores) Existen varias maneras de colocarlo en cada uno de los extremos, siendo el más común el que se ata al bozal por medio de la gaza que tiene, y el resto se forman vueltas y se atan con el tiento delantero del lado de montar (en el lado contrario en las albardas).',
      'El ronzal se puede anudar para formar un alamar que caiga en medio del encuentro a modo de gargantón.'
    ],
    descLink: 'https://youtu.be/CRzH7HFc9Jw?si=fQecmb8II2w4ssfj'
  },
  {
    variante: 'gargantón de alamar fijo',
    cat: 'arreos de cabeza',
    subcat: 'ronzales y gargantones',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'ronzales-garganton.avif',
    restrictsubcat: ['pecho y encuentro'],
    restricted: [
      'pechera',
      'pechopretal',
      'pechopretal tejido',
      'pechopretal forrado',
      'gargantón de cuero'
    ],
    restrictedmessage: 'No se usa con pechera, pechopretal o gargantón de cuero',
    zindex: 1,
    text: [
      'Los gargantones con alamares, botones y escobetillas ya no tienen la doble función de ser adorno y ronzal, pero al seguir siendo en esencia un ronzal, no deben usarse al mismo tiempo que un ronzal.',
      'Dependiendo de su material, irá haciendo juego con las riendas, ronzal, gargantón y resto de los textiles.'
    ],
    descLink: 'https://youtu.be/CRzH7HFc9Jw?si=fQecmb8II2w4ssfj'
  },
  // *****************************************
  // *****************************************
  // AMANSAR Y ARRENDAR
  // *****************************************
  // *****************************************
  {
    variante: 'anquera',
    cat: 'amansar y arrendar',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'amansar-anquera.avif',
    allowsame: true,
    zindex: 24,
    text: [
      'Es una cubierta pesada, de cuero de timbre, a modo de enagüilla o gualdrapa, formada de gajos unidos entre sí. Le ha de llegar al caballo hasta una cuarta arriba de las corvas. En su parte baja, y alrededor, leva unos cogajitos de fierro, más o menos artísticos, que se aman higas, y de ellas otros colgajitos penden, que se denominan coscojos o brincos y el conjunto Ruedo (ruido). Sirven para quitarles las cosquillas, amansarlos, aposturarles la cola, asentarles el paso, educarles el tercio posterior, y de protección contra las cornadas de los toros, contra los pajuelazos de las reatas cuando ser revientan, etc.',
      'No suelen ir adornadas, pero en caso de serlo, las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['anquera.avif']
  },
  {
    variante: 'falsarienda',
    cat: 'amansar y arrendar',
    subcat: '',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'amansar-falsarienda.avif',
    replacecat: ['arreos de cabeza'],
    restrictsubcat: [
      'frenos',
      'cabezadas',
      'riendas',
      'bozal y bozalillo',
      'ronzales y gargantones'
    ],
    zindex: 36,
    text: [
      'Se llama equivocadamente Falsa Rienda al conjunto que forma la jáquima con bozal (normalmente de cuero crudo) y el ronzal de crin de caballo que anudado formara a la vez la falsa rienda y el ronzal para conducirlo a pie. El proceso entero de arrendamiento cuenta con tres etapas principales: Solo falsa rienda, Falsa rienda con freno, y rienda limpia.',
      'Aquí se muestra en la primera etapa.'
    ]
  },
  {
    variante: 'falsarienda con freno',
    cat: 'amansar y arrendar',
    subcat: '',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'amansar-falsarienda-freno.avif',
    replacecat: ['arreos de cabeza'],
    zindex: 36,
    text: [
      'Se llama equivocadamente Falsa Rienda al conjunto que forma la jáquima con bozal (normalmente de cuero crudo) y el ronzal de crin de caballo que anudado formara a la vez la falsa rienda y el ronzal para conducirlo a pie. El proceso entero de arrendamiento cuenta con tres etapas principales: Solo falsa rienda, Falsa rienda con freno, y rienda limpia.',
      'En la segunda etapa, hay esta fase donde solo se le cuelga el freno sin cabestrillos para que el caballo aprenda a portarlo y se acostumbre a llevarlo en la boca sin que este accione ni le de ninguna señal por el momento.'
    ],
    restrictsubcat: [
      'frenos',
      'cabezadas',
      'riendas',
      'bozal y bozalillo',
      'ronzales y gargantones'
    ],
  },
  {
    variante: 'falsarienda con freno y riendas',
    cat: 'amansar y arrendar',
    subcat: '',
    etiqueta: ['faena'],
    portador: 'caballo',
    runway: 'amansar-falsarienda-frenoyriendas.avif',
    replacecat: ['arreos de cabeza'],
    zindex: 36,
    restrictsubcat: [
      'frenos',
      'cabezadas',
      'riendas',
      'bozal y bozalillo',
      'ronzales y gargantones'
    ],
    text: [
      'Se llama equivocadamente Falsa Rienda al conjunto que forma la jáquima con bozal (normalmente de cuero crudo) y el ronzal de crin de caballo que anudado formara a la vez la falsa rienda y el ronzal para conducirlo a pie. El proceso entero de arrendamiento cuenta con tres etapas principales: Solo falsa rienda, Falsa rienda con freno, y rienda limpia.',
      'En la segunda etapa cuando se le ponen las riendas (sin la gaza y botón), la rienda del freno se enreda en la falsa rienda y se va ajustando a medida que se va haciendo una transición entre las ordenes, primero solo acciona la falsa, luego falsa y rienda al mismo tiempo, y a final solo la del freno, hasta que la falsa termina por quitarse o llevarse solo por si acaso (en esta etapa el bozal y falsa pueden reducirse de grosor), hasta que queda de Rienda Limpia. Este proceso puede durar varios meses.'
    ]
  },
  // *****************************************
  // *****************************************
  // ARREOS DE TRABAJO
  // *****************************************
  // *****************************************
  {
    variante: 'reata',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    garrocha: 'reata.avif',
    version: {
      'cantinas redondas': 'reata-cantina-redonda.avif',
      'cantinas cuadradas': 'reata-cantina-cuadrada.avif',
      'cantinas de cartera': 'reata-cantina-cuadrada.avif',
      'cantinas de vaquerillos': 'reata-cantina-cuadrada.avif',
    },
    zindex: 5,
    text: [
      'La reata tiene diferentes formas de llevarse en la montura según el tipo de montura. Si es de cantinas se lleva debajo de la cantina del lado de montar (de preferencia con correa de hebilla), con las vueltas del tamaño de la cantina, con una media lazada hecha, y con la gaza apuntando hacia atrás.',
      'Si la silla no tiene cantinas, la reata va del lado de la garrocha atada con el tiento delantero, también con media lazada y con la gaza apuntando hacia adelante.'
    ]
  },
  {
    variante: 'chicote',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'arreostrabajo-chicote.avif',
    zindex: 41,
    text: [
      'Si se lleva chicote o látigo puede ir dentro de las cantinas o atado en los tientos del lado de montar si es que del otro lado se lleva la reata.'
    ]
  },
  {
    variante: 'látigo',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'arreostrabajo-latigo.avif',
    zindex: 41,
    text: [
      'Si se lleva chicote o látigo puede ir dentro de las cantinas o atado en los tientos del lado de montar si es que del otro lado se lleva la reata.'
    ]
  },
  {
    variante: 'guante',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'arreostrabajo-guante.avif',
    version: {
      'cuartero de tarugos': 'arreostrabajo-guante-tarugo.avif',
      'cuartero de argolla': 'arreostrabajo-guante.avif',
      'cuartero normal': 'arreostrabajo-guante.avif'
    },
    zindex: 45,
    text: [
      'El guante, se puede llevar en las cantinas, sujeto con un tiento o por el cuartero.'
    ]
  },

  {
    variante: 'cuerno',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'arreostrabajo-cuernito.avif',
    version: {
      'cuartero de argolla': 'arreostrabajo-cuernito-cuartero-argolla.avif',
      'cuartero normal': 'arreostrabajo-cuernito.avif',
      'cuartero de tarugos': 'arreostrabajo-cuernito.avif'
    },
    zindex: 44,
    text: [
      'El cuerno puede ir en las cantinas, o colgando del cuartero. Muy útil para desatar los tientos de la montura y para hacer las gazas de las reatas, agrandar ojales, etc.'
    ]
  },
  {
    variante: 'garrocha',
    cat: 'arreos de trabajo',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: 'armas-garrocha.avif',
    zindex: 48,
    text: [
      'Puede ser de madera o de otate (especie de bambú mexicano) y sirve para trabajar el ganado (cortarlo, arrearlo, levantarlo, etc.), levantar reatas, etc. No hay que confundir con la lanza, que es para la guerra.',
      'Suelen llevar un botón artístico para sujetar las tiras de cuero y la punta metálica o chuzo, puede llevar tres puntas de diferente uso.'
    ]
  },
  // *****************************************
  // *****************************************
  // ARMAS
  // *****************************************
  // *****************************************
  {
    variante: 'machete',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala'],
    portador: 'caballo',
    runway: '',
    extraimg: {
      archivo: 'armas-cintomachetes.avif',
      zindex: 11
    },
    version: {
      'rectas sencillas': 'armas-machete-arciones-rectas.avif',
      'rectas dobles': 'armas-machete-arciones-rectas.avif',
      'sudaderas sencillas': 'armas-machete-arciones-sudaderas.avif',
      'sudaderas dobles': 'armas-machete-arciones-sudaderas.avif'
    },
    allowsame: true,
    require: ['rectas sencillas', 'rectas dobles', 'sudaderas sencillas', 'sudaderas dobles'],
    requiremessage: 'Requiere poner arciones primero.',
    zindex: 37,
    text: [
      'Dependiendo de la categoría y de estilo de la silla se puede llevar machete, sable o espada. Machete para sillas de trabajo, sable para sillas de media gala en adelante y espadas para sillas de Gran Gala o de estilo antiguo donde el uso de espada no resulte anacrónico. Si no se llevan en la cintura como el sable militar, se usan colgando de la horqueta del fuste, de manera que la correa entre por la argolla de los enreatados, de la vuelta y se sujete con la hebilla. La hoja y su funda pasan por entre la arción y deben colgar naturalmente para no dificultar el sacarlo. Por lógica y utilidad deben estar afilados. La empuñadura y/o cachas deben hacer juego con el herraje o estilo de la montura, y la funda con el resto del cueraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['machete.avif'],
    descLink: 'https://youtu.be/-c75x0yZc88?si=_rlgHVXdtb4Ya4wd'
  },
  {
    variante: 'sable',
    cat: 'armas',
    subcat: '',
    etiqueta: ['media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: '',
    extraimg: {
      archivo: 'armas-cintomachetes.avif',
      zindex: 11
    },
    version: {
      'rectas sencillas': 'armas-sable-arciones-rectas.avif',
      'rectas dobles': 'armas-sable-arciones-rectas.avif',
      'sudaderas sencillas': 'armas-sable-arciones-sudaderas.avif',
      'sudaderas dobles': 'armas-sable-arciones-sudaderas.avif'
    },
    require: ['rectas sencillas', 'rectas dobles', 'sudaderas sencillas', 'sudaderas dobles'],
    requiremessage: 'Requiere poner arciones primero.',
    zindex: 37,
    text: [
      'Dependiendo de la categoría y de estilo de la silla se puede llevar machete, sable o espada. Machete para sillas de trabajo, sable para sillas de media gala en adelante y espadas para sillas de Gran Gala o de estilo antiguo donde el uso de espada no resulte anacrónico. Si no se llevan en la cintura como el sable militar, se usan colgando de la horqueta del fuste, de manera que la correa entre por la argolla de los enreatados, de la vuelta y se sujete con la hebilla. La hoja y su funda pasan por entre la arción y deben colgar naturalmente para no dificultar el sacarlo. Por lógica y utilidad deben estar afilados. La empuñadura y/o cachas deben hacer juego con el herraje o estilo de la montura, y la funda con el resto del cueraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['sable.avif'],
    descLink: 'https://youtu.be/-c75x0yZc88?si=_rlgHVXdtb4Ya4wd'
  },
  {
    variante: 'espada',
    cat: 'armas',
    subcat: '',
    etiqueta: ['gala', 'gran gala'],
    portador: 'caballo',
    runway: '',
    extraimg: {
      archivo: 'armas-cintomachetes.avif',
      zindex: 11
    },
    version: {
      'rectas sencillas': 'armas-espada-arciones-rectas.avif',
      'rectas dobles': 'armas-espada-arciones-rectas.avif',
      'sudaderas sencillas': 'armas-espada-arciones-sudaderas.avif',
      'sudaderas dobles': 'armas-espada-arciones-sudaderas.avif'
    },
    require: ['rectas sencillas', 'rectas dobles', 'sudaderas sencillas', 'sudaderas dobles'],
    requiremessage: 'Requiere poner arciones primero.',
    zindex: 37,
    text: [
      'Dependiendo de la categoría y de estilo de la silla se puede llevar machete, sable o espada. Machete para sillas de trabajo, sable para sillas de media gala en adelante y espadas para sillas de Gran Gala o de estilo antiguo donde el uso de espada no resulte anacrónico. Si no se llevan en la cintura como el sable militar, se usan colgando de la horqueta del fuste, de manera que la correa entre por la argolla de los enreatados, de la vuelta y se sujete con la hebilla. La hoja y su funda pasan por entre la arción y deben colgar naturalmente para no dificultar el sacarlo. Por lógica y utilidad deben estar afilados. La empuñadura y/o cachas deben hacer juego con el herraje o estilo de la montura, y la funda con el resto del cueraje.',
      'Las zonas que se suelen adornar son las siguientes: (en verde las principales y en azul las secundarias. Por ejemplo, en las principales suelen estar los bordados y en las secundarias los repujados, pero esto no es una regla.)'
    ],
    descImg: ['espada.avif'],
    descLink: 'https://youtu.be/-c75x0yZc88?si=_rlgHVXdtb4Ya4wd'
  },
  {
    variante: 'lanza',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    runway: 'armas-lanza.avif',
    zindex: 48,
    allowsame: true,
    text: [
      'La lanza ya casi no se usa, y hasta en los desfiles ha sido erróneamente remplazada por la garrocha. En la parte media del asta lleva una tira de cuero llamada portalanza, para sujetarla al brazo cuando no se usa. Debajo de la punta o hierro suele llevar una banderola o gallardete.'
    ]
  },
  {
    variante: 'cuja',
    cat: 'armas',
    subcat: '',
    etiqueta: ['faena', 'media gala', 'gala', 'gran gala'],
    portador: 'caballo',
    garrocha: 'cuja.avif',
    zindex: 6,
    allowsame: true,
    text: [
      'La cuja es una pieza de cuero en forma de cilindro y que sirve para portar la garrocha, lanza o estandarte. Se suele atar en el estribo. Cuando no se cuenta con ella, el asta se puede apoyar en el pie, entre la punta y empeine.'
    ]
  }
];