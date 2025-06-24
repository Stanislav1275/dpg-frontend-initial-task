import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const config = {
    isr: {
        expiration: 300
    }
};

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw error(500, 'Failed to fetch posts');
        }

        const posts = await response.json();

        // Устанавливаем заголовки кеширования для этого роута
        setHeaders({
            'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
        });

        return {
            posts,
            meta: {
                title: 'Latest Posts | Blog',
                description: 'Read our latest blog posts'
            }
        };
    } catch (err) {
        console.error('Error fetching posts:', err);
        throw error(500, 'Failed to fetch posts');
    }
}; 