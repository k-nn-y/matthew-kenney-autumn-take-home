import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Notes — Things we learned running other people’s inns.",
  description:
    "Written when we have something to say, which is not often. No newsletter, no sign-up, nothing gated.",
};

type Note = {
  title: string;
  /** The desktop deck. The clause the mobile board drops is wrapped in
      au-desktop-only, so mobile prints fewer words, never smaller ones. */
  deck: React.ReactNode;
  /** As printed. au-label uppercases it, so the board's caps are CSS. */
  date: string;
  /** Machine-readable form of the same date, for <time>. */
  dateTime: string;
  /** As printed on desktop; the mobile board sets the same string in caps. */
  read: string;
  /** Present only where an article actually exists behind the row. */
  href?: string;
};

/**
 * Four entries, newest first, exactly as the board lists them. Only the first
 * has an article behind it; the other three are drawn as the board draws them
 * but rendered as plain rows, because a link to a page that does not exist is
 * a defect, not a placeholder.
 */
const NOTES: Note[] = [
  {
    title: "Why the hospitality stack fragments",
    deck: (
      <>
        An innkeeper we work with pays nine separate companies to run one
        fourteen-room building.
        <span className="au-desktop-only">
          {" "}
          Here is how that happened, and why none of them will fix it.
        </span>
      </>
    ),
    date: "14 March 2026",
    dateTime: "2026-03-14",
    read: "9 min",
    href: "/blog/why-the-hospitality-stack-fragments",
  },
  {
    title: "What a booking actually costs on each channel",
    deck: "The commission is the part everybody quotes. The placement programmes stacked on top of it are the part nobody does.",
    date: "2 February 2026",
    dateTime: "2026-02-02",
    read: "6 min",
  },
  {
    title: "Nobody searches for your inn by name",
    deck: (
      <>
        Four hundred and eleven distinct searches led to one property last
        October. Eleven
        <span className="au-desktop-only"> of them</span> contained the
        inn&rsquo;s name.
      </>
    ),
    date: "19 December 2025",
    dateTime: "2025-12-19",
    read: "5 min",
  },
  {
    title: "The month we drove nothing",
    deck: (
      <>
        In January we sent one property no bookings at all and invoiced them
        nothing.
        <span className="au-desktop-only">
          {" "}
          What we changed afterwards, and what we did not.
        </span>
      </>
    ),
    date: "7 November 2025",
    dateTime: "2025-11-07",
    read: "7 min",
  },
];

/**
 * /blog — the notes index. One hero and one ruled list, which is the whole
 * board. Static: no filters, no tags, no pagination, and no motion.
 *
 * Desktop puts the date and read time in a right-hand column; mobile lifts the
 * same two marks above the title as a single caps row. That is a reorder, not
 * a restyle, so the DOM is in mobile order and desktop places the meta with
 * grid — the reading order stays the one the mobile board sets.
 */
export default function BlogPage() {
  return (
    <PageShell>
      {/* The board breaks after "learned". At the board's own 60px the second
          line measures ~740px against a 700px column, so it takes a further
          turn here — the break is kept because it is the phrasing, not the
          measure. */}
      <PageHero
        label="WRITING"
        headline={
          <>
            Things we learned
            <br />
            running other people&rsquo;s inns.
          </>
        }
        lead="Written when we have something to say, which is not often. No newsletter, no sign-up, nothing gated."
      />

      <section aria-label="Notes" className={`au-shell ${styles.index}`}>
        <ul role="list" className={styles.list}>
          {NOTES.map((note) => {
            // Same three marks either way; only the wrapper changes.
            const body = (
              <>
                <p className={styles.meta}>
                  <time className="au-label" dateTime={note.dateTime}>
                    {note.date}
                  </time>
                  <span className={`au-label ${styles.read}`}>{note.read}</span>
                </p>
                <h2 className={`au-sub ${styles.title}`}>{note.title}</h2>
                <p className={`au-body ${styles.deck}`}>{note.deck}</p>
              </>
            );

            return (
              <li key={note.title} className={styles.row}>
                {note.href ? (
                  <Link
                    href={note.href}
                    className={`${styles.entry} ${styles.link}`}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={styles.entry}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </PageShell>
  );
}
