<!-- PostDetail.svelte -->
<script lang="ts">
    import type { IPost } from '$lib/api/types/models/post';

    export let post: IPost;
</script>

<article class="post-detail @cocktail">
    <h1>{post.title}</h1>
    <p class="post-body">{post.body}</p>
    <div class="post-meta">
        <span>Post ID: {post.id}</span>
        <span>User ID: {post.userId}</span>
    </div>
</article>

<style lang="postcss">
    .post-detail {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 1.5rem;
    }

    .post-body {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #444;
        margin-bottom: 2rem;
    }

    .post-meta {
        display: flex;
        gap: 1rem;
        color: #666;
        font-size: 0.9rem;
    }
</style> 