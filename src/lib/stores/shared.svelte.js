export let visible = $state({
  menu: false,
  productMenu: false,
  frameBack: false,
  frameGarrocha: false
})

export const options = $state({
  etiquette: '',
  portador: 'jinete',
  cat: '',
  subcat: '',
  barbuquejo: false,
})

export const outfit = $state({
  jinete: [],
  caballo: []
})

export const current = $state({
  jinete: {},
  caballo: {}
})


export const windowSize = $state({
  width: 0,
})