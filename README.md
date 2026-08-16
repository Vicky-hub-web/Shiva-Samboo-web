# Shiva Samboo

Premium React/Vite real-estate landing page.

## Easiest way on Windows
Double-click `RUN_WINDOWS.bat`.

Or open Command Prompt in this folder and run:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The `dist` folder can be deployed to Vercel or Netlify.

## Requirements
- Node.js 18 or newer (Node.js LTS recommended)
- Internet connection during `npm install`
- Internet connection is also needed for the current Google Fonts and Unsplash images

## If an old/broken install exists
Windows Command Prompt:

```bat
rmdir /s /q node_modules
del package-lock.json
npm cache verify
npm install
npm run dev
```

## Key interactions
- Day/night architectural reveal in the hero
- Pointer-driven lighting split on desktop
- Framer Motion text reveals and parallax
- GSAP ScrollTrigger pinned horizontal residence gallery on desktop
- Mobile-first stacked collection
- Animated responsive navigation
- Custom cursor micro-interactions
- Reduced-motion accessibility fallback

## Asset note
Photography uses remote Unsplash images. Replace URLs in:
- `src/sections/Hero.jsx`
- `src/data/residences.js`
- `src/sections/Experience.jsx`
- `src/sections/CTA.jsx`


## Stability fixes
- Removed GSAP ScrollTrigger pinning that could lock scrolling around the services/process area.
- Removed Framer Motion runtime dependency; animations now use lightweight CSS.
- Standardized navigation anchors to #services, #process and #contact.
- Services layout now uses a normal responsive grid so every section remains reachable.
- Reveal content renders immediately and cannot remain clipped halfway.
