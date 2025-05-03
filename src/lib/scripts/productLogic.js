import { visible, outfit, options, current } from '$lib/stores/shared.svelte';
import { products } from '$lib/stores/productos.svelte';
import { subcats } from '$lib/stores/subcats.svelte';

export function updateRunway(target) {
  if (target.version) {
    const matchingItem = outfit[options.portador][options.etiquette].find((item) => {
      return Object.keys(target.version).some((key) => item.variante == key);
    });
    if (matchingItem) {
      const matchingKey = Object.keys(target.version)?.find((key) => {
        return matchingItem.variante === key;
      });
      return target.version[matchingKey];
    }
  }
  return target.runway;
}

export function findRunway(target) {
  const matchingProduct = products.find((product) => product.variante == target);
  return matchingProduct.runway;
}

export function wearProduct(product) {
  let clone = structuredClone(product);
  // VERSION
  if (product.version) clone.runway = updateRunway(product);

  // Unicos
  const exists = outfit[options.portador][options.etiquette].some(
    (item) =>
      item.variante === clone.variante &&
      item.cat === clone.cat &&
      item.subcat === clone.subcat
  );

  // LOGICA
  if (product.allowsame === true) {
    // Agregar producto si no existe
    if (!exists) {
      current[options.portador] = clone
      outfit[options.portador][options.etiquette].push(clone);
    }
  } else {
    let dependenciesToRemove = new Set()
    // Filtrar + reunir dependencias
    outfit[options.portador][options.etiquette] = outfit[options.portador][options.etiquette].filter((item) => {
      let shouldRemove = false
      // condiciones
      const sameSubcat = product.subcat && item.subcat && item.subcat === product.subcat;
      const sameCat = !product.subcat && !item.subcat && item.cat === product.cat;
      const isMutuallyExclusive = product.replacecat && (product.replacecat.includes(item.subcat) || product.replacecat.includes(item.cat));

      if (isMutuallyExclusive) shouldRemove = true;
      if (sameSubcat && !item.allowsame) shouldRemove = true;
      if (sameCat && !item.allowsame) shouldRemove = true;

      // excepciones
      // latigo || chicote
      if (product.variante === 'látigo' && item.variante === 'chicote') shouldRemove = true
      if (product.variante === 'chicote' && item.variante === 'látigo') shouldRemove = true
      // espada || machete
      if (product.variante === 'machete' && item.variante === 'sable') shouldRemove = true
      if (product.variante === 'sable' && item.variante === 'machete') shouldRemove = true

      if (shouldRemove) {
        if (item.dependencies) {
          item.dependencies.forEach(dep => {
            // no añadir a dependencias si se tiene que modificar
            if (!product.modify || !product.modify.includes(dep)) {
              dependenciesToRemove.add(dep);
            }
          });
        }
        // console.log('dependencies to remove: ', dependenciesToRemove)
        return false;
      }
      // sino agregar producto
      return true;
    });
    // Quitar dependencias
    outfit[options.portador][options.etiquette] = outfit[options.portador][options.etiquette].filter(
      (item) => !dependenciesToRemove.has(item.variante)
    );

    outfit[options.portador][options.etiquette].push(clone);

    if (product.variante !== 'barbuquejo') {
      current[options.portador] = clone // para InfoCol
    }
    // Barbuquejo
    if (options.barbuquejo && options.portador === 'jinete' && clone.subcat && (clone.subcat == 'sombrero de palma' || clone.subcat === 'sombrero de fieltro' || clone.subcat === 'estilos antiguos')) {
      const barbuquejo = products.find((product) => product.variante == 'barbuquejo');
      outfit[options.portador][options.etiquette].push(barbuquejo)
    }
  }

  // MODIFY
  if (product.modify) {
    const toBeModified = outfit[options.portador][options.etiquette].filter((item) => {
      return product.modify.includes(item.variante);
    });
    toBeModified.forEach((item) => (item.runway = updateRunway(item)));
  }

  // UI FRAMES
  if (product.back) {
    visible.frameBack = true
  } else {
    visible.frameBack = false
  }

  if (product.garrocha) {
    visible.frameGarrocha = true
  } else {
    visible.frameGarrocha = false
  }

  if (product.cabeza) {
    visible.frameCabeza = true
  } else {
    visible.frameCabeza = false
  }

  // Reata caballo
  if (product.variante === 'reata' && options.portador === 'caballo') {
    const cantinasExist = outfit[options.portador][options.etiquette].some((item) =>
      item.variante === 'cantinas redondas' ||
      item.variante === 'cantinas cuadradas'
    )
    if (cantinasExist) visible.frameGarrocha = false

    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      chapetones.garrocha = ''
    }
  }

  // chapetones
  if (product.subcat === 'atrás de la teja' && options.portador === 'caballo') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      chapetones.extraimg = chapetones.extraimg.filter(item => item.archivo !== 'tientos-saraperos.avif')
    }
  }
  if (product.variante === 'chicote' || product.variante === 'látigo') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      chapetones.extraimg = chapetones.extraimg.filter(item => item.archivo !== 'chapeton-atras-1.avif')
    }
  }

  if (product.variante === 'ronzal al bozal' ||
    product.variante === 'ronzal al cuello' ||
    product.variante === 'falsarienda' ||
    product.variante === 'falsarienda con freno' ||
    product.variante === 'falsarienda con freno y riendas') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      chapetones.runway = ''
    }
  }

}

export function removeProduct(product) {
  if (product.variante !== 'barbuquejo') {
    current[options.portador] = {} // resetear infoCol excepto para barbie
  }
  // imagen original para productos modificados
  if (product.modify) {
    product.modify.forEach((item) => {
      outfit[options.portador][options.etiquette].forEach((outfitItem) => {
        if (item === outfitItem.variante) {
          const defaultRunway = findRunway(item);
          outfitItem.runway = defaultRunway;
        }
      });
    });
  }
  // quitar dependencias a nivel subcategoria
  if (product.subcat) {
    const matchingSubcat = subcats.find((item) => item.nombre === product.subcat);
    if (matchingSubcat?.dependencies?.length) {
      outfit[options.portador][options.etiquette] = outfit[options.portador][options.etiquette].filter((item) => !matchingSubcat.dependencies.includes(item.subcat))
    }
  }
  // quitar dependencias a nivel individual
  if (product.dependencies) {
    outfit[options.portador][options.etiquette] = outfit[options.portador][options.etiquette].filter((item) => !product.dependencies.includes(item.variante))
  }

  if (product.back) { visible.frameBack = false }
  if (product.garrocha) { visible.frameGarrocha = false }
  if (product.cabeza) { visible.frameCabeza = false }



  // quitar producto
  outfit[options.portador][options.etiquette] = outfit[options.portador][options.etiquette].filter(
    (item) =>
      !(
        item.variante === product.variante &&
        item.cat === product.cat &&
        item.subcat === product.subcat
      )
  );

  // Reata cabllo
  if (product.variante === 'reata' && options.portador === 'caballo') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) chapetones.garrocha = 'chapeton.avif'
  }

  // Chapetones
  if (product.subcat === 'atrás de la teja') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      const originalChapetones = products.find((item) => item.variante === 'chapetones' && item.portador === 'caballo')
      const tientos = originalChapetones.extraimg.find((item) => item.archivo === 'tientos-saraperos.avif')
      chapetones.extraimg.push(tientos)
    }
  }

  if (product.variante === 'chicote' || product.variante === 'látigo') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      const originalChapetones = products.find((item) => item.variante === 'chapetones' && item.portador === 'caballo')
      const chapetonAtras1 = originalChapetones.extraimg.find((item) => item.archivo === 'chapeton-atras-1.avif')
      chapetones.extraimg.push(chapetonAtras1)
    }
  }

  if (product.variante === 'ronzal al bozal' ||
    product.variante === 'ronzal al cuello' ||
    product.variante === 'falsarienda' ||
    product.variante === 'falsarienda con freno' ||
    product.variante === 'falsarienda con freno y riendas') {
    const chapetones = outfit[options.portador][options.etiquette].find((item) => item.variante === 'chapetones')
    if (chapetones) {
      chapetones.runway = 'chapeton-frente.avif'
    }
  }
}
