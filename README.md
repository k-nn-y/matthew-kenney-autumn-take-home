# Autumn — website

Autumn's site, built from the Paper file `Autumn Website Redesign` — the
homepage from `RECOMMENDED · Homepage · Desktop 1440 (v3)`, and nine further
routes from their own desktop-1440 and mobile-390 boards.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # static prerender
```

## What this is

Next.js 16 App Router, React 19, TypeScript. No CSS framework, no UI library,
no animation library, no data layer. Ten statically prerendered routes:

| | |
|---|---|
| `/` | homepage |
| `/pricing` | one rate, no tiers |
| `/careers` · `/careers/design-engineer` | the letter, the one open role |
| `/product/search` | the product template |
| `/blog` · `/blog/why-the-hospitality-stack-fragments` | notes, and one article |
| `/integrations` · `/contact` · `/terms` | |

Chrome is shared and fixed to the top. On the homepage `SiteHeader` starts
bare — the wordmark and the controls printed straight onto the hero — and
becomes a floating glass bar once the reader is past the price band; on every
other route it is the bar from the first pixel. The glass is a real
`backdrop-filter`, saturated so the page behind bleeds through as colour, over
a white base heavy enough to hold the nav's text above 4.5:1 even where the bar
crosses the ink band.

Below 900px the nav is two square controls — a filled one that is the reply,
and a quiet one that opens a full-screen menu — and `SiteFooter` carries the
reply block and the sitemap. `src/lib/nav.ts` is the single link map every
surface reads from, so a route can never be linked from one place and orphaned
in another.

The reader is an owner-operator who arrived from a cold email, decides in about
ten seconds, and is on a phone roughly half the time. Everything below follows
from that.

## Where the design lives

| | |
|---|---|
| `src/app/globals.css` | the whole design system — tokens, type tiers, buttons, focus |
| `src/components/` | shared primitives: `Logo`, `Button`, `Photo`, `Arrow`, `SectionHeader`, `PageShell`, `PageHero`, `SiteHeader`, `SiteFooter`, `Hero`, `HeroScrub`, `ReplyBar` |
| `src/components/sections/` | one component + CSS Module per homepage section |
| `src/app/<route>/` | one `page.tsx` + `page.module.css` per route |
| `docs/DESIGN.md` | the system's rules and the three marked corrections |
| `docs/PRODUCT.md` | what the page is for and what it is not allowed to become |
| `docs/INVENTED_PROOF.md` | every fabricated fact, and the offer terms that are not |

Colour, size, spacing and copy were read off the board with the Paper MCP
(`get_jsx`, `get_computed_styles`) rather than eyeballed from screenshots.
Every colour is a `var(--au-*)` token.

### The one conviction

**No hue is invented.** There is no accent, no status colour and no hover tint
anywhere in the token set. All chroma on the page comes from the photographs,
which is what lets one lakeshore be the loudest thing on the screen.

Slate (`--au-slate`, `#6F7E92`) carries nothing semantic — it is non-text marks
and the focus ring only. Text slate is `--au-slate-deep`.

### Type

Two families, one weight each: Inter 500 (`opsz 32`, `cv11`, `ss01`) for
everything readable, Geist 400 for the 12px `+0.18em` label tier.

Text size is a floor. Body, caption and label are byte-identical on mobile and
desktop; only display type scales down. Where mobile cannot hold the content at
full size it publishes fewer items and names what it is holding back.

### Breakpoint

One, at `900px`. Below it the mobile 390 board governs; at and above it the
desktop 1440 board does. Columns shrink rather than sitting at fixed widths, so
the page reflows continuously from 320px up.

## Motion

Five moments, and each answers rather than decorates:

- **The hero** — scroll-scrubbed. The camera travels only while the reader
  scrolls and reverses when they scroll back; nothing performs at them, which
  is the posture of the offer itself. It is strictly an enhancement over the
  still: no JavaScript, reduced motion, Save-Data, a 2g/3g connection or a
  video that will not decode all keep the poster, which is what ships in the
  HTML. (`docs/DESIGN.md` bans a second motion moment; this is an explicit,
  knowing override.)
- **§ Guest journey** — the rail draws itself downward as the reader descends
  and undraws as they go back up. It is the board's own hairline; the only
  thing scroll decides is how much of it exists yet, and each step arrives
  whole — bullet, timestamp, sentence and note together — as the line reaches
  it. Scrubbed, not played, so the four timestamps read as elapsed time.
- **§ Proof wall** — the six cards rise 28px and settle in reading order on
  first entry, 600ms each at a 70ms stagger. Once, never again.
- **Mobile reply bar** — pins after the hero actions scroll out, retires at the
  footer, 240ms.
- **The rate on `/pricing`** — the `13%` counts down from `100%` the first time
  it is 60% on screen, once. `100` is not a claim about anyone; it is the
  whole, which is the only honest place to start from on a page that prints no
  competitor's number. The settled `13%` is what the server renders, what
  reduced motion shows, and what a screen reader is read — the counting digits
  are hidden from the accessibility tree, so nobody is ever told a number the
  page does not claim. A time-based backstop lands it on `13%` even if frames
  stop arriving, because a stalled count on a pricing page would leave the
  figure reading `100%`.

The nav's `More` menu opens on hover and on click, closes on Escape, on a
pointer-down outside it, and on every route change. It animates opacity and
transform only, in 120ms.

Everything else is a state change under 300ms: button hover 120ms, link and
address hover 120ms, disclosure 200ms/160ms, the chrome's bare-to-bar switch
240ms, the phone menu 240ms, image fade 300ms, focus ring 0ms.

Banned, deliberately: parallax, scroll-jacking, fade-up-on-scroll, number
count-ups, staggered grids, ambient loops, spring easing, and any hover effect
that moves layout. `prefers-reduced-motion` applies every state change instantly
and leaves nothing unreachable.

## States beyond the happy path

- **Loading** — every image slot reserves its own aspect ratio in `ground-warm`,
  so nothing below it moves when the photograph lands. No spinners, no shimmer.
- **Image failure** — the plate persists. A considered empty rectangle, not a
  broken icon.
- **No mail client** — every action on the page is a `mailto:`, which does
  nothing at all on a device with no mail client configured. So the footer
  prints the address at display size, keeps it selectable text, and makes the
  address itself the copy control: one press on the thing you were already
  reading. That is the page's only error state.
- **Reserved** — the proof wall ships a designed `NOT REPORTED` card. It is the
  only dashed border on the page.

## Accessibility

WCAG AA is the floor; the binding test is arm's-length phone legibility. One
`h1`, no skipped heading levels, every control a real `<a>` or `<button>`, 44px
minimum targets, a 0ms focus ring visible on all four grounds, no meaning
carried by colour alone, and the page fully readable and actionable with
JavaScript disabled.

## Knowing departures from `docs/DESIGN.md`

The design doc was written for a single held-still homepage. Four things here
go past it, each on purpose:

- **A scroll-scrubbed hero**, where the doc says "don't add a second motion
  moment. §02 only."
- **A scrubbed §02 rail and an entry reveal on the proof wall**, where the doc
  says the wall "appears at once — no stagger."
- **A count on the `/pricing` rate**, where the doc bans number count-ups
  outright. It is the one figure whose argument is that it is lower than what
  the reader expects, and it is the only number on the site that moves.
- **Glass in the nav bar**, where the doc bans translucency on the hero's
  buttons. The bar is the one place the page is a surface rather than a page,
  and its white base is heavy enough to hold the nav's text above 4.5:1 on
  every ground it crosses.
There is no fourth radius: every control is still the brand's 6px, and the nav
bar's own 16px corner is derived from it (`6px` + the bar's `10px` of padding)
so the two curves run parallel.

Everything the doc protects that is not on that list still holds: no invented
hue, one inverted band, one dashed border, slate never as text, text size as a
floor.

## Deliberate omissions

- **The remaining product pages.** `/product/search` is the template; the other
  seven products on Autumn's live site are the same three-part structure with
  different copy, and are copy work rather than design work.
- **The proof is invented.** Inn names, towns, quotes and figures are
  fictional; Autumn's offer terms — 13% of bookings driven, ad spend covered,
  no fixed fees — are not. Every fabricated fact is listed in
  [`docs/INVENTED_PROOF.md`](docs/INVENTED_PROOF.md), so the line between the
  two is always recoverable.
