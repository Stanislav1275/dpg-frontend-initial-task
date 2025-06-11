<div class="layout">
	<h1>Latest posts</h1>
	<slot></slot>
</div>

<style lang="scss">
	.layout {
		padding: 25px 50px;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		gap: 50px;

		width: 100%;
		height: max-content;

		h1 {
			text-align: center;
		}
	}
</style>
