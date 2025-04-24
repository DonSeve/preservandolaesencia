<script>
	import { visible, options, current } from '$lib/stores/shared.svelte.js';

	const texts = $derived(current[options.portador].text);
</script>

<div class="info {options.portador}">
	<div class="inner">
		<h3 class="title">
			{current[options.portador].nombrecompleto
				? current[options.portador].nombrecompleto
				: current[options.portador].variante}
		</h3>
		<div class="content">
			<div class="text">
				{#each texts as text}
					<div class="block">
						{@html text}
					</div>
				{/each}
			</div>
			{#if current[options.portador].descImg && current[options.portador].descImg.length > 0}
				<div class="images">
					{#each current[options.portador].descImg as image}
						<div class="image">
							<img src={`img/desc/${image}`} alt={current[options.portador].variante} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
		{#if current[options.portador].descLink}
			<a class="link" href={current[options.portador].descLink}>link</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.info {
		margin-top: 1em;

		.title {
			margin-top: 2em;
			margin-bottom: 1em;
		}

		.block {
			margin-top: 0.5em;
		}

		.image {
			width: 100%;
			margin-top: 1.5em;
			border-radius: var(--border-radius-light);
			overflow: hidden;

			img {
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}

		.link {
			margin-top: 1em;
			display: block;
		}
	}

	@media screen and (min-width: 1024px) {
		.info {
			height: 100%;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			overflow-y: auto;

			.title {
				margin-top: 0;

				&::first-letter {
					text-transform: uppercase;
				}
			}

			.inner {
				width: 100%;
				height: 100%;
				overflow-y: auto;
				padding-right: 1em;

				&::-webkit-scrollbar {
					width: 0.5em;
				}

				&::-webkit-scrollbar-track {
					background: var(--color-page-bg);
					width: 1em;
					border-radius: 50px;
				}

				&::-webkit-scrollbar-thumb {
					background-color: var(--color-buttons);
					width: 0.5em;
					border-radius: 50px;
				}
			}

			&.jinete {
				max-height: 100%;
				grid-column: 1 / 2;
				grid-row: 1 / 3;

				.image {
					width: 100%;
					height: auto;
					border-radius: var(--border-radius-light);
				}
			}

			&.caballo {
				grid-column: 1 / 3;
				grid-row: 2 / 3;
				max-height: 100%;

				.content {
					display: flex;
					gap: 2em;
					align-items: flex-start;
				}

				.images {
					flex-basis: auto;
					height: auto;
					margin-top: 0;

					.image {
						border-radius: var(--border-radius-light);
						height: auto;
						margin-top: 0;
						margin-bottom: 1.5em;

						img {
							max-height: 50vh;
						}
					}
				}

				.text {
					flex-basis: 50%;
					flex-grow: 1;
					flex-shrink: 0;
				}
			}

			&.caballo {
				grid-column: 1 / 2;
				grid-row: 1 / 3;

				.content {
					display: block;
				}

				.images {
					width: 100%;
					height: auto;
					margin-top: 2em;
				}
			}
		}
	}
</style>
