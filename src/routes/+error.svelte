<script lang="ts">
    import { page } from '$app/stores';
$: ({ status: status1 } = $page);
$: ({ status: status2 } = $page);
$: ({ error } = $page);
</script>

<svelte:head>
    <title>{status1} Error | Blog</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="error-container">
    <h1>{status2}</h1>
    <p>{error?.message || 'An error occurred'}</p>
    <a class="back-link" href="/">🤣 Back to Home</a>
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
            margin: 1rem 0 2rem;
        }

        .back-link {
            display: inline-block;
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