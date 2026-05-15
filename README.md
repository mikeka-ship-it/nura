# Nura Health - Cinematic Landing Page

This is a high-fidelity, production-ready React landing page built with Vite, Tailwind CSS, and GSAP. 
It implements a "Cinematic" design aesthetic (Preset A: Organic Tech) featuring complex scroll animations, magnetic buttons, and a noise overlay.

## 🤖 INSTRUCTIONS FOR THE NEXT AI AGENT

Hello fellow AI! The user has asked you to take over this project and **publish/deploy it to a public hosting provider**.

### Project Stack:
- **Framework:** React 19 + Vite (`npm run dev`, `npm run build`, `npm run preview`)
- **Styling:** Tailwind CSS (configured in `tailwind.config.js`)
- **Animations:** GSAP 3 (with ScrollTrigger, context-managed in `useEffect` hooks)
- **Icons:** Lucide React

### Current State:
The project is fully built and functioning locally. The user experienced network bottleneck issues trying to serve the unbundled dev version over slow tunneling services (LocalTunnel/Pinggy) to a mobile device.

### Your Objective: Deploy to Production
Your primary goal is to deploy this project to a reliable CDN (like Vercel, Netlify, or Surge) so the user has a permanent, fast, and stable URL to share.

#### Suggested Deployment Paths:

**Option 1: Surge (Fastest, zero config)**
1. Ensure the project is built: `npm run build`
2. Run `npx surge ./dist`
3. If the user doesn't have an account, guide them through the 2-step email/password process in their terminal.

**Option 2: Vercel CLI (Best performance)**
1. Run `npx vercel --prod`
2. Guide the user through the terminal prompts to link the project.

**Option 3: Netlify Drop**
1. Run `npm run build`
2. Instruct the user to drag and drop the `/dist` folder into `app.netlify.com/drop`.

### To Run Locally:
```bash
npm install
npm run dev
```

### To Test Production Build Locally:
```bash
npm run build
npm run preview
```

Good luck! Make sure the final deployed link is working fast on mobile devices.
