<script>
</script>

{#snippet platform(name, icon, link)}
	<li class="item">
		<a href={link}>
			<img src={icon} alt={name} />
		</a>
	</li>
{/snippet}

<div class="socialmedia">
	<div class="container">
		<ul>
			{@render platform(
				'youtube',
				'/img/icons/youtube.svg',
				'https://youtube.com/@preservandolaesencia?si=wlZuLTzA740jv5Ox'
			)}
			{@render platform(
				'instagram',
				'/img/icons/instagram.svg',
				'https://www.instagram.com/preservandolaesencia/'
			)}
		</ul>
	</div>
</div>

<style>
	.socialmedia {
		margin: 3em 0;

		ul {
			/* padding-top: 2em; */
			/* border-top: solid var(--color-text) 1px; */
			display: flex;
			flex-direction: row-reverse;
			gap: 1em;
		}

		.item {
			height: 3em;
			aspect-ratio: 1 / 1;

			img {
				object-fit: contain;
				height: 100%;
				width: 100%;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		.socialmedia {
			width: fit-content;
			height: 100%;
			margin: 0;
			/* margin-left: auto; */

			.container {
				padding: 0;
			}

			ul {
				flex-direction: row;
				padding: 0;
				margin: 0;
				height: 100%;
			}

			.item {
				/* height: var(--layout-spacing); */
				height: 100%;
			}
		}
	}
</style>
