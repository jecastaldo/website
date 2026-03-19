Dark editorial design system for Joe Castaldo journalist portfolio site.

## Colors (HSL in index.css)
- Background: pure black (0 0% 0%)
- Foreground/text: white (0 0% 100%)
- Muted foreground: gray (0 0% 55%)
- Border: dark gray (0 0% 15%)
- Card: near-black (0 0% 4%)
- No accent color — monochrome palette with contrast

## Typography
- Body: Inter (Google Fonts) — weights 400, 500, 600
- Display: Playfair Display (serif, italic 800) — used for hero name
- Body text at 14-15px, dates/labels at 12px uppercase tracking-widest

## Layout
- Jenny Wen–inspired editorial feed: fixed header with large serif name + nav (mix-blend-difference), single-column chronological content at max-w-[800px]
- Sections rendered as article entries with date stamps
- No cards, no rounded corners, no shadows — flat, high-contrast editorial
- Links styled with subtle underline decoration

## Site sections
Fixed header (name + nav), About (inline text), Selected Writing, Podcasts & Media, Public Speaking, Awards, Contact (text with links), Footer with Geocities Mode Easter egg

## Easter egg
Hidden Construction icon in footer toggles "Geocities Mode" — transforms the entire site into a year-2000 Geocities aesthetic (Comic Sans, dark blue starfield background, rainbow text, blinking under-construction banner, scrolling marquee, guestbook link). Uses GeocitiesContext provider. Exit button in bottom-right corner.

## Removals from original plan
- Books section removed
- FAQ section removed
- Contact form removed (replaced with inline text links)
- Traditional navbar removed (replaced with fixed editorial header)
- Profile photo removed from hero
