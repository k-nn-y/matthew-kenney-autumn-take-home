import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { MAILTO, REPLY_EMAIL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autumn — The terms, in the same English as the rest of the site",
  description:
    "This is the agreement between your property and Autumn. It is short on purpose. If any line of it is unclear, that is a fault in the writing and we would like to know.",
};

/**
 * Six numbered clauses, in the order the board sets them out. The number is
 * part of the clause's own title — the board prints "1 · What we do", not a
 * numeral in a gutter — so it stays in the heading string and the page needs
 * no table of contents to be navigable.
 */
const CLAUSES: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "what-we-do",
    title: "1 · What we do",
    body: "We buy and run advertising for your property on Google Ads, Google Maps and Google Hotel Ads. We write the ads, choose the searches, set the bids and pay for the clicks from our own account. You are never invoiced for ad spend.",
  },
  {
    id: "what-you-pay",
    title: "2 · What you pay",
    body: (
      <>
        <span className="au-num">13%</span> of the value of bookings we drive. A
        booking counts as driven when a guest clicks an advertisement we paid
        for and reserves on your own website within thirty days. There is no
        setup fee, no retainer and no minimum. In a month where we drive
        nothing, no invoice is issued.
      </>
    ),
  },
  {
    id: "cancellations",
    title: "3 · Cancellations",
    body: "We are paid on stays, not on reservations. If a guest cancels or does not arrive, that booking comes off your invoice. If it has already been invoiced, it is credited on the next one.",
  },
  {
    id: "your-data",
    title: "4 · Your data",
    body: "Guests are yours. Their names, email addresses and card details go to you and never through us. We do not sell, publish or share your occupancy, revenue or guest data, and we do not use it to advertise any other property. If you leave, we delete what we hold within thirty days and confirm it in writing.",
  },
  {
    id: "ending-it",
    title: "5 · Ending it",
    body: "Either of us can end this in any month, by email, with no notice period and no penalty. We keep the advertising running to the end of the month we are in, invoice for what it drove, and stop. Your Google accounts and listings remain yours.",
  },
  {
    id: "what-we-do-not-promise",
    title: "6 · What we do not promise",
    body: (
      <>
        We do not guarantee a number of bookings. The{" "}
        <span className="au-num">10–20%</span> range published elsewhere on this
        site is what we have seen across the properties we work with, and both
        ends of it are real. Some months are at the bottom of it. One month was
        below it.
      </>
    ),
  },
];

/**
 * /terms — the agreement, at the same reading measure the board draws: one
 * 760px column, centred, with the clauses separated by the page's own
 * hairline rather than by cards. Static, and deliberately unornamented: the
 * only marks on it are the rules between clauses.
 *
 * The opener is the shared PageHero in its stacked form: one measure, the
 * same rhythm as every other route. The label is a ReactNode because the
 * mobile board prints it on two lines with the separator dropped.
 */
export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        stacked
        label={
          <>
            TERMS
            <span className="au-desktop-only"> · </span>
            <br className="au-mobile-only" />
            LAST UPDATED 4 FEBRUARY 2026
          </>
        }
        headline="The terms, in the same English as the rest of the site"
        lead="This is the agreement between your property and Autumn. It is short on purpose. If any line of it is unclear, that is a fault in the writing and we would like to know."
      />

      <div className={`au-shell ${styles.body}`}>
        <div className={styles.measure}>
          {/* A numbered sequence, so an ordered list. Markers are stripped
              globally and the numbers are printed in the titles, so the role
              is what keeps it a list for a screen reader. */}
          <ol role="list" className={styles.clauses}>
            {CLAUSES.map((clause) => (
              <li key={clause.id} className={styles.clause}>
                <h2 id={clause.id} className={`au-sub ${styles.clauseTitle}`}>
                  {clause.title}
                </h2>
                <p className={styles.clauseBody}>{clause.body}</p>
              </li>
            ))}
          </ol>

          <p className={`au-caption ${styles.colophon}`}>
            Autumn · New York, NY. Governed by the laws of the State of New
            York. Questions about any of this go to{" "}
            <a className={styles.mailto} href={MAILTO}>
              {REPLY_EMAIL}
            </a>{" "}
            and are answered by a person.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
