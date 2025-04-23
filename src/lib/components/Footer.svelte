<script>
	import Socialmedia from '$lib/components/Socialmedia.svelte';
</script>

<footer class="footer">
	<Socialmedia />
</footer>

<style>
	footer {
		/* border: solid blue thin; */
		/* height: var(--layout-spacing); */
	}

	@media screen and (min-width: 1024px) {
		footer {
			height: clamp(var(--min), -20px + 4.68vw, var(--max) * 0.5);
			/* margin-bottom: 0; */
		}
	}
</style>
