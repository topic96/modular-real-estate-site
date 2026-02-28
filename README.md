# Modular Real Estate Site

## Major Improvements

### 1. Modular Data Layer (0 Downtime Updates)
- **DataService** fetches from external API; configurable via env vars.
- Supports mock data (dev) and real API (prod). Switch between `localhost:3001/api/properties` and production by changing endpoint or data file—no redeploy.

### 2. SEO
- Dynamic meta (title, description, keywords), Open Graph, Twitter Cards, JSON-LD for properties.
- Semantic HTML, heading hierarchy, alt text on images, `sitemap.xml`, `robots.txt`, canonical URLs.

### 3. UX & Performance
- Loading skeletons for property cards, error boundaries, toast notifications.
- Lazy-loaded images, Framer Motion animations, mobile-first responsive layout, touch-friendly UI.
- Accessibility: ARIA labels, keyboard navigation.

### 4. Deployment
- Vercel config (`vercel.json`), env vars, production build optimization. Deploy to Vercel, Netlify, or any static host; CI/CD-ready.

### 5. Features
- Form validation (contact), mobile hamburger menu, property filtering/search, detail pages, services section, team/about, contact form with validation, professional branding.

---

## Adding New Properties (0 Downtime)

| Method | Steps |
|--------|--------|
| **External API** | Set API (Contentful, Strapi, custom) → set `VITE_API_URL` in `.env` → add properties via API. No redeploy. |
| **JSON on CDN** | Host `properties.json` on CDN (Cloudflare, S3) → set `VITE_API_URL` to that URL → update JSON when needed. No redeploy. |
| **Headless CMS** | Use Contentful, Sanity, or Strapi; connect API; manage in dashboard. No redeploy. |

---

## Easy Add-Ons (Modular Architecture)
User auth, favorites/wishlists, virtual tours (360°), mortgage calculator, agent profiles/messaging, property comparison, advanced filters (price, amenities), analytics, i18n, dark mode, property alerts/notifications.

---

## Deploy to Vercel & open on mobile

1. **Push to GitHub** (if not already): create a repo and push this project.
2. **Connect to Vercel**: go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your GitHub repo. Leave build settings as-is (Vite is auto-detected).
3. **Deploy**: Vercel builds and deploys. You get a URL like `your-project.vercel.app`.
4. **Open on mobile**: open that URL in your phone’s browser, or use **Add to Home Screen** for an app-like shortcut (meta tags are set for mobile).

**CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) runs `npm run build` on every push/PR to `main` or `master`. Vercel auto-deploys when you push to the connected branch.

---

## Benefits
- **Zero downtime** — Add/remove properties without code changes.
- **SEO-ready** — Meta, structured data, sitemap, robots.
- **Fast** — Optimized builds, lazy loading.
- **Professional** — Modern, clean, mobile-first, scalable.
- **Cost-effective** — Free hosting on Vercel/Netlify.
