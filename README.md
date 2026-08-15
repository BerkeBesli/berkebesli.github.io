# Berke Beşli — Personal Portfolio Site

A personal portfolio site (Ana Sayfa / Özgeçmiş / Projeler) built with plain HTML, CSS, and a small amount of vanilla JavaScript.

## Tech stack

- **HTML5** — semantic markup, no templating engine
- **CSS3** — custom properties (CSS variables), CSS Grid/Flexbox, no preprocessor
- **Vanilla JavaScript** — one small file, no dependencies, handles only the mobile nav toggle
- **Fonts** — Inter, loaded from Google Fonts CDN
- No build tools. Editing a file and refreshing the browser is the entire workflow.

## Project structure

```
├── index.html          Ana Sayfa (home)
├── projects.html        Projeler (projects)
├── resume.html          Özgeçmiş (resume)
├── css/
│   └── style.css        All styles for all three pages
└── js/
    └── main.js           Mobile nav toggle (open/close/outside-click/Escape)
```
