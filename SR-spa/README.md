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

## Contact Details (from original site)

- **Phone / WhatsApp**: +91 84228 55780
- **Address**: Office No.02, Second Floor, Vijay Market, Landmark Indian Oil Petrol Pump, Sector-26, ADC, Plot No. F/12, Chinchwad/Nigdi, Pradhikaran, Pune, Maharashtra 411044
- **Hours**: 10:00 AM – 10:00 PM (Daily)

## Customization

- Update colors in `globals.css` (`--gold`, etc.)
- Edit services list in `src/components/Services.tsx`
- Connect the booking form to Formspree, Resend, or your own API
- Replace Unsplash hero image with your own assets in `public/`

---

Built as a recreation of SR Spa-spa.in.
