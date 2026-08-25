import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { Photo } from "@/components/Photo";

import styles from "./page.module.css";

/* Copy is content: every string below is transcribed character-for-character
   from "Article · Desktop 1440" and "Article · Mobile 390" — the · separators
   in the attribution and the straight quotation marks the board sets around
   Ellen's line are the board's, not a normalisation of ours. Strings are held
   in constants so JSX escaping can never alter a glyph.

   Three paragraphs are shorter on the mobile board. Those are the _OPEN /
   _MOBILE / _DESKTOP / _CLOSE runs below, swapped with au-mobile-only and
   au-desktop-only rather than rewritten: mobile shows fewer words, never
   smaller ones. */

const DATE_LABEL = "14 MARCH 2026";
const DATE_MACHINE = "2026-03-14";
const READING_TIME = "9 MIN";

const TITLE = "Why the hospitality stack fragments";

const LEAD =
  "An innkeeper we work with pays nine separate companies to run one fourteen-room building. Here is how that happened, and why none of the nine will fix it.";

const P1 =
  "Ellen runs fourteen rooms in Lower Waterford. To do that she pays for a property management system, a channel manager, a booking engine, a website host, an email tool, a review tool, a rate shopper, a payment processor, and until last year an agency. Nine invoices. One building.";

const P2_OPEN = "None of these companies is badly run. ";
const P2_MOBILE =
  "Each solves a real problem, and each was sold to her by somebody telling the truth.";
const P2_DESKTOP =
  "Each of them solves a real problem, and each of them was sold to her by somebody who was telling the truth.";
const P2_CLOSE =
  " The trouble is that the problems were carved up by software vendors rather than by innkeepers, and the seams between them are exactly where her money goes.";

const HEADING = "Nobody owns the outcome";

const P3_OPEN =
  "Ask any one of the nine whether October was a good month and you will get an answer about their own surface. ";
/* The two examples are desktop only — the mobile board cuts straight to the
   point they illustrate. */
const P3_DESKTOP =
  "The channel manager will tell you about channels. The review tool will tell you about reviews. ";
const P3_CLOSE =
  "Not one of them can tell you whether the building made money, because not one of them is paid on whether it did.";

const QUOTE =
  '"We were paying an agency $1,400 a month and I could never tell you what it bought."';
const QUOTE_ATTRIBUTION = "Ellen Marsh · Rabbit Hill Inn · Lower Waterford, VT";

const P4 =
  "That sentence is the whole problem in one line. A retainer is a promise to be busy, not a promise to work. The vendor is paid the same in a full October and an empty January, so the only thing they are structurally required to produce is a report.";

const P5_OPEN = "We do not think the fix is a tenth company ";
const P5_MOBILE = "promising";
const P5_DESKTOP = "that promises";
const P5_CLOSE =
  " to unify the other nine. It is to be paid on the outcome, so that a month with no bookings costs the innkeeper nothing and costs us everything we spent. That is an uncomfortable way to run a business, and it is the only version of this we could defend to Ellen.";

const BYLINE =
  "Written by Aaryan. If you disagree, the address is at the bottom of the page and he reads them himself.";

const PHOTO_ALT =
  "The red West Cornwall covered bridge crossing the river, with a bench on the grass bank";

export const metadata: Metadata = {
  title: "Why the hospitality stack fragments — Autumn",
  description: LEAD,
};

/**
 * One note from /blog. The whole route is a single centred measure: the head
 * runs to 760, the prose to 680, and neither grows past that however wide the
 * window gets. The photograph is the only full-bleed element on the page.
 * Static — there is no state here and no motion on this route.
 */
export default function WhyTheHospitalityStackFragments() {
  return (
    <PageShell>
      <article>
        <PageHero
          stacked
          label={
            <>
              <time dateTime={DATE_MACHINE}>{DATE_LABEL}</time>
              <span aria-hidden="true"> · </span>
              <span>{READING_TIME}</span>
            </>
          }
          headline={TITLE}
          lead={LEAD}
        />

        <Photo
          className={styles.photo}
          src="/images/shack-river.jpg"
          alt={PHOTO_ALT}
          width={1800}
          height={1200}
          objectPosition="52% 55%"
          sizes="100vw"
        />

        <div className={`au-shell ${styles.body}`}>
          <div className={styles.prose}>
            <p className={`au-body ${styles.para}`}>{P1}</p>

            <p className={`au-body ${styles.para}`}>
              {P2_OPEN}
              <span className="au-mobile-only">{P2_MOBILE}</span>
              <span className="au-desktop-only">{P2_DESKTOP}</span>
              {P2_CLOSE}
            </p>

            <h2 className={`au-sub ${styles.heading}`}>{HEADING}</h2>

            <p className={`au-body ${styles.para}`}>
              {P3_OPEN}
              <span className="au-desktop-only">{P3_DESKTOP}</span>
              {P3_CLOSE}
            </p>

            {/* Rule left, 2px sash black. No card and no tint: the quote is
                marked by the rule alone. */}
            <figure className={styles.quote}>
              <blockquote className={styles.quoteText}>{QUOTE}</blockquote>
              <figcaption className="au-caption">
                {QUOTE_ATTRIBUTION}
              </figcaption>
            </figure>

            <p className={`au-body ${styles.para}`}>{P4}</p>

            <p className={`au-body ${styles.para}`}>
              {P5_OPEN}
              <span className="au-mobile-only">{P5_MOBILE}</span>
              <span className="au-desktop-only">{P5_DESKTOP}</span>
              {P5_CLOSE}
            </p>

            <div className={styles.close}>
              <p className="au-caption">{BYLINE}</p>

              {/* The way back to the index. The board draws no such control,
                  so it takes the site's plain text-link treatment — colour on
                  hover, nothing that moves — and a 44px target. */}
              <Link href="/blog" className={styles.back}>
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  focusable="false"
                  className={styles.backArrow}
                >
                  <path
                    d="M13 8H3M7 3 2 8l5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to all notes</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
