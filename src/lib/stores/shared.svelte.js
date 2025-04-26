

export let visible = $state({
  menu: false,
  productMenu: false,
  frameBack: false,
  frameGarrocha: false,
  frameCabeza: false,
})

export const options = $state({
  etiquette: '',
  portador: 'jinete',
  cat: '',
  subcat: '',
  barbuquejo: false,
  ribete: false,
})

export const outfit = $state({
  jinete: {
    'faena': [],
    'media gala': [],
    'gala': [],
    'gran gala': [],
    'ceremonia': [],
  },
  caballo: {
    'faena': [],
    'media gala': [],
    'gala': [],
    'gran gala': [],
    'ceremonia': [],
  }
})

export const current = $state({
  jinete: {},
  caballo: {}
})


export const windowSize = $state({
  width: 0,
})