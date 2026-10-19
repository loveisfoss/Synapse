# polychronidis-neurology.gr

Jekyll site (built automatically by GitHub Pages — no local setup needed).

## Where to change things (once, applies to every page)

| What | File |
|---|---|
| `<head>` (meta, favicons, canonical, Open Graph, JSON-LD), page skeleton, script loading | `_layouts/default.html` |
| Sidebar + hamburger | `_includes/sidebar.html` |
| Sidebar menu entries (add a new condition page here) | `_data/navigation.yml` |
| GoatCounter endpoint / switch statistics off | `_config.yml` → `goatcounter` |
| Shared CSS (all pages) | `_includes/css/base.css` |
| CSS for one kind of page | `_includes/css/content.css`, `home.css`, `diseases.css`, `contact.css`, `gallery.css`, `notfound.css`, `prose-links.css` |
| Sidebar behaviour (JS) | `assets/js/site.js` |

## A page file now looks like this

```
---
layout: default
title: "…"
description: "…"
canonical: "https://polychronidis-neurology.gr/pages/xxx.html"
css: [content]            # which CSS bundles the page needs (base is always loaded)
scripts: [maps]           # optional: maps | lightbox
jsonld: |                 # optional: structured data for <head>
  { … }
---
<main class="main-content"> … only the page's own content … </main>
```

## Notes
- Do not add a `.nojekyll` file: it would switch the layout system off.
- Statistics use GoatCounter (no cookies, no banner). Described in the privacy policy.
