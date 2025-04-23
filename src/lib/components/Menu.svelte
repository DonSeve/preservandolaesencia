<script>
	// Components
	import CloseButton from '$lib/components/Menu/CloseButton.svelte';
	import Header from '$lib/components/Menu/Header.svelte';
	import Content from '$lib/components/Menu/Content.svelte';
	// Data
	import { options, visible } from '$lib/stores/shared.svelte.js';
	// Utils
	import { fly } from 'svelte/transition';

	let menuElement;
	let desktopBreakpoint = $state(0);

	function closeMenu() {
		visible.menu = false;
		options.cat = '';
		document.querySelector('body').classList.remove('noscroll');
	}

	$effect(() => {
		if (!menuElement) return;
		if (desktopBreakpoint < 1024) return;
		const handleOutsideClick = (e) => {
			if (menuElement && !menuElement.contains(e.target)) {
				closeMenu();
			}
		};
		document.addEventListener('click', handleOutsideClick, true);
		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	});
</script>

<svelte:window bind:innerWidth={desktopBreakpoint} />

<div
	class="menu {options.portador === 'jinete' ? 'jinete' : 'caballo'}"
	bind:this={menuElement}
	transition:fly={{ y: 50, duration: 500 }}
>
	<CloseButton />

	<div class="panel">
		<Header />
		<Content />
	</div>
</div>

<style lang="scss">
	.menu {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		.menu {
			display: block;
			position: absolute;
			top: calc(50%);
			left: var(--menu-btn-size);
			height: 75%;
			max-height: 90%;
			width: calc(100% - (var(--menu-btn-size) * 1.5));
			transform: translateY(-50%);
			background-color: var(--color-menu);
			gap: var(--container-padding);
			border-radius: var(--border-radius-light);
			padding: 1em;
			z-index: 30;

			&.caballo {
				left: 0;
				width: calc(100% - var(--menu-btn-size) * 0.5);
			}
		}

		.panel {
			height: 100%;
			overflow: visible;
			display: flex;
			flex-direction: column;
		}
	}

	@media screen and (min-width: 1200px) {
		.menu {
		}
	}
</style>
