# Humaneloom

Humaneloom is a modern web application built with React and Vite, featuring premium animations and a responsive design.

## Architecture

```mermaid
graph TD
    User[User] -->|Visits| Client[Client (React + Vite)]
    Client -->|Renders| Pages[Pages]
    Pages -->|HeroSection| Comp1[Components]
    Pages -->|HowItWorks| Comp2[Components]
    Pages -->|OurProducts| Comp3[Components]

    subgraph Components
    Comp1
    Comp2
    Comp3
    end

    Comp2 -->|Uses| FloatingIcon[FloatingIcon (Framer Motion)]
    Comp3 -->|Uses| StickyScroll[Sticky Scroll Layout]
```

## Features

### Animated "How It Works" Section

- Floating icon animations using `framer-motion`.
- Hover effects for enhanced interactivity.
- Consistent styling with the design system.

### General

- **Global Sticky Header**: The main navigation bar stays fixed to the top of the viewport with a modern frosted glass (backdrop blur) effect for easy access to navigation and actions at any scroll position.

### "Our Products" Section (Sticky Scroll)

- **Sticky Navigation**: A left-aligned navigation menu that stays sticky while scrolling.
- **Scroll-Linked Highlighting**: The active product is highlighted in the menu based on the viewport position.
- **Design**: Inspired by Mistral AI, featuring clean lines, monochromatic fonts, and subtle grid backgrounds.
- **Sticky Header Box**: The "Our Products" title is now contained in a robust, opaque sticky box with a shadow, ensuring content cleanly scrolls _under_ the header without visual overlap.

### Design System

- **Brand Colors**: Enhanced with a vibrant orange theme (`#EB6A2A`) for "Problems We Solve" and "Services" sections.

## Development

### Prerequisites

- Node.js
- pnpm

### Commands

```bash
pnpm install
pnpm dev      # Start development server
pnpm build    # Build for production
```

## Directory Structure

- `client/`: Frontend source code
  - `components/`: Reusable UI components (`HowItWorks.tsx`, `OurProducts.tsx`)
  - `pages/`: Application pages (`Index.tsx`)
  - `lib/`: Utilities (`utils.ts`)
- `server/`: Backend API (if applicable)
