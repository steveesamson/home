import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(
			{
				// default options are shown
				outDir: "docs",
				pages: "docs",
				assets: "docs",
				fallback: null,
				precompress: false,
			})
	},
	extensions: ['.svelte', '.svx']
};

export default config;
