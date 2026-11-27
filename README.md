# liniver

Class resources for liniver.com, built with Jekyll on GitHub Pages.

## Adding resources (drag and drop)

```
classes/
  y9/
  y10/
    alloys-research.html        → listed as "Alloys research" under Year 10
    worksheet.pdf               → listed as "Worksheet" with a PDF tag
    space-site/                 → a multi-file mini-site…
      index.html                  …listed as "Space site"
      images/…
  general/
```

- **New resource:** drop the file into a class folder, commit, push. That's it.
- **New class:** make a new folder inside `classes/` (e.g. `classes/year-7/`). It appears in the
  nav and on the homepage automatically, labelled from the folder name ("Year 7").
  To give it a custom label or position, add it to `_data/sections.yml` (optional).
- **Titles** come from the file name (`stellar-lifecycle.html` → "Stellar lifecycle").
  For a nicer title or a description, put this at the very top of an HTML file:

  ```
  ---
  title: "Stellar Lifecycles"
  description: "Fusion, main sequence, KABOOM!"
  layout: null
  ---
  ```
  Add `hidden: true` to keep a file online but off the list.
- **Unlisted pages:** anything outside `classes/` (e.g. `classified/`, `cookbook/`) is published but not listed.

Each class has its own link: `liniver.com/#y10`, `liniver.com/#general`, …
(old `/y10/` and `/classes/<name>` links redirect automatically).

Listed file types are set in `_config.yml` → `listed_extensions`.
