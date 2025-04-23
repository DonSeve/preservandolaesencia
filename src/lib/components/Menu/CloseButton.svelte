<script>
	import { visible } from '$lib/stores/shared.svelte.js';

	function closeMenu() {
		visible.menu = false;
		document.querySelector('body').classList.remove('noscroll');
	}
</script>

<button class="closeBtn" onclick={closeMenu}>
	<img src="/img/icons/close.svg" alt="cerrar" />
</button>

<style>
	.closeBtn {
		--position: -1.5em;
		--size: 3em;
		position: absolute;
		top: var(--position);
		right: var(--position);
		height: var(--size);
		width: var(--size);
		background-color: var(--color-buttons);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75em;
		cursor: pointer;
		transition: transform 0.3s ease;

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
			transition: transform 0.6s ease;
		}

		&:hover {
			transform: scale(1.1);

			img {
				transition: transform 0.3s ease 50ms;
				transform: rotate(-90deg);
			}
		}
	}
</style>
