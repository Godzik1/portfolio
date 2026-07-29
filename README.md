# wizytówki.dev - Portfolio Website

A modern freelancer portfolio built with **Next.js 15**, **Tailwind CSS v4** and **TypeScript**. Showcasing business card website services for small businesses.

## Tech Stack

- [Next.js 15](https://nextjs.org) - React framework
- [Tailwind CSS v4](https://tailwindcss.com) - styling
- [Lucide React](https://lucide.dev) - icons
- [TypeScript](https://www.typescriptlang.org) - type safety

## Project Structure

```
├── app/
│   ├── globals.css       # global styles + Tailwind
│   ├── layout.tsx        # HTML layout + SEO metadata
│   └── page.tsx          # main page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       └── Contact.tsx
├── lib/
│   └── utils.ts          # cn() helper
└── public/               # static assets (images)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Sites (Portfolio)

| Project | Description |
|---|---|
| Trattoria Bella | Restaurant website with menu, gallery, reservations |
| Vitalis Fizjoterapia | Physiotherapy center with booking and pricing |
| APEX Detailing | Premium car detailing studio |
| Lumière Clinic | Aesthetic medicine and PMU clinic |

## Deployment

### Cloudflare Pages

1. Push to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) - Workers & Pages
3. Create - Pages - Connect to Git
4. Build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Output directory:** `.vercel/output/static`
5. Save and Deploy

### Contact Form Integration

The contact form in `Contact.tsx` is ready to connect. Recommended options:

- **Formspree** (simplest) - [formspree.io](https://formspree.io)
- **Resend** (professional) - [resend.com](https://resend.com)
