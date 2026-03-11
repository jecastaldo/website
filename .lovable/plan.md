# Plan: Joe Castaldo Journalist Portfolio Site

## Overview

Build a full personal site for Joe Castaldo, award-winning journalist, with a clean, spacious design. Content sections and site structure are inspired by kevinroose.com. Includes a hidden "Turing Test" Easter egg.

## Design System

- **Background**: Pure white (`#FFFFFF`), light gray sections (`#F7F7F7`)
- **Text**: Dark charcoal (`#1A1A1A`)
- **Accent**: Soft green (`#2DC96F`)
- **Font**: Poppins (Bold, Medium, Regular, Light, Light Italic) via Google Fonts
- **Radius**: Large rounded corners, soft shadows, generous spacing

## Site Structure (Single Page, Sectioned)

1. **Hero** — Name (Poppins Bold, large), title, short tagline, profile photo in a circle. Subtle green accent line or dot.
2. **About/Bio** — Full bio paragraph (Poppins Light). Mention Netflix doc, awards, expertise areas.
3. **Selected Writing** — Grid/list of 6-8 placeholder articles with publication name, title, date.
4. **Podcasts/Video** — Placeholder section for media appearances, including Netflix doc mention.
5. **Public Speaking** — Placeholder logos/list of media outlets and speaking engagements.
6. **Awards & Recognition** — Placeholder for a list of awards
7. **Contact** — Visual-only form (name, email, message) with a styled submit button that shows a toast on click.

## Turing Test Easter Egg

- A small, subtle clickable element (a tiny icon in the footer) links to a `/turing-test` route.
- That page shows two bios side by side (one "human-written," one "AI-written") with placeholder text, and two buttons to guess which is which. Clicking reveals the answer with a playful message.

## File Changes


| File                                | Action                                                                |
| ----------------------------------- | --------------------------------------------------------------------- |
| `index.html`                        | Add Google Fonts (Poppins) link, update title to "Joe Castaldo"       |
| `src/index.css`                     | Update CSS variables for new color scheme, add Poppins font-family    |
| `src/App.tsx`                       | Add `/turing-test` route                                              |
| `src/pages/Index.tsx`               | Full rebuild — all 8 sections as a single-page layout with sticky nav |
| `src/pages/TuringTest.tsx`          | New — Easter egg page with side-by-side bios and guess interaction    |
| `src/components/Navbar.tsx`         | New — sticky top nav with name + section links (smooth scroll)        |
| `src/components/HeroSection.tsx`    | New                                                                   |
| `src/components/AboutSection.tsx`   | New                                                                   |
| `src/components/BooksSection.tsx`   | New                                                                   |
| `src/components/WritingSection.tsx` | New                                                                   |
| `src/components/MediaSection.tsx`   | New — Podcasts/Video                                                  |
| `src/components/PressSection.tsx`   | New — Press & Speaking                                                |
| `src/components/ContactSection.tsx` | New — visual-only form                                                |
| `src/components/FAQSection.tsx`     | New — accordion                                                       |
| `src/components/Footer.tsx`         | New — footer with hidden Easter egg link                              |


## Technical Notes

- All sections use `id` attributes for smooth-scroll navigation
- Poppins font weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold) + 300 italic
- Contact form uses react-hook-form + sonner toast on submit (no actual send)
- FAQ uses existing Accordion component
- Responsive: mobile-first, hamburger nav on small screens
- Easter egg hint: a subtle "." or small icon in the footer that navigates to `/turing-test`