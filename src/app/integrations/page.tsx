import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { MAILTO } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autumn — You do not have to move anything.",
  description:
    "We connect to whatever you already run. Nothing gets replaced, nothing gets migrated, and if we cannot connect to yours we will say so on the first call.",
};

/**
 * The systems list, exactly as the board sets it out: a label column, a
 * run-on list separated by · , and a closing row that names what we do not
 * touch. The last row is the reason the page exists, so it is written in
 * `body` rather than `ink` — a quieter voice for the promise, not a louder one.
 */
const SYSTEMS: { label: string; systems: string; quiet?: true }[] = [
  {
    label: "PROPERTY MANAGEMENT",
    systems:
      "Cloudbeds · Mews · Little Hotelier · ThinkReservations · innRoad · WebRezPro · RoomKeyPMS · a spreadsheet, which is genuinely fine",
  },
  {
    label: "BOOKING ENGINES",
    systems:
      "SiteMinder · Profitroom · Bookassist · Guestline · your own, if it takes a card and sends a confirmation",
  },
  {
    label: "WHERE THE ADS RUN",
    systems: "Google Ads · Google Business Profile · Google Hotel Ads",
  },
  {
    label: "WE DO NOT TOUCH",
    systems:
      "Your rates, without asking. Your guest list, ever. Your card processing, at all — the money goes from the guest to you and never through us.",
    quiet: true,
  },
];

/**
 * /integrations — what Autumn connects to.
 *
 * Three parts, in the board's order: the page opener, one hairline-ruled
 * stack of label-and-list rows, and a gray closing band that offers the one
 * action the page can honestly offer. Static server component: nothing here
 * has state and nothing here moves.
 */
export default function IntegrationsPage() {
  return (
    <PageShell>
      <PageHero
        label="WHAT WE CONNECT TO"
        headline={
          <>
            You do not have to
            <br />
            move anything.
          </>
        }
        lead="We connect to whatever you already run. Nothing gets replaced, nothing gets migrated, and if we cannot connect to yours we will say so on the first call."
      />

      {/* No heading of its own on either board — the page's h1 names it, and
          inventing an h2 here would be inventing copy. */}
      <section className={styles.systems}>
        <div className="au-shell">
          <ul role="list" className={styles.rows}>
            {SYSTEMS.map((row) => (
              <li key={row.label} className={styles.row}>
                <p className={`au-label ${styles.rowLabel}`}>{row.label}</p>
                <p
                  className={[styles.rowText, row.quiet ? styles.rowQuiet : null]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {row.systems}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="not-listed" className={styles.notListed}>
        <div className={`au-shell ${styles.notListedShell}`}>
          <div className={styles.notListedText}>
            <h2 id="not-listed" className={`au-sub ${styles.notListedTitle}`}>
              Not on the list?
            </h2>
            <p className={styles.notListedBody}>
              Tell us what you run and we will tell you straight away whether it
              works. If it does not, we will say that rather than sell you a
              migration.
            </p>
          </div>

          <div className={styles.cta}>
            <ButtonLink href={MAILTO} variant="primary" arrow>
              Ask Aaryan about Flagship
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
