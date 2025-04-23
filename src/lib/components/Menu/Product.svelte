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
		outfitted = outfit[options.portador].some(
			(item) => item.variante === product.variante && item.subcat === product.subcat
		);
		// Require individual
		disabled = product.require
			? !product.require.some((req) =>
					outfit[options.portador]?.some((item) => {
						return item.variante === req;
					})
				)
			: false;
		// Restricted individual
		restricted = product.restricted
			? product.restricted.some((req) =>
					outfit[options.portador]?.some((item) => {
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

<button
	class="product"
	onclick={handleProduct}
	disabled={disabled || restricted || etiquetteRestricted}
>
	<div class="product--main">
		<p class="product--name">{product.variante}</p>
		{#if outfitted}
			<div class="check">
				<img src="/img/icons/check.svg" alt="Check" />
			</div>
		{/if}
	</div>
	{#if disabled && product.requiremessage}
		<p class="message">{product.requiremessage}</p>
	{:else if restricted}
		<p class="message">{product.restrictedmessage}</p>
	{/if}
	{#if etiquetteRestricted}
		<p class="message">Incompatible con este nivel de etiqueta</p>
	{/if}
</button>

<style>
	.product {
		--height: 2em;
		position: relative;
		width: 100%;
		padding: 0.5em 0;

		&:disabled {
			.product--name {
				color: #888888;
				/* color: #515151; */
				font-weight: 300;
				text-decoration: line-through;
			}
		}
	}

	.product--main {
		display: flex;
		align-items: center;
		gap: 1em;
		font-weight: 500;
	}

	.product--name {
		text-align: left;
		/* border: solid red thin; */
	}

	.check {
		border-radius: 50%;
		background-color: #ffffff;
		padding: 5px;
		height: var(--height);
		width: var(--height);

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}

	.message {
		width: 100%;
		font-size: 0.7em;
		/* height: 1em; */
		text-align: left;
	}
</style>
