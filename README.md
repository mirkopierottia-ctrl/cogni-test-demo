# Cogni Test Pro

Cogni Test Pro is an interactive, responsive, and gamified assessment application. This project highlights advanced frontend engineering skills, focusing on complex UI states, micro-interactions, and fluid animations.

## Key Features
- Dynamic Quiz Engine: Handles complex state changes, dynamic routing, and score calculations.
- Fluid Micro-Animations: Engaging user experience with smooth transitions powered by Framer Motion.
- Modern UI/UX: Clean, responsive design optimized for international audiences.
- Server-Side Rendering: Utilizing Next.js App Router for optimal load times and SEO indexing.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Deployment: Vercel

## Architecture
- Framer Motion: Used over standard CSS transitions to handle complex layout animations (like elements entering and exiting the DOM) effortlessly, giving the platform a native app feel.
- Next.js: The App Router provides seamless layouts, making it trivial to persist the UI shell while the test engine navigates between questions asynchronously.
- Component-Driven Design: The application is broken down into reusable, decoupled components (Progress Bars, Question Cards, Result Modals), demonstrating scalable React architecture.

## Setup Instructions

To run this project locally:

```bash
git clone https://github.com/mirkopierottia-ctrl/cogni-test-demo.git
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Author
Mirko Pierotti - Senior Frontend Engineer
