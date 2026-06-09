# Cogni Test Pro

Cogni Test Pro is an interactive assessment application I designed to showcase advanced frontend engineering techniques. Instead of a standard static form, I built a dynamic quiz engine that handles complex state changes, dynamic routing, and real-time score calculations, creating a gamified experience.

To achieve a native app feel, I relied heavily on Framer Motion rather than standard CSS transitions. This allowed me to implement fluid micro-animations when elements enter or exit the DOM. The UI is clean, fully responsive, and built with Tailwind CSS to ensure it scales perfectly across different devices and international audiences. 

Under the hood, the application uses Next.js 14 and the App Router. This architectural choice made it trivial to persist the UI shell while the underlying test engine navigates between questions asynchronously. By adopting a strict component-driven design, the codebase is split into decoupled and highly reusable modules like progress bars, question cards, and result modals, demonstrating a scalable approach to React development.

You can run this project on your machine by cloning the repository, installing the dependencies with `npm install`, and starting the development server using `npm run dev`. The application will be available at localhost:3000.
