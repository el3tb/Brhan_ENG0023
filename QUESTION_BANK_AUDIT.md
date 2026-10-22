# Burhan question-bank audit

## Curated bank

- Chapter 1: 57 questions
- Chapter 2: 34 questions
- Chapter 3: 67 questions
- Chapter 4: 44 questions
- Total: 202 questions

## Deduplication policy

- Removed exact duplicate question stems.
- Removed repeated facts that had been asked again in a different format or wording.
- Kept separate questions when the factual target is genuinely different (for example, sheet dimensions for different ISO sizes; distinct line-type functions and measurements; face/edge/vertex counts for different solids).
- Projection items are the stated exception: different view directions and diagrams are retained. The bank includes distinct top, front-elevation, and right-side-view questions with different answer-option drawings, plus the separate first-/third-angle symbol questions.
- Paper-based drawing tasks are not included.

## Checks performed

- JavaScript syntax check passed (`node --check script.js`).
- Question definitions passed the bank's validation checks (chapter, topic, bilingual explanation, options, answer key and matching data where applicable).
- All active question-image and projection-option paths exist in the project folder.
- No exact duplicate question prompts remain within the same chapter after curation.

The projection sketches are training schematics, not exact scans of the attached exam sheet. Confirm them against the course PDFs before deployment.


## Image-answer leakage audit (2026-10-22)
- Confirmed the previous issue: `drawing-sheet.svg` lists all ISO A-series sizes in the same image as questions asking for one of those sizes. Similar answer-revealing labels existed in shared line-type, scale, shapes, Platonic-solid and projection-symbol illustrations.
- The standard question helper and matching helper now discard those infographic images instead of rendering them during a question. The example question asking which sheet is 594 × 841 mm therefore has no answer-bearing image.
- Safe image allowlist: `assets/line-practice-blank.svg` and `assets/projection-object.svg` only. The line-practice sheet has numbered line styles without type names; the projection object and each candidate view are unlabelled.
- Verified by executing the question-bank construction code: 202 questions total (Ch.1 57, Ch.2 34, Ch.3 67, Ch.4 44); 0 drawing-task items; 8 image-bearing questions; 0 image references outside the allowlist.
- Ran `node --check script.js`; no syntax errors. Checked all asset paths referenced by the JavaScript; none are missing.
