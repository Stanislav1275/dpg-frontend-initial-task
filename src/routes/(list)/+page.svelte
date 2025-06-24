<script lang="ts">
	import Feed from '$lib/pages/main/components/feed/Feed.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="posts-container">
	<h1>Latest Posts</h1>
	<Feed posts={data.posts} />
</div>

<style lang="scss">
	.posts-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;

		h1 {
			margin-bottom: 2rem;
			font-size: 2.5rem;
			color: var(--primary-color);
		}
	}
</style>