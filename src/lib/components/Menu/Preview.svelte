<script>
	import { visible, outfit, options, windowSize } from '$lib/stores/shared.svelte';
	import { wearProduct, removeProduct } from '$lib/scripts/productLogic';
	import { tick } from 'svelte';
	const { product, action = null } = $props();

	let width = $state(windowSize.width);
	let outfitted = $state(false);
	let disabled = $state(false);
	let restricted = $state(false);
	let etiquetteRestricted = $state(false);

	etiquetteRestricted = product.etiqueta.includes(options.etiquette) ? false : true;

	$effect(() => {
		outfitted = outfit[options.portador][options.etiquette].some(
			(item) => item.variante === product.variante && item.subcat === product.subcat
		);
		// Require individual
		disabled = product.require
			? !product.require.some((req) =>
					outfit[options.portador][options.etiquette]?.some((item) => {
						return item.variante === req;
					})
				)
			: false;
		// Restricted individual
		disabled = product.restricted
			? product.restricted.some((req) =>
					outfit[options.portador][options.etiquette]?.some((item) => {
						restricted = true;
						return item.variante === req;
					})
				)
			: false;
	});

	async function handleProduct() {
		if (outfitted) {
			removeProduct(product);
		} else {
			wearProduct(product);
		}
		if (windowSize.width < 768) {
			action();
			await tick();
			visible.menu = false;
		}
	}
</script>

<button class="preview--item" aria-label={product.variante} onclick={handleProduct}>
	<img
		src={`/img/runway/${options.portador}/${product.preview}`}
		alt={product.variante}
		draggable="false"
	/>
	{#if outfitted}
		<div class="check">
			<img src="/img/icons/check.svg" alt="Check" />
		</div>
	{/if}
</button>

<style>
	.preview--item {
		position: relative;
		background-color: var(--color-text);
		border-radius: var(--border-radius-light);
		width: 100%;
		aspect-ratio: 1/1;

		img {
			width: 100%;
			object-fit: contain;
		}

		.check {
			position: absolute;
			bottom: 0.5em;
			left: 0.5em;
			--height: 1.5em;
			border-radius: 50%;
			background-color: var(--color-menu);
			padding: 4px;
			height: var(--height);
			width: var(--height);

			img {
				object-fit: contain;
				height: 100%;
				width: 100%;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		.preview--item {
			/* width: calc(100% - 0.5em); */
		}
	}
</style>
