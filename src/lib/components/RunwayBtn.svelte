<script>
	import { outfit, options } from '$lib/stores/shared.svelte.js';
	const { action, icon, alt, x = 'right', y = 'bottom' } = $props();
</script>

<button class="runwayBtn {x === 'left' ? 'left' : ''} {y === 'top' ? 'top' : ''}" onclick={action}>
	<img src={icon} {alt} />
</button>

<style>
	.runwayBtn {
		--position: 1em;
		--size: var(--menu-btn-size);
		--size: 3.5em;
		position: absolute;
		height: var(--size);
		width: var(--size);
		bottom: var(--position);
		right: var(--position);
		background-color: var(--color-page-bg);
		border-radius: 50%;
		transition: 0.3s ease 50ms;
		will-change: transform;
		z-index: 50;
		padding: 0.7em;

		&.left {
			right: auto;
			left: var(--position);
		}

		&.top {
			top: var(--position);
			bottom: auto;
		}

		&:hover {
			transform: scale(1.2);
		}

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}
</style>
