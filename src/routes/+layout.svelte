<script lang="ts">
	import '$lib/styles/global.css';

	//todo deprecate
	import { page } from '$app/stores';

	/**
	 * Components
	 */
	$: ({ url } = $page);
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />

	<title>Blog | Latest Posts</title>
	<meta name="description" content="Read posts everyday @aristovstas2004" />

	<meta content="Blog" property="og:site_name" />
	<meta content={url.href} property="og:url" />
	<meta content="website" property="og:type" />
</svelte:head>

<main>
	<slot></slot>
</main>

<style lang="scss">
  .layout {
    padding: 25px 50px;

    min-height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 50px;

    width: 100%;
    height: max-content;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }
</style>