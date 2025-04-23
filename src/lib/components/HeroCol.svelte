<script>
	// Components
	import MobMenu from '$lib/components/Mobile/MobMenu.svelte';
	import MobileOptions from '$lib/components/Mobile/MobOptions.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import ButtonRow from '$lib/components/ButtonRow.svelte';
	// Data
	import { visible, options } from '$lib/stores/shared.svelte.js';
</script>

<div class="hero {options.portador}">
	<ButtonRow />

	{#if visible.menu}
		<Menu />
		<MobMenu />
	{/if}
</div>

<style lang="scss">
	.hero {
		position: relative;

		&.jinete {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}

		&.caballo,
		.jinete {
			grid-column-start: 1;
			grid-column: span 2;
			grid-row: 1 / 2;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero {
			height: 100%;
			position: relative;

			&.jinete,
			&.caballo {
				grid-row: span 2;
			}

			&.jinete {
				grid-column: 3 / 4;
			}

			&.caballo {
				grid-column: 4 / 5;
			}
		}
	}

	@media screen and (min-width: 1440px) {
		.hero {
			&.caballo {
				grid-column: 4 / 5;
			}
		}
	}
</style>
