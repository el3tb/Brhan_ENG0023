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
- All image paths referenced by questions and answer options exist in the project folder.
- No exact duplicate question prompts remain within the same chapter after curation.

The projection sketches are training schematics, not exact scans of the attached exam sheet. Confirm them against the course PDFs before deployment.
