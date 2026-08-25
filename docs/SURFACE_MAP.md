# Surface map — what exists, what's designed, what a reference exists for

Forward-looking. Not a decision record; nothing here is committed.

## The surfaces that actually exist

Read off the Paper Snapshots on page `get-autumn.com and findautumn.com pages`. These are real pages on Autumn's live sites, so they are the real backlog — not invented ones.

| Surface | Live at | Designed? | Reference on hand |
|---|---|---|---|
| Homepage | both | **Yes** — v2 + Hero v3 | In Common With, Shopify, all five Mobbin captures |
| Careers index | findautumn `/careers` | **Yes** — desktop + mobile, page `Careers` | Linear, Runway, Dovetail, OpenPhone, Vanta, Harvest |
| Role detail | findautumn `/careers/design-engineer` | **Yes** | Atlas Card |
| Pricing | findautumn `/pricing`, get-autumn `/plans` | **Yes** — own page | Patreon, Stripe |
| Product detail ×8 | findautumn `/products/*` | **Template built** (Search) | Titan |
| Blog index | both `/blog` | **Yes** | None — built from the system |
| Article | both | **Yes** | None — built from the system |
| Integrations | get-autumn `/integrations` | **Yes** | None — built from the system |
| Contact | get-autumn `/contact` | **Yes** | Atlas Card |
| Terms | findautumn `/terms-conditions` | **Yes** | None — built from the system |

## What the five existing Mobbin captures already cover

From `docs/REFERENCE_ANALYSIS.md`. All five were captured for the homepage, but four of them point at surfaces that do not exist yet — which is the observation worth acting on:

| Capture | Pattern | Homepage use | **Also serves** |
|---|---|---|---|
| Monarch | Full-bleed photo band + founders' letter | §06 Flagship | **Careers culture / About** — a company this small has a letter, not an About page |
| Intercom | Mixed-species evidence grid | §04 proof wall | **A dedicated customers page** at higher density than a homepage tolerates |
| Titan | Hairline step list, one open row | §03 how it works | **Product detail ×8** — the same primitive, eight times |
| Superpower | Named speaker + countable specific | §04 quotes | **Customers page** |
| Atlas Card | One claim, one action, one reassurance | §06 Flagship entry | **Contact** and **role apply** |

## Today's searches — two concrete findings

### Careers costs almost no new components

Every result — [Linear](https://mobbin.com/sites/sections/b94b791e-21d7-46d0-95e8-cd3ec25fc5ee), [Runway](https://mobbin.com/sites/sections/9b88baff-1fc3-4850-b9e6-6bc4c0ed630b), [Dovetail](https://mobbin.com/sites/sections/a61eb7a0-0eb3-4c9e-b2dc-37019cfd2c47), [OpenPhone](https://mobbin.com/sites/sections/3246787a-8422-4c8d-bc06-eff87cd7cdef), [Vanta](https://mobbin.com/sites/sections/4388b797-146a-491b-ad47-82fab8951d60) — is a **hairline row list**: role, team, location, action. That is the identical primitive to the FAQ disclosure row and the §05 service row already in `docs/DESIGN.md`. A careers index is a content problem, not a design-system problem.

[Harvest](https://mobbin.com/sites/sections/78585bdd-58be-4fa8-8bf1-61a342e0dc76) is the outlier and the more interesting one: a single employee portrait and quote sitting *above* one open position. For a company of under ten people, that shape is far truer than a filterable table of forty roles.

**Do not copy:** Linear's dark ground and purple regional links · Vanta's two-tone purple mission headline · Dovetail's search-and-filter bar (one open role does not need filters) · Runway's display serif.

### Pricing — four of six results are the wrong shape

Dovetail, Framer, Height and Mistral all return **tier ladders**. Autumn has no tiers: one rate, no fixed fees, ad spend covered. A three-column ladder would have to invent tiers that do not exist. Ruled out.

The two that fit:

- **[Patreon](https://mobbin.com/sites/sections/11683d1d-a19a-4056-838d-46263f20afd1)** — the percentage *is* the price, set at display size (5% / 8% / 12%) with what it covers listed beneath. Autumn's `13%` already behaves this way in the hero board. **Principle:** a percentage can be the headline number. **Do not copy:** the tier ladder it sits in, or the "Recommended plan" badge — Autumn has nothing to recommend between.
- **[Stripe](https://mobbin.com/sites/sections/088a670f-2b5e-4b7a-ad9b-680405acd8fb)** — "Estimate your cost": a slider from charges-per-month to estimated monthly cost. Autumn's equivalent is *bookings driven per month → what you'd pay*, and it is the only one of the six that makes 13% concrete rather than stated. It is the §02 arithmetic made interactive, and it can honestly bottom out at zero.

**Flag on the Stripe pattern:** `docs/PRODUCT.md` bans "dashboards, tables, filters, KPI tiles, or admin chrome." A fee estimator is not admin chrome, but it is close enough that it needs an explicit decision rather than a quiet inclusion.

## Gaps with no reference at all

Blog index · article · integrations · terms. Worth searching before any of those are attempted.

## Status — every surface on the list is now designed

Desktop and mobile for all ten. Nothing on Autumn's live sites is left without a design.

The one piece of deliberate scope reduction: **`/products/*` has a template, not eight pages.** `Product · Search` is built as the pattern; the remaining seven (booking engine, website builder, email, social, reputation, pricing, copilot) are the same three-part structure with different content, and are copy work rather than design work.
