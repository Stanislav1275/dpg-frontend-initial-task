import { error } from '@sveltejs/kit';
import PostsApi from '@api/methods/posts';

import type { PageServerLoad } from './$types';

export const config = {
    isr: {
        expiration: 300
    }
};

export const load: PageServerLoad = async () => {
    const response = await PostsApi.getAll();

    if (!response.success) {
        throw error(
            response.data.code,
            response.data.message || 'Failed to fetch posts'
        );
    }

    return {
        posts: response.data,
        meta: {
            title: 'Latest Posts | Blog',
            description: 'Read our latest blog posts'
        }
    };
}; 