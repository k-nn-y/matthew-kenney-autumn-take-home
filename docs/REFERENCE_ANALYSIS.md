# Reference Analysis — Extract Principles Only

**Artifact under design:** one marketing homepage for Autumn — AI-enabled digital marketing for independent hotels. Eight sections of a single scroll: 1 Hero · 2 SEM explainer (one guest's journey) · 3 How it works · 4 Proof wall · 5 Other services · 6 Flagship entry · 7 FAQ · 8 Footer.

**Reader:** Don, owner-operator of the Brass Lantern Inn, Stowe VT. Time-poor, pitched endlessly by SaaS vendors, may not know what Google Ads are, arrives from a cold outbound email. He scans. He decides in ten seconds.

**Source of this analysis:** Paper file *Autumn Website Redesign*, page **References** (the brief refers to this page as "References — Extract Principles Only"; the page is named `References` in the file). Already on that page: two live-site Paper Snapshots, plus five plain screenshots — two In Common With hover states and three Shopify Editions chapter openers. Five Mobbin captures named in the research package were screenshot-only and were **not** on the canvas; they have been added to that page as a new board, *Mobbin captures — screenshot only (principles only)*.

---

## The rule this document enforces

Every reference below is treated as **principle evidence only**. Nothing is taken from any of them except:

- layout density and hierarchy
- proof and testimonial structure
- progressive disclosure
- state patterns
- interaction sequencing

Nothing is taken from any of them in the way of: **brand, visual identity, exact layout, palette, typography, copy, or component styling.** Each entry carries an explicit `Do not copy` list naming the specific things ruled out, because a generic warning does no work. Where a reference's *composition* is itself the recognisable thing, the composition is named in that list too — an adaptation that swaps the nouns and keeps the arrangement is still copying.

One entry below — 7, Atlas Card — is a counter-example: a source whose *structure* is instructive and whose *posture* is exactly wrong for Don. It is recorded as a reference so the reasons are on the record, not so the pattern gets used.

---

## Index

| # | Reference | Class | On canvas | Serves |
|---|---|---|---|---|
| 1 | In Common With — homepage hero | LIVE · Paper Snapshot + 2 state screenshots | Yes (was already there) | §1 |
| 2 | Shopify Editions Winter '26 — full page | LIVE · Paper Snapshot + 3 chapter screenshots | Yes (was already there) | §2, §3, §5, whole-page cadence |
| 3 | Monarch — mission band + founders' letter | SCREENSHOT-ONLY · Mobbin | Yes (added in this pass) | §1, §2, §6 |
| 4 | Intercom — customer results wall | SCREENSHOT-ONLY · Mobbin | Yes (added in this pass) | §4 |
| 5 | Titan — "How it Works, it's just three steps" | SCREENSHOT-ONLY · Mobbin | Yes (added in this pass) | §3, §5, §7 |
| 6 | Superpower — member quotes | SCREENSHOT-ONLY · Mobbin | Yes (added in this pass) | §2, §4, §6 |
| 7 | Atlas Card — single-action invite screen | SCREENSHOT-ONLY · Mobbin · counter-example | Yes (added in this pass) | §1 (one action only), §2 (progressive reveal), §3, §6, §7 |
| A | get-autumn.com / findautumn.com — current state | LIVE · Paper Snapshot | On the sibling page | Register to inherit; failures to fix |
| B | Triptease / Sojern / Cendyn | Not captured | No | Structure and banned vocabulary |

**Class definitions.** *LIVE · Paper Snapshot* means an editable capture of the public site that can be re-taken at any time. *SCREENSHOT-ONLY · Mobbin* means a static, dated capture that may no longer match the live page; it is evidence that a pattern existed, not evidence of a current design. Both are treated identically for the purpose of this exercise: principle evidence only. The class label is an honesty note about staleness, nothing more.

---

## 1. In Common With — homepage hero

**Source product and flow.** In Common With, a direct-to-consumer lighting and furniture brand. The flow captured is homepage arrival, the moment before any navigation choice is made. Three captures sit on the canvas: the snapshot artboard `incommonwith.com`, plus two screenshots labelled *with the video* and *how it looks when you hover over the video*.

**Screen, component, or interaction captured.** A full-bleed photograph of a furnished interior fills the whole viewport — wood table, black chairs, plaster walls, a single blue glass pendant. Type is deliberately minimal and sits directly on the image with no scrim: the wordmark "In Common With" in white at roughly headline scale on the left, a two-line sub-line at the right ("Old-world craft reimagined for contemporary spaces."), and a small centred link at the bottom ("Explore Lido"). The snapshot artboard shows no navigation at all — it captured a nav-hidden state, which is itself worth recording. Both state screenshots carry a whisper-quiet nav across the top (Shop · Collections · Showroom / Info · Trade · Search / Sign In · Cart (0)). The second capture shows the viewport split vertically at roughly three-quarters, with an amber-lit close-up of blown glass occupying the right pane. The third capture is the hover state: the divider slides from roughly three-quarters across to the midline — the right pane roughly doubles in width — and its content becomes a documentary video of two glassmakers working a furnace in a brick workshop, while the bottom link gains a directional arrow, "→ Explore Lido". **The reveal is a layout change as well as a media change.**

**Pattern observed.** Warmth is carried entirely by photography and light; the room *is* the message and the type gets out of its way. More interestingly, the hero holds two truths at once — the finished object in its setting, and the people who made it — and an **interaction**, not a second section, performs the reveal. Hovering trades atmosphere for evidence of human labour, and pays for it with layout.

**Principle worth extracting.** A hero can be a photograph and almost nothing else when the photograph is doing argumentative work. And a page can show "who is behind this" inside the hero itself, as a state change, instead of spending a whole band on an about section.

**Adaptation for this hotel-operator workflow.** §1 takes the photographic thesis directly: real inn photography — a porch light at dusk, a breakfast table laid, an exterior in leaf season — full-bleed, with the property as the subject rather than a product shot or a UI. The makers-reveal idea maps precisely onto Autumn's "humans in control" requirement: the second frame is not a workshop but the Autumn team, or an innkeeper at their own front desk. Two changes are mandatory. First, the reveal must not depend on hover — the research package's assumption A1 puts Don on a phone at least half the time (inferred from the outbound-email context; no device data; confidence medium), and hover has no mobile equivalent in any case; make it scroll-triggered or an always-visible second frame, and never the only route to any content. Second, the headline contrast must be far stronger than the reference's: In Common With can whisper because its visitor already knows what a lighting brand sells, whereas Don may not know what Google Ads are.

**Do not copy.**
- The near-invisible text hierarchy. The sub-line and the bottom link are small white type over photography with no scrim, and the wordmark is the largest thing on the page. That inversion — brand loudest, value proposition quietest — is the single thing Autumn must do the opposite of.
- The e-commerce navigation IA and its component styling: Shop / Collections / Showroom / Info / Trade / Search / Sign In / Cart (0). Autumn has no cart, no account, and no sign-in.
- The vertical split-viewport device as a signature composition, and its hover-driven expansion from a roughly 3:1 split to a roughly 1:1 split.
- Hover as the mechanism for revealing content.
- The interior-design palette and art direction that make this brand recognisable: raw concrete columns, the oxblood alcove, the blue glass pendant, the polished terrazzo floor, the shallow low-key lighting.
- The typography: the tight geometric grotesk wordmark lockup and the small-caps-adjacent nav treatment.
- The copy: "Old-world craft reimagined for contemporary spaces", "Explore Lido", and the collection-name link construction.
- The near-black letterboxing framing the viewport.

**Design-system implications.**
- A `PhotoBand` component with a declared **text-safe region**, so art direction and layout are negotiated once rather than per image.
- A legibility strategy that is deterministic, not photograph-dependent: either an opaque paper-cream panel or a defined scrim token. A candidate ink-on-cream pairing measures around 13:1, but that ratio is a token decision still open and must be measured once the ground and ink are chosen. White-on-photo is indeterminate by construction and would need per-image QA forever.
- The reference's reveal **reflows layout on hover**. Autumn's equivalent must reserve its space up front, because the page also commits to zero layout shift.
- Hero image is the LCP element: preload, modern formats, explicit width and height, and a solid warm background as first paint.
- Every photograph carries meaningful alt text describing the property, not the mood.
- Any reveal needs three states — rest, revealed, and reduced-motion — and a keyboard-reachable equivalent. Hover-only is not a state model.

---

## 2. Shopify Editions Winter '26 — full page

**Source product and flow.** Shopify's biannual product-release page, named in the brief as a reference for ambition. The flow captured is a long editorial scroll through twelve numbered chapters — Sidekick, Agentic, Online, Retail, Marketing, Checkout, Operations, Shop app, B2B, Finance, Shipping, Developer — each presenting a group of features. The whole page sits on the References canvas as a Paper Snapshot roughly 52,000px tall, alongside three plain screenshots of chapter openers.

**Screen, component, or interaction captured.** The page is titled *The Renaissance Edition*, and every chapter opens full-bleed on a Renaissance oil-painting composite, with the ground changing per chapter — bone for "Developer", deep teal for "Shipping", night sky for "Finance". Over the painting sits a single one-word display headline in a heavy grotesk, followed by one positioning sentence set in a serif with a decorative swash initial ("A completely new way to build for commerce with the power of AI.", "Ship confidently and cheetah-fast with more label, partner, and carrier options."). A fixed left rail carries the full chapter index with Roman numerals and a dotted leader marking the current chapter. Below each opener, feature items repeat one shape: a bold label, one sentence of description, and a small pill link with a ↗ glyph ("Read help doc ↗", "Shop now ↗", "Visit hardware store ↗"), paired with a large image, video, or scenario illustration. A "Back to navigation" pill closes each chapter, and a slim sticky bar carries the Editions wordmark, an Editions dropdown, search, and a "Start for free" pill.

> **Read the three plain chapter screenshots, not the snapshot, for ground and art direction.** The Paper Snapshot dropped the chapter background imagery and renders those grounds as flat near-black, which is a capture artefact rather than the reference.

**Pattern observed.** A very long page stays navigable because every section obeys the same three-beat cadence: **one word → one positioning sentence → evidence.** Every feature is capped at label plus one sentence, with depth deferred to an optional link. Chapters are numbered and permanently indexed in a rail, so the reader always knows where they are in a twelve-part structure. Nothing on the page requires reading a paragraph to understand what a thing is.

**Principle worth extracting.** Scannability at length is a product of repetition, not brevity. Fix one section cadence and one item shape, then let the page run as long as it needs to. Depth is always a link away, never the default. Give a long scroll a countable structure and a persistent position marker.

**Adaptation for this hotel-operator workflow.** This is where the page's cadence rule comes from: **eyebrow → one positioning sentence → evidence**, applied identically in all eight sections, so Don can navigate by headlines alone. §5 is the direct analogue of a feature chapter at item level — five secondary offerings, each a label plus one warm sentence — though its *construction* comes from entry 5's row list, not from a card grid. §3 borrows the same one-sentence item cap. §2 takes the scenario technique: walk one guest step by step from question to booking, the way Shopify walks one shopper, which is exactly the storyboard the SEM explainer needs. The reassurance-refrain device — one reassurance sentence repeated in every section — transfers; the sentence itself is written from scratch in Autumn's nouns (rooms, guests, bookings, commission) and must not reuse Shopify's possessive "stays yours" shape. An anchor nav is a legitimate borrow of the index idea, but at Autumn's scale it is a thin sticky bar at most, and its existence is an open decision for canvas — eight sections do not need a twelve-chapter rail.

**Do not copy.**
- The Renaissance oil-painting composite as the per-chapter ground, and the shifting per-chapter palette that comes with it. This is the reference's whole identity.
- The swash initial cap on the positioning sentence, the one-word heavy-grotesk display headline as a device, and the Roman-numeral chapter index with its dotted leader. Autumn's display voice is an editorial serif and its section openers are hospitality nouns, not single abstract words.
- The pill CTA with the ↗ glyph, the "Back to navigation" chrome, the Editions dropdown, and the "Start for free" pill in the sticky bar.
- The chapter-index model as page architecture. Autumn is one page with one offer; a twelve-part index implies a catalogue that does not exist.
- The feature-catalogue density. Shopify has 150 things to announce; Autumn has one offering and five secondary services.
- **The AI framing, which is the exact inverse of Autumn's positioning.** "Sidekick — the AI-powered Shopify expert who's just as obsessed with your business as you are" makes the AI a named character with a personality. Autumn's rule is AI as method, mid-sentence, never as identity and never as a persona. Do not name an assistant, do not give it a voice, do not build a section around it.
- The composited product-in-space imagery and the AI-generated-painting art direction generally.
- The `/slash-command` word cloud, the polaroid-fan collage, and the floating-chat-bubble arrangements used as section illustrations.
- Copy: "Sell directly in AI chats…", "New in-store hardware that provides unwavering reliability", "Insights, proactively delivered", "Complexity, delegated", "Tedious tasks, simplified" — including the noun-comma-past-participle headline construction itself, which is a recognisable Shopify tic. Also the reassurance refrain "Your brand stays your own" / "Every customer stays yours", both its wording and its possessive sentence shape.

**Design-system implications.**
- A `Section` shell with a fixed cadence contract: `eyebrow` → `positioningLine` → `evidence` slot. Sections that cannot fill all three do not ship.
- A `FeatureItem` primitive capped at label + one sentence + optional disclosure link, used by §5 and §3.
- Two section-density variants — editorial default and a "solo" variant for §6 — expressed as spacing-scale steps rather than ad-hoc margins.
- A `StoryboardFrame` component for §2, since motion is deferred: the static frame set is the base state and motion is additive. Needs a frame-count and aspect token rather than an ad-hoc size, plus stacked-on-mobile and reduced-motion behaviour.
- Optional thin sticky anchor nav; if used it must be keyboard-reachable, and its presence is one of the open decisions for canvas.

---

## 3. Monarch — "Our Mission" photo band + "A letter from the founders"

*Class: SCREENSHOT-ONLY (Mobbin). Section `f64d7aff-77b4-4951-92df-2c9e4411ca67`. Added to the References page in this pass.*

**Source product and flow.** Monarch, a personal-finance and budgeting app. The flow captured is the mission or about moment — the point where a prospect asks "who are these people and why should I trust them with my money".

**Screen, component, or interaction captured.** Two stacked bands. The upper band is a short letterbox photograph (roughly 3.7:1, not a full-viewport hero) of two people leaning over a phone in a warm domestic setting; a frosted translucent panel is anchored to its lower-left corner holding a small letterspaced eyebrow ("OUR MISSION") above a two-line serif headline. The lower band drops to a quiet off-white ground and holds a single centred text column: a serif heading, "A letter from the founders", left-aligned flush with the body beneath it, then first-person prose at a generous measure with no bullets, rules, images, or pull quotes. Partway through, one sentence sits alone as its own paragraph — "This is why we created Monarch." — at exactly the same size, weight, and colour as everything around it. Nothing in the section is a card, tile, chart, or UI screenshot, and the section contains no interactive elements at all.

**Pattern observed.** Belief is earned in two sequential registers. An emotional register — one human photograph carrying one short thesis line — followed immediately by a rational register — plain first-person prose on a quiet ground. The two bands run at deliberately different tempos: the image band is short and tight, the prose band is tall and airy. Inside the prose, paragraph *length* is the rhythm device, and an isolated one-sentence paragraph marks the turn.

**Principle worth extracting.** Sequence the emotional and the rational rather than interleaving them, and carry both in photography and prose alone. Paragraph rhythm is a legitimate hierarchy tool — but isolation-by-whitespace is a weak scan anchor and needs typographic reinforcement to survive a reader who does not read.

**Adaptation for this hotel-operator workflow.**
- **§1** takes the image register: real inn photography in a short full-bleed band with an anchored text panel holding one editorial-serif thesis line about direct bookings. The panel must be an **opaque paper-cream surface**, not frosted glass — glassmorphism is prohibited, and an opaque panel makes Don's ten-second legibility deterministic rather than a function of whatever is behind it. Band aspect and panel position are set on Autumn's own grid, not inherited.
- **§2** takes paragraph-length-as-rhythm: two or three short beats of one guest's search-to-booking journey as plain prose, then the turn isolated on its own line ("She books on your site. No commission."). Improve on the reference by stepping that pivot line up one size into the display serif — in the capture it is typographically identical to its neighbours and a scanner would miss it.
- **§6** is where the letter register genuinely earns its place: state the Flagship terms — no fixed fees, Autumn covers ad spend, 13% of bookings driven — as a short signed first-person note in running prose, rather than as a pricing card, comparison table, or tier grid. It lets Autumn state commercial terms warmly without SaaS chrome, and it makes "humans in control" literal by naming the humans. Cap it at roughly 150 words across four short paragraphs, at a 60–68 character measure. That note sits **above** §6's three-role committing stack, not inside it (see the resolution in §8.1).
- The emotional-then-rational ordering is also the macro rule for the whole scroll, and it is precisely the sequence that carries Don from "this is for me" to "they get it".

**Do not copy.**
- **Monarch's hero composition as a lockup** — a ~3.7:1 letterbox strip with an inset panel pinned to the lower-left corner carrying a letterspaced eyebrow directly above a two-line serif headline. The two-register emotional-then-rational sequence is what transfers; band aspect, panel position, and the eyebrow/headline arrangement are Autumn's own decisions.
- The crimson-to-orange promotional bar (#E6484E → #FE682D) reading "Get 50% OFF your first year with code NEWYEAR2025". It is doubly out of scope: a gradient-as-identity band **and** a discount/urgency mechanic. Do not copy the promo-bar-above-nav stacking either.
- Monarch's action colour family — the filled orange sign-up pill and the rust eyebrow — and the idea of spending an accent on a decorative eyebrow at all. Autumn's single accent must keep meaning "action".
- The butterfly mark, the serif "Monarch" wordmark lockup, the floating white rounded nav capsule, the six-item marketing nav with dropdown chevrons, and the paired ghost "Sign in" + filled "Sign up" account cluster. Autumn's page is an entry point with no application flow behind it; an account header is wrong.
- The frosted translucent overlay card — its translucency and glassy edge are glassmorphism and are prohibited, and its specific corner-radius value is not to be sampled. Autumn's panel is opaque and takes the page's own radius token.
- The ~85-character measure. It is a defect to fix, not a spec to inherit.
- Monarch's inks and ground as sampled values; Autumn's cream and ink-dark are specified independently.
- The undifferentiated pivot line — a one-sentence paragraph at identical size, weight, and colour to its neighbours — as a scanning device. This is the reference's weakness, not its lesson.
- All of the copy: "Transform lives by simplifying money, together", the "OUR MISSION" eyebrow, "A letter from the founders", "We know the feeling. You check your credit card statement…", and "This is why we created Monarch."
- The photographic casting and direction: a couple at a window looking down at a phone, glass wall with ivy, peach curtains, shallow warm-window depth. Autumn's imagery is real inns, real innkeepers, real rooms — and must never put a phone screen or app UI in frame, because the positioning is humans in control and AI as method.

**Design-system implications.**
- `PhotoBand` with a letterbox aspect token on desktop and a taller floor on mobile — the aspect chosen on Autumn's grid. The reference's two-tempo rhythm becomes two distinct section-padding tokens, not one.
- `OverlayPanel` — opaque, corner-anchored, position decided on canvas (bottom-left is one candidate, not an inherited default), sharing the page gutter, holding `Eyebrow` + `DisplayLine`. Needs an `overlay | stacked` responsive state so the panel drops below the photo on narrow viewports instead of crushing the type. The capture only shows the desktop state; the responsive state is ours to define.
- `ProseBlock` with a 60–68ch measure token, a paragraph-gap token equal to one line-height, and explicit rules: no bullets, no rules, no pull quotes.
- `PivotLine` — a variant inside `ProseBlock` that steps up one size and switches to the display serif. This is the deliberate improvement on the reference.
- Type roles hold at exactly three: display serif, humanist sans body, uppercase letterspaced micro for eyebrows. Resist a fourth.
- Token decision to force early: may the eyebrow use the accent? Recommendation is no — use a muted ink tint, so the accent keeps signalling "clickable".
- Accessibility: the thesis line is a real heading with the eyebrow as a decorative span, not the eyebrow standing in as the heading.
- Recorded honestly: this reference contributes **zero interaction states**. The section is entirely static. Autumn's disclosure and sequencing patterns must be sourced elsewhere — from entries 5 and 7 below.

---

## 4. Intercom — customer results wall

*Class: SCREENSHOT-ONLY (Mobbin). Section `f9204160-0727-4c99-9b0d-ab5f3bd3c4ce`. Added to the References page in this pass.*

**Source product and flow.** Intercom, a customer-service and support platform. The flow captured is the social-proof moment on a marketing page — the point where a prospect asks "who else uses this and did it work".

**Screen, component, or interaction captured.** On a warm bone ground, a two-line heavy grotesk headline staircases across the top — first line flush left, second flush right. Below it sits a strict four-column grid of equal tiles on one fixed row height, in which three tile species alternate: full-bleed portraits shot on coloured seamless backdrops with a small company caption burned into the lower left; hairline-outlined tiles whose fill is the page ground and which contain nothing but a logotype; and quote cards that span two columns in flat saturated fills, carrying a serif quote top-anchored, a hairline rule, and a bottom-pinned attribution giving name, role, and company. Row two runs logo–photo–photo–logo; the third row's double-wide quote card sits on the opposite side from row one's. Every photo tile and quote card carries a small filled circular "+" badge pinned to its lower-right corner, contrast-inverted against its background. All tiles have square corners. There is no carousel, no arrows, no pagination dots, and no filter chips.

**Pattern observed.** Social proof composed as one simultaneous mosaic rather than a sequence. A single module grid on one fixed row height carries three interchangeable evidence species — a face, a name-mark, a sentence — and the only structural variant is a double-wide tile that alternates which side of the grid it occupies row to row. That alternation, not irregular tile sizing, is what produces the checkerboard rhythm. Each tile carries exactly one unit of evidence. Inside quote cards, top-anchoring the quote and bottom-pinning the attribution lets quotes of different lengths share one row height without breaking the grid. The corner "+" defers long-form stories to an optional expansion instead of spending vertical space on them.

**Principle worth extracting.** Proof reads fastest when heterogeneous evidence is forced onto one module and one row height — the constraint, not the content, is what makes a mixed wall scannable. Deferring long-form stories to an optional expansion keeps density high without spending vertical space, and nothing hides behind a carousel or a pagination control.

**Adaptation for this hotel-operator workflow.** This is the structural spine for **§4**. Take the constraint — one module, one row height, one unit of evidence per tile, everything present at once — and derive the species from Autumn's own evidence types and the brief's proof-card inventory, which asks for four:

1. **Photo tile (1×1)** — a real inn photograph (a porch, a breakfast room, a proprietor on the front steps) with a caption giving property name and place: "Brass Lantern Inn · Stowe, VT".
2. **Number tile (1×1)** — a large display-serif figure over one line of humanist sans qualifying it ("+17% — direct bookings, first six months"), set as a typographic moment on the paper ground. Never a chart, never a KPI card. This replaces Intercom's logo tile entirely.
3. **Quote tile (2×1)** — one sentence in the editorial serif from a named owner, hairline rule, attribution bottom-pinned with property, town, and room count.
4. **Message tile (1×1)** — the brief's iMessage-style thank-you. A short guest or innkeeper message set as a typographic transcript on the paper ground (sender name, date, one or two lines), delimited by a hairline rather than a bubble. It is a document artifact, not a messenger: no tailed bubbles, no typing indicator, no send field, no avatar — and never a flat image, because the text must be real DOM text with a `figcaption` attribution.

Hold the wall to roughly six to nine modules. For Don, three specific Vermont-scale properties and one honest number beat a volume argument, and volume is the SaaS move. No carousel, arrows, dots, or filters, so his ten-second scan lands somewhere useful wherever his eye falls. Any longer story goes to an inline accordion expansion beneath the tile, never a modal, and every tile must be fully persuasive unexpanded, because Don will not hunt for a "+".

**Do not copy.**
- **Intercom's grid arithmetic as such** — four columns, three species, and the span-2 card alternating sides row to row. Autumn's column count, species count, and alternation follow from its own evidence types and the six-to-nine-module cap, not from the capture.
- The orchid-pink and aqua quote-card fills, and the scheme in which every tile gets its own saturated brand colour. Autumn may tint at most one tile species, in the single autumnal accent, at low saturation. Colour never behaves as decoration.
- Near-black text set on a hot saturated ground.
- The bone-with-pure-black ground treatment, the heavy geometric grotesk headline, and specifically the two-line flush-left / flush-right split headline — a recognisable Intercom typographic signature. Autumn's section headline is one editorial serif line.
- The grotesk-headline-against-serif-testimony pairing as a look, even though giving testimony a different typographic voice is transferable.
- The copy: "The results speak for themselves, so do our customers", the product name "Fin", and the claim construction "double-digit gains in engagement and resolution rates".
- The hairline-outlined empty tile containing only a logotype — and every mark shown in it. **Do not import the SaaS logo-wall convention at all.** On Autumn's page a customer's identity is a property name and a town, set in type, not a logotype. Small independent inns do not have logos worth a wall, and an outlined wordmark tile would render as a literal blank.
- The coloured-seamless studio portrait style — olive, pink, orange-red backdrops with art-directed subjects — which is the exact opposite of real-inn documentary photography. And do not reproduce the small white bold-sans caption chip burned into the photo as that specific styling.
- The filled circular "+" badge and its contrast-inversion rule. If Autumn needs an expander it is a quiet inline text affordance in the accent, not a badge glyph.
- Zero-radius tiles set against rounded nav pills — an Intercom form signature and an internally inconsistent one.
- The site chrome in the capture: two floating rounded white nav pills, the dropdown product nav, the black "Start free trial" pill, and the circular Messenger launcher floating over the grid. **Autumn carries no persistent chat launcher and no live-chat affordance;** the §4 message tile is a static transcript, not a messenger.

**Design-system implications.**
- `ProofGrid` on a module system with a single fixed row-height token and one permitted span variant, so every evidence type resolves to 1×1 or 2×1 and nothing else. This is the rule that stops a heterogeneous wall becoming masonry. Column count is Autumn's decision.
- Four tile components on that module: `PhotoProofTile` (full-bleed image, caption slot for property and town, optional scrim token for caption legibility over light imagery), `NumberProofTile` (display-serif figure + one-line sans qualifier, ground-coloured, hairline or borderless — explicitly not a stat card, no icon, no delta arrow, no chart), `QuoteProofTile` (span-2; a two-slot flex with quote top-anchored and rule-plus-attribution bottom-anchored, which is what absorbs variable quote length at a fixed height), and `MessageProofTile` (1×1; brief requirement with no reference precedent — text-only and image-free by construction, sender/date/body slots, hairline delimiter, rest and focus-visible states).
- Tokens: paper/cream ground, ink, one autumnal accent plus one low-saturation accent tint reserved for at most one tile species, a hairline rule colour, one grid gutter, one module row-height, and a single border-radius token applied consistently. Do not mix square tiles with pill controls.
- One evidence unit per tile is a hard rule. The grid collapses to two columns then one, with the span-2 card becoming full width, preserving species alternation so two of a kind never stack adjacently on mobile.
- States: rest, hover (a restrained lift or accent hairline, never a colour flood), focus-visible with an accent outline meeting 3:1 against the paper ground, and — if expansion survives — an expanded state that pushes the grid rather than overlaying it, wired with `aria-expanded` / `aria-controls` to an inline region.
- Accessibility: photo captions are real text in the DOM, never baked into the image; quote attributions use `blockquote` / `figcaption`; number tiles must read to a screen reader as a sentence ("17 percent more direct bookings in the first six months"), not as an orphan figure; text over photography needs the scrim token to hold 4.5:1. Because the wall is present all at once, there is no carousel to make keyboard-operable — that is the accessibility win of this pattern.
- Motion: at most a short staggered fade-in on scroll into view, honouring `prefers-reduced-motion`. No autoplay, no ticker, no scroll-driven position changes.

---

## 5. Titan — "How it Works — it's just three steps"

*Class: SCREENSHOT-ONLY (Mobbin). Section `0d103afa-c85e-4568-a98a-0a1e7cbd5e8f`. Added to the References page in this pass.*

**Source product and flow.** Titan, an investment and wealth-management app. The flow captured is the explainer moment for a genuinely complicated financial product — the closest structural analogue to explaining search engine marketing to someone who may not know what Google Ads are.

**Screen, component, or interaction captured.** A left-aligned, image-free, entirely achromatic section on white — there is no accent colour anywhere, not even on the controls. A section heading sits at the content inset at medium weight, with a mid-grey caption floating in a large gap far below it, nearer the rule beneath than the heading, so it reads as a label for the list rather than a subtitle. Four very faint hairlines span the content column only, separating a header zone from three step rows. Row one is open by default and discloses one smaller sentence at the same left margin — no indent, no card, no tint, no border. The open row gains roughly 2.6× the height of a closed row and nothing else changes. Rows two and three show only their one-line titles. The three toggles are not identical: the open row's is an unfilled circle with a barely visible ring and a **down** chevron, while the closed rows use filled grey circles with **up** chevrons — state encoded in fill and chevron direction, with the direction mapping inverted from the usual convention.

**Pattern observed.** A "how it works" section built as a vertical hairline-separated row list rather than a three-column card grid. Every step starts at one shared left margin, so the reader scans a single column instead of three, and each row carries an optional per-row disclosure holding the mechanics. Shipping the first row open teaches the affordance and proves there is more behind the other rows without requiring a click to discover it. Opening adds height and whitespace only; the disclosed sentence is near-parity with its trigger in colour and family, differentiated by size and space rather than by a tinted drawer.

**Principle worth extracting.** Collapsing a sequence onto one axis makes its length countable at a glance, which is what parallel columns cost you. Depth belongs per row, demonstrated by opening the first one, and separated from its trigger by space rather than container chrome — so expanding adds reassurance without changing the section's visual register.

**Adaptation for this hotel-operator workflow.** This serves **§3** as geometry, but Titan's information budget must be inverted before it is usable. Titan's closed titles — "Add cash", "Let the system work" — carry almost no information; that only works because its reader is already sold. Don arrives cold, scans, and must reach "I can see what they'd actually do for me" **without clicking anything**. So each of Autumn's three steps shows a serif numeral, a plain title, **and one always-visible line of substance** ("We put the Brass Lantern in front of people already searching for a Stowe inn"), with per-row disclosure reserved for a third layer of mechanics that only a skeptic will open.

Keep the borrowed geometry: one shared left margin for numeral, title, body, and disclosed text; hairlines as the only structural device; the open row growing by height and whitespace alone; the first row open on load. The collapsed-by-default version of the same pattern belongs in **§7**, where hiding answers is native, and in **§5**, where each of the five secondary services is a one-line row that opens to a sentence — which keeps §5 subordinate to the SEM story instead of competing with it as a card grid. Sections 3, 5, and 7 then share one row primitive, giving the page a repeating structural signature at almost no vertical cost. Note that this reference is fully achromatic and image-free: in Autumn it must sit between full-bleed inn photography (the §2 guest journey above, the proof wall below) so its austerity reads as a deliberate breath on the paper ground, not as the page's texture.

Recorded honestly: Titan's contribution is essentially the geometry and the density ratio — a legitimate but thin reference. If §3 needs more, pull Faire or Aave from the alternates in Appendix C; both are warmer fits and both demonstrate the same first-row-open convention.

**Do not copy.**
- The Titan logotype, and any investment, wealth-advisor, or tax framing.
- The pure-white ground, pure-black type, and neutral caption grey. Autumn's ground is warm paper with ink-dark text, and every hairline and grey must be warmed off-neutral rather than lifted from this capture.
- The tight-tracked neo-grotesque heading treatment. Autumn's display is an editorial serif and this heading must not be a grotesk.
- The heading string "How it Works", the caption "It's just three steps", and the caption-floating-in-a-void placement below the heading.
- The "Step 1) / Step 2) / Step 3)" construction with the closing parenthesis — a distinctive Titan tic. Autumn uses a serif numeral as a typographic moment, not a parenthesised inline label.
- Either toggle: neither the filled grey circle on closed rows nor the unfilled circle with a near-invisible ring on the open row, including their diameter and chevron weight.
- **Above all, the state mapping, which is inverted from convention** — open shows a down chevron, closed show up chevrons — and which encodes state only through fill and direction with no text. Autumn needs a different affordance with a conventional mapping.
- The near-invisible hairline weight. The rules and the open toggle's ring render at roughly 1.1:1 against the ground, which is effectively an invisible boundary. Autumn's hairlines must be visible on cream.
- The type-scale ratio. Titan's heading-to-title-to-body relationship measures roughly 2.1 : 1.3 : 1, but that is measured off a medium-weight grotesk heading that is deliberately not display-scale, and it is far too flat for the brief's dramatic scale contrast. Reference-only observation; Autumn's display-led scale sets its own relationship.
- The undifferentiated rule treatment where header rule and row rules are identical, and the faint vertical container borders on both edges.
- The completely achromatic, image-free composition as a *page-level* strategy. Autumn's warmth carrier is real-inn photography.
- Any Titan step copy: "Tell us your tax info", "Add cash", "Let the system work", "We ask for your income, filing status, and state." **"Let the system work" in particular must not be echoed in any form** — Autumn's positioning is humans in control, with AI as method, never as the agent doing the work.

**Design-system implications.**
- One `DisclosureRow` primitive reused across §3, §5, and §7: a leading slot (serif numeral for §3, empty for §5 and §7), a one-line title, an always-visible body line (§3 only), a disclosed body, and a trailing trigger.
- States required: collapsed, expanded, hover, focus-visible, plus a `defaultOpen` variant for the first row of §3.
- Tokens: a warm hairline colour that is genuinely visible on cream — target at least 3:1 for structural rules, not the ~1.1:1 this capture uses. Collapsed row min-height and expanded row padding as **separate top and bottom tokens**, since the disclosed sentence carries more space below it than above (the capture runs roughly 44px collapsed to 117px expanded, about 2.6× — a reference observation, not a spec). One content-column inset token shared by heading, caption, rules, titles, bodies, and disclosed text so everything hangs off one left margin.
- Rules span the content column only, not the container.
- Accessibility: the trigger is a real button with `aria-expanded` and `aria-controls`; the whole row is the hit area with a minimum 44px target; state never relies on chevron direction or fill alone; the chevron mapping follows the conventional down-to-expand.
- Because expansion changes section height inside a single scroll, animate height with a motion token and honour `prefers-reduced-motion` by snapping open. Keep disclosed content in the DOM so it is findable by in-page search and by crawlers.

---

## 6. Superpower — member quotes

*Class: SCREENSHOT-ONLY (Mobbin). Section `610e64d7-9325-4cb9-a2c2-39cddb85b9f3`. Added to the References page in this pass. See "Provenance corrections" below — this is not the section ID recorded in the research package.*

**Source product and flow.** Superpower, a health and longevity membership. The flow captured is the testimonial moment on a marketing page.

**Screen, component, or interaction captured.** A near-black field with no headline in frame. The body is not a grid: individual testimonial units are scattered asymmetrically across the field at widely varying opacity, each built from a small circular greyscale portrait, a sentence-case quote, and a smaller attribution in "Name, age" format. Three units are fully legible; roughly eight to ten more are dimmed almost to invisibility but are structurally complete — portrait, quote, and attribution all present, merely faded. Several are clipped by the viewport edges, implying the field continues past frame. Thin L-shaped corner crop-marks bracket individual quote units, standing in for any card fill, border, or shadow. The legible quotes carry countable facts rather than adjectival praise: "It took 7 years, 4 specialists, and 5 hospitalizations before I finally got answers."

**Pattern observed.** Proof delivered as a depth-of-field rather than a grid. Within one continuous plane a few quotes are held at full legibility while a dozen more recede, so the reader receives a small readable dose while being shown that the evidence pool runs deeper than the frame. Each unit earns its place through specificity — a named individual carrying an identity marker, and a quote body carrying countable facts. Units are delimited by corner marks instead of card chrome, so a quote reads as a document artifact rather than a UI component.

**Principle worth extracting.** Specificity is what makes testimony load-bearing: a concretely identified speaker plus a countable fact. Volume is not — so show a few quotes at full weight and let the size of the pool be implied rather than displayed. A quote can be bounded by a delimiter mark instead of enclosed in a card.

**Adaptation for this hotel-operator workflow.** Applies chiefly to **§4**, alongside entry 4's grid. Three innkeeper quotes at full ink-on-cream contrast, each attributed with the marker that lets Don recognise himself: property name, town, and room count — "Ellen Marsh · Rabbit Hill Inn, Lower Waterford, 14 rooms" — rather than a job title, because scale and geography are what tell him "this is a place like mine". Every quote body carries a countable fact in his own units: direct bookings per week, commission points avoided, occupancy in a named shoulder month. Set those numerals as typographic moments in the display serif, **inline within the sentence**, never lifted out into a tile.

Signal depth by **tiering, not fading**: three full-size featured quotes, then a quiet row of six to eight further inn names and towns set small in muted ink, closing with one plain line — "and 40 more independent properties". Fading text into cream reads as a rendering fault and fails contrast outright. Borrow the corner-mark delimiter idea as a way to bound a quote without a card — a hairline rule or a pair of thin ink corner marks — so §4 stays editorial and never becomes a row of SaaS testimonial cards. Reuse the single-quote treatment once in **§6**, placing one innkeeper sentence about being paid only on results beside the signed note; it sits outside §6's three-role committing stack, not inside it. Optionally close **§2**'s guest journey with a short quote from the innkeeper whose guest it was.

**Do not copy.**
- The near-black ground and the entire dark theme.
- The saturated orange pill CTA, that orange as an accent hue, and the lowercase geometric wordmark.
- The nav construction: left wordmark, a link cluster split by a thin vertical divider from a second cluster, a text "Login" beside a filled pill.
- The single tight low-contrast grotesk used for both quote body and attribution. Autumn pairs an editorial serif display with a humanist sans body.
- The dull-orange L-shaped corner crop-marks exactly as drawn. The idea of a non-card delimiter transfers; that specific bracket in that specific colour does not.
- **The scattered star-field placement of quote units at arbitrary positions**, which is actively hostile to a ten-second scan.
- **The near-zero-opacity de-emphasis tier**, which renders body text unreadable and fails WCAG contrast outright. Do not imitate it at any value.
- Clipping quote units at the viewport edges to imply continuation.
- The uniformly desaturated circular portrait treatment applied to every speaker.
- The "Name, age" attribution format. Age is Superpower's identity marker, is irrelevant to Don, and would read as faintly insulting.
- The grievance narrative posture of the legible quotes ("it shouldn't take a medical degree…", "7 years, 4 specialists, 5 hospitalizations before I finally got answers"). Don is not being rescued from a villain, and Autumn must not cast OTAs, previous agencies, or Don's own past decisions in that role.
- From Superpower's adjacent sections: the "Before Superpower, standard healthcare left our members in the dark" construction — do not build any "Before Autumn, …" equivalent — and the "Share your story" solicitation and "Join thousands…" social-proof caption, neither of which belongs on a page with no application flow.

**Design-system implications.**
- A `Quote` component with three explicit emphasis **tiers**, not an opacity scale: `Featured` (large humanist sans body, full ink contrast, inline serif numeral emphasis), `Secondary` (body size, full contrast, shorter), and `Mention` (one line carrying name, property, and town, in muted ink held at or above 4.5:1). Tier is a discrete token and never an alpha value.
- A contrast-floor token forbidding any text tier dropping below 4.5:1 against the cream ground. The reference's largest defect is precisely that it does.
- A structured attribution slot model — person name, property name, location, and one scale marker such as room count — so the same component renders consistently and the marker can change without a copy rewrite. This is the same slot model Appendix A2 takes from findautumn.com's property marquee.
- A numeral-treatment token for figures inline in quote bodies: a display-serif size step plus tabular figures, so numbers read as typographic moments without leaving the sentence. This satisfies "numbers as typography, never charts".
- A `QuoteFrame` delimiter token with hairline-rule and corner-mark variants plus a plain no-frame default, so proof units can be bounded without card fill, radius, or shadow. Deliberately provide **no card surface token** for this component.
- Generous editorial vertical rhythm between featured quotes, a tighter block for the mention row, all on a predictable left-aligned or centred column. No absolute or randomised positioning primitives.
- Portraits are optional and, if used, are real inn or innkeeper photography in full colour. A text-only variant is required, because many small properties will not supply a headshot.

---

## 7. Atlas Card — single-action invite screen · counter-example

*Class: SCREENSHOT-ONLY (Mobbin). Section `e8694068-f518-4655-85ac-e6c3c8b62673`. Added to the References page in this pass. See "Provenance corrections" below.*

**Source product and flow.** Atlas Card, an invite-only premium credit card. The flow captured is the commitment moment — the screen that asks a visitor to request an invitation.

**Screen, component, or interaction captured.** A full-bleed near-black viewport holding four objects on a single centred vertical axis and nothing else: a small rounded-square app-icon tile at the top; one five-line paragraph of neutral sans-serif copy in a narrow column at a long measure; a single solid cobalt pill button; and two centred lines of very small dim-grey type immediately beneath it reading, in effect, "membership is invite-only — join the waitlist and we'll contact you if it's a fit". There is no navigation, no wordmark, no display headline, no proof, no badge, and no scroll cue. The paragraph is not one flat value: it steps down line by line from near-white to mid-grey, reading either as a fade-mask or as a frozen mid-state of a scroll-linked text illumination.

**Pattern observed.** An entire viewport spent on one idea, one action, and one line of qualifying fine print, with vertical negative space rather than size contrast doing all the ranking. The reassurance sentence sits **after** the CTA and lowers the stakes of clicking — selectivity stated as a fact about mutual fit, not as scarcity, a counter, or a deadline. The line-by-line value ramp implies the copy is revealed progressively as the reader arrives rather than presented whole.

**Principle worth extracting.** At a committing moment, cut the type roles to three — one claim, one action label, one reassurance — and let vertical space do the ranking. Qualifying copy placed after the button should lower the perceived cost of clicking by naming the criterion as mutual fit, never as scarcity or deadline.

**Why this is filed as a counter-example.** Atlas can convert on mystique alone because its visitors arrive already wanting in. Don arrives cold and skeptical. A headline-less, evidence-free, velvet-rope composition would fail the ten-second "this is for me" test outright, and the reference's restraint is easy to mistake for a hero strategy. It is not one. Its usable lesson is narrow and is quarantined below.

**Adaptation for this hotel-operator workflow.** Evidence for **§6** and **§7**. Nothing here informs §1's hero strategy; §1, §2, and §3 each borrow one narrow mechanic and nothing else.
- **§6** gets its own near-full-screen breathing room on the cream ground. Its committing stack is held to three type roles: one short serif display line stating the deal in Don's terms (no fixed fees, Autumn covers ad spend, 13% of bookings driven), one action in the accent, and one reassurance line set immediately under the button. That reassurance is the analogue of Atlas's footnote, in the register of "If the numbers don't work for a fourteen-room inn, we'll say so." — illustrative register only; any line keeping the "we'll … if it's a fit" shape is the banned paraphrase. **Autumn's selectivity, if voiced at all, is about whether the economics work for his property — never about Don qualifying for membership.**
- **§1** borrows only the one-action discipline: a single primary CTA, no email capture, no secondary button, no badge row. On hierarchy it does the opposite of Atlas — a serif display line over inn photography, not a body paragraph standing in for a headline.
- **§2** gets the genuinely useful mechanic: the paragraph's progressive value ramp maps onto the guest-journey peak. Let the journey's sentences illuminate in sequence as the reader scrolls, at **full contrast at rest**, with no scroll-jacking and the whole passage legible when motion is disabled.
- **§3** can adopt the one-idea-per-screen ratio without adopting the emptiness.

**Do not copy.**
- The near-black ground and white-on-black inversion — the single most identifying element here and the exact inverse of Autumn's warm paper with ink-dark text.
- The cobalt pill and the cobalt logomark. Autumn's one accent is autumnal; never a tech blue.
- The floating rounded-square app-icon tile with its quartered-circle mark. Autumn is not an app and must not open with an app icon.
- The everything-centred single-axis composition. Autumn is editorial, left-aligned, and asymmetric over photography.
- The neutral grotesque paragraph used as a headline substitute with no display type present at all.
- **The graduated paragraph opacity as a resting state.** The last lines sit at roughly mid-grey on black and fail contrast. If Autumn borrows the progressive reveal, the settled state must be full ink.
- The footnote's sub-3:1 grey at roughly half body size. Steal the restraint, not the illegibility.
- The total absence of navigation, wordmark, and brand name in the frame. A visitor arriving from a cold email must see "Autumn" immediately.
- The copy: the aspirational list construction ("tables at the hardest-to-book restaurants… the perfect suite at the world's best hotels… front row at sold-out concerts"), the vague-abundance tag "and much more", the label "Request Invite", and the lines "membership is invite-only" and "we'll contact you if it's a fit". No reuse and no light paraphrase.
- The velvet-rope positioning underneath that copy. Don should feel understood and invited in, not auditioned.
- The narrow fixed-width pill geometry and the flat no-affordance button styling as an identity move.
- The zero-evidence composition. Autumn's equivalent moment sits **downstream of the proof wall**, never in place of it.
- The sibling frames from the same site: the Earth-from-orbit / starfield / card-in-a-light-beam atmosphere (`17ee1097-e47b-49a3-a2c0-231c66d79fe5`) and the loading sequence with its monospaced small-caps tagline and progress rule (`97c0c7ed-eae0-4f0f-82ce-8ab9a7d2f09a`). That entire cold luxury-tech register, including the glow, is ruled out.

**Design-system implications.**
- One primary `Action` component with exactly one size and one visual weight for the page's committing moments, plus a `Reassurance` slot bound to it **as a child**, so a CTA can never ship without its qualifying line and the line can never be authored at an unsafe size or contrast.
- A `solo` density variant on the `Section` shell — one claim, one action, no supporting rail — expressed as a spacing-scale step rather than an ad-hoc margin.
- A `ProgressiveText` component for §2: sentence- or clause-level reveal, resting state at full ink contrast, reduced-opacity states used only in transit, `prefers-reduced-motion` collapsing to the settled state, no scroll-position hijacking, and the whole passage present in the DOM for scanners and screen readers.
- Measure tokens: display ~20–30ch, editorial body 60–68ch, reassurance 50–60ch, so no block drifts to the reference's long unheaded measure. A `space-solo` step at roughly 2–3× the standard section gap.
- Accessibility: reassurance and footnote type clear 4.5:1 on cream and sit no smaller than ~14px, which rules out the reference's treatment outright. The primary action needs visible focus, hover, active, and disabled states — the capture shows none. The reveal must never be the only path to the copy. Centred-axis layout is an available option, not the system default.

---

## 8. Synthesis

### 8.1 Which reference serves which section

| Section | Primary reference | Secondary | What is actually taken |
|---|---|---|---|
| 1 · Hero | In Common With | Monarch | Photography as the whole argument; a photo band with an opaque anchored panel; one action only. **Inverted from both:** headline contrast far stronger, no hover dependency, composition set on Autumn's grid. |
| 2 · SEM explainer | Shopify Editions | Monarch, Atlas Card, Superpower | Scenario storytelling — one guest, step by step, as static storyboard frames; paragraph-length rhythm with a display-serif pivot line; sentence-level progressive reveal that rests at full contrast; optionally one innkeeper quote to close. |
| 3 · How it works | Titan | Shopify Editions, Atlas Card | Vertical hairline row list on one left margin; first row open by default; one-sentence item cap; **plus** an always-visible line of substance per step, which the reference lacks. |
| 4 · Proof wall | Intercom | Superpower | One module, one row height, one unit of evidence per tile, everything present at once; four species (photo · number · quote · message); named speakers carrying countable facts; delimiters instead of cards. |
| 5 · Other services | Titan | Shopify Editions | Five one-line `DisclosureRow` items, each opening to a sentence. Titan supplies the construction, Shopify the label-plus-one-sentence content shape. Not a grid. |
| 6 · Flagship entry | Atlas Card | Monarch, Superpower | The committing stack is held to three type roles — claim, action, reassurance — with the reassurance after the button naming mutual fit, and the 13% appearing once inside the claim line. Terms are carried by a short signed note (≤150 words) **above** that stack, not a pricing card, and one innkeeper quote may sit beside the note. The letter and the quote are outside the three-role stack, not additions to it. |
| 7 · FAQ | Titan | Atlas Card | The same row primitive, collapsed by default; conventional disclosure mapping. |
| 8 · Footer | — | — | No reference needed. Human contact, one small hiring link, nothing else. |

### 8.2 Component inventory these references imply

| Component | Sourced from | States required |
|---|---|---|
| `PhotoBand` | In Common With, Monarch | rest; reduced-motion; declared text-safe region |
| `OverlayPanel` (opaque) | Monarch | `overlay` \| `stacked` responsive states |
| `ProseBlock` + `PivotLine` | Monarch | static |
| `Section` shell (cadence contract) | Shopify Editions | `editorial` \| `solo` density |
| `FeatureItem` | Shopify Editions | rest; optional disclosure link |
| `StoryboardFrame` | Shopify Editions (scenario imagery) | static frame (default), stacked on mobile, reduced-motion, no-JS — the static set is the base state, motion is additive |
| `DisclosureRow` | Titan | collapsed, expanded, hover, focus-visible, `defaultOpen` |
| `ProofGrid` + `PhotoProofTile` / `NumberProofTile` / `QuoteProofTile` | Intercom | rest, hover, focus-visible, expanded |
| `MessageProofTile` | brief requirement; no reference precedent — module system from Intercom | rest, focus-visible; text-only, image-free by construction |
| `Quote` (Featured / Secondary / Mention tiers) + `QuoteFrame` | Superpower | tiers as discrete tokens, never alpha |
| `Action` + bound `Reassurance` slot | Atlas Card | rest, hover, focus-visible, active, disabled |
| `ProgressiveText` | Atlas Card | in-transit, settled (full contrast), reduced-motion |

### 8.3 Token decisions these references force

- **Contrast floor.** No text tier drops below 4.5:1 on cream (3:1 for large display). Three of the five Mobbin references fail a contrast floor: Superpower's near-zero-opacity quote tier and Atlas's sub-3:1 footnote fail this text floor, and Titan's ~1.1:1 hairlines fail the structural floor below. Each failure is instructive rather than transferable.
- **Accent scope.** One autumnal accent, bound to a single role token, always meaning "action" — at most one *primary* action per screen. Inline expander affordances and focus rings may also use it; nothing decorative may. Not on eyebrows.
- **Hairline weight.** Warm, off-neutral, and genuinely visible on cream — at least 3:1 for structural rules.
- **Measure set.** Display ~20–30ch; editorial body 60–68ch; reassurance 50–60ch. Monarch's ~85ch is a defect, not a spec.
- **Type scale.** Display-led, with dramatic contrast between display and body. Titan's ~2.1 : 1.3 : 1 is a reference observation only and is far too flat.
- **Row-height and gutter.** One fixed proof-grid row-height token and one gutter; every evidence type resolves to 1×1 or 2×1.
- **Storyboard frames.** Frame count and frame aspect are tokens, not ad-hoc sizes, so §2 stacks predictably on mobile.
- **Disclosure padding.** Separate top and bottom tokens, since a disclosed sentence wants more space beneath it than above.
- **Radius.** One radius token applied consistently. Do not mix square tiles with pill controls.
- **No card-surface token for quotes.** Deliberately absent, so §4 cannot drift into SaaS testimonial cards.
- **Claim format.** Ranges only. No "up to X" ceiling claims anywhere in the system.
- **Two section-padding tempos.** Image bands short and tight; prose bands tall and airy.

### 8.4 Consolidated "do not copy" — the short version

Across all seven references, nothing is taken from: any ground colour or accent hue as sampled; any wordmark, logomark, or app icon; any nav construction, account cluster, promo bar, or floating launcher; any headline string or body copy, including light paraphrase and distinctive sentence shapes; any display typeface treatment; frosted glass, gradients-as-identity, or saturated card fills; logo walls; badge-glyph expanders; studio-seamless portrait direction; carousels and their controls; velvet-rope or grievance copy postures; graduated-opacity text as a resting state; inverted disclosure mappings; any reference's signature composition reused with the nouns swapped; and any framing that makes AI a named character rather than a method.

Two prohibitions deserve repeating because a reference actively models the wrong behaviour:

1. **Shopify Editions names its AI "Sidekick" and gives it a personality.** Autumn's AI appears mid-sentence as method and never as identity. No named assistant, no persona, no section built around it.
2. **Titan's step copy includes "Let the system work".** Autumn's positioning is humans in control. No phrasing in which the system, not the team, does the work.

---

## Appendix A · Current-state Autumn — the register to inherit and the failures to fix

*Class: LIVE · Paper Snapshot. These sit on the sibling page* `get-autumn and findautumn`*, not on the References page. They are recorded here because the brief's prohibition list names them explicitly, and because one of them already writes in the voice the redesign should keep.*

### A1 · get-autumn.com

**Source product and flow.** Autumn's current marketing site. The flow captured is the full arrival-to-footer homepage scroll, as a Paper Snapshot on the sibling page.

**Screen, component, or interaction captured.** A dark hero band; a light card carrying "Digital marketing for independent hotels, boosting direct bookings by up to 40%" over a product dashboard screenshot composited onto autumn-forest photography, with four benefit columns beneath it; three alternating feature bands with empty image placeholders; a second card repeating the same dashboard-on-forest image under "Risk-free digital ad management: We cover the costs and only earn when you do."; a testimonial band; and an email-capture footer over a mountain photograph.

**Pattern observed.** The offer is strong and the page buries it. The single most persuasive line on the site — *"Risk-free digital ad management: We cover the costs and only earn when you do."* — sits roughly three-quarters of the way down, while the hero spends its ten seconds on "AI Marketing for Hotels".

**Principle worth extracting.** The risk reversal is the proposition. It belongs above the fold, in Don's words, before anything else.

**Adaptation.** §1 carries the risk reversal as a one-line statement within the first viewport. The three concrete benefit statements — Google visibility, Google Hotels placement, a branded booking engine — survive into §3 and §5 as plain sentences.

**Do not copy.**
- **"AI Marketing for Hotels" as a headline.** This is AI-as-identity, the exact thing the positioning forbids.
- The sub-headline, which carries a banned word in its first three: *"We leverage data-driven, on-brand digital marketing…"* — and "data-driven", which this document proposes adding to the banned list, though the brief does not list it.
- "Seamless set-up" as a benefit label — "seamless" is on the brief's banned list.
- "boosting direct bookings by up to 40%" — an "up to" ceiling claim. Autumn's honesty device is a **range** ("10–20% more direct traffic"), which reads as candour where a ceiling reads as a sales figure.
- The dashboard screenshot as the hero image, and its reuse as the illustration for a second, unrelated band. "Outcomes over dashboards" is stated brand philosophy; the current site contradicts it in its largest image.
- The testimonial band in full: a heading set in near-invisible dark grey on black; a horizontal carousel with an arrow control and cards clipped at the frame edge; cards at staggered vertical offsets; generic avatars; and attribution reduced to a role and a city — "Hotel Owner, Minneapolis" (used twice), "Innkeeper, Georgia", "Hotelier, Mexico C…". No property name, no size, no place a guest could book, no number. This is the anti-pattern that entries 4 and 6 exist to correct.
- The empty image placeholders in the feature bands.
- The "Be first to know" email capture in the footer. §8 is a human email address, not a list signup.

**Design-system implications.**
- A claim-format token permitting ranges only, forbidding "up to X" ceilings, and requiring provenance in-card for any number on the proof wall.
- The `Section` cadence contract must make it structurally impossible to render a heading with an empty evidence slot — the failure the research package recorded on this site.
- No image-placeholder state ships. A `PhotoBand` or proof tile without an asset falls back to a text-only variant, never to a grey box.
- Explicitly exclude product-dashboard imagery from `PhotoBand` and from every proof-tile variant.
- No carousel primitive exists in the system, so the testimonial-carousel failure cannot recur.

### A2 · findautumn.com

**Source product and flow.** Autumn's other current site, recruiting-led. The flow captured is the full homepage scroll, as a Paper Snapshot on the sibling page.

**Screen, component, or interaction captured.** An eyebrow "FOR INDEPENDENT HOTELS" over the headline "Finally, an easy way to get more bookings.", a three-line subhead, two CTAs ("Get started", "See how it works"), a row of three reassurance chips separated by × glyphs and set in letterspaced uppercase ("Free trial", "Live in minutes, not weeks", "No long-term contracts"), and a product screenshot showing a pricing dashboard with "ADR $214 +6%". Below it, a positioning band and a horizontal marquee of property descriptors — "…Hotel in NYC · Bed & Breakfast in New Orleans, LA · Boutique Inn Outside Philadelphia · Mountain Lodge in Aspen…". Then five alternating feature bands, each with a numbered eyebrow chip, a large headline, a paragraph, three or four checkmark bullets pairing a bold label with one explanatory sentence, a "Book Demo →" button, and an empty image placeholder.

**Pattern observed.** The best copy mechanics anywhere in the competitive set — plain, concrete, hospitality-native, and unafraid to state commercial terms. *"Top spots on Google + Google Hotels, funded by us."* · *"No agency premiums, no surprise invoices."* · *"Brand defense against the OTAs"* · *"Demand you didn't have before"* · *"Direct rate beats the OTAs"* · *"Visible on AI search"*. And the property marquee is a quietly excellent device: customers identified by **property type and place** rather than by logo.

**Principle worth extracting.** Two things. First, the register — second person, hospitality nouns, commercial terms stated plainly, no jargon. This is the voice the redesign inherits. Second, the identification device: for independent properties, "Boutique Inn Outside Philadelphia" does more work than any logo could, because it lets a reader place himself.

**Adaptation.** The copy register carries into every section. The property-descriptor device becomes the caption format on §4's photo tiles ("Brass Lantern Inn · Stowe, VT · 14 rooms") and the mention row beneath the featured quotes.

**Do not copy.**
- The dashboard screenshot in the hero, with "ADR $214 +6%" as its focal detail. It is the SaaS-shell signal the brief prohibits, and it front-loads a metric that means nothing to a reader who has not yet decided this is for him.
- "Your hotel revenue CoPilot" and the all-in-one-system framing. Autumn's page has one hero offering; a platform pitch dilutes it.
- The five-identical-bands rhythm: numbered eyebrow chip → headline → paragraph → checkmark bullet list → "Book Demo →" → empty image placeholder, repeated verbatim. This is the "generic card grid as the default answer to every section" failure in vertical form.
- The checkmark bullet list as the standard evidence device in every band.
- The repeated "Book Demo →" CTA. §6 has one quiet CTA and no flow behind it.
- The three reassurance chips separated by × glyphs, and the two-CTA hero.
- The recruiting-first framing that the brief notes converts poorly.
- Any of the copy verbatim, including the lines praised above — the *register* transfers, the sentences do not, except where the brief supplies copy to be used as-is.

**Design-system implications.**
- The attribution slot model — `name · town · rooms` — is the shared token format for `PhotoProofTile` captions and the `Quote` Mention tier. Property type and place, never a logotype.
- Exactly one CTA instance per page, bound to the single `Action` role token. No repeated per-band CTA.
- No reassurance-chip row and no checkmark-bullet primitive in the system. Benefit claims live in `FeatureItem` and `DisclosureRow`, never in a chip or a tick list.
- Banned-vocabulary linting belongs in the content model, not in review: the list in Appendix B is a build-time constraint on copy.

---

## Appendix B · Competitive set — carried forward, not verified in this pass

*Class: not captured. These three are not on any page of the Paper file and were not audited during this pass. They are recorded so the brief's prohibition list is fully covered, and because the banned-vocabulary rule derives from them. Everything below comes from the research package; treat it as second-hand until someone snapshots the sites.*

| Source | Principle worth extracting | Do not copy |
|---|---|---|
| **Triptease** | Problem-led section order (pain → capability); role-anchored testimonials; case studies identified by property type, place, and one number; a one-line commercial reassurance ("no booking, no fee"); an FAQ that answers unasked objections. Structurally the strongest of the three. | Its vocabulary. Thirty-plus undefined terms — ROAS, metasearch, parity, PMS — would stop Don cold. Its corporate data-platform tone. |
| **Sojern** | Audience segmentation demonstrates the cost of serving too many masters — a useful negative lesson for a page with one reader. | AI-as-identity marketing in its purest form; trademarked-ecosystem language; first-party-data language; "laser-like precision"; explaining nothing about setup, cost, or what "easy" means. |
| **Cendyn** | Proof that hospitality-native warm vocabulary exists in B2B. | Abstraction with no proof — a three-word framework with no named customers, no numbers, and no mechanics on the homepage. Warmth without specificity reads as fluff. |

**Banned vocabulary.** From the brief: ROAS · CTR · metasearch · parity · funnel · first-party data · ecosystem · leverage · seamless. Proposed here as an addition, though not on the brief's list: **data-driven**. Plus the constructions ruled out above: "up to X%" ceiling claims, and any phrasing in which a system rather than a person does the work.

---

## Appendix C · Provenance, corrections, and gaps

### Provenance corrections

Three of the five Mobbin section IDs recorded in the research package resolved cleanly. Two did not, and were re-sourced:

| Reference | ID in research package | ID actually used | Note |
|---|---|---|---|
| Monarch | `f64d7aff-77b4-4951-92df-2c9e4411ca67` | same | Confirmed. |
| Intercom | `f9204160-0727-4c99-9b0d-ab5f3bd3c4ce` | same | Confirmed. |
| Titan | `0d103afa-c85e-4568-a98a-0a1e7cbd5e8f` | same | Confirmed. |
| Superpower | `d4e38958-9daa-49e1-be0c-a810ac3d5868` | `610e64d7-9325-4cb9-a2c2-39cddb85b9f3` | The recorded ID did not surface across repeated searches. The section used matches the described pattern. Confidence: **medium** — it remains possible the original ID is a separate valid capture. |
| Atlas Card | `17ee1097-e47b-49a3-a2c0-231c66d79fe5` | `e8694068-f518-4655-85ac-e6c3c8b62673` | The recorded ID is the space/Earth frame from the same site's entry sequence, not the invite screen the principle refers to. |

**Alternates worth knowing about, surfaced during sourcing and deliberately not used:**

- **Faire — Company values** (`548d5e30-91fa-45f5-8ad2-8d7d6e6ce745`) — warm photography beside a hairline disclosure list on off-white, first row open. The closest surfaced match to Autumn's register, and direct evidence that an austere row list survives sitting next to photography. The strongest candidate to promote alongside or above Titan for §3.
- **Aave — Interview Process** (`6f191b42-2901-48cf-9ed5-b7d1d1d2e152`) — a two-column split with heading and standing intro on the left and a five-row numbered disclosure list on the right, using standalone numerals in their own column rather than an inline "Step 1)" label, and +/− triggers instead of chevrons. Closer to this document's serif-numeral thesis than Titan, and it demonstrates the same first-row-open convention.
- **Dropbox** (`ac95d839-283d-419d-b52e-b989384af714`) — a mission statement in a solid dark panel abutting a photo, then an "Our story" prose block. The same two-register move as Monarch but with an opaque rather than frosted panel — an existing precedent for the `OverlayPanel` the Monarch entry otherwise has to invent.
- **sweetgreen** (`1e44b0a4-1609-4ecc-baf0-7296db75c194`) — a split half-colour-field / half-real-photograph mission band with large serif type on the colour side. Sidesteps the type-over-image contrast problem entirely; worth pulling as a §1 companion.
- **Contra Labs** (`1d3948f0-cc87-460b-b0f4-2da7b58fef9a`) — full-bleed painterly imagery as the warmth carrier, a centred two-line serif display headline, a short sub-line, one dark pill CTA, no urgency, no chrome. A materially better hero analogue than Atlas Card if §1 needs a second structural reference.
- **Apollo — "Ready to partner up?"** (`d1dd71e8-d5d9-467b-b577-cd2efadbdb27`) — the same disclosure list with a CTA anchored in the left column; useful for §6.
- **Intercom — "Customer stories"** (`68e99061-83bb-47a1-aa4d-e5d4f04adf77`) — three equal photo cards with category eyebrows. Cleaner and closer to Autumn's editorial register, and a fallback for §4 if the mosaic proves too dense — but it is a sequence of three, not a wall, so it does not carry the density-at-zero-reading-cost principle.
- **Superpower — "Hear it from our members"** (`1371897f-5f32-4298-bb75-d72f5030cbae`) — the same few-loud-many-quiet proof idea on a **light** ground, in an actual column layout, with timestamped provenance lines on each quote. Structurally closer to Autumn's proof wall than the dark section used above; the dated-provenance device would translate well to dated innkeeper quotes.
- **Superpower — "signals their doctor missed"** (`c0853777-95c6-4302-8d38-789736743c5f`) — carries a disclosure footnote stating that testimonials reflect individual experiences. Worth noting as a device for substantiating Autumn's 10–20% claim honestly.

### What these references do not supply

Recorded so the gaps are visible before design starts, rather than discovered mid-build:

1. **Interaction states are thin.** Monarch contributes zero — its section is entirely static. In Common With contributes exactly one, and it is hover-dependent. Titan is the only reference that shows a real state change (open versus collapsed rows); Intercom shows only a static expansion affordance. Everything else — focus-visible styling, hover on proof tiles, the FAQ accordion's keyboard behaviour, disabled and active button states — is Autumn's to define from scratch.
2. **No reference models a reduced-motion fallback.** The static-first requirement has no precedent here and must be designed before any motion exists.
3. **No reference models responsive behaviour.** Every capture is desktop. The `overlay | stacked` panel state, the proof-grid column collapse, the storyboard-frame stacking, and the 44px tap-target floor are all decisions with no evidence behind them.
4. **No reference handles a warm low-contrast palette.** Every contrast failure catalogued above happened on white or near-black grounds. Cream is harder, not easier, and every text pairing needs checking rather than assuming.
5. **No reference is a hospitality product.** All seven come from finance, health, commerce, support, and furniture. The structures transfer; none of the subject-matter instincts do.
6. **`MessageProofTile` has no precedent at all.** The brief requires an iMessage-style thank-you cell and no reference surfaced one. Its module footprint, states, and accessibility treatment are specified in entry 4 from first principles.

### Method note

The two live-site references were read directly from the Paper Snapshots on the References page, along with the five plain screenshots beside them — the two In Common With state captures and the three Shopify Editions chapter openers. Reading those chapter screenshots mattered: the Shopify snapshot failed to capture the chapter background imagery and renders those grounds as flat near-black, so the snapshot alone would have produced an entry describing a theme the reference does not have.

The five Mobbin references were sourced and analysed separately, then each was independently re-verified against the actual capture by a second agent instructed to refute rather than confirm. That verification pass changed real things: it corrected a misquoted testimonial whose numbers had been invented, caught a description that had merged two different sections of the same site, corrected the Superpower section ID and confirmed the re-sourced Atlas one (identifying the research package's `17ee1097` as the Earth/starfield sibling frame rather than the invite screen), and downgraded one "hero" principle that would have been actively harmful applied to §1.

The document was then audited under four independent lenses — evidence, copying risk, completeness, and internal coherence — and revised. Where confidence is less than high, this document says so.
