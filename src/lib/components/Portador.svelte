<script>
	import { options } from '$lib/stores/shared.svelte';
	import { fade } from 'svelte/transition';

	import { gsap } from 'gsap';
	import { Flip } from 'gsap/all';
	import { tick } from 'svelte';
	gsap.registerPlugin(Flip);

	const portadores = ['jinete', 'caballo'];

	async function togglePortador(nombre) {
		const runwayImgs = gsap.utils.toArray('.runway img');
		const state = Flip.getState(['.runway', '.hero']);

		options.portador = nombre;

		await tick();

		Flip.from(state, {
			absolute: true,
			duration: 0.5
		});
	}
</script>

{#snippet button(nombre)}
	<button
		class={options.portador === nombre ? 'active' : ''}
		onclick={() => togglePortador(nombre)}
	>
		<p>{nombre}</p>
	</button>
{/snippet}

<div class="portador">
	{@render button('jinete')}
	{@render button('caballo')}

	{#key options.portador}
		<div
			class="selected {options.portador === 'jinete' ? 'left' : 'right'}"
			transition:fade={{ duration: 300 }}
		></div>
	{/key}
</div>

<style>
	.portador {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.portador {
			position: relative;
			display: flex;
			gap: 2em;
			padding: 0em 1em;
			height: 100%;
		}

		button {
			width: 5em;
			overflow: hidden;
			background-color: transparent;

			p {
				transition: all 0.3 ease;
			}
		}

		button.active {
			p {
				transition: all 0.3 ease;
				filter: invert();
			}
		}

		.selected {
			position: absolute;
			top: 0;
			height: 100%;
			width: 50%;
			border: solid var(--color-text) 1px;
			border-radius: 50px;
			background-color: var(--color-buttons);
			z-index: -1;
		}

		.selected.left {
			left: 0;
		}

		.selected.right {
			left: 50%;
		}
	}
</style>
