## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Environment variables

`BASIN_FORM_ID` and `TURNSTILE_SITEKEY` are required — see `.env.example`. They are build-time
values, so changing them needs a rebuild. `ContactForm.astro` fails the build when either is
missing rather than inlining the string `undefined`, which is how a form posting to
`https://usebasin.com/f/undefined` once reached production.

The real values live in the Cloudflare Pages project settings. Never commit the Cloudflare
Turnstile test site key (`1x00000000000000000000AA`) into a deployable configuration — it always
passes verification and silently disables spam protection.

## Deployment

The site is deployed by **Cloudflare Pages**, configured in the Cloudflare dashboard rather than
in this repo. `.github/workflows/ci.yml` only verifies (test + type-check + build); it does not
deploy. `public/_headers` supplies the headers that a `<meta>` CSP cannot set, most importantly
`frame-ancestors`.

## Dependencies

`sharp` and `svgo` are pinned to exact versions by `@playform/compress`. Both pins are held back
on releases with published advisories, so `package.json` carries `overrides` forcing patched
versions. When bumping `@playform/compress`, re-check whether those overrides are still needed and
still compatible — `npm audit` should report zero vulnerabilities.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
