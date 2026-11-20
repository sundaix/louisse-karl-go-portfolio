# Louisse Karl Go — Portfolio

A premium, product-style personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or any static host.
For Vercel: `npx vercel` from this folder, or connect the GitHub repo in the Vercel dashboard (framework preset: Vite).

## Where to edit things

Everything content-related lives in `src/data/`, so you can update the site without touching component code:

| File | What it controls |
|---|---|
| `src/data/config.js` | Name, tagline, email, GitHub username, LinkedIn, resume link |
| `src/data/skills.js` | Skill categories and icons |
| `src/data/projects.js` | Featured project cards — copy an object to add a new one |
| `src/data/timeline.js` | The "Journey" vertical timeline |
| `src/data/certificates.js` | Certification cards |
| `src/data/experience.js` | Experience timeline entries |
| `src/data/blog.js` | Blog/notes placeholders |

The **GitHub section** pulls your repos live from the public GitHub API using the
`github` username set in `config.js` — no key needed, updates automatically.

## Assets to add

- `public/favicon.svg` — already set, replace if you want a different mark
- A professional photo for the About section (currently a placeholder card — swap the
  placeholder block in `src/components/About.jsx` for an `<img>` once you have one)
- Project screenshots — replace the placeholder blocks in `src/components/Projects.jsx`
  with `<img src="/projects/your-image.png" />` once available
- Certificate images — same pattern in `src/components/Certificates.jsx`
- A resume PDF — drop it in `public/` and point `resumeUrl` in `config.js` at it

## Notes

- The contact form is currently front-end only. Wire it up to a form service
  (e.g. Formspree, Resend, or a small serverless function) to actually receive messages.
- Tailwind v4 is configured via the `@tailwindcss/vite` plugin — design tokens
  (colors, fonts) live in `src/index.css` under `@theme`.
- Reduced-motion is respected globally for accessibility.
