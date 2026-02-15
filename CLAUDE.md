# CLAUDE.md — Laeder Consulting Project Carousel (Local)

## Project Overview

Add a project photo carousel with lightbox to the Laeder Consulting engineering firm website. The site is a React + TypeScript + Vite + Tailwind CSS v4 static site deployed on Cloudflare Pages. Project images and a manifest are hosted on a separate server at `projects.laederconsulting.com`.

## Tech Stack

- React 19 with TypeScript
- Vite 7
- Tailwind CSS v4 (using `@import "tailwindcss"` in `src/index.css`, theme defined with `@theme` block)
- Swiper (install with `npm install swiper` before starting — should already be installed)
- Deployed on Cloudflare Pages from a GitHub repo

## Existing Code Context

### Brand Colors (defined in `src/index.css`)

```css
@theme {
  --color-brand-bg: #F1F5F9;
  --color-brand-green: #2f5854;
  --color-brand-lime: #8fba40;
}
```

Use Tailwind classes like `text-brand-green`, `bg-brand-lime`, `border-brand-green`, etc.

### App Structure (`src/App.tsx`)

Current component order:
1. `<Navigation />`
2. `<Hero />`
3. `<Services />`
4. **← Insert ProjectCarousel here**
5. About/Credentials section (inline in App.tsx)
6. `<Footer />`
7. `<MobileContactFab />`

### Existing Component Style

Components are in `src/components/`. They use functional components with default exports, Tailwind utility classes, and no external state management. Follow the same patterns.

## Image Source

The carousel fetches image data from a manifest hosted on the VPS.

- Base URL is configured via Vite environment variable `VITE_PROJECTS_BASE_URL`
- Manifest: `{baseUrl}/manifest.json`
- Full images: `{baseUrl}/images/full/{filename}`
- Thumbnails: `{baseUrl}/images/thumbs/{filename}`

### manifest.json Format

```json
[
  {
    "id": "kitchen-remodel-1707912345",
    "filename": "kitchen-remodel-1707912345.jpg",
    "caption": "Load-bearing wall removal — York, PA",
    "uploaded": "2026-02-14"
  }
]
```

## Files to Create

### 1. `.env.development`

```
VITE_PROJECTS_BASE_URL=http://localhost:8101
```

### 2. `.env.production`

```
VITE_PROJECTS_BASE_URL=https://projects.laederconsulting.com
```

### 3. `src/components/ProjectCarousel.tsx`

A horizontal thumbnail carousel using Swiper with a click-to-open lightbox.

#### Behavior

- On mount, fetch `manifest.json` from `import.meta.env.VITE_PROJECTS_BASE_URL`.
- If the fetch fails or returns an empty array, render nothing (return `null`). Do not show an error state to site visitors — the section simply doesn't appear.
- While loading, show a subtle loading indicator or just render nothing (keep it simple).
- Once loaded, render a section with heading and the Swiper carousel.
- Carousel displays thumbnail images in a horizontal strip.
- Left and right navigation arrows on the sides of the carousel.
- Each slide shows the thumbnail image with the caption below it.
- Clicking any slide opens the `ProjectLightbox` component with the full-size image.

#### Swiper Configuration

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
```

Swiper props:
- `modules={[Navigation]}`
- `navigation={true}`
- `spaceBetween={24}`
- `slidesPerView={1}` with breakpoints: `{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }`
- `loop={false}` (or `true` if there are enough slides)

#### Section Wrapper

Wrap the carousel in a `<section>` matching the site's style:

```tsx
<section id="projects" className="py-20 bg-white border-t border-slate-200">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-brand-green mb-4">Recent Projects</h2>
    <div className="w-24 h-1 bg-brand-lime mx-auto mb-12"></div>
    {/* Swiper goes here */}
  </div>
</section>
```

This mirrors the heading style used in the Services section.

#### Slide Content

Each slide:

```tsx
<SwiperSlide key={project.id}>
  <div
    className="cursor-pointer group"
    onClick={() => openLightbox(index)}
  >
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <img
        src={`${baseUrl}/images/thumbs/${project.filename}`}
        alt={project.caption}
        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <p className="mt-3 text-sm text-gray-600 text-center">{project.caption}</p>
  </div>
</SwiperSlide>
```

### 4. `src/components/ProjectLightbox.tsx`

A full-screen overlay for viewing the full-size image. Built as a custom component — no additional library.

#### Props

```tsx
interface ProjectLightboxProps {
  projects: Project[];      // full manifest array
  currentIndex: number;     // which project to show
  baseUrl: string;          // for building image URLs
  onClose: () => void;      // close handler
  onNavigate: (index: number) => void;  // prev/next handler
}
```

#### Behavior

- Renders a fixed full-screen overlay with a dark semi-transparent background (`bg-black/80`).
- Centers the full-size image with the caption below it.
- Close button (X) in the top-right corner.
- Left arrow and right arrow for navigation, positioned on the sides of the image.
- Clicking the dark background (outside the image) closes the lightbox.
- Pressing `Escape` closes the lightbox.
- Pressing left/right arrow keys navigates.
- Prevent body scroll while open: set `document.body.style.overflow = 'hidden'` on mount, restore on unmount (use `useEffect` cleanup).
- Wrap prev/next so they don't go below 0 or above `projects.length - 1` (disable the arrow at the boundary, or just stop).
- Add a smooth fade-in transition on open.
- The full-size image tag: `<img src={${baseUrl}/images/full/${project.filename}} />`.
- Show a loading spinner or skeleton while the full image loads (it's larger than the thumbnail). Use an `onLoad` handler on the img element.

#### Close on Background Click

Use `onClick` on the backdrop div, and `onClick={e => e.stopPropagation()}` on the content container so clicking the image/controls doesn't close it.

#### Keyboard Handling

```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
    if (e.key === 'ArrowRight' && currentIndex < projects.length - 1) onNavigate(currentIndex + 1);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentIndex, projects.length, onClose, onNavigate]);
```

### 5. Modifications to `src/App.tsx`

Import and add the carousel between Services and the About section:

```tsx
import ProjectCarousel from './components/ProjectCarousel';

// In the JSX, after <Services /> and before the about section:
<ProjectCarousel />
```

### 6. Modifications to `src/index.css`

Add Swiper navigation arrow color overrides to match the brand. Place after the existing `@layer base` block:

```css
/* Swiper overrides */
.swiper-button-next,
.swiper-button-prev {
  color: var(--color-brand-green) !important;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: var(--color-brand-lime) !important;
}
```

Check that importing Swiper's CSS files (`swiper/css` and `swiper/css/navigation`) doesn't cause issues with Tailwind v4. If there are conflicts, scope the Swiper styles or import them differently. The Swiper CSS imports should go inside the component file, not in `index.css`.

## Type Definition

Define the Project type. Either in a shared types file or at the top of `ProjectCarousel.tsx`:

```tsx
interface Project {
  id: string;
  filename: string;
  caption: string;
  uploaded: string;
}
```

If used in both components, put it in `src/types.ts` and import from there.

## Development Approach

Build incrementally in this order:

1. Create the `.env.development` and `.env.production` files.
2. Create `ProjectCarousel.tsx` with Swiper rendering **static test data** first (hardcode 3-4 fake entries). Get the carousel rendering and looking right before wiring up the fetch.
3. Create `ProjectLightbox.tsx` and wire it into the carousel. Test open/close, navigation, keyboard shortcuts, and background click to close.
4. Replace static test data with the manifest fetch. Add the loading and error handling (render nothing on failure).
5. Integrate into `App.tsx`.
6. Add Swiper color overrides to `index.css`.
7. Test edge cases: empty manifest (section hidden), single image (no arrows needed), fetch timeout/failure (section hidden), very long captions (truncate or wrap gracefully).

## Important Technical Notes

- Swiper 11+ uses ES module imports. The import path is `swiper/react`, modules from `swiper/modules`.
- Do not use `swiper/bundle` — use the modular imports for tree-shaking.
- All images are cross-origin (served from a different domain). Standard `<img>` tags handle this fine as long as the server sends proper CORS headers (it does).
- The `VITE_PROJECTS_BASE_URL` env var must not have a trailing slash. Strip it if present when building URLs.
- Use `loading="lazy"` on thumbnail images for performance.
- The lightbox should have a high `z-index` (e.g., `z-[100]`) to appear above the sticky navigation (`z-50`) and the mobile FAB buttons (`z-50`).
- Make sure the section renders well with 1 image, 3 images, and 10+ images. Swiper handles this naturally with its breakpoints config.
- Do not add the carousel section to the navigation menu — it will be visible as users scroll and that's sufficient.
