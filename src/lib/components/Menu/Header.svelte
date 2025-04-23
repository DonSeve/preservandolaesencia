<script>
	import { options, outfit } from '$lib/stores/shared.svelte.js';
	import { products } from '$lib/stores/productos.svelte';
	import { wearProduct, removeProduct } from '$lib/scripts/productLogic';

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

	function goBack() {
		options.subcat = '';
	}
</script>

<header>
	{#if options.subcat}
		<button class="wrapper" onclick={goBack}>
			<div class="icon">
				<img src="/img/icons/caret_left.svg" alt="Atrás" />
			</div>
			<p>{options.subcat}</p>
		</button>
		{#if options.subcat === 'sombrero de palma' || options.subcat === 'sombrero de fieltro' || options.subcat === 'estilos antiguos'}
			<label class="checkbox">
				<input type="checkbox" bind:checked={options.barbuquejo} onchange={toggleBarbu} />
				<p>agregar barbuquejo</p>
			</label>
		{/if}
	{:else}
		<p>{options.cat}</p>
	{/if}
</header>

<style>
	header {
		padding-bottom: 1em;
		border-bottom: solid var(--color-text) 1px;
		/* height: 5em; */
		min-height: 5em;
		margin-bottom: 1em;
		display: flex;
		flex-direction: column;

		.wrapper {
			height: 100%;
			display: flex;
			gap: 1em;
			text-align: left;
		}

		p {
			font-weight: 400;
			font-size: 1.5em;
			hyphens: auto;
			text-transform: uppercase;
		}

		.icon {
			flex-shrink: 0;
			margin-top: 0.5em;

			img {
				object-fit: contain;
				width: 100%;
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
	}
</style>
