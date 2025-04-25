<script>
	import Socialmedia from '$lib/components/Socialmedia.svelte';
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="dev">
		<a href="https://castant.dev/">web: <span>castant.dev</span></a>
	</div>
	<div class="tm">
		<p>{year}. Preservando la Esencia&reg;</p>
	</div>
	<Socialmedia />
</footer>

<style>
	footer {
		/* border: solid blue thin; */
		/* height: var(--layout-spacing); */
	}

	@media screen and (min-width: 1024px) {
		footer {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			height: clamp(var(--min), -20px + 4.68vw, var(--max) * 0.5);
			/* margin-bottom: 0; */

			p,
			a {
				font-size: 0.8em;
			}

			.dev {
				a span {
					text-decoration: underline;
				}
			}
		}
	}
</style>
