---
name: Autumn homepage
description: Autumn's own identity, executed with more conviction than the live site does.
colors:
  ground: "#FFFFFF"
  ground-alt: "#F5F5F5"
  ground-warm: "#F2F2F0"
  ink: "#111112"
  sash-black: "#1C1B19"
  body: "#4A4945"
  quiet: "#6E6C66"
  on-ink: "#FBFBFA"
  on-ink-quiet: "#A8A69E"
  wet-slate: "#6F7E92"
  slate-deep: "#4D5B6E"
  slate-tint: "#ECEFF3"
  slate-line: "#D6DCE4"
  rule: "rgba(28,27,25,0.10)"
  rule-strong: "rgba(28,27,25,0.16)"
  rule-on-ink: "rgba(251,251,250,0.16)"
typography:
  hero:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: "61px"
    letterSpacing: "-0.030em"
  section:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "60px"
    fontWeight: 500
    lineHeight: "58px"
    letterSpacing: "-0.030em"
  sub:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "36px"
    letterSpacing: "-0.024em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: "28px"
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "25px"
    letterSpacing: "-0.016em"
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 500
    lineHeight: "22px"
    letterSpacing: "-0.010em"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "17px"
    letterSpacing: "0.18em"
rounded:
  btn: "6px"
  card: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section-desktop: "120px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.sash-black}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.btn}"
    padding: "14px 22px 14px 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "#33322E"
  button-secondary:
    backgroundColor: "{colors.slate-tint}"
    textColor: "{colors.slate-deep}"
    rounded: "{rounded.btn}"
    padding: "14px 22px"
    height: "50px"
  button-secondary-hover:
    backgroundColor: "#E1E6ED"
    textColor: "#3E4A5B"
  card:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.card}"
    padding: "26px"
  disclosure-row:
    textColor: "{colors.ink}"
    padding: "20px 0"
  disclosure-row-hover:
    backgroundColor: "{colors.ground-warm}"
    padding: "20px 16px"
---

## Overview

The scene is a New England village at five o'clock in October: white painted clapboard, a cold slate roof, low sun. Every value in this system was measured off Autumn's live site at findautumn.com — the leaf-and-lowercase wordmark, Inter 500 tracked negative, Geist letterspaced caps for labels, the white-and-light-gray banding, the 6px button radius. Three values are corrected for legibility and all three are marked as corrections; two of Autumn's own devices — the rule mark and the section numbering on the eyebrow — were removed outright as ornament.

The system's one real conviction is negative: **no hue is invented.** Autumn's palette is a warm-neutral primary family and a cool-slate secondary family. All chroma on the page comes from photographs. This is not restraint for its own sake — it is what lets a photograph of a lakeshore at golden hour be the single loudest thing on the page without competing with anything.

The page is Persuade. Its reader is an owner-operator who arrived from a cold email, decides in about ten seconds, and is on a phone roughly half the time.

## Colors

**Grounds.** `ground` `#FFFFFF` and `ground-alt` `#F5F5F5` alternate section by section, separated by a hairline `rule`. `ground-warm` `#F2F2F0` is a third, quieter fill used only for sub-panels inside a card (the ad-cost strip, a hovered disclosure row).

**Ink.** `ink` `#111112` for display and headline. `sash-black` `#1C1B19` for the logo fill, button fills and card sub-heads — it is Autumn's own wordmark value. `body` `#4A4945` for running text, `quiet` `#6E6C66` for captions, eyebrows and provenance.

**Corrections — three, all deliberate and all marked.** Autumn's live site sets body text as `#111112` at 60% alpha (composites to `#707071`, 4.95:1) and eyebrows in `#95938C` (2.82:1 on the gray band — a WCAG failure). Because arm's-length phone legibility is a binding constraint on this page, body is a solid `#4A4945` (9.0:1) and the eyebrow is `#6E6C66` (5.25:1 on white, 4.82:1 on ground-alt, **4.68:1 on ground-warm** — the tightest place it is used, and still passing). Two steps darker on the same warm-neutral axis; the register is unchanged. The third correction is typographic and lives in the next section.

**Slate.** `wet-slate` `#6F7E92` is Autumn's secondary. It carries **no meaning** — it is used for non-text marks only (the journey rail and its dots, the bullet rings) and for the focus ring. `slate-deep` `#4D5B6E` on `slate-tint` `#ECEFF3` is the secondary button; `slate-deep` also sets the one quoted search query and the "Your part:" lines.

**The inverted band.** Exactly one band on the page is printed on ink: the price. `on-ink` `#FBFBFA` (18.2:1) and `on-ink-quiet` `#A8A69E` (7.7:1). Direction of money is carried by **ink strength plus words** — full strength for what stays with the innkeeper, recessive for what leaves to a travel agent — never by hue. There is no hue available to carry it, which is the point.

## Typography

Two families, both Autumn's: **Inter** at weight 500 with `font-variation-settings: "opsz" 32` and `font-feature-settings: "cv11", "ss01"` for everything readable, and **Geist** at 400 for labels.

**Tracking is a ramp, not a constant.** findautumn.com sets −0.070em — but at **82px**. Tight tracking does not scale down: the smaller the type, the looser it needs to be, which is exactly what Inter's `opsz` axis exists to do. Applying their em value at 40–64px closed the letters up and was a real error, corrected here.

The ramp: **−0.030em** at 56–64 · **−0.028em** at 44–52 · **−0.026em** at 36–40 · **−0.025em** at 34 · **−0.024em** at 32 · **−0.023em** at 30 · **−0.022em** at 28 · **−0.021em** at 26 · **−0.019em** at 22 · **−0.018em** at 20 and below — **including 19**. Only the very top of the scale (88px+) would return to their −0.070em. Line-height stays at 0.96× for display.

**The ramp must be monotonic, and it was not.** The frontmatter set lead 19px at −0.021em while this prose said −0.018em at "20 and below," so 19px shipped *tighter* than 20px across 109 nodes on 10 of 12 surfaces — the exact inversion this section exists to prevent. Lead is now −0.018em everywhere. A tracking value that is tighter at a smaller size is a bug, not a choice; check the neighbours before setting one.

Scale: hero 64 · section 60 · sub 32 · lead 19 · body 16 · caption 14.5 · label 12.

**Seven tiers are declared; twenty-three sizes ship.** The declared tiers are the spine, not the whole inventory — display type steps per composition (120, 80, 64, 60, 56, 52, 44, 40, 36, 34) and there are two working sizes the tier list omits: **17px** for an opened disclosure row and reply-block copy, and **13px** for the separator in the surfaces strip. Everything else that appears off-list is a display step. Before adding a twenty-fourth, check whether an existing step will do.

**The label tier is one value: +0.18em.** It had fragmented into 0.14em, 0.16em and 0.18em across 174 nodes, with only 67 matching. There is no context in which the label tier takes a different tracking.

**Correction three.** Autumn sets eyebrows at 10.5–11px. This page sets the label tier at **12px**, because 11px uppercase at +0.18em does not survive the arm's-length phone test. Same face, same tracking, same register — one step up.

Numerals in the arithmetic use `font-variant-numeric: tabular-nums`.

**Text size is a floor.** Body, caption and label sizes are byte-identical on mobile and desktop — 16, 14.5 and 12px. Lead copy and step titles hold at 19 and 22px on both. Button labels are the one deliberate exception and they go **up** on mobile (15 → 16px), which a floor permits. Only display type scales down, because 64px cannot fit a 342px column. Where mobile cannot hold the content at full size, it publishes fewer items and names what it is holding back; it does not shrink the type.

## Layout

Desktop 1440 with 64px gutters (1312 content). Mobile 390 with 24px gutters (342 content).

Sections alternate ground and ground-alt and open with the same three-part header: a bare letterspaced caps label, then a two-line display headline on the left, then a lead paragraph on the right. The label carries no rule mark and no section number — both were removed as ornament. Two sections (§05 and §07) invert to a left-column header with a right-hand row stack, so the page does not read as five identical headers.

Photographs are matted into 20px-radius containers, except the hero image, which rounds only its left corners and bleeds off the right edge of the artboard — Autumn's own hero composition, with a photograph where their product card sits.

Section padding: 120/128px desktop, 64/68px mobile.

## Elevation & Depth

Almost none. Cards are white on gray with a 1px `rule` border and no shadow. The live site uses soft shadows on its floating product cards; this page has no product UI to float, so depth is carried by ground change and hairlines. The one exception is the focus ring, which uses a 2px inset ground offset to separate the ring from the button fill.

## Shapes

`btn` 6px, `card` 20px, `pill` 999px. The 6px button radius is measured off findautumn.com and is the single most recognizable non-type brand cue after the logo — resist rounding it to a pill.

Hairlines are 1px `rule`, or `rule-on-ink` on the inverted band; a section-opening rule above a step column is 1.5px `sash-black`; a totals rule is 1px `rule-strong`.

The reserved "not reported" state is the only dashed border on the page.

## Components

**Logo.** The real Autumn mark: a two-path SVG, `viewBox="0 0 106 16"`, leaf glyph plus lowercase wordmark, filled `sash-black`. Rendered at 113×17 in the desktop nav, 100×15 on mobile, 88×13 in the footer bar. It is an asset, not a typeface choice; never reset the wordmark in live text.

**Section label.** Geist 12px/+0.18em uppercase in `quiet`, on its own. No rule mark, no number, no chip — the letterspacing and the colour are the whole device.

**Buttons.** Primary and secondary as in the frontmatter. Arrow icon is a 15–16px SVG, `M3 8h10M9 3l5 5-5 5`, stroke 1.6, round caps. On hover the primary lifts to `#33322E` and the arrow steps 2px right. Focus-visible is a 2px `wet-slate` ring with a 2px ground offset — slate is used for nothing semantic, so a focus ring cannot be confused with a status.

**Disclosure row.** One primitive, one title treatment: Inter 500 19px in `ink`, chevron right, 20px vertical padding, hairline top. Down means open. Hovered rows take `ground-warm` and 16px horizontal padding; open rows take a `rule-strong` top and reveal 17px body. Minimum target 44px; measured rows run **44–97px** across 55 bordered rows, the tallest being the mobile "Do I need to understand Google Ads?" row.

**Bullet row.** A 20px slate ring with a 6px slate core in a fixed-width slot, 18px gap, bold label over muted description.

**Reserved state.** Dashed `rule-strong` border, a 34px square mark containing a 12px dash, `NOT REPORTED` label, and a line stating why the space is empty. Specified before any filled state.

## Do's and Don'ts

**Do** measure new values off findautumn.com before inventing them.
**Do** let photographs carry every bit of color on the page.
**Do** state direction of money in words and position; ink strength is a reinforcement, never the carrier.
**Do** keep exactly one inverted band.
**Do** hold body, caption and label sizes identical across breakpoints.

**Don't** introduce a hue. Not an accent, not a status color, not a hover tint.
**Don't** reset the wordmark as live text or change its case.
**Don't** round buttons to pills or square them to zero.
**Don't** use `wet-slate` for text at any size — it is 4.1:1 on white and 3.8:1 on the gray band, and is reserved for non-text marks. `slate-deep` `#4D5B6E` (**6.91:1** on white, 6.34:1 on ground-alt, 5.99:1 on slate-tint — measured, not estimated) is the text slate.
**Don't** reintroduce rule marks, numbered eyebrows, or dashes before labels — they were removed deliberately.
**Don't** change the hero photograph, its `object-position`, or any scrim stop without re-measuring. The v3 hero eyebrow sits at **exactly 4.50:1** against the brightest sky pixel behind it — it passes with zero margin, so any change to that image or gradient is an accessibility change until proven otherwise.
**Don't** let the nav claim a page it is not on. The current-page treatment is `ink` against `body` siblings; every other surface must render all three links in `body`.
**Don't** add a second motion moment. §02 only, on entry, once, never looping.
**Don't** build a dashboard, a KPI tile, a filter, or admin chrome — `docs/PRODUCT.md` bans them and the reader is not an operator of this page.
