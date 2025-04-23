<script>
	import { options } from '$lib/stores/shared.svelte.js';

	const etiquetteList = ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'];
</script>

<div class="etiquette {options.portador === 'jinete' ? 'jinete' : 'caballo'}">
	{#each etiquetteList as etiquette}
		<button
			class="item {options.etiquette === etiquette ? 'active' : ''}"
			onclick={(e) => {
				e.preventDefault();
				options.etiquette = etiquette;
			}}
		>
			{etiquette}
		</button>
	{/each}
</div>

<style lang="scss">
	.etiquette {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.etiquette {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2em;
			height: 100%;
			background-color: var(--color-menu);
			padding: 0em 2em;
			border-radius: 50px;
			left: 50%;
			transform: translateX(-50%);
		}

		.item {
			position: relative;
			cursor: pointer;

			&.active {
				font-weight: 700;
			}

			&:hover {
				font-weight: 700;
				transition: all 0.5s ease 50ms;

				&::before {
					transition: all 0.5s ease 50ms;
					transform: scale(1);
				}
			}

			&::before {
				content: '';
				position: absolute;
				bottom: -0.25em;
				left: 0;
				width: 100%;
				height: 1px;
				border-radius: 50%;
				transform: scale(0);
				background-color: var(--color-text);
				/* transform-origin: left; */
				transition: all 0.5s ease 50ms;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		.etiquette {
			&.caballo {
				// width: 50%;
			}
		}
	}
</style>
