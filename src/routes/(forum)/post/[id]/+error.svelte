<script lang="ts">
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Post Not Found | Blog</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="error-container">
    <h1>404</h1>
    <p>Post not found</p>
    <p class="error-details">The post you're looking for doesn't exist</p>
    <a href="/" class="back-link">← Back to Posts</a>
</div>

<style lang="scss">
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        text-align: center;
        padding: 2rem;

        h1 {
            font-size: 6rem;
            font-weight: 700;
            color: #333;
            margin: 0;
            line-height: 1;
        }

        p {
            font-size: 1.5rem;
            color: #666;
            margin: 1rem 0;

            &.error-details {
                font-size: 1.1rem;
                color: #888;
                max-width: 400px;
            }
        }

        .back-link {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background-color: #333;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.2s ease;

            &:hover {
                background-color: #444;
            }
        }
    }
</style> 