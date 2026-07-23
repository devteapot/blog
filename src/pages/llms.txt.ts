import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
	SITE_AUTHOR,
	SITE_DESCRIPTION,
	SITE_TITLE,
	SITE_URL,
	SOCIAL_LINKS,
} from '../consts';

const socialNames: Record<string, string> = {
	GH: 'GitHub',
	X: 'X',
	IN: 'LinkedIn',
};

export const GET: APIRoute = async () => {
	const articles = (await getCollection('articles')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const articleLinks = articles.map(
		(article) =>
			`- [${article.data.title}](${new URL(`/${article.id}/`, SITE_URL)}): ${article.data.description}`,
	);
	const socialLinks = SOCIAL_LINKS.map(
		(link) => `- [${socialNames[link.label] ?? link.label}](${link.href})`,
	);

	const body = [
		`# ${SITE_TITLE}`,
		'',
		`> ${SITE_DESCRIPTION}`,
		'',
		`This is the personal blog of ${SITE_AUTHOR}.`,
		'',
		'## Articles',
		'',
		...articleLinks,
		'',
		'## Projects',
		'',
		'- [SLOP](https://slopai.dev): A protocol for AI agents to observe and interact with application state.',
		'- [SLOP source](https://github.com/devteapot/slop)',
		'',
		'## Feeds',
		'',
		`- [RSS](${new URL('/rss.xml', SITE_URL)})`,
		`- [Sitemap](${new URL('/sitemap-index.xml', SITE_URL)})`,
		'',
		'## About',
		'',
		...socialLinks,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
