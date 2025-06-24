import { error } from '@sveltejs/kit';
import PostsApi from '@api/methods/posts';

import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async ({ params }) => {
	try {
		const postId = parseInt(params.id);
		if (isNaN(postId)) {
			throw error(400, 'Invalid post ID');
		}

		const { success, data: post } = await PostsApi.getById(postId);

		if (!success) {
			throw error(404, 'Post not found');
		}



		return {
			post,
			meta: {
				title: post.title,
				description: post.body.substring(0, 160)
			}
		};
	} catch (err) {
		console.error('Error fetching post:', err);
		if (err.status === 404) {
			throw error(404, 'Post not found');
		}
		throw error(500, 'Failed to fetch post');
	}
};

// Enable prerendering for SEO
export const prerender = false;
export const ssr = true;
export const csr = true;
