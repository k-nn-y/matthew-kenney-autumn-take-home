# ANIMATION_SPEC.md

Purposeful, calm, and information-supporting
Respect prefers-reduced-motion
No decorative animation without a user-comprehension purpose

The binding constraint is `docs/PRODUCT.md`: *"At most one or two motion elements, each of which must explain rather than decorate."* This spec reads that as **one narrative motion moment** plus **interface feedback**, which is state change rather than animation. The narrative moment is §02, and it is spent. Nothing else on this site gets one.

## The one narrative motion moment

§02 · Guest journey rail: on first entry into viewport (once, never looping), 520ms total as four 220ms steps at 100ms stagger, cubic-bezier(0.2, 0, 0, 1), so the four timestamps read as elapsed time rather than as a list — the section's entire argument is that five minutes passed between 9.14 PM and 9.19 PM

## Interface feedback

These are state transitions, not animation. Each one answers "did that work?" or "what changed?" and none exists without a control behind it.

Primary button / hover: pointer enter, 120ms, ease-out, fill lifts to #33322E and the arrow steps 2px right to signal direction of travel
Primary button / active: pointer down, 80ms, ease-out, confirms the press landed before the mail client takes over the screen
Secondary button / hover: pointer enter, 120ms, ease-out, border and fill step one value, because the border is the only thing defining this control on a photograph
Focus ring / focus-visible: keyboard focus, 0ms — appears instantly, no transition, a focus indicator that fades in is a focus indicator you can outrun
Disclosure row / open, close: click or Enter, 200ms height and 160ms opacity on the answer, ease-out opening and ease-in closing, so the reader sees which row grew rather than the page jumping under them
Disclosure chevron / open, close: same trigger, 200ms, ease-out, rotates 180deg because up means open and the mark must agree with the panel
Mobile reply bar / enter, exit: scroll past the hero actions, 240ms transform and opacity, ease-out, slides up from the bottom edge once the hero CTAs leave the screen and retires at the footer, so the address is reachable across the 8,745px stretch that currently has nothing to press
Hero photograph / load: image decode complete, 300ms opacity from the ground-warm plate, linear, the plate has already reserved the exact aspect ratio so nothing below it moves
Link and nav item / hover: pointer enter, 100ms, ease-out, colour steps from body to ink

## Patterns that must not be used

- **Scroll-jacking of any kind.** Named in `PRODUCT.md`. The reader controls the scroll.
- **A scroll-scrubbed video hero.** `docs/HERO_MOTION_PROMPTS.md` proposes one. It decorates rather than explains, it would consume the single motion moment that §02 has the better claim on, and it costs real page weight on a phone. If it is ever built, §02's rail must be removed — not both. Treat that document as an unexercised option, not a plan.
- **Parallax**, on the hero or anywhere.
- **Looping or ambient motion.** Nothing on this page moves twice.
- **Entrance animations on section content.** Fade-up-on-scroll for headlines, cards, or list items is the most common decorative reflex in this category and it delays reading for a reader who decides in ten seconds.
- **Number count-ups.** `13%`, `+16%`, `+11%`, `$486` and the pricing table all animate to nothing. A number that counts up is unreadable while it does so, and these numbers are the argument.
- **Staggered card grids.** The proof wall appears at once.
- **Skeleton screens, shimmer, spinners.** The loading state is a reserved plate and text that is already readable.
- **Bounce, elastic, spring, or overshoot easing.** Nothing here is playful and nothing should overshoot.
- **Hover effects that move layout** — scale, translate, or size changes on cards or rows. Colour and border only.
- **Motion that carries meaning on its own.** Direction of money is carried by ink strength and words; it is never carried by movement.
- **Animated logo or wordmark.** It is an asset.
- **Anything longer than 300ms**, except the §02 rail, which is 520ms because it is depicting elapsed time.
- **Transitions on `width`, `height`, `top` or `left`.** `transform` and `opacity` only, with the single exception of the disclosure row's height, which has no honest alternative.

## Fallback behaviour

**`prefers-reduced-motion: reduce`** — every entry above is honoured as follows. This is not a global `animation: none` kill: state change and hierarchy must survive, or the interface stops answering "did that work?"

- §02 rail: renders in its final state immediately. All four steps and timestamps are present and legible. No stagger, no draw.
- Disclosure rows: open and close instantly. The chevron flips instantly. Height still changes — the panel must still open.
- Buttons, links, focus ring: colour and border changes still apply, applied instantly rather than over 120ms. Feedback is preserved; only the interpolation is removed.
- Mobile reply bar: appears and disappears at the same scroll positions, with no slide. It must not become permanently hidden.
- Hero photograph: appears at full opacity on decode, no fade.
- **Nothing becomes unreachable, invisible, or unlabelled under reduced motion.** Every control that exists with motion exists without it.

**No JavaScript** — all state above is CSS-reachable except the mobile reply bar, which is progressive enhancement. Without JS the bar simply never appears; the footer address remains the exit and the page is fully readable and fully actionable.

**Slow or failed image load** — the `ground-warm` plate holds the aspect ratio indefinitely. Text is readable before any photograph exists. A permanent failure leaves the plate in place; it never leaves a collapsed box or a broken-image icon.

**Reduced data / save-data** — if the scroll-scrubbed hero is ever built, it must not load at all under `Save-Data: on`; the poster frame is the whole experience.
