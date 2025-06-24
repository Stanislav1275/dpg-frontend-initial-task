import { error } from '@sveltejs/kit';
import PostsApi from '@api/methods/posts';

import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const postId = parseInt(params.id);
	if (isNaN(postId)) {
		throw error(400, 'Invalid post ID');
	}

	const response = await PostsApi.getById(postId);

	if (!response.success) {
		if (response.data.code === 404) {
			throw error(404, 'Post not found');
		}
		throw error(response.data.code, response.data.message);
	}

	return {
		post: response.data,
		meta: {
			title: response.data.title,
			description: response.data.body.substring(0, 160)
		}
	};
};

export const prerender = false;
export const ssr = true;
export const csr = true;
