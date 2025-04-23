<script>
	// Components
	import Subcat from '$lib/components/Menu/Subcat.svelte';
	import Product from '$lib/components/Menu/Product.svelte';
	import Preview from '$lib/components/Menu/Preview.svelte';
	// Data
	import { options, outfit } from '$lib/stores/shared.svelte.js';
	import { cats } from '$lib/stores/cats.svelte.js';
	import { subcats } from '$lib/stores/subcats.svelte.js';
	import { products } from '$lib/stores/productos.svelte.js';

	let filteredSubcats = $derived(
		subcats.filter((subcat) => {
			return subcat.etiqueta.includes(options.etiquette) && subcat.cat == options.cat;
		})
	);

	let filteredProducts = $derived(
		products.filter((product) => {
			return (
				product.etiqueta.includes(options.etiquette) &&
				product.portador == options.portador &&
				product.cat == options.cat &&
				product.subcat == options.subcat
			);
		})
	);
</script>

<div class="content">
	{#if options.subcat == 'sombrero de palma' || options.subcat == 'sombrero de fieltro'}
		<!-- Sombreros-->
		<ul class="preview">
			{#each filteredProducts as product}
				<Preview {product} />
			{/each}
		</ul>
	{:else if !options.subcat && filteredSubcats.length > 0}
		<ul>
			<!-- Existen subcategorias, sin escoger -->
			{#each filteredSubcats as subcat}
				<Subcat {subcat} />
			{/each}
		</ul>
		<!-- Productos sin subcategoria o subcat escogida-->
	{:else if (!options.subcat && filteredSubcats.length === 0) || options.subcat}
		<ul>
			{#each filteredProducts as product}
				<Product {product} />
			{/each}
		</ul>
	{/if}
</div>

<style>
	.content {
		&::-webkit-scrollbar {
			width: 0.5em;
		}

		&::-webkit-scrollbar-track {
			background: var(--color-menu);
			width: 1em;
			border-radius: 50px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--color-buttons);
			width: 0.5em;
			border-radius: 50px;
		}
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		/* min-height: 130%; */
		/* max-height: 100%; */
		/* height: 120%; */
		overflow-y: scroll;
	}

	@media screen and (min-width: 1024px) {
		.content {
			flex: 1;
			height: fit-content;
			display: flex;
			flex-direction: column;
			min-height: 0;
			/* overflow: visible; */
			max-width: 100%;
			max-height: 100%;
			overflow: auto;
			overflow-x: hidden;
		}

		.preview {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			min-height: 0;
			width: 100%;
			/* flex: 1; */
			column-gap: 0.5em;
			row-gap: 0.5em;
			max-height: 100%;
			overflow-y: auto;
			align-content: start;
			padding-right: 1em;

			&::-webkit-scrollbar {
				width: 0.5em;
			}

			&::-webkit-scrollbar-track {
				background: var(--color-menu);
				width: 1em;
				border-radius: 50px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: var(--color-buttons);
				width: 0.5em;
				border-radius: 50px;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		.preview {
			grid-template-columns: repeat(3, 1fr);
			gap: 1em;
		}
	}
</style>
