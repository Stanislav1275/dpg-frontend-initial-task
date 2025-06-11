<svelte:head>
	<title>Latest posts</title>
</svelte:head>

<div class="list">
	<h1>Latest posts</h1>
	<slot></slot>
</div>

<style lang="scss">
  .list {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 50px;

    flex: 1;
  }
</style>