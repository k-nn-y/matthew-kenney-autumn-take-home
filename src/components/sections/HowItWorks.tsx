import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import styles from "./HowItWorks.module.css";

/**
 * §03 — How it works. Three plain step columns on white, each opened by a
 * 1.5px sash-black rule. No cards, no icons, no numbers-in-circles: the rule
 * and the STEP label carry the sequence. Mobile stacks the same three
 * columns, each keeping its own rule. Static: the page's one motion moment
 * belongs to §02, the guest-journey rail (docs/ANIMATION_SPEC.md).
 */
const STEPS: {
  step: string;
  title: string;
  body: string;
  part: string;
}[] = [
  {
    step: "STEP 01",
    title: "We learn the property.",
    body: "Where you are, who stays with you, and what a Friday in October is worth. We read your reviews and the listings you compete with.",
    part: "Your part: one call, about half an hour.",
  },
  {
    step: "STEP 02",
    title: "We buy and run the ads.",
    body: "Google Ads, Google Maps and Google Hotel Ads, written in your voice and pointed at your own booking page. Every click is paid for out of our pocket.",
    part: "Your part: nothing at all.",
  },
  {
    step: "STEP 03",
    title: "Guests arrive. One invoice.",
    body: "They book on your own website, so the guest is yours. At the end of the month you get one line for 13% of the bookings we drove.",
    part: "Your part: have the room ready.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className={`au-section ${styles.section}`}
    >
      <div className="au-shell">
        <div className={styles.header}>
          <SectionHeader
            id="how-it-works-title"
            label="HOW IT WORKS"
            headline={
              <>
                Three steps.
                <br />
                None of them yours.
              </>
            }
            lead="You are already the front desk, the breakfast service and the maintenance department. We are not going to add a fourth job and call it software."
          />
        </div>

        {/* An ordered sequence, so an ordered list — the markers are reset
            globally and the visible order lives in the STEP labels. */}
        <Reveal as="ol" role="list" className={styles.steps}>
          {STEPS.map((s) => (
            <li key={s.step} className={styles.step}>
              <p className={`au-label ${styles.stepLabel}`}>{s.step}</p>
              <h3 className={`au-sub ${styles.stepTitle}`}>{s.title}</h3>
              <p className="au-body">{s.body}</p>
              <p className={`au-caption ${styles.part}`}>{s.part}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
