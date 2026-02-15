# AI Agents Guide - Laeder Consulting Website

## For Future AI Assistants Working on This Project

This document provides essential context for AI agents (Claude, Gemini, etc.) who will work on the Laeder Consulting website in the future.

## 📁 Project Context Files

**READ THESE FIRST** before making any changes:

1. **`CLAUDE.md`** - Complete technical specifications and implementation requirements
2. **`gemini.md`** - Brand guidelines, design persona, and development instructions
3. **`README.md`** - Current project overview and technical architecture
4. **`DEVLOG.md`** - Development history with completed features and future tasks
5. **`CAROUSEL_IMPLEMENTATION.md`** - Detailed VPS API integration guide

## 🎯 Project Mission

**Client**: Laeder Consulting - Professional Engineering firm in Central Pennsylvania
**Owner**: Nicholas Laeder, PE, CGBE, CEM
**Primary Goal**: Direct lead generation for structural engineering services
**Target Users**: Contractors, homeowners, real estate professionals needing PE services

## 🎨 Brand Identity (CRITICAL)

### Colors (Never Change These)
- **Background**: `#F1F5F9` (Light Slate) - `bg-brand-bg`
- **Primary**: `#2f5854` (Dark Green) - `text-brand-green`
- **Accent**: `#8fba40` (Lime Green) - `bg-brand-lime`

### Design Philosophy
- **"Engineering Blueprint" aesthetic** - Technical, precise, authoritative
- **Mobile-first approach** - Contractors use phones in the field
- **Conversion-focused** - Every element drives toward "Call/Text Engineer"
- **Credential emphasis** - PE license is the key differentiator

### Typography & Visual Elements
- Clean sans-serif fonts (system fonts)
- Blueprint grid backgrounds (`.bg-blueprint` class)
- Technical SVG icons for services
- Minimal decorative elements - function over form

## 🏗️ Technical Architecture

### Core Stack
- **React 19** + **TypeScript** + **Vite 7** + **Tailwind CSS v4**
- **Deployment**: Cloudflare Pages (automatic from GitHub main branch)
- **External API**: `projects.laederconsulting.com` for project photos

### Component Hierarchy (Do Not Rearrange)
```
App.tsx
├── Navigation (sticky header)
├── Hero (primary CTA)
├── Services (4-column grid)
├── ProjectCarousel ✨ (NEW - between Services and About)
├── About/Credentials (inline section)
├── Footer
└── MobileContactFab
```

### Key Dependencies
- **Swiper 12.1.1** - Powers the project carousel (DO NOT UPGRADE without testing)
- **Tailwind CSS v4** - Uses new `@theme` syntax (different from v3)
- **Environment variables** - API endpoints configured via `.env` files

## 🔄 Current Status (Updated 2026-02-15)

### ✅ COMPLETED FEATURES
- [x] **Core website** - Fully responsive, production-ready
- [x] **Brand identity** - Colors, typography, blueprint aesthetic
- [x] **Project carousel** - Swiper-powered with lightbox modal
- [x] **API integration** - Ready for VPS authentication
- [x] **Mobile optimization** - FAB buttons, responsive design
- [x] **SEO foundation** - Meta tags, structured markup

### 🔄 WAITING FOR EXTERNAL WORK
- [ ] **VPS API Authentication** - Carousel will activate once auth is implemented
- [ ] **Project content** - Real engineering project photos and descriptions
- [ ] **Domain/hosting** - Cloudflare Pages deployment configuration

### 📋 FUTURE ENHANCEMENTS (Lower Priority)
- [ ] Contact form implementation
- [ ] Client testimonials section
- [ ] Google Analytics integration
- [ ] Accessibility improvements
- [ ] Location-specific SEO pages

## 🚨 Critical Rules for AI Agents

### DO NOT CHANGE
- **Brand colors** - These are final and client-approved
- **Component order** - Hero → Services → Carousel → About flow is intentional
- **CTA strategy** - "Text Engineer Now" is the primary conversion goal
- **Tailwind v4 syntax** - Uses `@theme` blocks, not traditional config files

### ALWAYS FOLLOW
- **Mobile-first design** - Test all changes on mobile viewports first
- **Graceful degradation** - Hide sections rather than show errors
- **Brand consistency** - Use existing components as style templates
- **Performance priority** - Lazy load images, optimize Core Web Vitals

### PROJECT-SPECIFIC PATTERNS
- **Error handling**: Return `null` to hide sections, never show error messages to users
- **API integration**: Always include CORS considerations and fallback behavior
- **Component creation**: Follow patterns in `Services.tsx` and `Hero.tsx`
- **Responsive design**: Use breakpoints `sm:`, `md:`, `lg:`, `xl:` consistently

## 🔗 External Integration Points

### VPS API (projects.laederconsulting.com)
- **Status**: Implemented but returns 403 (needs auth)
- **Expected**: JSON manifest with project data
- **Behavior**: Carousel hidden until API returns 200 OK
- **Testing**: Use `curl` commands provided in `CAROUSEL_IMPLEMENTATION.md`

### Cloudflare Pages Deployment
- **Trigger**: Push to `main` branch on GitHub
- **Build**: `npm run build` (Vite production build)
- **Environment**: Uses `.env.production` values automatically

## 🔧 Development Workflow

### Before Making Changes
1. Read `CLAUDE.md` for technical specs
2. Check `gemini.md` for brand guidelines
3. Review `DEVLOG.md` for implementation history
4. Test locally with `npm run dev`
5. Verify build with `npm run build`

### Testing Checklist
- [ ] Mobile responsiveness (375px, 768px, 1024px, 1280px)
- [ ] Brand color consistency
- [ ] API error handling (network failure scenarios)
- [ ] Keyboard navigation (especially carousel/lightbox)
- [ ] Loading states and transitions

### Commit Standards
- Use descriptive commit messages with emoji context
- Include `🤖 Generated with [Claude Code](https://claude.ai/code)` footer
- Update relevant documentation files
- Test build process before pushing

## 📞 Contact Integration

### Primary CTA: "Text Engineer Now"
- **Phone**: `223.221.0710` (SMS-enabled)
- **Email**: `nicholas@laederconsulting.com`
- **Strategy**: Mobile users can send photos of structural issues

### Conversion Flow
1. User sees structural problem
2. Lands on website via search/referral
3. Views project examples (carousel)
4. Clicks "Text Engineer Now"
5. Sends SMS with photo/description
6. Nick provides quote and scheduling

## 🎓 Engineering Services Context

### Core Services (Never Change)
1. **Structural & Architectural Engineering** - Residential design, load-bearing modifications
2. **Forensic Inspections** - Foundation analysis, beam failure assessment
3. **Accessibility Engineering** - Elevator/lift structural support
4. **PA DEP SPEED Program** - Environmental compliance inspections

### Competitive Advantage
- **PE License** - Required for stamped engineering drawings
- **Local expertise** - Central PA building codes and soil conditions
- **Residential focus** - Unlike commercial-only engineering firms
- **Direct access** - No administrative layers, talk to the engineer

## 🔮 Future Vision

### Phase 1 (Current): Basic Website + Carousel
- ✅ Professional presence with project showcase
- ✅ Mobile-optimized lead generation
- 🔄 Waiting for VPS authentication

### Phase 2 (Next): Content & Analytics
- Real project photos and case studies
- Google Analytics and conversion tracking
- Client testimonials and reviews

### Phase 3 (Future): Advanced Features
- Service-specific landing pages for SEO
- Online scheduling integration
- Interactive project calculator
- Multi-language support (Spanish for construction crews)

---

**Remember**: This is a professional engineering website. Every design decision should reinforce trust, expertise, and technical authority. The goal is converting visitors into engineering clients, not winning design awards.

**Questions?** Reference the context files above or examine existing component patterns for guidance.