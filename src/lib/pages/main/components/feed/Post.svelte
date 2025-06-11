<script lang="ts">
	/**
	 * Dependence
	 */
	import { fade } from 'svelte/transition';

	/**
	 * Types
	 */
	import type { IPost } from '@api/types/models/post';

	export let post: IPost;
</script>

<div class="posts__item" in:fade>
	<h4>{post.title}</h4>
	<p>{post.body}</p>
</div>

<style lang="scss">
  .posts__item {
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    height: max-content;
    width: 100%;

    border-radius: 8px;

    background: rgba(0, 0, 0, 0.08);

    h4 {
      color: #2b302c;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-transform: capitalize;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;

      color: rgba(43, 48, 44, 0.7);
    }
  }
</style>
