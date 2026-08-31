# SR Spa Spa Nigdi – Next.js Website

A modern, responsive recreation of the SR Spa Spa website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Elegant dark theme with gold accents matching the original brand
- Fully responsive (mobile + desktop)
- Sticky navigation with mobile menu
- Hero section with Call / WhatsApp CTAs
- About, Services (6 therapies), Offers, and Contact sections
- Booking form (client-side)
- Floating WhatsApp & Call buttons
- Smooth scroll navigation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout + metadata
    page.tsx        # Home page
    globals.css     # Global styles & Tailwind
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Offers.tsx
    Contact.tsx
    Footer.tsx
```
