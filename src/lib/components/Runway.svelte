<script>
	import html2canvas from 'html2canvas';
	import RunwayBtn from '$lib/components/RunwayBtn.svelte';
	// import Bar from '$lib/components/Bar.svelte';
	import { visible, outfit, options, current } from '$lib/stores/shared.svelte';
	import { examples } from '$lib/stores/examples.svelte';
	import { products } from '$lib/stores/productos.svelte';
	import { wearProduct } from '$lib/scripts/productLogic';

	import { fly } from 'svelte/transition';

	let screenshotTarget;

	let content = $state('hello');

	function resetOutfit() {
		outfit[options.portador][options.etiquette] = [];
		current[options.portador] = {};
	}

	function toggleMirror() {
		if (options.portador === 'jinete') {
			visible.frameBack = !visible.frameBack;
		} else {
			visible.frameGarrocha = !visible.frameGarrocha;
		}
	}

	async function screenShot() {
		const logo = document.querySelector('.runway .logo');
		const galaText = document.querySelector('.runway .gala');
		const frameBack = document.querySelector('.frame-back');
		const examples = document.querySelector('.examples');
		const runwayBtns = document.querySelectorAll('.runwayBtn');
		// Prepare styles for screenshot
		logo.style.display = 'block';
		galaText.style.display = 'block';
		if (frameBack) frameBack.style.display = 'none';
		examples.style.display = 'none';
		runwayBtns.forEach((button) => {
			button.style.display = 'none';
		});
		// Screenshot
		const canvas = await html2canvas(screenshotTarget);
		const image = canvas.toDataURL('image/png');
		// Restore styles
		runwayBtns.forEach((button) => {
			button.style.display = 'block';
		});
		logo.style.display = 'none';
		galaText.style.display = 'none';
		if (frameBack) frameBack.style.display = 'block';
		examples.style.display = 'block';
		// Download image
		const link = document.createElement('a');
		link.href = image;
		link.download = `${options.portador} - ${options.etiquette}.png`;
		link.click();
	}

	function loadExample(sample) {
		resetOutfit();
		const example = examples[options.portador][options.etiquette].find(
			(preset) => preset.nombre == sample
		);
		const exampleProducts = example.products.map((item) => {
			const matchedProduct = products.find(
				(product) =>
					product.portador === options.portador &&
					product.variante === item.variante &&
					product.cat === item.cat &&
					(!item.subcat || product.subcat === item.subcat)
			);
			return { ...item, ...matchedProduct };
		});

		exampleProducts.forEach((product) => wearProduct(product));
		current[options.portador] = {};
	}
</script>

<div class="runway {options.portador}" bind:this={screenshotTarget}>
	<div class="logo {options.portador}">
		<img src="/img/logo.svg" alt="Preservando la esencia" />
	</div>
	<p class="gala">{options.etiquette}</p>
	<!-- <Bar /> -->

	<div class="frame-front">
		{#if options.portador == 'jinete'}
			<img src="/img/base-front.avif" alt="jinete" style:z-index={2} draggable="false" />
		{/if}
		{#each outfit[options.portador][options.etiquette] as item}
			{#if item.runway}
				<img
					src={`/img/runway/${options.portador}/${item.runway}`}
					alt={item.variante}
					style:z-index={item.zindex}
					draggable="false"
				/>
			{/if}

			{#if item.extraimg && Array.isArray(item.extraimg)}
				{#each item.extraimg as extraImg}
					<img
						src={`/img/runway/${options.portador}/${extraImg.archivo}`}
						alt={`${item.variante} parte 2`}
						style:z-index={extraImg.zindex}
						draggable="false"
					/>
				{/each}
			{:else if item.extraimg}
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
				{#each outfit[options.portador][options.etiquette] as item}
					{#if item.back && Array.isArray(item.back)}
						{#each item.back as back}
							<img
								src={`/img/runway/${options.portador}/${back}`}
								alt={item.variante}
								style:z-index={item.zindex}
								draggable="false"
							/>
						{/each}
					{:else if item.back}
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
			<div class="frame-garrocha" transition:fly={{ delay: 50, duration: 300, x: 30 }}>
				{#each outfit[options.portador][options.etiquette] as item}
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
				{#each outfit[options.portador][options.etiquette] as item}
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

		{#if options.portador === 'caballo' && options.etiquette === 'ceremonia'}
			<div class="ceretext">
				<p>
					Idealmente, el traje de ceremonia se reserva para eventos de tarde-noche donde se exige
					vestimenta de máxima etiqueta (lo equivalente al Frac en el traje civil), por lo que no
					debe usarse a caballo.
				</p>
				<p>
					Las dos excepciones son los funerales (antes la gente iba muy bien vestida a los
					funerales, pues eran eventos importantes que requerían mucha formalidad) y las bodas, ya
					que antiguamente era común que se celebraran de noche y se exigiera a los invitados vestir
					con la máxima etiqueta.
				</p>
				<p>
					El traje de ceremonia equivale en formalidad al Frac civil, de ahí que sea negro y blanco.
				</p>
				<p>
					En los casos donde se use este traje a caballo, la silla y arreos deberán corresponder
					idealmente a la categoría Gran Gala, o a la que nuestros medios nos permitan (siempre
					limpia, engrasada e impecable; sin arreos que no vayan de acuerdo con la ocasión:
					protectores en las patas, bajadores, pechopretales, barrigueras, chaparreras, guantes,
					vendas, etc.).
				</p>
				<p>
					En nuestros días, si la boda es de día y no se exige Frac a los invitados civiles, los
					charros pueden optar por usar un traje de Media Gala, Gala o Gran Gala, según la ocasión
					(preferentemente en colores distintos al negro y blanco).
				</p>

				<a
					href="http://www.preservandolaesencia.com/wp-content/uploads/2022/11/bodas-charras-traje-de-ceremonia.pdf"
					target="_blank">Leer artículo</a
				>
			</div>
		{/if}
	</div>

	{#if !(options.portador === 'caballo' && options.etiquette === 'ceremonia')}
		{#if outfit[options.portador][options.etiquette]?.length > 0}
			<RunwayBtn
				alt="Reniciar"
				icon="/img/icons/reset.svg"
				action={resetOutfit}
				tooltipContent="empezar de nuevo"
			/>
		{/if}

		<RunwayBtn
			alt="Espejo"
			icon="/img/icons/mirror.svg"
			action={toggleMirror}
			x="left"
			tooltipContent="espejo"
		/>

		<RunwayBtn
			alt="Descargar"
			icon="/img/icons/camera.svg"
			action={screenShot}
			x="left"
			y="top"
			tooltipContent="descarga la imagen"
		/>

		<div class="examples">
			<RunwayBtn
				alt="ver ejemplo"
				action={() => loadExample('1')}
				y="top"
				x="right"
				tooltipContent="ver ejemplo 1"
				text="1"
			/>
			<RunwayBtn
				alt="ver ejemplo"
				action={() => loadExample('2')}
				y="bottom"
				x="right"
				text="2"
				tooltipContent="ver ejemplo 2"
			/>
		</div>
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

		.logo {
			position: absolute;
			display: none;
			bottom: 1em;
			left: 1em;
			right: auto;
			width: 25%;
			height: auto;
			z-index: 100;

			img {
				width: 100%;
				height: auto;
				object-fit: contain;
			}

			&.jinete {
				width: 30%;
			}
		}

		.examples {
			position: absolute;
			top: 0;
			right: 0;
			// border: solid red thin;
			width: var(--menu-btn-size);
			height: calc(var(--menu-btn-size) * 2 + 2.5em);

			&::before {
				content: 'ejemplos';
				position: absolute;
				top: 1em;
				left: -2.5em;
				writing-mode: vertical-lr;
				transform: rotate(180deg);
			}
		}

		.ceretext {
			width: 100%;
			background-color: var(--color-runway);
			padding: 1em;

			p {
				max-width: 40em;
				margin: 0 auto;
				margin-bottom: 0.5em;
			}

			a {
				display: block;
				margin: 0 auto;
				margin-top: 2em;
				max-width: 40em;
				text-decoration: underline;
			}
		}

		.gala {
			display: none;
			position: absolute;
			top: 1rem;
			right: 1rem;
			font-size: 2em;
			font-family: var(--font-retro);
		}
	}

	.jinete {
		aspect-ratio: 1 / 2;
		grid-column-start: 2;
		grid-column: span 1;
		grid-row-start: 2;

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
				z-index: 15;
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
			left: 5%;
			bottom: 5%;
			height: 50%;
			width: auto;
			background-color: var(--color-runway);
			background-color: white;
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			border: solid var(--color-buttons) thin;
			border-radius: var(--border-radius-light);
			z-index: 100;
			aspect-ratio: 503 / 878;
		}

		.frame-garrocha {
			background-image: url('/img/base-garrocha.avif');
		}

		.frame-cabeza {
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
			}
		}

		.caballo {
			min-width: none;
			height: 100%;
			grid-column: 2 / 4;
			grid-row: 1 / 3;

			.frame-front {
				height: auto;
				max-height: 100%;
				width: 100%;
			}
		}

		.ceretext {
			height: 100%;
		}
	}
</style>
