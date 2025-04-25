<script>
	import { options } from '$lib/stores/shared.svelte.js';
	import { browser } from '$app/environment';
	import gsap from 'gsap';

	const etiquetteList = ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'];
	let currentIndex = $state(0);

	function updateEtiquette(etiquette, index) {
		gsap.to('#etiquetteSelected', { xPercent: index * 100 });
		options.etiquette = etiquette;
		currentIndex = index;
	}
</script>

<div class="etiquette {options.portador === 'jinete' ? 'jinete' : 'caballo'}">
	{#each etiquetteList as etiquette, index}
		<button
			class="item"
			onclick={(e) => {
				updateEtiquette(etiquette, index);
			}}
		>
			<span>
				{etiquette}
			</span>
		</button>
	{/each}
	<div id="etiquetteSelected" class="selected {options.etiquette == '' ? 'hidden' : ''}"></div>
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
			height: 100%;
			background-color: var(--color-page-bg);
			border-radius: 50px;
			left: 50%;
			transform: translateX(-50%);
			// border: solid var(--color-buttons) thin;
			overflow: hidden;
		}

		.selected {
			position: absolute;
			top: 0;
			left: 0em;
			width: 7em;
			height: 100%;
			background-color: var(--color-buttons);
			z-index: 1;
			border-radius: 50px;

			&.hidden {
				opacity: 0;
			}
		}

		.item {
			position: relative;
			cursor: pointer;
			width: 7em;
			z-index: 2;
			background-color: transparent;
			mix-blend-mode: difference;

			span {
				color: var(--color-page-bg);
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
