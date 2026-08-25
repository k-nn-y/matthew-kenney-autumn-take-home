"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Photo } from "@/components/Photo";
import { SectionHeader } from "@/components/SectionHeader";

import styles from "./Proof.module.css";

/* Copy is content: every string below is transcribed character-for-character
   from the Paper board (curly quotes, en dash in 10–20%, the · separator).
   Held in constants so JSX escaping can never alter a glyph. */
const DECK =
  "Every number below carries what went into it — the property, the rooms, the months it covers. Including the winter that came in at the bottom of our range.";

const RABBIT_HILL_PROVENANCE =
  "Rabbit Hill Inn · Lower Waterford, VT · 14 rooms. October to March, against the same six months a year earlier.";

const DEERFIELD_PROVENANCE =
  "Deerfield House · Deerfield, MA · 9 rooms. Their first winter with us. Two of the three months were flat and March carried the year. We say 10–20% because both ends of it are real, and this is the end nobody puts on a website.";

const QUOTE_ELLEN =
  "“We were paying an agency $1,400 a month and I could never tell you what it bought. Now a bill only turns up when somebody has actually slept here.”";

const QUOTE_TOM =
  "“I did not know what Google Ads were and I still don't, particularly. What I know is that November was not empty this year, and nobody asked me to learn anything.”";

const GUEST_NOTE =
  "Room was perfect and your directions were spot on. We found you on Google — you were the first thing that came up. Thank you.";

const GUEST_ATTRIBUTION = "Priya R., guest · forwarded to us by the innkeeper";

const RESERVED_TEXT =
  "We do not publish occupancy, revenue or guest data. It belongs to the innkeeper, not to us.";

const RESERVED_FOOTNOTE =
  "This space stays empty on purpose. A wall with no gaps in it is a wall that is lying to you.";

const EXPANDER_LABEL = "Two more results, and a guest's note";

const PHOTO_SIZES =
  "(min-width: 1440px) 420px, (min-width: 900px) 32vw, calc(100vw - 48px)";

const EXTRA_IDS = "proof-quote-ellen proof-guest-note";

/* Hydration probe. Returns false on the server and through hydration, true
   once this tree is live in the browser — so the markup that ships without
   JavaScript has no expander and no collapsed cards. */
const subscribeToNothing = () => () => {};
const isClient = () => true;
const isServer = () => false;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      aria-hidden="true"
      focusable="false"
      className={`${styles.chevron}${open ? ` ${styles.chevronOpen}` : ""}`}
    >
      <path
        d="M5 8l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * §04 — the proof wall. Six cards in four species: two photo + metric cards,
 * two quotes, a guest's note, and the reserved "NOT REPORTED" card, which is
 * the only dashed border on the page.
 *
 * The wall appears at once — no stagger, no count-up, no entrance animation.
 * The one piece of state is the mobile expander, and it is progressive: the
 * server renders all six cards visible with no control, and the two extra
 * cards only collapse once the button has mounted. Without JavaScript the
 * whole wall is readable. At >=900px the expander is not laid out at all and
 * every card is visible regardless of its state.
 */
export function Proof() {
  const mounted = useSyncExternalStore(subscribeToNothing, isClient, isServer);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState<false | "run" | "shown">(false);
  const wallRef = useRef<HTMLUListElement>(null);

  const collapsed = mounted && !open;

  // The wall arrives on first entry: each card rises a little and settles, in
  // reading order. Once, never again — a card that re-animates every time it
  // passes the viewport is a card nobody can finish reading.
  //
  // Measured on scroll, with a backstop, for the same reason the Reveal
  // primitive is: the armed state is invisible, so every path out of it has to
  // be guaranteed. Six cards of proof that never appear would be the single
  // most damaging bug on this page.
  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    // Reduced motion needs no branch here: the stylesheet already renders
    // every card at full opacity whatever data-motion says.

    let last = 0;
    const measure = () => {
      const now = Date.now();
      if (now - last < 16) return;
      last = now;
      const box = wall.getBoundingClientRect();
      if (box.top > window.innerHeight - 80 || box.bottom < 0) return;
      finish(true);
    };

    const finish = (animate: boolean) => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      clearTimeout(safety);
      setRevealed(animate ? "run" : "shown");
    };

    const safety = setTimeout(() => finish(false), 3000);

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      clearTimeout(safety);
    };
  }, []);

  return (
    <section
      id="what-it-did"
      aria-labelledby="what-it-did-title"
      className={`au-section au-ground-alt ${styles.section}`}
    >
      <div className="au-shell">
        <div className={styles.head}>
          <SectionHeader
            id="what-it-did-title"
            label="WHAT IT DID"
            headline={
              <>
                For inns
                <br />
                about your size.
              </>
            }
            lead={DECK}
          />
        </div>

        <ul
          ref={wallRef}
          role="list"
          className={styles.wall}
          data-collapsed={collapsed ? "true" : undefined}
          /* Server renders no attribute at all, so the wall ships visible and
             a reader without JavaScript never sees a hidden card. */
          data-motion={mounted ? revealed || "armed" : undefined}
        >
          {/* Photo + metric — Rabbit Hill Inn */}
          <li className={`${styles.card} ${styles.photoCard} ${styles.cardA}`}>
            <Photo
              src="/images/inn-exterior-porch.jpg"
              alt="Rabbit Hill Inn: a white clapboard guest house with a second-floor porch, seen across its flower beds."
              width={1800}
              height={1200}
              objectPosition="50% 55%"
              sizes={PHOTO_SIZES}
              className={styles.photo}
            />
            <div className={styles.photoBody}>
              <p className={`au-num ${styles.figure}`}>+16%</p>
              <p className={styles.metricLabel}>more direct bookings</p>
              <div className={`${styles.provenance} ${styles.provenanceWide}`}>
                <p className="au-label">WHAT WENT IN</p>
                <p className={`au-caption ${styles.provText}`}>
                  {RABBIT_HILL_PROVENANCE}
                </p>
              </div>
            </div>
          </li>

          {/* Quote — Tom Ferrand */}
          <li
            className={`${styles.card} ${styles.quoteCard} ${styles.cardTom}`}
          >
            <figure className={styles.quoteFigure}>
              <blockquote className={styles.quoteText}>
                <p>{QUOTE_TOM}</p>
              </blockquote>
              <figcaption className={styles.attrib}>
                <span className={styles.attribName}>Tom Ferrand</span>
                <span className="au-caption">
                  Deerfield House · Deerfield, MA · 9 rooms
                </span>
              </figcaption>
            </figure>
          </li>

          {/* Photo + metric — Deerfield House, the bottom of the range */}
          <li className={`${styles.card} ${styles.photoCard} ${styles.cardB}`}>
            <Photo
              src="/images/mug-wooden-table.jpg"
              alt="A guest room at Deerfield House, with a breakfast tray set on the made bed."
              width={1800}
              height={2700}
              objectPosition="50% 84%"
              sizes={PHOTO_SIZES}
              className={styles.photo}
            />
            <div className={styles.photoBody}>
              <p className={`au-num ${styles.figure}`}>+11%</p>
              <p className={styles.metricLabel}>more direct bookings</p>
              <div className={styles.provenance}>
                <p className="au-label">
                  WHAT WENT IN · THE BOTTOM OF OUR RANGE
                </p>
                <p className={`au-caption ${styles.provText}`}>
                  {DEERFIELD_PROVENANCE}
                </p>
              </div>
            </div>
          </li>

          {/* Reserved — the only dashed border on the page */}
          <li
            className={`${styles.card} ${styles.reservedCard} ${styles.cardReserved}`}
          >
            <div className={styles.reservedInner}>
              <div className={styles.reservedTop}>
                <span className={styles.mark} aria-hidden="true">
                  <span className={styles.markDash} />
                </span>
                <p className="au-label">NOT REPORTED</p>
                <p className={styles.reservedText}>{RESERVED_TEXT}</p>
              </div>
              <div className={styles.reservedFoot}>
                <p className="au-caption">{RESERVED_FOOTNOTE}</p>
              </div>
            </div>
          </li>

          {/* Mobile-only expander. Rendered only once mounted, so the
              no-JavaScript page ships every card visible and uncontrolled. */}
          {mounted ? (
            <li className={styles.expanderItem}>
              <button
                type="button"
                className={styles.expanderBtn}
                aria-expanded={open}
                aria-controls={EXTRA_IDS}
                onClick={() => setOpen((wasOpen) => !wasOpen)}
              >
                <span className={`au-caption ${styles.expanderLabel}`}>
                  {EXPANDER_LABEL}
                </span>
                <Chevron open={open} />
              </button>
            </li>
          ) : null}

          {/* Quote — Ellen Marsh */}
          <li
            id="proof-quote-ellen"
            className={`${styles.card} ${styles.quoteCard} ${styles.cardEllen} ${styles.extra}`}
          >
            <figure className={styles.quoteFigure}>
              <blockquote className={styles.quoteText}>
                <p>{QUOTE_ELLEN}</p>
              </blockquote>
              <figcaption className={styles.attrib}>
                <span className={styles.attribName}>Ellen Marsh</span>
                <span className="au-caption">
                  Rabbit Hill Inn · Lower Waterford, VT · 14 rooms
                </span>
              </figcaption>
            </figure>
          </li>

          {/* A guest's note */}
          <li
            id="proof-guest-note"
            className={`${styles.card} ${styles.noteCard} ${styles.cardNote} ${styles.extra}`}
          >
            <figure className={styles.noteFigure}>
              <div className={styles.noteTop}>
                <p className="au-label">A NOTE FROM A GUEST · SAT 09.12</p>
                <blockquote className={styles.noteText}>
                  <p>{GUEST_NOTE}</p>
                </blockquote>
              </div>
              <figcaption className={styles.noteFoot}>
                <span className="au-caption">{GUEST_ATTRIBUTION}</span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
