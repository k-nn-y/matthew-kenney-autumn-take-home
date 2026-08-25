import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { MAILTO, REPLY_EMAIL } from "@/lib/site";
import styles from "./page.module.css";

/**
 * /careers/design-engineer — the one open role, in full.
 *
 * The board opens this page differently from every other route: label,
 * headline, the three facts a candidate actually screens on, and the apply
 * action, with no lead paragraph. That is why it composes its own opener
 * instead of <PageHero> — the h1 is emitted here, once.
 *
 * The apply action is a `mailto:`. There is no form and no applicant tracking
 * system behind it, which is the whole point the copy is making, so the page
 * stays static and works with JavaScript off.
 */

export const metadata: Metadata = {
  title: "Design Engineer — You would design it and you would write it.",
  description:
    "You would own how Autumn looks and how it is built. Three surfaces: this marketing site, the booking pages a guest actually lands on, and the weekly report an innkeeper reads on their phone over breakfast. Product · New York · On site.",
};

/** Desktop prints the values in one separated row; mobile labels each one. */
const FACTS: { label: string; value: string }[] = [
  { label: "TEAM", value: "Product" },
  { label: "WHERE", value: "New York · On site" },
  { label: "PAY", value: "$XXX,XXX – $XXX,XXX + equity" },
];

/** The contents rail, and the anchors it points at. Desktop only. */
const SECTIONS: { id: string; title: string }[] = [
  { id: "the-job", title: "The job" },
  { id: "how-we-hire", title: "How we hire" },
  { id: "what-we-will-not-ask", title: "What we will not ask you to do" },
];

/** An ordered process, so an ordered list. The visible numerals are copy. */
const HIRING_STEPS: { title: string; body: string }[] = [
  {
    title: "1 · You email Aaryan",
    body: "No form, no portal, no cover letter. A link to something you made and a sentence about why is plenty.",
  },
  {
    title: "2 · A call, about an hour",
    body: "A couple of us, once. We will show you the actual codebase and the actual numbers.",
  },
  {
    title: "3 · A paid day of real work",
    body: "One day, paid at your rate, on a problem we actually have. If you would rather not, we will decide without it.",
  },
  {
    title: "4 · An answer inside a week",
    body: "Either way, from a person, with a reason.",
  },
];

export default function DesignEngineerRole() {
  return (
    <PageShell>
      <PageHero label="CAREERS · ONE OPEN ROLE" headline="Design Engineer">
        {/* Term and value, so a description list. Desktop hides the terms
            the way the board does, but only visually — a screen reader
            still hears TEAM / WHERE / PAY at either width. */}
        <dl className={styles.facts}>
          {FACTS.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={`au-label ${styles.factLabel}`}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <ButtonLink
          href={MAILTO}
          variant="primary"
          arrow
          className={styles.apply}
          aria-label={`Apply by email to ${REPLY_EMAIL}`}
        >
          Apply by email
        </ButtonLink>
      </PageHero>

      <section className={styles.body}>
        <div className={`au-shell ${styles.bodyGrid}`}>
          <nav className={styles.toc} aria-label="On this page">
            <p className={`au-label ${styles.tocLabel}`}>ON THIS PAGE</p>
            <ul role="list" className={styles.tocList}>
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 id="the-job" className={`au-sub ${styles.h2}`}>
              The job
            </h2>
            <p className={`au-lead ${styles.prose} ${styles.proseTight}`}>
              You would own how Autumn looks and how it is built. That is three
              surfaces: this marketing site, the booking pages a guest actually
              lands on, and the weekly report an innkeeper reads on their phone
              over breakfast. All three matter, and the third one matters most.
            </p>
            <p className={`au-lead ${styles.prose} ${styles.proseBreak}`}>
              You would design it and you would write it. React, TypeScript,
              Tailwind. Nobody here hands a file to somebody else to build.
            </p>

            <h2
              id="how-we-hire"
              className={`au-sub ${styles.h2} ${styles.h2Ruled}`}
            >
              How we hire
            </h2>
            <ol role="list" className={styles.steps}>
              {HIRING_STEPS.map((step) => (
                <li key={step.title} className={styles.step}>
                  <p className={`au-lead ${styles.stepTitle}`}>{step.title}</p>
                  <p className="au-body">{step.body}</p>
                </li>
              ))}
            </ol>

            <h2
              id="what-we-will-not-ask"
              className={`au-sub ${styles.h2} ${styles.h2Ruled}`}
            >
              What we will not ask you to do
            </h2>
            <p className={`au-lead ${styles.prose}`}>
              No unpaid take-home. No whiteboard algorithm. No panel of six. No
              &quot;culture fit&quot; round. If we cannot decide from a
              conversation, your work and one paid day, that is our failure and
              not yours.
            </p>

            <p className={styles.backRow}>
              <Link href="/careers" className={styles.back}>
                Back to careers
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
