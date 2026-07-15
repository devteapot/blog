// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
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
