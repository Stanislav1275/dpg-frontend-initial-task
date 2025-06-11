<script lang="ts">
	/**
	 * Dependence
	 */
	import PostsApi from '@api/methods/posts';
	import { getReasonPhrase } from 'http-status-codes';

	/**
	 * Components
	 */
	import Loader from '@shared/Loader.svelte';
	import ErrorComponent from '@shared/Error.svelte';
	import Feed from '@pages/main/components/feed/Feed.svelte';

	/**
	 * Load data
	 * @description Метод для получения постов
	 */
	const loadData = async () => {
		const response = await PostsApi.getAll();

		if (!response.success) {
			throw new Error(getReasonPhrase(response.data.code));
		}

		return response.data;
	};
</script>

{#await loadData()}
	<Loader />
{:then posts}
	<Feed {posts} />
{:catch e}
	<ErrorComponent>
		{e}
	</ErrorComponent>
{/await}
