<script lang="ts">
	/**
	 * Dependence
	 */
	import { fade } from 'svelte/transition';

	/**
	 * Types
	 */
	import type { IPost } from '$lib/api/types/models/post';

	export let post: IPost;
</script>

<a class="posts__item" href="/post/{post.id}" in:fade>
	<h4>{post.title}</h4>
	<p>{post.body}</p>
</a>

<style lang="scss">
  .posts__item {
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    height: max-content;
    width: 100%;

    border-radius: 8px;
    text-decoration: none;

    background: rgba(0, 0, 0, 0.08);
    transition: background-color 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.12);
    }

    h4 {
      color: #2b302c;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-transform: capitalize;
      margin: 0;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin: 0;

      color: rgba(43, 48, 44, 0.7);
    }
  }
</style>
