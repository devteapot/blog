## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Publishing articles

When adding or updating an article:

- Provide complete, accurate frontmatter for `title`, `description`, `pubDate`, optional `updatedDate`, optional `tags`, and optional `heroImage`. Use ISO dates (`YYYY-MM-DD`) so builds are timezone-independent.
- Keep canonical URLs, Open Graph metadata, and `BlogPosting` structured data accurate.
- Keep the agent-facing outputs current: sitemap, RSS, `/llms.txt`, and `/robots.txt`.
- `/llms.txt`, RSS, sitemap, and article metadata are generated from the content collection. Update their generators when the content model changes rather than editing generated output.
- Treat `/robots.txt` as an intentional crawler and content-use policy. Review it when the domain or crawler policy changes; it does not normally require per-article edits.
- Run `bun run build` and verify the generated article, sitemap, RSS, and `/llms.txt` before considering publishing work complete.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
