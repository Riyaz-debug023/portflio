# Mohamed Riyas M: Portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Lucide.

    npm install
    npm run dev        # local dev server
    npm run build      # production build in dist/

Deploy to GitHub Pages: push to `main`, then in the repository go to Settings > Pages and set Source to "GitHub Actions". The included workflow builds and publishes `dist/`. Asset paths are relative (`base: "./"`), so it works under `/<repo>/` or a custom domain. Vercel or Netlify (Vite preset) also work.

All content lives in `src/data.ts`.
- Add `github` and `demo` URLs to a project there and the links appear automatically.
- Fill in PRAMAAN's `stack` and `features` once confirmed; the layout adapts.
- The resume is served from `public/Mohamed_Riyas_M_Resume.pdf`. Replace the file to update it.

Theme: light/dark toggle in the nav (saved in localStorage; colours are CSS variables in `src/index.css`).

3D: the hero wireframe (`src/components/Scene.tsx`, react-three-fiber) follows the cursor; project cards tilt on hover. The scene is lazy-loaded and skipped when the visitor prefers reduced motion.
