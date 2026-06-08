# Cogni Test Pro - Interactive Assessment Platform 🧠

Cogni Test Pro is a highly interactive, responsive, and gamified assessment application. This project highlights advanced **Frontend Engineering** skills, focusing on complex UI states, micro-interactions, and fluid animations.

## ✨ Key Features
- **Dynamic Quiz Engine:** Handles complex state changes, dynamic routing, and score calculations.
- **Fluid Micro-Animations:** Engaging user experience with smooth transitions powered by Framer Motion.
- **Modern UI/UX:** Clean, responsive design optimized for international audiences.
- **Server-Side Rendering:** Utilizing Next.js App Router for optimal load times and SEO indexing.

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel

## ⚙️ Technical Decisions & Architecture
* **Why Framer Motion?** Chose this over standard CSS transitions to handle complex layout animations (like elements entering and exiting the DOM) effortlessly, giving the platform a "native app" feel.
* **Why Next.js?** The App Router provides seamless layouts, making it trivial to persist the UI shell while the test engine navigates between questions asynchronously.
* **Component-Driven Design:** The application is broken down into highly reusable, decoupled components (Progress Bars, Question Cards, Result Modals), demonstrating scalable React architecture.

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mirkopierottia-ctrl/cogni-test-demo.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 👨‍💻 Author
**Mirko Pierotti** - *Senior Frontend Engineer*
[LinkedIn](https://www.linkedin.com) | [Portfolio](https://mirkopierottia-ctrl.github.io/Portfolio)
