# Ministry of Coffee - Multilingual Cafe Website Development Plan

## Project Overview
Building a static multilingual website for Ministry of Coffee cafe in Warsaw, optimized for GitHub Pages deployment.

## Technology Stack
- React + TypeScript
- Shadcn-ui components
- Tailwind CSS
- Vite (static build)

## File Structure (8 files max)

1. **src/lib/translations.ts** - All multilingual content (Polish, English, Turkish, Ukrainian)
2. **src/components/LanguageSwitcher.tsx** - Language selection component
3. **src/components/Hero.tsx** - Hero section with cafe name and image
4. **src/components/About.tsx** - About section with description
5. **src/components/Features.tsx** - Services, amenities, atmosphere showcase
6. **src/components/Gallery.tsx** - Image gallery component
7. **src/components/Location.tsx** - Map and contact information
8. **src/pages/Index.tsx** - Main page assembling all components

## Key Features to Implement

### 1. Language System
- Default: Polish (pl)
- Supported: English (en), Turkish (tr), Ukrainian (uk)
- Language switcher in header
- All content from translations.ts

### 2. Sections
- Hero: Cafe name, hero image, tagline
- About: Description, opening hours, rating
- Features: Highlights, offerings, amenities, atmosphere, accessibility
- Gallery: Display images from /workspace/images/
- Location: Embedded Google Map (52.2187904, 21.018337), address, phone
- Footer: Social media, copyright

### 3. GitHub Pages Compatibility
- Use HashRouter instead of BrowserRouter
- Relative paths for all assets
- Images copied to public/assets/
- Static build with `pnpm run build`

## Data Source
- JSON: /workspace/ministry_coffee_data.json
- Images: /workspace/images/ (2 images available)

## Implementation Steps
1. Copy images to public/assets/
2. Create translations file with all multilingual content
3. Build language switcher with context
4. Create all section components
5. Assemble main page
6. Update index.html title
7. Test build and lint