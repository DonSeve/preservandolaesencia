<script>
	import '$lib/styles/variables.scss';
	import '$lib/styles/reset.scss';
	import '$lib/styles/base.scss';
	// Components
	import Head from '$lib/components/Head.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroCol from '$lib/components/HeroCol.svelte';
	import InfoCol from '$lib/components/InfoCol.svelte';
	import Runway from '$lib/components/Runway.svelte';
	import MobMenu from '$lib/components/Mobile/MobMenu.svelte';
	import MobOptions from '$lib/components/Mobile/MobOptions.svelte';
	// Data
	import { visible, options, windowSize } from '$lib/stores/shared.svelte.js';
</script>

<Head />
<svelte:window bind:innerWidth={windowSize.width} />

<div class="layout">
	<Nav />

	{#if windowSize.width < 1024}
		<MobOptions />
	{/if}

	<main class="herogrid {options.portador}">
		<InfoCol />
		<Runway />
		<HeroCol />
	</main>

	<Footer />
</div>

<style lang="scss">
	.layout {
		--min: 28px;
		--max: 70px;
		--minw: 1024px;
		--maxw: 1920px;
		--slope: calc((var(--max) - var(--min)) / (var(--maxw) - var(--minw)));
		--intersection: calc(-var(--minw) * var(--slope) + var(--min));
		--middle: calc((var(--intersection) * 1em)+ (var(--slope) * 100vw));
		padding: 0 var(--container-padding);
	}

	.herogrid {
		display: grid;
		grid-template-columns: 1fr;
		// grid-template-columns: 7em 1fr;
		grid-template-rows: auto;
	}

	@media screen and (min-width: 1024px) {
		.layout {
			min-height: 100vh;
			width: 100%;
			padding-top: clamp(var(--min), -20px + 4.68vw, calc(var(--max) * 0.75));
			padding-bottom: clamp(var(--min), -20px + 4.68vw, calc(var(--max) * 0.75));
			padding-left: clamp(var(--min), -20px + 4.68vw, var(--max));
			padding-right: clamp(var(--min), -20px + 4.68vw, var(--max));
			display: grid;
			grid-template-rows: auto 1fr auto;
			row-gap: var(--layout-spacing);
			row-gap: clamp(var(--min), -20px + 4.68vw, var(--max) / 2);
			height: 100vh;
		}

		.herogrid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			column-gap: clamp(var(--min), -20px + 4.68vw, var(--max));
			height: 100%;
			max-height: 100vh;
			grid-template-rows: 1.5fr 1fr;
			overflow: hidden;
			row-gap: 2em;
		}

		.herogrid {
			&.caballo {
				grid-template-columns: repeat(4, 1fr);
			}
		}

		.grok {
			padding: calc(var(--layout-spacing) * 1) calc(var(--layout-spacing) * 2);
		}
	}

	@media screen and (min-width: 1200px) {
		.herogrid {
			// grid-template-rows: 3fr 1fr;
		}
	}

	@media screen and (min-width: 1440px) {
		.herogrid {
			&.caballo {
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}
</style>
