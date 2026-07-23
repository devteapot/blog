// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.carlid.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Token colors come from --astro-code-* CSS vars (see global.css)
			theme: 'css-variables',
		},
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Geist',
			cssVariable: '--font-geist-sans',
			fallbacks: ['sans-serif'],
			styles: ['normal'],
			weights: ['100 900'],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			fallbacks: ['ui-monospace', 'monospace'],
			styles: ['normal'],
			weights: ['100 900'],
		},
	],
});
