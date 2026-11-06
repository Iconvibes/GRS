# Goodness Royal School — website

A single-site digital brochure for **Goodness Royal School**, Alagbado, Lagos.
Editorial, asymmetric layout with a dual Primary/Secondary pathway, built to load
fast on Nigerian mobile data.

**Motto:** Applied Knowledge is Power
**Address:** No. 9, Oluode Oginsado Street, Off Suberu-Oje Road, Casso Bus Stop, Alagbado, Lagos State
**Admissions contact:** Amarachi (Secretary)

## Stack

- Next.js 16 (App Router, React 19, TypeScript)
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- `framer-motion` for the drawer, tabbed timeline and gallery filtering
- `lucide-react` icons, `clsx` + `tailwind-merge` via `cn()`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  page.tsx            Home (hero, metrics, pathway split, gallery, timeline, location)
  primary/page.tsx    Primary pathway
  secondary/page.tsx  Secondary pathway
  admissions/page.tsx Steps, documents, prospectus, FAQs
  gallery/page.tsx    Full filterable gallery
  not-found.tsx       404
components/
  layout/             Top bar, navbar, mobile drawer, footer, mobile CTA bar
  sections/           Page sections (hero, pathway split, leadership, gallery, …)
  ui/                 Button, section heading/kicker, hairlines
lib/
  school.ts           All copy-critical data: contact, stats, tracks, steps, FAQs
  gallery.ts          Gallery frames + categories
  images.ts           Typed static image imports (intrinsic sizes, blur placeholders)
public/images/        WebP photography
scripts/
  make-prospectus.mjs Regenerates the downloadable term prospectus PDF
```

## Editing content

Almost all copy lives in `lib/school.ts`. The contact details, phone number, stats,
pathway descriptions, admissions steps and FAQs are read from there — update that
file rather than hunting through components.

## Before this goes live

These items are placeholders and must be replaced with real school data:

1. **Phone / WhatsApp number** — `school.phone` in `lib/school.ts` is
   `+234 800 000 0000`. Every call and WhatsApp link reads from it.
2. **Head of School name, portrait and quote** — the leadership section currently
   uses a role title only (`components/sections/leadership.tsx`).
3. **Photography** — see below; replace with real campus photographs.
4. **Fees and term dates** — deliberately not invented. The admissions page and
   prospectus point to the office for exact figures.
5. **Prospectus content** — `scripts/make-prospectus.mjs`; run `npm run prospectus`
   after editing.

## Photography

Images in `public/images/` are Pexels-licensed stock photographs (free for
commercial use, no attribution required), resized and converted to WebP with
`sharp`. They are placeholders chosen to match the school's context, not photographs
of Goodness Royal School. The gallery page labels them as illustrative imagery;
replace them with the school's own photos before launch and update `lib/gallery.ts`.

## Performance notes

- All photography is local WebP (47–233 KB per frame) with static imports, so
  Next.js emits intrinsic dimensions and blur placeholders — no layout shift.
- The hero image is the only `priority` image; everything else is lazy by default.
- No map iframe: the location section is an inline SVG route diagram plus a
  directions link, so nothing blocks first paint on a slow connection.
- Fonts are self-hosted through `next/font` (Playfair Display + Inter).
