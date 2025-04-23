import { visible, outfit, options, current } from '$lib/stores/shared.svelte';
import { products } from '$lib/stores/productos.svelte';
import { subcats } from '$lib/stores/subcats.svelte';

export function updateRunway(target) {
  if (target.version) {
    const matchingItem = outfit[options.portador].find((item) => {
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
  const exists = outfit[options.portador].some(
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
      outfit[options.portador].push(clone);
    }
  } else {
    let dependenciesToRemove = new Set()
    // Filtrar + reunir dependencias
    outfit[options.portador] = outfit[options.portador].filter((item) => {
      let shouldRemove = false
      // condiciones
      const sameSubcat = product.subcat && item.subcat && item.subcat === product.subcat;
      const sameCat = !product.subcat && !item.subcat && item.cat === product.cat;
      const isMutuallyExclusive = product.replacecat && (product.replacecat.includes(item.subcat) || product.replacecat.includes(item.cat));

      if (isMutuallyExclusive) shouldRemove = true;
      if (sameSubcat && !item.allowsame) shouldRemove = true;
      if (sameCat && !item.allowsame) shouldRemove = true;

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
    outfit[options.portador] = outfit[options.portador].filter(
      (item) => !dependenciesToRemove.has(item.variante)
    );

    if (!options.barbuquejo) {
      current[options.portador] = clone // para InfoCol
    }
    outfit[options.portador].push(clone);
    if (options.barbuquejo) {
      const barbuquejo = products.find((product) => product.variante == 'barbuquejo');
      outfit[options.portador].push(barbuquejo)

    }
  }

  // MODIFY
  if (product.modify) {
    const toBeModified = outfit[options.portador].filter((item) => {
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
  // console.log('products.length: ', products.length)
}

export function removeProduct(product) {
  if (product.variante !== 'barbuquejo') {
    current[options.portador] = {} // resetear infoCol excepto para barbie
  }
  // imagen original para productos modificados
  if (product.modify) {
    product.modify.forEach((item) => {
      outfit[options.portador].forEach((outfitItem) => {
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
      outfit[options.portador] = outfit[options.portador].filter((item) => !matchingSubcat.dependencies.includes(item.subcat))
    }
  }
  // quitar dependencias a nivel individual
  if (product.dependencies) {
    outfit[options.portador] = outfit[options.portador].filter((item) => !product.dependencies.includes(item.variante))
  }

  if (product.back) { visible.frameBack = false }
  if (product.garrocha) { visible.frameGarrocha = false }

  // quitar producto
  outfit[options.portador] = outfit[options.portador].filter(
    (item) =>
      !(
        item.variante === product.variante &&
        item.cat === product.cat &&
        item.subcat === product.subcat
      )
  );
}