# Modern Pricing Page

A beautiful, modern pricing page built with pure Svelte featuring glassmorphism design.

## Overview

This project showcases a premium SaaS-style pricing page with:
- Three pricing tiers (free trial
, Pro, Premium)
- Monthly/Annual billing toggle with smooth animations
- Glassmorphism design with backdrop blur and transparency
- Animated gradient background orbs
- Fully responsive layout for all device sizes

colors used :
dark:
primery-bg = #222831
second-bg = #393E46
primery-text= #00ADB5
second-text= #EEEEEE
light:
primery-bg = #E3FDFD
second-bg = #CBF1F5
primery-text= #A6E3E9
second-text= #71C9CE


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



- Initial implementation (December 2025)
  - Created complete pricing page with all features
  - Added glassmorphism styling and animations
  - Implemented responsive design


---> new message
  
Create a visually appealing, responsive pricing page using the provided Svelte component script and CSS styles.

Key Requirements:
Structure and Content: Implement the main pricing page structure using the Svelte component's HTML, including the Navbar component, header, toggle-wrapper, and pricing-grid.

Data and Logic:

Use the existing plans array for plan data (Free Trial, Pro, Premium).

Implement the billing toggle functionality using the isAnnual state and the toggleBilling() function.

Display the correct price using the getPrice(plan) function (monthly or annual).

For annual billing, display the savings using the getSavings(plan) function.

Ensure the "Free Trial" plan is hidden when the Annual billing is selected, as per the Svelte logic: {#each plans.filter((p) => !isAnnual || p.name !== "free trial") as plan}.

Visual Styling: Apply all the provided CSS to achieve the dark/light mode functionality, the gradient background effects, and the modern card design, ensuring the "Pro" plan is highlighted with the highlighted class.

Interactivity: Make the Monthly/Annual toggle switch and the Dark/Light theme toggle in the Navbar fully functional based on the Svelte script's functions.
