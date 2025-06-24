<script lang="ts">
    import PostDetail from '$lib/pages/main/components/post/PostDetail.svelte';

    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.post.title} | Blog Post</title>
    <meta name="description" content={data.post.body.slice(0, 160)} />
    <meta content={data.post.title} property="og:title" />
    <meta content={data.post.body.slice(0, 160)} property="og:description" />
</svelte:head>

<PostDetail post={data.post} /> 