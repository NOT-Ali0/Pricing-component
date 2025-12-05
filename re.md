# Modern Pricing Page

A beautiful, modern pricing page built with pure Svelte featuring glassmorphism design.

## Overview

This project showcases a premium SaaS-style pricing page with:
- Three pricing tiers (Basic, Pro, Enterprise)
- Monthly/Annual billing toggle with smooth animations
- Glassmorphism design with backdrop blur and transparency
- Animated gradient background orbs
- Fully responsive layout for all device sizes

## Project Structure

```
/
├── src/
│   ├── App.svelte          # Main pricing page component
│   └── main.js             # Application entry point
├── public/
│   └── favicon.svg         # Site favicon
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── svelte.config.js        # Svelte configuration
└── vite.config.js          # Vite bundler configuration
```

## Tech Stack

- **Framework**: Pure Svelte 5 (no SvelteKit)
- **Bundler**: Vite 6
- **Styling**: Custom CSS with glassmorphism effects
- **Typography**: Inter font family (Google Fonts)

## Running the Project

Development server runs on port 5000:
```bash
npm run dev
```

## Features

### Pricing Toggle
- Smooth animated toggle switch between Monthly and Annual pricing
- 20% discount displayed for annual billing
- Dynamic price updates with savings calculation

### Glassmorphism Cards
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and gradients
- Hover animations with elevation changes

### Responsive Design
- Grid layout adapts to screen size
- Mobile-optimized card stacking
- Touch-friendly toggle controls

## Recent Changes

- Converted to pure Svelte (December 2025)
  - Removed SvelteKit dependencies
  - Uses Svelte 5 with Vite directly
  - Simplified project structure

- Initial implementation (December 2025)
  - Created complete pricing page with all features
  - Added glassmorphism styling and animations
  - Implemented responsive design
