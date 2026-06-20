# KinDa Care — Home Health

A production-ready marketing site for **KinDa Care Home Health**, built with **Vite + React + TypeScript + Tailwind CSS**.

## Tech stack

- **Vite 5** — dev server + build
- **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** — design tokens in `tailwind.config.ts`
- **React Router 6** — page routing

## Getting started

```bash
cd react-app
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
react-app/
├─ public/assets/         # logo mark + hero banner (swap these for your own)
├─ src/
│  ├─ config/company.ts   # phone, email, addresses — single source of truth
│  ├─ types.ts            # shared TypeScript interfaces
│  ├─ data.ts             # services, values, roles, benefits, locations
│  ├─ components/
│  │  ├─ ui/              # reusable primitives
│  │  │  ├─ Button.tsx        # Link / anchor / button, 3 variants
│  │  │  ├─ Eyebrow.tsx       # uppercase section label
│  │  │  ├─ Logo.tsx          # round mark + wordmark
│  │  │  ├─ ImageSlot.tsx     # photo holder w/ placeholder fallback
│  │  │  ├─ FeatureCard.tsx   # numbered value/benefit card
│  │  │  └─ Section.tsx       # padded section band wrapper
│  │  ├─ home/            # homepage sections
│  │  │  ├─ Hero.tsx
│  │  │  ├─ Welcome.tsx
│  │  │  ├─ ValueProps.tsx
│  │  │  ├─ ServicesPreview.tsx
│  │  │  ├─ ServiceArea.tsx
│  │  │  ├─ EmploymentBanner.tsx
│  │  │  └─ ContactCTA.tsx
│  │  ├─ contact/ContactForm.tsx
│  │  ├─ Navbar.tsx       # fixed nav + mobile menu
│  │  ├─ Footer.tsx
│  │  └─ ScrollToTop.tsx
│  ├─ pages/             # one component per route
│  │  ├─ HomePage.tsx
│  │  ├─ AboutPage.tsx
│  │  ├─ ServicesPage.tsx
│  │  ├─ EmploymentPage.tsx
│  │  └─ ContactPage.tsx
│  ├─ App.tsx            # router + layout shell
│  └─ main.tsx           # entry
└─ tailwind.config.ts    # brand colors, fonts, shadows, animations
```

## Customizing

- **Brand colors / shadows / fonts** — edit `tailwind.config.ts` (`theme.extend`).
- **Contact details** — edit `src/config/company.ts`; they propagate everywhere.
- **Services / roles / values** — edit `src/data.ts` (fully typed).
- **Photos** — replace files in `public/assets/`, or pass a `src` to `<ImageSlot />`
  in `Welcome`, `AboutPage`, and `EmploymentPage` for the editorial photo spots.
- **Contact form** — `ContactForm.tsx` currently shows a success state on submit;
  wire `handleSubmit` to your backend / email provider.

## Notes

- Fonts (Newsreader + Inter) load from Google Fonts in `index.html`.
- Routing uses `BrowserRouter`; configure your host to serve `index.html` for
  all routes (SPA fallback) when deploying.
