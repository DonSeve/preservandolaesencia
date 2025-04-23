<script>
	import { options } from '$lib/stores/shared.svelte.js';
	import { slide } from 'svelte/transition';

	const list = {
		etiqueta: ['faena', 'media gala', 'gala', 'gran gala', 'ceremonia'],
		portador: ['jinete', 'caballo']
	};

	// Accordion state
	let activeAccordion = $state('');
	function toggleAccordion(name) {
		console.log('toggle');
		activeAccordion = activeAccordion === name ? null : name;
	}
</script>

{#snippet optionButton(name, buttonOptions)}
	<div
		class="item"
		role="button"
		tabindex="0"
		onclick={() => toggleAccordion(name)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleAccordion(name);
			}
		}}
	>
		<div class="item--text">
			{#if !options[buttonOptions] || options[buttonOptions] === ''}
				<p>{name}</p>
			{:else}
				<p>{options[buttonOptions]}</p>
			{/if}
		</div>
		<div class="item--icon">
			<img src="/img/icons/caret_down-dark.svg" alt="Flecha" />
		</div>

		{#if activeAccordion === name}
			<div class="accordion" transition:slide={{ duration: 500 }}>
				<div class="bg"></div>
				<ul>
					{#each list[name] as item}
						<li>
							<button
								onclick={(e) => {
									e.stopPropagation();
									console.log('click: ', item);
									options[buttonOptions] = item;
									activeAccordion = null;
								}}>{item}</button
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
{/snippet}

<div class="options">
	{@render optionButton('etiqueta', 'etiquette')}
	{@render optionButton('portador', 'portador')}
</div>

{#if !options.etiquette}
	<div class="intro" transition:slide>
		<p>Elige una de las opciones de etiqueta para empezar.</p>
	</div>
{/if}

<style lang="scss">
	.options {
		height: calc(var(--layout-spacing) * 2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: solid 1px;
		border-bottom: solid 1px;
		border-color: var(--color-text);
		z-index: 5;
	}

	.item {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-basis: 50%;
		height: 100%;
		padding: 0 var(--container-padding);
		gap: 1em;
		cursor: pointer;
		z-index: 3;

		.accordion {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			height: fit-content;
			padding: 0 1rem;
			z-index: 2;
			// pointer-events: none;

			.bg {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				transform-origin: top;
				background-color: var(--color-menu);
				z-index: -1;
				// pointer-events: none;
			}

			ul {
				li {
					margin: 1em 0;
					cursor: pointer;

					button {
						border: none;
						color: var(--color-text);
						font-family: var(--font-body);
					}
				}
			}
		}
	}

	.intro {
		height: calc(var(--layout-spacing) * 2);
		padding: 0 var(--container-padding);
		align-content: center;
	}

	@media screen and (min-width: 1024px) {
		.intro {
			display: none;
		}

		.options {
			display: none;
		}
	}
</style>
