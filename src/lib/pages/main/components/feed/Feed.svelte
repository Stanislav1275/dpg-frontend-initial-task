<script lang="ts">
	/**
	 * Components
	 */
	import Post from '@pages/main/components/feed/Post.svelte';

	/**
	 * Types
	 */
	import type { IPost } from '@api/types/models/post';

	export let posts: IPost[] = [];
</script>

<div class="posts">
	{#each posts as post (post.id)}
		<Post {post} />
	{/each}
</div>

<style lang="scss">
  .posts {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 500px;
    max-width: 100%;
  }
</style>
