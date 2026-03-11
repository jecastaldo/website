Design system and content preferences for Joe Castaldo journalist portfolio site.

## Colors (HSL in index.css)
- Background: pure white (0 0% 100%)
- Foreground/text: dark charcoal #1A1A1A (0 0% 10%)
- Accent/primary: soft green #2DC96F (148 63% 48%)
- Card/muted backgrounds: light gray #F7F7F7 (0 0% 97%)

## Typography
- Font: Poppins (Google Fonts) — weights 300, 400, 500, 700, 300 italic
- Bold (700): name, hero headings
- Medium (500): section headers, labels
- Regular (400): competencies, tags
- Light (300): body text, dates, contact info
- Light Italic (300i): role descriptions

## Layout
- Spacious with large section breaks, rounded-2xl UI elements, soft shadows
- Max-w-5xl/6xl containers, generous padding
- Feel: approachable, modern fintech, clean and open

## Site sections
Hero, About, Selected Writing, Podcasts/Media, Public Speaking, Awards, Contact (visual-only form), Footer with Geocities Mode Easter egg

## Easter egg
Hidden Bot icon in footer toggles "Geocities Mode" — transforms the entire site into a year-2000 Geocities aesthetic (Comic Sans, dark blue starfield background, rainbow text, blinking under-construction banner, scrolling marquee, guestbook link). Uses GeocitiesContext provider. Exit button in bottom-right corner. Turing Test page at /turing-test still exists but footer no longer links to it.

## Removals from original plan
- Books section removed
- FAQ section removed
- No dark mode toggle (dark tokens defined but not toggled)
