<script>
	// Components
	import Subcat from '$lib/components/Menu/Subcat.svelte';
	import Product from '$lib/components/Menu/Product.svelte';
	import Preview from '$lib/components/Menu/Preview.svelte';
	import Header from '$lib/components/Menu/Header.svelte';

	// Data
	import { cats } from '$lib/stores/cats.svelte.js';
	import { subcats } from '$lib/stores/subcats.svelte.js';
	import { products } from '$lib/stores/productos.svelte.js';
	import { options, visible, outfit } from '$lib/stores/shared.svelte.js';
	import { wearProduct, removeProduct } from '$lib/scripts/productLogic';

	// Utils
	import { fly, slide } from 'svelte/transition';
	import { tick } from 'svelte';

	let selectedCat = $state('');

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

	let filteredSubcats = $derived(subcats.filter((subcat) => subcat.cat == options.cat));

	let productMenuIsVisible = $state(false);

	$effect(() => {
		productMenuIsVisible = (!options.subcat && filteredSubcats.length === 0) || !!options.subcat;
	});
	function closeMenu() {
		visible.menu = false;
		productMenuIsVisible = false;
		document.querySelector('body').classList.remove('noscroll');
	}

	async function closeSubMenu() {
		if (options.subcat) {
			options.subcat = null;
			productMenuIsVisible = false;
		} else {
			productMenuIsVisible = false;
			await tick();
			visible.menu = false;
		}
	}

	function openProductMenu(cat) {
		visible.productMenu = true;
		selectedCat = cat;
	}

	function hideProductMenu() {
		visible.productMenu = false;
	}

	function toggleBarbu() {
		const sombrero = outfit[options.portador].some(
			(item) =>
				item.subcat === 'sombrero de palma' ||
				item.subcat == 'sombrero de fieltro' ||
				item.subcat == 'estilos antiguos'
		);

		if (sombrero) {
			const barbuquejo = products.find((item) => item.variante === 'barbuquejo');
			if (options.barbuquejo) {
				wearProduct(barbuquejo);
			} else {
				removeProduct(barbuquejo);
			}
		}
	}
</script>

<div class="menu" transition:fly={{ x: '-100%', duration: 500 }}>
	<button class="header" onclick={closeMenu}>
		<img src="/img/icons/caret_left.svg" alt="Atrás" />
		<p class="header--title">{options.cat}</p>
	</button>

	<div class="content">
		{#if !options.subcat && filteredSubcats.length > 0}
			<ul>
				{#each filteredSubcats as subcat}
					<Subcat {subcat} />
				{/each}
			</ul>
		{/if}
	</div>
</div>

{#if productMenuIsVisible}
	<div class="menu submenu" transition:fly={{ x: '-100%', duration: 500 }}>
		<button class="header" onclick={closeSubMenu}>
			<img src="/img/icons/caret_left.svg" alt="Atrás" />
			{#if options.subcat}
				<p class="header--title">{options.subcat}</p>
			{:else}
				<p class="header--title">{options.cat}</p>
			{/if}
		</button>
		{#if options.subcat === 'sombrero de palma' || options.subcat === 'sombrero de fieltro' || options.subcat === 'estilos antiguos'}
			<label class="checkbox">
				<input type="checkbox" bind:checked={options.barbuquejo} onchange={toggleBarbu} />
				<p>agregar barbuquejo</p>
			</label>
		{/if}
		<div class="content">
			<ul
				class={options.subcat == 'sombrero de fieltro' || options.subcat == 'sombrero de palma'
					? 'preview'
					: ''}
			>
				{#each filteredProducts as product}
					{#if options.subcat == 'sombrero de fieltro' || options.subcat == 'sombrero de palma'}
						<li class="preview">
							<Preview {product} action={closeSubMenu} />
						</li>
					{:else}
						<Product {product} action={closeSubMenu} />
					{/if}
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style lang="scss">
	.menu {
		position: absolute;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: var(--color-menu);
		padding: 0 var(--container-padding);
		z-index: 51;
		display: flex;
		flex-direction: column;
		// overflow: hidden;

		&.submenu {
			z-index: 52;
		}
	}

	.header {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1em 0;
		gap: 2em;
		border-bottom: solid var(--color-text) 1px;

		&--title {
			font-size: 1.25em;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 1px;
		}

		&--back {
			height: 2em;
			width: 3em;
			background-color: var(--color-menu);

			img {
				object-fit: contain;
				height: 100%;
				width: 100%;
			}
		}
	}

	.checkbox {
		display: flex;
		gap: 1em;
		margin-top: 1em;
		align-items: center;

		p {
			font-size: 1em;
			text-transform: none;
		}
	}

	.content {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		flex: 1;

		ul {
			margin-top: 2em;

			&.preview {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				column-gap: var(--container-padding);
				row-gap: var(--container-padding);
				overflow-y: auto;
			}
		}

		.preview {
		}
	}

	@media screen and (min-width: 1024px) {
		.menu {
			display: none;
		}
	}
</style>
