<script></script>

<div class="wrapper">
	<p>8 / 10</p>
	<div class="bar"></div>
</div>

<style lang="scss">
	.wrapper {
		position: absolute;
		top: 1.5em;
		right: 1.25em;
		width: 3em;
		height: calc(100% - 6em);
		// border: solid red thin;
	}

	p {
		text-align: center;
	}

	.bar {
		// position: absolute;
		width: 1em;
		height: calc(100% - 10em);
		height: 90%;
		margin: 0 auto;
		margin-top: 1em;
		// transform: translateY(-50%);
		// background-color: var(--color-buttons);
		border-radius: 50px;
		border: solid var(--color-buttons) 1px;
	}
</style>
