# BURHAN — ENG0023 (updated)

Open `index.html` using VS Code Live Server or a static web server. Keep `style.css`, `script.js`, and `assets/` together. Place your own `Logo.Brhan.png` in the same folder as index.html.

Question-bank audit (2026-10-22):
- Curated to 202 distinct questions across the four currently available chapters: Chapter 1 = 57, Chapter 2 = 34, Chapter 3 = 67, Chapter 4 = 44.
- Removed repeated factual targets across reworded MCQ, True/False, fill-in and matching versions; exact duplicate prompts are not present in the curated bank.
- Kept projection questions only where the view/diagram is meaningfully different (first/third-angle symbols; top, front and right-side orthographic views).
- Kept the drawing exercises out of the bank.

Changes:
- Paper-drawing exercises removed from the chapter banks; no drawing exercises appear in the review.
- New illustrated orthographic MCQs for front, top and right-side views; answer-neutral SVG answer options.
- Arabic-only site navigation, English-only question and answer option text.
- Bilingual explanations with chapter/topic provenance.
- Optional test timer before beginning, including untimed mode.
- Free numbered navigation and answered/unanswered indicators.
- Modern colored vector sketch intro after pledge acceptance.
- Reload restores the same page and in-progress quiz, while a newly opened tab begins with pledge.
- Mobile and laptop responsive design.

Caution: `sessionStorage` normally persists for one tab's lifetime. Some browsers may restore the tab session after an unexpected crash or restore; exact closed-tab detection is not guaranteed by web standards.

Projection diagrams are practice schematics derived from the orthographic projection topic of Chapter 3, not scanned official exam answer diagrams. Inspect each visually before deploying at scale. 

## Logo and responsive layout
Place `Logo.Brhan.png` directly beside `index.html` (not inside `assets`). The stylesheet constrains the logo to a fixed responsive brand area with `object-fit: contain`, so its original pixel dimensions cannot expand the header or push the quiz off-screen. The quiz grid also uses shrinkable `minmax(0, ...)` columns to prevent horizontal overflow on laptop and mobile widths.
