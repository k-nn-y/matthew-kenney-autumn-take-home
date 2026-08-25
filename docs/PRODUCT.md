# Product

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind, generated via v0 **after** the manual review gate.

The brief's line "Do not create a Next.js project. Do not use v0. Do not deploy." is scoped to the Paper canvas stage only; it does not govern the final prototype. The role explicitly requires React/TypeScript/Tailwind, so the browser prototype has to demonstrate that stack. Nothing is built in this repo until the gate is cleared.

## Users

**Primary — Don, owner-operator of the Brass Lantern Inn, Stowe VT.** Often the entire commercial team. Time-poor: 34.6% of independent hoteliers report lacking adequate time, and 25% spend 2+ hours a day adjusting pricing, marketing, and distribution. Pitched endlessly by SaaS vendors, so he arrives skeptical. May not know what Google Ads are. 49% of operators like him name high commission fees as their biggest OTA pain.

**Situation.** He arrives from a cold outbound email — that is Autumn's only acquisition channel, and the URL lives in email signatures. He scans, he does not read. He decides whether to stay inside roughly ten seconds. Assumption A1 from the research package (medium confidence, no device data): at least half the time he opens the link on a phone.

**Job to be done.** Decide in seconds whether this is another SaaS pitch or someone who understands his inn — then confirm "they get it" and "I can see what they'd actually do for me."

**Other people who may open the link.** A co-owner or spouse-partner validating the risk story ("what do we actually pay?"); a hired GM or innkeeper asking "does this add work for me or remove it?"; front-desk staff, who are not the decision-maker but must not be blocked.

**Secondary audience — designers and engineers evaluating craft.** Confirmed weighting: Don is the constraint on every decision. Ambition shows in one or two earned moments (the hero, the guest-journey peak), not spread evenly across the page.

## Product Purpose

Autumn is AI-enabled digital marketing for independent hotels — B&Bs, inns, boutique hotels, lodges, ranches. The hero offering is done-for-you search engine marketing across Google Ads, Google Maps, and Google Hotel Ads, driving 10–20% more direct traffic. Autumn covers the ad spend and is paid only when it delivers bookings.

Success for this page: Don leaves able to say all three of "this is for me," "they get it," and "I can see what they'd actually do for me" — and replies to the email or enters the Flagship door.

## Positioning

**Skin in the game.** Autumn funds the ad spend and is paid only on delivered bookings. The Flagship Program has no fixed fees and takes 13% of bookings driven. A neighboring agency cannot truthfully copy "we cover your ad spend and get paid when you get bookings" — every one of them bills retainers.

Supporting stance: humans in control, AI as the method and never the identity. "Modernize, don't homogenize. Built for independents. Outcomes over dashboards."

## Operating Context

- **Acquisition is 100% cold outbound email.** There is no paid funnel, no content engine, no self-serve signup. The page exists to be opened from a signature link.
- **Handoffs are human.** The page hands off two ways: a reply by email to a named person at Autumn, or the Flagship entry point. Flagship is an entry point only — no application flow behind it.
- **No auth, no forms that can fail, no cookie wall, no popup** between the reader and the message.
- The reader's own context is a working property: front desk, breakfast service, seasonal occupancy swings, OTA commissions running roughly 15–25% base and effectively higher once placement programs stack.

## Capabilities and Constraints

**Shape.** One page, one scroll, eight sections: hero · SEM explainer told as one guest's journey (the single peak interaction) · how it works, three plain steps · proof wall · other services, five, compact · Flagship entry · FAQ · footer.

**Terminology.** Hospitality nouns — guests, bookings, rooms, seasons, inns, innkeepers, properties. Banned vocabulary from the brief: ROAS · CTR · metasearch · parity · funnel · first-party data · ecosystem · leverage · seamless. Proposed addition, not on the brief's list: *data-driven*.

**Claims are ranged, never ceilings.** "10–20% more direct traffic" is the form. "Up to 40%" — the construction on the current site — is a ceiling claim and is out.

**AI presentation.** AI appears mid-sentence as how the work gets fast and affordable. Never in a headline, never as identity, never as a named assistant or persona, never as robot / avatar / sparkle iconography. Nothing on the page pretends to be live AI — no fake chat, no fake typing.

**Motion budget.** At most one or two motion elements, each of which must explain rather than decorate. The static version is designed first; motion is additive. No scroll-jacking, ever.

**Explicitly undecided.** Whether an anchor nav exists; whether Flagship gets its own section or merges into a footer band; proof-wall density. These are open, not forgotten.

## Brand Commitments

**Name.** Autumn. Two existing surfaces — get-autumn.com and findautumn.com — are captured as Paper Snapshots in the design file and analysed in `docs/REFERENCE_ANALYSIS.md`.

**Voice.** Second person, hospitality nouns, commercial terms stated plainly. findautumn.com already demonstrates the register to inherit: "Top spots on Google + Google Hotels, funded by us." · "No agency premiums, no surprise invoices." The register transfers; the sentences do not.

**Volunteered visual constraint (recorded as given, not expanded).** Warmth is carried by photography, accent, and typography — *not* by the body ground. The body ground is committed and non-cream: deep ink, or a true off-white at chroma 0. The cream/paper/sand body background paired with display-serif and a per-section eyebrow — the direction the original brief prescribed — is an explicit anti-reference, because that stack is the currently saturated AI-brand default and a design-engineer evaluator will read it as one. The visual world itself is not decided here.

**Binding anti-references from the brief.** No dashboards, tables, filters, KPI tiles, or admin chrome. No robots, avatars, sparkles, gradients-as-identity, glassmorphism, or neon. No urgency mechanics, countdowns, popups, or autoplay carousels. No scroll-jacking. No copying the brand, layout, palette, typography, or copy of any reference — Triptease, Sojern, Cendyn, Shopify, In Common With, Monarch, Intercom, Titan, and the current get-autumn.com and findautumn.com included.

## Evidence on Hand

**Real and fixed.** The offer facts: Google Ads / Maps / Hotel Ads; Autumn covers the ad spend; paid only on delivered bookings; Flagship has no fixed fees and takes 13% of bookings driven; 10–20% more direct traffic. **These stay verbatim and are never embellished, rounded, or stretched.**

**Real and available.** Paper Snapshots of both current Autumn sites. `docs/REFERENCE_ANALYSIS.md` — seven analysed design references with do-not-copy notes. The research package at `.context/attachments/2RaHYP/autumn-design-research.md`, carrying sourced market data (OTA commission economics, TakeUp operator survey, Lighthouse time-poverty figures, Phocuswright AI-travel adoption).

**Does not exist.** No real customers, testimonials, metrics, logos, or property photography.

**Fabrication licence and its bounds (confirmed).** Invented-but-plausible proof is permitted and expected: New-England-plausible inn names, towns, room counts, named quotes, ranged metrics, and one guest thank-you message. Invention is **unmarked on the page** — no "illustrative" badges. In exchange, **every fabricated fact is logged in `docs/INVENTED_PROOF.md`**, so the boundary between invented proof and real offer facts is always recoverable. The offer facts above are never part of that manifest, because they are never invented.

**Imagery.** No real inn photography on hand. Hero and proof imagery will need sourcing — stock or generated — and must read as a real working property. Colored placeholder blocks where a photograph belongs are a bug, not restraint.

## Product Principles

1. **Ten seconds decides it.** Don is the constraint on every decision, not a persona quoted in a deck. If a moment would make him hesitate, it goes. Ambition is spent in one or two earned places rather than distributed evenly.
2. **Skin in the game is the argument.** The risk reversal is the proposition, not a footnote. It lands before anything asks him to believe a claim about traffic.
3. **AI is the method; humans are the identity.** AI earns a mid-sentence mention as how the work gets fast and affordable. The page names people, never an assistant.
4. **Specific beats plentiful.** One named property with a town, a room count, and one honest ranged number outperforms a wall of anonymous praise. Volume is the SaaS move.
5. **Say the price out loud.** No fixed fees, 13% of bookings driven, ad spend covered — stated plainly and early. A skeptic who has to hunt for the cost assumes the answer is bad.

## Accessibility & Inclusion

- **WCAG AA throughout** — 4.5:1 for body text, 3:1 for large text.
- **Arm's-length phone legibility is an explicit, tested constraint** (confirmed this session). The audience skews older and roughly half open the link on a phone; the page is checked at that distance, not just at desk range.
- `prefers-reduced-motion` honored globally. The static version is designed first; motion is additive and never the only path to content.
- Keyboard-operable accordions and expanders, logical tab order, and a visible focus state on every interactive element.
- No meaning carried by color alone.
- Alt text on every photograph, describing the property rather than the mood.
- Semantic landmark structure. Content never depends on JavaScript.
