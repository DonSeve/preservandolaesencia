<script>
	const { height } = $props();
</script>

<div class="check">
	<img src="/img/icons/check.svg" alt="Check" />
</div>

<style>
	.check {
		border-radius: 50%;
		background-color: #ffffff;
		padding: 5px;
		height: var(--height);
		width: var(--height);

		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}
</style>
