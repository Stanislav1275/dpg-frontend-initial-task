import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const config = {
    isr: {
        expiration: 3600
    }
};

export const load: PageServerLoad = async ({ fetch, params, setHeaders }) => {
    try {
        const postId = parseInt(params.id);
        if (isNaN(postId)) {
            throw error(400, 'Invalid post ID');
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!response.ok) {
            throw error(404, 'Post not found');
        }

        const post = await response.json();

        // Устанавливаем заголовки кеширования для этого роута
        setHeaders({
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
        });

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