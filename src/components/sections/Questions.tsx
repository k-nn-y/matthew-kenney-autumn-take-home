"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import styles from "./Questions.module.css";

/**
 * §07 Questions — the second inverted header (§05 is the other one): the
 * opener sits in a left column and the five disclosure rows stack on the
 * right. Rows are independent; opening one never closes another.
 *
 * Progressive enhancement: the resting CSS renders every answer open, and the
 * server renders `aria-expanded="true"` to match, so a reader without
 * JavaScript gets the whole FAQ as plain prose. The mounted control takes over
 * and collapses down to the board's resting state (one row open). Transitions
 * only switch on a frame after that first collapse, so the takeover is
 * instant rather than an animation nobody asked for.
 */

const OPEN_ON_MOUNT = "risk";

/* "Have we hydrated yet?" with no state and no effect: the server snapshot is
   false, the client snapshot is true, and React reconciles the two in the
   commit right after hydration — before the first paint, so the takeover
   collapse never flashes. The store never changes, so subscribe is a no-op. */
const neverChanges = () => () => {};
const hydratedSnapshot = () => true;
const serverSnapshot = () => false;

const FAQS: { id: string; question: string; answer: React.ReactNode }[] = [
  {
    id: "expedia",
    question: "Is this a booking site like Expedia?",
    answer:
      "No. There is nothing here for a guest to browse and no listing for you to keep up to date. We put your rooms in front of people who are already searching for a place like yours, and they book on your own site at your own rates. The guest is yours, the same as if they had walked in the door.",
  },
  {
    id: "google-ads",
    question: "Do I need to understand Google Ads?",
    answer:
      "No. That is the part we take off your desk. We write the ads, run them, and pay for them out of our own pocket, so there is nothing for you to set a budget for or check on. If you ever want to know what sits behind a number, ask and we will walk you through it.",
  },
  {
    id: "risk",
    question: "What happens if it doesn't work?",
    // Verbatim from the board, including the straight apostrophes.
    answer: (
      <>
        You pay nothing. The ad money was ours, the work was ours, and{" "}
        <span className="au-num">13%</span> of nothing is nothing. That is the
        whole of the risk you are taking, and it is why we are careful about
        which inns we take on.
      </>
    ),
  },
  {
    id: "who",
    question: "Who actually does the work?",
    answer:
      "We do. Autumn is a small team, so the person who writes your ads is the person who answers when you write back. Nothing new lands on your front desk and there is nothing for your staff to learn.",
  },
  {
    id: "contract",
    question: "Am I signing anything long?",
    answer:
      "No. There is no long-term contract and there are no fixed fees, so there is nothing to be tied into. You get one invoice a month for the bookings we drove, and if you want to stop, you tell us and we stop. An inn that stays because it is locked in is not much of a recommendation.",
  },
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      className={styles.chevron}
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

export function Questions() {
  const [openRows, setOpenRows] = useState(() =>
    FAQS.map((faq) => faq.id === OPEN_ON_MOUNT),
  );
  const mounted = useSyncExternalStore(
    neverChanges,
    hydratedSnapshot,
    serverSnapshot,
  );
  const [animated, setAnimated] = useState(false);

  // Transitions arrive a frame after the collapse above, so the row the reader
  // never asked to close does not animate shut while the page is loading.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggle = (index: number) =>
    setOpenRows((rows) => rows.map((open, i) => (i === index ? !open : open)));

  return (
    <section
      id="questions"
      className={`au-section ${styles.section}`}
      aria-labelledby="questions-title"
    >
      <div className={`au-shell ${styles.grid}`}>
        <div className={styles.left}>
          <SectionHeader
            stacked
            id="questions-title"
            label="QUESTIONS"
            headline={
              <>
                The ones people
                <br />
                actually ask.
              </>
            }
            lead={
              "If yours is not here, it is a short email away. We would rather tell you the numbers don't work for an inn your size than sell you something."
            }
          />
        </div>

        <ul
          role="list"
          className={styles.list}
          data-animated={animated ? "true" : "false"}
        >
          {FAQS.map((faq, index) => {
            // Before mount the answers are open, so the page reads without JS.
            const open = !mounted || openRows[index];
            return (
              <li
                key={faq.id}
                className={styles.row}
                data-open={open ? "true" : "false"}
              >
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    id={`faq-${faq.id}-label`}
                    className={styles.trigger}
                    aria-expanded={open}
                    aria-controls={`faq-${faq.id}-panel`}
                    onClick={() => toggle(index)}
                  >
                    <span className={`au-lead ${styles.question}`}>
                      {faq.question}
                    </span>
                    <Chevron />
                  </button>
                </h3>
                <div
                  id={`faq-${faq.id}-panel`}
                  role="region"
                  aria-labelledby={`faq-${faq.id}-label`}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
