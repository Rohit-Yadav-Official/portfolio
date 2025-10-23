# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website for Rohit Yadav, a Backend Developer specializing in Java and Spring Boot. Built with React + Vite, featuring sections for intro, skills, projects, DSA content, blog posts from Medium, and contact information.

Deployed on Netlify at: https://yadavrohit.in

## Development Commands

### Setup & Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server (uses Vite)
npm run preview         # Preview production build locally
```

### Build & Quality Checks
```bash
npm run build           # Build for production (output: dist/)
npm run lint            # Run ESLint checks
```

## Architecture

### Tech Stack
- **Framework**: React 18.3 + Vite 6.0
- **Routing**: React Router DOM v7
- **Styling**: CSS modules (component-specific .css files)
- **Deployment**: Netlify (auto-deploys from main branch via GitHub Actions)

### Application Structure

#### Routing
Two main routes defined in `App.jsx`:
- `/` - Homepage with all portfolio sections
- `/blog` - Dedicated blog page (Navbar hidden on this route)

#### Component Hierarchy
```
App (Router wrapper)
├── Navbar (conditional - hidden on /blog)
└── Routes
    ├── HomePage
    │   ├── Bounce (animated element)
    │   ├── Intro (hero section with social links)
    │   ├── Skills
    │   ├── Project
    │   ├── Dsa
    │   └── Contact
    └── BlogPage (MediumBlogSection)
```

#### Key Components
- **Navbar** (`src/components/Navbar/`): Navigation component conditionally rendered
- **Intro** (`src/components/intro/`): Hero section with social media links (YouTube, LinkedIn, GitHub) and resume download
- **MediumBlogSection** (`src/components/blog/`): Fetches and displays Medium blog posts via RSS2JSON API (https://api.rss2json.com/v1/api.json)
- **Homepage** (`src/components/routes/`): Composite page component assembling all portfolio sections

### Assets
Static assets stored in `src/assets/` including:
- Images (PNG, JPG, AVIF formats)
- PDF resume
- Technology logos (React, Spring, Docker, Azure, Git, etc.)

### SEO & Metadata
- JSON-LD structured data for person schema
- Open Graph tags for social sharing
- Twitter Card metadata
- Google Search Console verification
- `robots.txt` and `sitemap.xml` in root directory

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/netlify.yaml`):
1. **Build job**: Runs on push/PR to main branch
   - Checkout code
   - Setup Node.js 18
   - Install dependencies
   - Run lint checks
2. **Deploy job**: Deploys to Netlify
   - Publishes `dist/` directory
   - Requires secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`

## Code Style
- ESLint configured with React-specific rules
- Uses React 18.3 with JSX runtime (no need to import React in every file)
- Component file naming: lowercase with .jsx extension
- CSS files co-located with components

## Important Notes
- The codebase uses spaces in directory names (e.g., `contact us/`) - use quotes when referencing these paths in commands
- Medium blog integration depends on external RSS2JSON API service
- No test suite currently configured
- Build output goes to `dist/` directory (ignored by git)
