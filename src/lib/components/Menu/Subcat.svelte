<script>
	import { options, outfit } from '$lib/stores/shared.svelte.js';
	let { subcat } = $props();

	let disabled = $state(false);
	let outfitted = $state(false);
	let restricted = $state(false);
	let etiquetteRestricted = $state(false);

	etiquetteRestricted = subcat.etiqueta.includes(options.etiquette) ? false : true;

	$effect(() => {
		outfitted = outfit[options.portador][options.etiquette].some(
			(item) => item.subcat === subcat.nombre
		);

		// Evaluate disabled
		if (!subcat.require) {
			disabled = false;
		} else {
			disabled = !outfit[options.portador][options.etiquette].some((item) => {
				return subcat.require.includes(item.subcat);
			});
		}
		// Evaluate restricted
		restricted = outfit[options.portador][options.etiquette].some((item) => {
			return (
				subcat.restricted?.includes(item.subcat) ||
				(item.restrictsubcat && item.restrictsubcat.includes(subcat.nombre))
			);
		});
	});

	function selectSubcat() {
		options.subcat = subcat.nombre;
	}
</script>

<div class="subcat">
	<button onclick={selectSubcat} disabled={disabled || restricted || etiquetteRestricted}>
		{#if outfitted}
			<div class="check"></div>
		{/if}
		<p class="subcat--name">{subcat.nombre}</p>
		<div class="icon">
			<img src="/img/icons/caret_right.svg" alt="" />
		</div>
		{#if disabled && subcat.require}
			<p class="message">{subcat.requiremessage}</p>
		{/if}
		{#if restricted && subcat.restrictedmessage}
			<p class="message">{subcat.restrictedmessage}</p>
		{/if}
		{#if etiquetteRestricted}
			<p class="message">Incompatible con este nivel de etiqueta</p>
		{/if}
	</button>
</div>

<style>
	.subcat {
		width: 100%;

		button {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0.75em 0;

			.subcat--name {
				position: relative;
				font-weight: 400;
				text-transform: uppercase;
				text-align: left;
				line-height: 1;
				transition: font-weight 0.3s;

				&::before {
					position: absolute;
					content: '';
					left: 0;
					bottom: -0.5em;
					width: calc(100% + 1em);
					height: 1px;
					border-radius: 50px;
					transform: scale(0);
					background-color: var(--color-buttons);
					transform-origin: left;
					transition: transform 0.5s ease 50ms;
				}
			}

			.check {
				position: absolute;
				top: 0;
				left: -1em;
				background-color: var(--color-text);
				height: 100%;
				width: 0.5em;
			}

			.message {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				font-size: 0.7em;
				height: 1em;
				text-align: left;
			}

			.icon {
				opacity: 0.5;
			}

			&:hover {
				.subcat--name {
					font-weight: 700;

					&::before {
						transition: transform 0.5s ease 50ms;
						transform: scale(1);
					}
				}

				.icon {
					opacity: 1;
				}
			}

			&:disabled {
				text-decoration: line-through;

				&:hover {
					.subcat--name {
						font-weight: 400;

						&::before {
							transform: scale(0);
						}
					}
				}
			}
		}
	}
</style>
