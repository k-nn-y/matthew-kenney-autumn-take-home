import type { Metadata } from "next";
import Link from "next/link";

import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PageShell } from "@/components/PageShell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers — Fewer than ten people run Autumn.",
  description:
    "We hire rarely and slowly. There is one open role, it is the one below, and you would be the only person here doing that job.",
};

/**
 * The four things the job actually is, in the board's order. They are
 * statements rather than section titles, so they stay paragraphs inside a
 * list and do not enter the heading outline.
 */
const ROLE_POINTS: { title: string; body: string }[] = [
  {
    title: "You will write the CSS you specify",
    body: "React, TypeScript, Tailwind. Nobody here hands a file to somebody else to build.",
  },
  {
    title: "You will talk to innkeepers",
    body: "Not through a research team. You will be on the call when someone explains why March is hard.",
  },
  {
    title: "There is no design team to join",
    body: "If that sounds like freedom, apply. If it sounds like being alone, it would not be a kind place to put you.",
  },
  {
    title: "We say the number first",
    body: "The range is in the first email, before you spend an evening on a take-home. We are aware of the irony.",
  },
];

/** The three facts under the closing headline. Three columns, then a stack. */
const FACTS: { label: string; title: string; body: React.ReactNode }[] = [
  {
    label: "THE TEAM",
    title: "Fewer than ten.",
    body: "Small enough that there is no design review and no ticket queue — there is a shared decision about what to do next, and then somebody does it.",
  },
  {
    label: "WHERE",
    title: "New York. In person.",
    body: "We are in New York and this role is on site. When the whole company fits around one table, being in the room is most of how the work happens.",
  },
  {
    label: "THE BUSINESS",
    title: "One sentence long.",
    body: (
      <>
        We buy the ads and take <span className="au-num">13%</span> of the
        bookings we drive. No enterprise tier, no upsell, nothing to explain
        twice.
      </>
    ),
  },
];

/**
 * /careers — the careers index. Hero, the founders' letter, the one open role,
 * and what the place is actually like. Static: the page has no state and no
 * motion beyond the button's own colour transition.
 *
 * The role row is a single next/link to the detail route, so the whole row is
 * one tab stop and one hit area; the Apply chip inside it is styled with the
 * shared button classes but is not a second control.
 */
export default function CareersPage() {
  return (
    <PageShell>
      {/* The board opens 64/68 mobile and 128/112 desktop; PageHero prints
          56/56 and 104/96, so the remainder is added here rather than by
          editing a component three other routes share. */}
      <div className={styles.heroPad}>
        <PageHero
          label="CAREERS"
          headline={
            <>
              Fewer than ten people
              <br />
              run Autumn.
            </>
          }
          lead="We hire rarely and slowly. There is one open role, it is the one below, and you would be the only person here doing that job."
        />
      </div>

      {/* The letter — the one section with no display headline: the label
          carries the section, the prose does the rest. */}
      <section
        aria-labelledby="a-note-from-us"
        className={`au-section au-ground-alt ${styles.letter}`}
      >
        <div className={`au-shell ${styles.letterShell}`}>
          <h2 id="a-note-from-us" className={`au-label ${styles.letterLabel}`}>
            A NOTE FROM US
          </h2>

          <div className={styles.letterBody}>
            <p className={styles.letterLead}>
              We started Autumn because we kept meeting innkeepers who were
              paying a retainer for work nobody could explain to them. The only
              honest way we could think of to sell marketing was to buy the ads
              ourselves and get paid when a guest actually turns up.
            </p>

            {/* The mobile board ends this paragraph two sentences early. */}
            <p className={styles.letterProse}>
              That is the whole company, and it is why there are fewer than ten
              of us rather than forty. It also means you would be doing real
              work in your first week — not shadowing anybody, because nobody
              here already has your job.
              <span className="au-desktop-only">
                {" You will talk to innkeepers. You will see what your work did to their November."}
              </span>
            </p>

            <p className={`au-caption ${styles.signature}`}>
              Aaryan · Autumn · New York
            </p>
          </div>
        </div>
      </section>

      {/* One open role. The label is the section heading — there is no display
          headline above the row on either board. */}
      <section
        aria-labelledby="one-open-role"
        className={`au-section ${styles.roles}`}
      >
        <div className="au-shell">
          <h2 id="one-open-role" className={`au-label ${styles.sectionLabel}`}>
            ONE OPEN ROLE
          </h2>

          <Link href="/careers/design-engineer" className={styles.roleRow}>
            <h3 className={`au-sub ${styles.roleTitle}`}>Design Engineer</h3>
            {/* Desktop draws department and location as two columns; mobile
                sets them as one line. display: contents does the swap without
                printing the string twice. */}
            <span className={styles.roleMeta}>
              <span className={styles.roleDept}>Product</span>
              <span className={styles.roleSep} aria-hidden="true">
                {" · "}
              </span>
              <span className={styles.roleWhere}>New York · On site</span>
            </span>
            <span className={`au-btn au-btn-primary ${styles.apply}`}>
              <span>Apply</span>
              <Arrow />
            </span>
          </Link>

          <div className={styles.roleDetail}>
            <p className={`au-lead ${styles.roleSummary}`}>
              You would own how Autumn looks and how it is built — the marketing
              site, the booking pages our guests land on, and the weekly report
              an innkeeper reads on their phone. Design and code, not one handed
              to the other.
            </p>

            <ul role="list" className={styles.points}>
              {ROLE_POINTS.map((point) => (
                <li key={point.title} className={styles.point}>
                  {/* Ring and dot: a non-text mark, which is the one thing
                      --au-slate is for. */}
                  <span className={styles.mark} aria-hidden="true" />
                  <div className={styles.pointText}>
                    <p className={styles.pointTitle}>{point.title}</p>
                    <p className={styles.pointBody}>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What it is actually like — three facts, each opened by a 1.5px
          sash-black rule, exactly as §03 opens its steps on the homepage. */}
      <section
        aria-labelledby="what-it-is-like"
        className={`au-section au-ground-alt ${styles.life}`}
      >
        <div className="au-shell">
          <p className={`au-label ${styles.sectionLabel}`}>
            WHAT IT IS ACTUALLY LIKE
          </p>
          <h2
            id="what-it-is-like"
            className={`au-section-h2 ${styles.lifeHeadline}`}
          >
            Small on purpose.
            <br />
            Not small by accident.
          </h2>

          <Reveal as="ul" role="list" className={styles.facts}>
            {FACTS.map((fact) => (
              <li key={fact.label} className={styles.fact}>
                <p className="au-label">{fact.label}</p>
                <h3 className={`au-sub ${styles.factTitle}`}>{fact.title}</h3>
                <p className="au-body">{fact.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
