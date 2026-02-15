# Laeder Consulting - Professional Engineering Website

A modern, responsive website for Laeder Consulting, a structural engineering firm specializing in residential design, forensic inspections, and accessibility solutions in Central Pennsylvania.

## 🏗️ Project Overview

**Live Site**: Deployed on Cloudflare Pages
**Tech Stack**: React 19 + TypeScript + Vite 7 + Tailwind CSS v4
**Design Theme**: "Engineering Blueprint" aesthetic with technical precision

## ✅ Current Features

### Core Website
- **Responsive Design**: Mobile-first approach with professional engineering aesthetic
- **Brand Identity**: Custom color scheme (#2f5854 dark green, #8fba40 lime, #F1F5F9 background)
- **Engineering Focus**: Blueprint grid backgrounds, technical typography, PE credential emphasis
- **Conversion Optimized**: "Text Engineer Now" CTA, mobile contact FABs, direct lead generation

### Components
- **Navigation**: Sticky header with vertical logo
- **Hero Section**: Primary CTA with call/text buttons
- **Services Grid**: 4-column showcase of engineering services
- **Project Carousel**: ✅ **NEW** - Responsive photo gallery with lightbox modal
- **About/Credentials**: PE, CGBE, CEM certifications display
- **Footer**: Contact information and credential emphasis
- **Mobile FAB**: Fixed floating action buttons for mobile conversion

### Project Photo System (Added 2026-02-15)
- **Responsive Carousel**: Swiper-powered, 1→4 slides based on screen size
- **Lightbox Modal**: Full-screen image viewer with keyboard navigation
- **API Integration**: Connected to VPS at `projects.laederconsulting.com`
- **Graceful Degradation**: Section hidden when API unavailable
- **Error Handling**: No user-facing errors, clean fallback behavior

## 🔧 Technical Architecture

### Dependencies
- **React 19** - Latest React with improved performance
- **TypeScript** - Type safety and developer experience
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **Swiper 12.1.1** - Carousel and lightbox functionality

### API Integration
- **Production**: `https://projects.laederconsulting.com/manifest.json`
- **Development**: `http://localhost:8101/manifest.json`
- **Image Serving**: `/images/thumbs/` and `/images/full/` endpoints
- **Environment**: Separate dev/production configurations

## 🚀 Development

### Quick Start
```bash
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Environment Setup
Create `.env.development` for local API testing:
```
VITE_PROJECTS_BASE_URL=http://localhost:8101
```

### Project Structure
```
src/
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx            # Main CTA section
│   ├── Services.tsx        # Service grid display
│   ├── ProjectCarousel.tsx # Project photo carousel ✨
│   ├── ProjectLightbox.tsx # Full-screen image modal ✨
│   ├── Footer.tsx          # Footer with credentials
│   └── MobileContactFab.tsx # Mobile contact buttons
├── App.tsx                 # Main application component
├── index.css              # Tailwind config + custom styles
└── main.tsx               # Application entry point
```

## 📊 Current Status

### ✅ Completed Features
- [x] Responsive website with engineering aesthetic
- [x] Brand identity and color scheme implementation
- [x] Core service sections and navigation
- [x] Mobile-optimized contact conversion
- [x] Project photo carousel with lightbox
- [x] VPS API integration architecture
- [x] Production deployment ready

### 🔄 In Progress
- [ ] **VPS API Authentication** - Waiting for auth implementation
- [ ] **Project Content** - Awaiting real project photos and data

### 📋 Future Enhancements
- [ ] Contact form implementation
- [ ] Client testimonials section
- [ ] Google Analytics integration
- [ ] Accessibility audit and improvements
- [ ] Service-specific landing pages for SEO

## 🔗 API Documentation

The website expects a VPS-hosted API for project photos. See `CAROUSEL_IMPLEMENTATION.md` for detailed integration requirements.

**Manifest Format**:
```json
[
  {
    "id": "project-id-123",
    "filename": "project-image.jpg",
    "caption": "Load-bearing wall removal — York, PA",
    "uploaded": "2026-02-14"
  }
]
```

## 📄 Additional Documentation

- **`DEVLOG.md`** - Development history and achievements
- **`gemini.md`** - Brand guidelines and design specifications
- **`CLAUDE.md`** - Technical implementation specifications
- **`CAROUSEL_IMPLEMENTATION.md`** - Detailed API integration guide
- **`USER_TASKS.md`** - Project requirements and task tracking

## 🏢 About Laeder Consulting

Professional engineering firm led by Nicholas Laeder, PE, CGBE, CEM, specializing in:
- Structural & Architectural Engineering
- Forensic Inspections & Certifications
- Accessibility & Vertical Transportation
- PA DEP SPEED Program (Part 102) Services

**Service Area**: Central Pennsylvania (York, Lancaster, Harrisburg, Reading, Chester County)
