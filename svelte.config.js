import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@pages/*': 'src/lib/pages/*',
			'@shared/*': 'src/lib/shared/*',
			'@api/*': 'src/lib/api/*',
			'@utils/*': 'src/lib/utils/*'
		}
	}
};

export default config;
