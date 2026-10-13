<script>
	import { cats } from '$lib/stores/cats.svelte.js';
	import { visible, options } from '$lib/stores/shared.svelte.js';
	import { fade, crossfade } from 'svelte/transition';
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200)
	});

	function openMenu(e) {
		if (!options.etiquette || !options.portador) return;
		options.subcat = '';
		options.cat = '';
		// document.querySelector('body').classList.add('noscroll');
		const buttonText = e.currentTarget.querySelector('p').textContent;
		options.cat = buttonText;
		visible.menu = true;
	}

	let filteredCats = $derived([
		...new Set(
			cats.filter(
				(cat) =>
					cat.portador == options.portador &&
					cat.etiqueta.some((tag) => options.etiquette.includes(tag))
			)
		)
	]);
</script>

<div class="buttonRow {options.portador}">
	{#if !options.etiquette || !options.portador}
		<p class="intro" out:send={{ key: 'message' }} in:receive={{ key: 'message' }}>
			Elige una de las opciones de gala en la parte superior antes de empezar.
		</p>
	{:else}
		<div class="row" transition:fade={{ duration: 500 }}>
			{#each filteredCats as cat}
				<button class="button {options.cat === cat.nombre ? 'active' : ''}" onclick={openMenu}>
					<div class="icon">
						<img src={cat.icon} alt="Más" />
					</div>
					<p>{cat.nombre}</p>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.intro {
		display: none;
	}

	.buttonRow {
		padding-top: 1em;

		.row {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1em;
			width: 100%;
		}

		.button {
			--size: var(--menu-btn-size);
			display: block;
			height: var(--size);
			width: var(--size);
			margin-bottom: 1em;
		}

		.icon {
			height: 100%;
			width: 100%;

			img {
				object-fit: contain;
				height: 100%;
				width: 100%;
			}
		}

		p {
			display: none;
		}
	}

	.icon {
		background-color: var(--color-text);
		border-radius: 50%;
	}

	@media screen and (min-width: 1024px) {
		.buttonRow {
			display: flex;
			align-items: center;
			padding: 0;
			min-height: 0;

			.row {
				display: initial;
				width: 100%;
			}
		}

		.jinete,
		.caballo {
			padding: 0;
			width: 100%;

			.button {
				position: relative;
				display: flex;
				align-items: center;
				height: var(--menu-btn-size);
				width: var(--menu-btn-size);
				font-family: var(--font-body);
				padding: 0.5em 0;
				margin: 0;
				margin-bottom: 0.5em;
				min-width: 15em;
				max-width: 100%;
				gap: calc(var(--menu-btn-size) / 2);

				&:first-of-type {
					/* margin-top: -0.5em; */
				}

				&:hover {
					p {
						font-weight: 700;
						transition: all 0.3s cubic-bezier(0.1, 0, 0.3, 1);
					}

					.icon {
						transform: scale(1.2);
						transition: transform 0.3s cubic-bezier(0.1, 0, 0.3, 1);
					}
				}

				&.active {
					.icon {
						transform: scale(1.2);
					}
				}

				p {
					display: initial;
					transition: all 0.3s cubic-bezier(0.1, 0, 0.3, 1);
					font-size: 1em;
					// flex: 1;
				}

				.icon {
					height: var(--menu-btn-size);
					width: var(--menu-btn-size);
					transition: transform 0.2s cubic-bezier(0.1, 0, 0.3, 1);
					will-change: transform;
				}
			}
		}

		.caballo {
			padding: 0;

			.row {
				display: block;
			}
		}

		.intro {
			display: initial;
		}

		.row {
			display: block;
		}
	}
</style>
