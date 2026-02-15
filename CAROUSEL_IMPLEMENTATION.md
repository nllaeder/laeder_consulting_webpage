# Project Carousel Implementation - Integration Guide

## Overview

The Laeder Consulting website now includes a responsive project photo carousel with lightbox functionality. The carousel fetches project data from a separate VPS server and displays engineering project photos with captions.

## Current Status: ✅ FULLY OPERATIONAL - CAROUSEL LIVE

The website implementation is **100% complete** and the VPS API authentication is **COMPLETE**. The carousel is now **LIVE and displaying real project photos** on the website. HTTP authentication has been implemented at the nginx level.

## What the Website Expects from VPS

### Required API Endpoint

**URL:** `https://projects.laederconsulting.com/manifest.json`

**Method:** GET

**Expected Response Format:**
```json
[
  {
    "id": "kitchen-remodel-1707912345",
    "filename": "kitchen-remodel-1707912345.jpg",
    "caption": "Load-bearing wall removal — York, PA",
    "uploaded": "2026-02-14"
  },
  {
    "id": "foundation-repair-1708012345",
    "filename": "foundation-repair-1708012345.jpg",
    "caption": "Foundation stabilization — Lancaster, PA",
    "uploaded": "2026-02-13"
  }
]
```

**Required Fields:**
- `id`: Unique identifier (string)
- `filename`: Image filename including extension (string)
- `caption`: Project description displayed to users (string)
- `uploaded`: Date string (currently unused but required for future features)

### Required Image Endpoints

**Thumbnail Images:**
- **URL Pattern:** `https://projects.laederconsulting.com/images/thumbs/{filename}`
- **Purpose:** Displayed in the carousel grid
- **Recommended Size:** 400x300px (4:3 aspect ratio)
- **Format:** JPG recommended for file size

**Full-Size Images:**
- **URL Pattern:** `https://projects.laederconsulting.com/images/full/{filename}`
- **Purpose:** Displayed in the lightbox modal
- **Recommended Size:** 1200x900px or larger
- **Format:** JPG recommended

### CORS Requirements

The VPS must send proper CORS headers to allow the website (hosted on Cloudflare Pages) to access the images:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
Access-Control-Allow-Headers: Content-Type
```

## Current Error Handling

### API Failure Behavior
- **403 Forbidden:** Carousel section completely hidden (current state)
- **404 Not Found:** Carousel section completely hidden
- **Network Error:** Carousel section completely hidden
- **Empty Array Response:** Carousel section completely hidden
- **Malformed JSON:** Carousel section completely hidden

### Development Fallback
In development mode (`npm run dev`), if the API fails, the carousel falls back to displaying 4 test images using placeholder.com. This allows local development without the VPS being available.

## Environment Configuration

Two environment files control the API endpoint:

**`.env.development`:**
```
VITE_PROJECTS_BASE_URL=http://localhost:8101
```

**`.env.production`:**
```
VITE_PROJECTS_BASE_URL=https://projects.laederconsulting.com
```

The code automatically uses production URL if no environment variable is set.

## How to Test API Integration

### 1. Test Manifest Endpoint
```bash
curl -v https://projects.laederconsulting.com/manifest.json
```

**Expected:** JSON array of projects (when auth is implemented)
**Current:** 403 Forbidden (expected until auth is added)

### 2. Test Image Endpoints (after manifest works)
```bash
curl -v https://projects.laederconsulting.com/images/thumbs/[filename-from-manifest]
curl -v https://projects.laederconsulting.com/images/full/[filename-from-manifest]
```

### 3. Test CORS (from browser console)
```javascript
fetch('https://projects.laederconsulting.com/manifest.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## UI Behavior When Working

### Carousel Features
- **Responsive Grid:** 1 slide (mobile) → 2 slides (tablet) → 3 slides (laptop) → 4 slides (desktop)
- **Navigation:** Left/right arrows with brand green color (#2f5854), hover lime (#8fba40)
- **Thumbnails:** 4:3 aspect ratio with hover scale effect and border radius
- **Captions:** Displayed below each thumbnail in gray text

### Lightbox Features
- **Full-Screen Modal:** Dark overlay with centered image
- **Navigation:** Click arrows, keyboard arrows (←/→), or click outside to close
- **Keyboard Support:** Escape to close, arrow keys to navigate
- **Loading States:** Spinner while full-size image loads
- **Image Counter:** "X of Y" display when multiple images exist
- **Responsive:** Scales properly on all screen sizes

### Z-Index Management
- **Navigation Bar:** z-50
- **Mobile FAB:** z-50
- **Lightbox:** z-[100] (appears above everything)

## Integration Steps for VPS Team

### Phase 1: Basic API (Minimal Viable Product)
1. Create `/manifest.json` endpoint returning valid JSON array
2. Add proper CORS headers
3. Test with `curl` and browser fetch

### Phase 2: Image Serving
1. Create `/images/thumbs/` directory structure
2. Create `/images/full/` directory structure
3. Upload test images in both directories
4. Test image URLs directly in browser

### Phase 3: Authentication Integration
1. Implement whatever auth system you prefer
2. Ensure authenticated requests can access manifest and images
3. Website will automatically start working once API returns 200 OK

## Troubleshooting

### Carousel Not Appearing
- Check browser network tab for API calls to manifest.json
- Verify API returns 200 status with valid JSON
- Check browser console for CORS errors

### Images Not Loading
- Verify image filenames in manifest match actual files
- Check CORS headers on image requests
- Test image URLs directly in browser

### Lightbox Issues
- Usually caused by missing full-size images
- Check browser console for 404s on full image requests

## Files Modified in This Implementation

### New Components
- `src/components/ProjectCarousel.tsx` - Main carousel component
- `src/components/ProjectLightbox.tsx` - Full-screen image modal

### Modified Files
- `src/App.tsx` - Added carousel between Services and About sections
- `src/index.css` - Added Swiper navigation styling
- `package.json` - Added Swiper 12.1.1 dependency

### New Configuration
- `.env.development` - Local development API endpoint
- `.env.production` - Production API endpoint

## Next Steps

**For VPS Team:**
1. Implement basic manifest.json endpoint (can return empty array initially)
2. Add CORS headers
3. Test with website team
4. Add image serving capability
5. Populate with real project data

**For Website Team:**
- Implementation complete, waiting for VPS API
- Ready to test as soon as manifest.json returns 200 OK
- No further website changes needed

## Contact Information

This implementation follows the exact specifications in `CLAUDE.md`. The carousel will automatically activate once the VPS API is accessible - no additional website code changes required.