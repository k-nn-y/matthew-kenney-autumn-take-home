"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Photo } from "@/components/Photo";
import { SectionHeader } from "@/components/SectionHeader";
import styles from "./GuestJourney.module.css";

/**
 * §02 · Guest journey. One booking walked end to end: four timestamped steps
 * on a slate rail, and the arithmetic of the booking in a white card beside
 * them. This is the page's ONE motion moment (docs/ANIMATION_SPEC.md): on
 * first viewport entry, once, the four steps arrive 100ms apart so the
 * timestamps read as elapsed time rather than as a list. It never repeats.
 */

type Step = {
  /** Timestamp and place, label tier. */
  time: string;
  line: ReactNode;
  /** Step 1 only: the query she typed, set in slate-deep. */
  query?: string;
  /** Steps 2–4: the quiet caption underneath. */
  note?: string;
  /** The invoice step closes the sequence, so its marker is ink, not slate. */
  terminal?: boolean;
};

const STEPS: Step[] = [
  {
    time: "9.14 PM · HARTFORD, CT",
    line: "A woman opens Google and types a room she can already picture.",
    query: "“inns near stowe vt with a fireplace”",
  },
  {
    time: "9.14 PM · THE SAME SECOND",
    // The mobile board drops "nightly" to hold the line count at four.
    line: (
      <>
        The Brass Lantern is the first inn she sees — on Search, on the map, and
        in Google Hotels with your own{" "}
        <span className={styles.wide}>nightly </span>rate beside it.
      </>
    ),
    note: "We wrote the ad, set the bid and keep the listing accurate. AI is how a team this small can do that properly for a fourteen-room inn instead of only for a hundred-room hotel.",
  },
  {
    time: "9.19 PM · FIVE MINUTES LATER",
    line: "She books two nights on your own website. Not on a travel agent's.",
    note: "Her name, her email and her card go to you. You will meet her at the door on Friday.",
  },
  {
    time: "END OF THE MONTH · YOUR INVOICE",
    line: "One line, for the bookings we drove. The ad spend is not on it.",
    note: "If a month goes by and we drove nothing, no invoice arrives at all.",
    terminal: true,
  },
];

/* The scrub runway. The rail is shorter than a viewport, so anchoring it to a
   single line would finish the fill while the section was still arriving.
   Instead it starts when the rail's top passes 85% of the screen and completes
   when its bottom reaches 30% — about a viewport and a half of scroll, which
   is what makes the four timestamps read as elapsed time. */
const START = 0.85;
const END = 0.3;

export function GuestJourney() {
  const railRef = useRef<HTMLOListElement>(null);

  /**
   * The rail is scrubbed, not played: its fill is a pure function of scroll
   * position, so it draws down as the reader descends and undraws as they go
   * back up. Nothing is one-shot, nothing loops, and nothing moves unless the
   * reader moves it — the same posture as the hero.
   *
   * The resting state, which is what the server renders and what a reader
   * without JavaScript gets, is the finished rail.
   */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const markers = [...rail.querySelectorAll<HTMLElement>("[data-marker]")];
    if (markers.length < 2) return;

    rail.dataset.scrub = "on";

    let frame = 0;
    const draw = () => {
      frame = 0;
      const railBox = rail.getBoundingClientRect();
      const first = markers[0].getBoundingClientRect();
      const last = markers[markers.length - 1].getBoundingClientRect();

      // Track geometry, measured rather than assumed: the steps are different
      // heights and the lane moves at the breakpoint.
      const top = first.top + first.height / 2 - railBox.top;
      const height = last.top + last.height / 2 - (first.top + first.height / 2);
      if (height <= 0) return;

      rail.style.setProperty("--gj-track-top", `${top}px`);
      rail.style.setProperty("--gj-track-h", `${height}px`);

      const railTop = first.top + first.height / 2;
      const start = window.innerHeight * START;
      const runway = (start - window.innerHeight * END) + height;
      const progress = Math.min(1, Math.max(0, (start - railTop) / runway));
      rail.style.setProperty("--gj-p", `${progress}`);

      // A step is reached exactly where the rail has got to, never on a
      // separate line of its own — otherwise a dot arrives with no line
      // behind it. The flag goes on the step so its timestamp can arrive with
      // its bullet, which is what makes the sequence read in order.
      const fillLine = railTop + progress * height;
      for (const marker of markers) {
        const box = marker.getBoundingClientRect();
        const reached = box.top + box.height / 2 <= fillLine + 0.5;
        const step = marker.parentElement;
        if (step) step.dataset.reached = reached ? "true" : "false";
      }
    };

    /* Measured synchronously, not inside a frame callback. An unreached step
       is invisible, so if frames ever stopped arriving the rail would strand
       whatever it had not drawn yet. A rect read per scroll event is cheaper
       than that risk. */
    let last = 0;
    const schedule = () => {
      const now = Date.now();
      if (now - last < 16) return;
      last = now;
      draw();
    };

    draw();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      delete rail.dataset.scrub;
      for (const marker of markers) delete marker.parentElement?.dataset.reached;
    };
  }, []);

  return (
    <section
      className={`au-ground-alt au-section ${styles.section}`}
      aria-labelledby="guest-journey-title"
    >
      <div className="au-shell">
        <div className={styles.header}>
          <SectionHeader
            id="guest-journey-title"
            label="WHAT WE ACTUALLY DO"
            headline={
              <>
                One guest.
                <br />
                One evening in November.
              </>
            }
            lead={
              <>
                This is the whole of what we do, from her first search to the
                money landing in your account. Nothing in it happens on your
                desk
                <span className={styles.wide}>
                  , and nobody asks you to approve anything
                </span>
                .
              </>
            }
          />
        </div>

        <div className={styles.body}>
          <ol
            ref={railRef}
            role="list"
            className={styles.steps}
          >
            {STEPS.map((step) => (
              <li key={step.time} className={styles.step}>
                <span
                  aria-hidden="true"
                  data-marker=""
                  className={`${styles.marker} ${
                    step.terminal ? styles.markerTerminal : ""
                  }`}
                />
                <p className="au-label">{step.time}</p>
                <p className={styles.line}>{step.line}</p>
                {step.query ? (
                  <p className={styles.query}>{step.query}</p>
                ) : null}
                {step.note ? (
                  <p className={`au-caption ${styles.note}`}>{step.note}</p>
                ) : null}
              </li>
            ))}
          </ol>

          <div className={styles.card}>
            <Photo
              src="/images/breakfast-tray.jpg"
              alt="Breakfast tray of pastries, coffee and juice on the bed of a guest room at The Brass Lantern"
              width={1800}
              height={1200}
              objectPosition="50% 58%"
              sizes="(min-width: 900px) 612px, 100vw"
              className={styles.cardPhoto}
            />

            <div className={styles.cardBody}>
              <p className={`au-label ${styles.cardEyebrow}`}>
                THE BOOKING SHE MADE
              </p>
              <h3 className={styles.cardTitle}>Two nights in November.</h3>

              <dl>
                <div className={styles.row}>
                  <dt className={styles.rowLabel}>Stays with you</dt>
                  <dd className={`au-num ${styles.figure}`}>$423</dd>
                </div>
                <div className={styles.row}>
                  <dt className={styles.rowLabel}>
                    {"Autumn's "}
                    <span className="au-num">13%</span>
                  </dt>
                  <dd className={`au-num ${styles.figure}`}>$63</dd>
                </div>
                <div className={`${styles.row} ${styles.rowTotal}`}>
                  <dt className="au-label">SHE PAID</dt>
                  <dd className={`au-num ${styles.total}`}>$486</dd>
                </div>
              </dl>
            </div>

            {/* One sentence, so it is one paragraph: the figure opens it. */}
            <p className={styles.adStrip}>
              <span className={`au-num ${styles.adFigure}`}>$31</span>
              <span className={`au-caption ${styles.adText}`}>
                is what her click cost on Google. It is not in the arithmetic
                above and it is not on your invoice, because we paid it.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
