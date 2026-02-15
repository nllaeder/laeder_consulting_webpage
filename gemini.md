# Brand Persona: Laeder Consulting
**Identity:** A multidisciplinary engineering firm led by a Professional Engineer (PE) specializing in structural forensics, high-end residential design, and sustainable compliance.
**Voice:** Precise, authoritative, and direct. The site should feel like a trusted technical resource, not a generic marketing page.

## Visual Identity & Assets
- **Background Color:** #F1F5F9 (Light Slate/Grey)
- **Primary Color (Dark Green):** #2f5854
- **Accent Color (Lime Green):** #8fba40
- **Asset Mapping:**
  - **Favicon/App Icon:** `/assets/icon-only.png`
  - **Primary Logo:** `/assets/Laeder-Consulting-Logo-Vertical-RGB.png`
  - **Secondary Logo:** `/assets/Laeder-Consulting-Logo-Horizontal_RGB.png`

## Implementation Notes
- **Visual Balance:** Use Dark Green (#2f5854) for structural elements like footers, headers, or section dividers to ground the light background.
- **Mobile-First Forensics:** Prioritize a prominent "Text Engineer Now" button in Lime Green (#8fba40) on mobile devices. This targets contractors/homeowners who need immediate structural sign-offs.
- **Blueprint Aesthetic:** Use clean sans-serif typography and subtle grid-line backgrounds or technical SVG overlays to reflect the engineering nature of the work.

## Current Architecture (Updated 2026-02-15)

### Component Structure
- **Navigation.tsx**: Sticky header with vertical logo and brand navigation
- **Hero.tsx**: Primary CTA section with "Text Engineer Now" and "Call Now" buttons
- **Services.tsx**: 4-column grid showcasing core engineering services
- **ProjectCarousel.tsx**: ✅ NEW - Responsive image carousel with Swiper integration
- **ProjectLightbox.tsx**: ✅ NEW - Full-screen image modal with keyboard navigation
- **Footer.tsx**: Credential-focused footer with contact information
- **MobileContactFab.tsx**: Fixed floating action buttons for mobile conversion

### Dependencies & Integrations
- **React 19** + **TypeScript** + **Vite 7** + **Tailwind CSS v4**
- **Swiper 12.1.1**: ✅ ADDED - Powers the project photo carousel
- **API Integration**: Connected to `projects.laederconsulting.com` for dynamic project content
- **Environment Variables**: Separate dev/production API endpoints

### Page Flow (Updated)
1. Navigation (sticky)
2. Hero section (primary CTA)
3. Services grid (4 core offerings)
4. **Project Carousel** ✅ NEW - Showcases engineering project photos
5. About/Credentials section (PE, CGBE, CEM credentials)
6. Footer (contact & credentials)
7. Mobile FAB (call/text buttons)

## Service Architecture
1. **Structural & Architectural Engineering:** Residential estate design, load-bearing wall removal, floorplan modifications, and settling additions.
2. **Forensic Inspections & Certifications:** Professional sign-offs for unpermitted work, foundation movement analysis, and structural failure remediation (beams/joists).
3. **Accessibility & Vertical Transportation:** Structural engineering and support for residential elevators, wheelchair lifts, and chair lifts.
4. **PA DEP SPEED Program (Part 102):** Qualified Person services for BMP/PCSM SCM construction observation and critical stage inspections.

## Conversion Strategy
- **Goal:** Direct Lead Generation (Call/Text/Email).
- **CTA Implementation:** A "Direct-to-Engineer" contact block on every page.
  - Primary: "Call [Phone Number]"
  - Secondary: "Text a Photo of your Issue" (Optimized for SMS links)
  - Tertiary: "Email for Quote"

## Technical Credentials
- Licensed Professional Engineer (PE)
- Certified Green Building Engineer (CGBE)
- Certified Energy Manager (CEM)
- Master’s in Data Science (Proprietor of LaederData.com)

## SEO & Local Authority Instructions
- **Title Tag Pattern:** [Service]  in [Primary City/Region], PA | Laeder Consulting.
- **Header Strategy (H1):** Always include "Service + Location" (e.g., "Structural Engineering in Central Pennsylvania").
- **Footer Requirements:** Include the full Physical Address, Phone Number, and a Google Maps embed to send strong local signals.
- **Structured Data (Schema):** Implement JSON-LD "ProfessionalService" or "EngineeringBusiness" schema. 
  - Required fields: Name, Address, Phone (NAP), Geo-coordinates, and opening hours.
- **Service-Area Pages:** Generate a template for location-specific landing pages (e.g., "Structural Inspections in Harrisburg, PA; York, PA; Lebanon, PA; Lancaster, PA; Reading, PA; Chester County, PA; Berks County, PA; Dauphin County, PA; Lancaster County, PA; Lebanon County, PA; York County, PA").
- **Performance:** Maintain a "Mobile-First" build. Target a Google PageSpeed Insights score of 90+ for mobile.

## Development Instructions for Future AI Agents

### Project Photo Carousel (Implemented 2026-02-15)
**Status**: ✅ Complete - Website ready, waiting for VPS API authentication

**Architecture**:
- **Component Files**: `ProjectCarousel.tsx`, `ProjectLightbox.tsx`
- **API Endpoint**: `https://projects.laederconsulting.com/manifest.json` (currently returns 403)
- **Expected Response**: JSON array with `id`, `filename`, `caption`, `uploaded` fields
- **Image Paths**: `/images/thumbs/{filename}` and `/images/full/{filename}`
- **Error Behavior**: Carousel section hidden when API unavailable (graceful degradation)

**Key Features**:
- Responsive grid: 1→2→3→4 slides based on breakpoints
- Full-screen lightbox with keyboard navigation (←/→ arrows, ESC)
- Loading states and smooth transitions
- Brand-colored Swiper navigation arrows
- CORS-ready for cross-origin image serving

**Integration Notes**:
- Carousel positioned between `Services` and `About` sections
- Uses Swiper 12.1.1 with modular CSS imports
- Environment variables for dev/production API endpoints
- Fallback to test data in development mode only

**Next Steps for VPS Team**:
1. Implement authentication for manifest endpoint
2. Ensure CORS headers on image serving
3. Test with: `curl https://projects.laederconsulting.com/manifest.json`

### Modification Guidelines
- **Brand Colors**: Always use `#2f5854` (dark green) and `#8fba40` (lime) for consistency
- **Component Style**: Follow existing patterns in `Services.tsx` and `Hero.tsx`
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Error Handling**: Graceful degradation - hide sections rather than show errors
- **Performance**: Lazy load images, optimize for Core Web Vitals