# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for a digital marketing specialist, built as a modern React SPA showcasing professional expertise and achievements. The site features sophisticated animations, performance metrics, and platform-specific advertising capabilities.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Tech Stack & Architecture

**Core Technologies:**
- React 19.1.0 + TypeScript + Vite
- Tailwind CSS v4.1.11 for styling
- Framer Motion for page transitions and scroll animations
- GSAP for advanced text animations in the loader
- Zustand for state management

**Key Architecture Patterns:**

1. **Loader → Hero Flow**: App.tsx orchestrates a sophisticated loading experience with GSAP galaxy animation that transitions to the main hero content. Press spacebar during development to skip the loader.

2. **Component Structure**:
   - `src/components/Loader.tsx` - GSAP-powered loading screen with galaxy rotation
   - `src/hero.tsx` - Main portfolio content with auto-rotating service showcase
   - `src/tiles.tsx` - Animated background grid system with hover effects
   - `src/components/AnimatedChartSection.tsx` - Performance metrics visualization
   - `src/components/WorkExperience.tsx` - Professional background
   - `src/components/Contact.tsx` - Contact information and social links

3. **Animation System**:
   - GSAP timeline animations in Loader component
   - Framer Motion for scroll-triggered animations with `viewport={{ once: true }}`
   - Custom CSS keyframe animations defined in index.css
   - React.memo optimizations for performance

4. **Auto-Rotating Content**: The portfolio showcase in hero.tsx features a timer-based rotation system that cycles through Google Ads, Meta Advertising, and Analytics services every 4 seconds.

## Important Files & Locations

- `src/assets/logos/` - Contains 30+ company collaboration logos
- `src/cuicui/other/text-animation/scramble-hover/` - Custom scramble text animation component
- `netlify.toml` - Deployment configuration for Netlify with SPA routing
- `public/1200px-Galaxy.png` - Galaxy background image for loader animation

## Development Notes

**Styling Conventions:**
- Dark theme with black background (#000000)
- Primary accent colors: Green gradients and blue highlights
- Mobile-first responsive design with Tailwind breakpoints
- Custom animation utilities in index.css

**Performance Considerations:**
- React.memo used for grid tiles to prevent unnecessary re-renders
- Framer Motion animations configured with `once: true` for scroll triggers
- Image assets optimized for web delivery

**Deployment:**
- Builds to `/dist` directory
- Deployed on Netlify with Node 22 and npm 10
- SPA routing configured with catch-all redirect to index.html

**Missing Development Tools:**
- No testing framework currently configured
- Consider adding Vitest for unit testing if needed