<script>
	import Etiquette from '$lib/components/Etiquette.svelte';
	import Portador from '$lib/components/Portador.svelte';
	const burger = '/img/icons/burger.svg';
</script>

<nav>
	<a class="logo" href="https://www.preservandolaesencia.com/">
		<img src="/img/logo.svg" alt="Preservando la esencia" />
	</a>
	<Etiquette />
	<Portador />
	<div class="burger">
		<img src={burger} alt="Menú" />
	</div>
</nav>

<style>
	nav {
		height: calc(var(--layout-spacing) * 2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* border-bottom: solid black 1px; */
	}

	.logo {
		height: 100%;
		width: 25%;

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}

	.burger {
		padding: 0.5rem 0;
		height: 100%;
		width: 3em;

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}

	@media screen and (min-width: 768px) {
		nav {
			/* border-bottom: solid orange thin; */
			/* border: solid black thin; */
			/* overflow: hidden; */
		}

		.burger {
			display: none;
		}
	}

	@media screen and (min-width: 1024px) {
		nav {
			--min: 28px;
			--max: 70px;
			--minw: 1024px;
			--maxw: 1920px;
			position: relative;
			height: clamp(var(--min), -20px + 4.68vw, var(--max) * 0.5);
			padding: 0;
		}

		.logo {
			height: 100%;
			width: auto;

			img {
				width: auto;
			}
		}
	}
</style>
