<script>
	import RunwayBtn from '$lib/components/RunwayBtn.svelte';
	import { visible, outfit, options, current } from '$lib/stores/shared.svelte';
	import { tick } from 'svelte';
	import { fly } from 'svelte/transition';

	function resetOutfit() {
		outfit[options.portador] = [];
		current[options.portador] = {};
	}

	function toggleMirror() {
		visible.frameBack = !visible.frameBack;
	}
</script>

<div class="runway {options.portador}">
	<div class="frame-front">
		{#if options.portador == 'jinete'}
			<img src="/img/base-front.avif" alt="jinete" style:z-index={2} draggable="false" />
		{/if}
		{#each outfit[options.portador] as item}
			{#if item.runway}
				<img
					src={`/img/runway/${options.portador}/${item.runway}`}
					alt={item.variante}
					style:z-index={item.zindex}
					draggable="false"
				/>
			{/if}
			{#if item.extraimg}
				<img
					src={`/img/runway/${options.portador}/${item.extraimg.archivo}`}
					alt={`${item.variante} parte 2`}
					style:z-index={item.extraimg.zindex}
					draggable="false"
				/>
			{/if}
		{/each}

		{#if visible.frameBack}
			<div class="frame-back" transition:fly={{ delay: 50, duration: 300, x: 30 }}>
				{#each outfit[options.portador] as item}
					{#if item.back}
						<img
							src={`/img/runway/${options.portador}/${item.back}`}
							alt={item.variante}
							style:z-index={item.zindex}
							draggable="false"
						/>
					{/if}
				{/each}
			</div>
		{/if}

		{#if visible.frameGarrocha}
			<div class="frame-garrocha">
				{#each outfit[options.portador] as item}
					{#if item.garrocha}
						<img
							src={`/img/runway/${options.portador}/garrocha/${item.garrocha}`}
							alt={item.variante}
							style:z-index={item.zindex}
							draggable="false"
						/>
					{/if}
				{/each}
			</div>
		{/if}

		{#if visible.frameCabeza}
			<div class="frame-cabeza">
				{#each outfit[options.portador] as item}
					{#if item.cabeza}
						<img
							src={`/img/runway/${options.portador}/cabeza/${item.cabeza}`}
							alt={item.variante}
							style:z-index={item.zindex}
							draggable="false"
						/>
					{/if}
				{/each}
			</div>
		{/if}
	</div>

	{#if outfit[options.portador].length > 0}
		<RunwayBtn alt="Reniciar" icon="/img/icons/reset.svg" action={resetOutfit} />
	{/if}
	{#if options.portador === 'jinete'}
		<RunwayBtn alt="Espejo" icon="/img/icons/mirror.svg" action={toggleMirror} position="left" />
	{/if}
</div>

<style lang="scss">
	.runway {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-runway);
		z-index: 1;
		border-radius: var(--border-radius-light);
		user-select: none;

		.frame-front {
			position: relative;
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;

			img {
				position: absolute;
				object-fit: contain;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
		}
	}

	.jinete {
		aspect-ratio: 1 / 2;
		grid-column-start: 2;
		grid-column: span 1;
		grid-row-start: 2;
		min-width: calc(100% - 4em);

		.frame-front {
			aspect-ratio: 1 / 2;
			width: 100%;
			background-image: url('/img/base-front.avif');
			background-position: center;
			background-size: contain;

			&::before {
				position: absolute;
				content: '';
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url('/img/base-mano.avif');
				background-position: center;
				background-size: contain;
				z-index: 13;
			}
		}

		.frame-back {
			display: none;
		}
	}

	.caballo {
		height: fit-content;
		align-self: center;
		grid-column-start: 1;
		grid-column: span 2;
		grid-row: 2 / 3;
		border-radius: var(--border-radius-light);

		.frame-front {
			width: 100%;
			aspect-ratio: 1440 / 1165;
			background-image: url('/img/base-caballo.avif');
		}

		.frame-garrocha,
		.frame-cabeza {
			position: absolute;
			height: auto;
			width: 30%;
			background-color: var(--color-runway);
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			border: solid var(--color-buttons) thin;
			border-radius: var(--border-radius-light);
			z-index: 100;
			aspect-ratio: 503 / 878;
		}

		.frame-garrocha {
			top: 1em;
			right: 5%;
			background-image: url('/img/base-garrocha.avif');
		}

		.frame-cabeza {
			top: 1em;
			right: 5%;
			background-image: url('/img/base-cabeza.avif');
		}
	}

	@media screen and (min-width: 1024px) {
		.runway {
			height: auto;
			border-radius: var(--border-radius-light);
		}

		.jinete,
		.caballo {
			grid-row: auto;
			aspect-ratio: auto;
		}

		.jinete {
			height: 100%;
			grid-column: 2 / 3;
			grid-row: 1 / 3;
			min-width: none;

			.frame-front {
				height: 100%;
				width: auto;
			}

			.frame-back {
				position: absolute;
				display: block;
				aspect-ratio: 525 / 769;
				width: 56.8%;
				left: -50%;
				// top: 12.533%;
				transform: translateX(30px);
				top: 16.5%;
				background-color: var(--color-runway);
				background-image: url('/img/base-back.avif');
				background-position: center;
				background-size: contain;
				background-repeat: no-repeat;
				border: solid var(--color-buttons) thin;
				border-radius: var(--border-radius-light);
				// opacity: 0;
				transition: 0.3s ease;

				&.visible {
					// opacity: 1;
					// transform: translateX(0);
				}
			}
		}

		.caballo {
			min-width: none;
			height: 100%;
			grid-column: 2 / 4;
			grid-row: 1 / 3;

			.frame-front {
				height: auto;
				width: 100%;
			}
		}
	}
</style>
