import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { CountTo } from "@/components/CountTo";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { MAILTO } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autumn — There is one price.",
  description:
    "No plans, no tiers, no setup fee, and no invoice at all in a month where we drove nothing. Autumn takes 13% of the bookings we drive, and the Google ad spend is ours.",
};

/**
 * The five lines of the ink band. Every one of them is a fee Autumn does not
 * charge, which is why the value column is the recessive ink and the term is
 * the strong one: the reader is meant to scan the left column, not the right.
 */
const FEES: { term: React.ReactNode; value: string }[] = [
  { term: "Setup fee", value: "None" },
  { term: "Monthly retainer", value: "None" },
  { term: "Google ad spend", value: "Paid by us" },
  {
    // The mobile board publishes the shorter term. Fewer words, same size.
    term: (
      <>
        Agency premium
        <span className="au-desktop-only">{" on the ads"}</span>
      </>
    ),
    value: "None",
  },
  { term: "Long-term contract", value: "None" },
];

type Measure = {
  /** Visible on the mobile card, read out — and only read out — on desktop. */
  label: string;
  value: React.ReactNode;
  /** The zero month: no bookings means no money, so the figure recedes. */
  muted?: true;
  /** The mobile board drops this column from the zero card entirely. */
  desktopOnly?: true;
  /** A sentence rather than a figure, so it is set in prose, not numerals. */
  note?: true;
};

const MONTHS: { month: string; zero?: true; measures: Measure[] }[] = [
  {
    month: "Rabbit Hill Inn · October",
    measures: [
      { label: "BOOKINGS WE DROVE", value: "11" },
      { label: "WORTH", value: "$5,340" },
      { label: "YOUR INVOICE", value: "$694" },
      { label: "STAYED WITH YOU", value: "$4,646" },
    ],
  },
  {
    month: "The Norwich Inn · leaf season",
    measures: [
      { label: "BOOKINGS WE DROVE", value: "23" },
      { label: "WORTH", value: "$11,160" },
      { label: "YOUR INVOICE", value: "$1,451" },
      { label: "STAYED WITH YOU", value: "$9,709" },
    ],
  },
  {
    month: "Deerfield House · February",
    measures: [
      { label: "BOOKINGS WE DROVE", value: "4" },
      { label: "WORTH", value: "$1,940" },
      { label: "YOUR INVOICE", value: "$252" },
      { label: "STAYED WITH YOU", value: "$1,688" },
    ],
  },
  {
    month: "Deerfield House · the January before that",
    zero: true,
    measures: [
      { label: "BOOKINGS WE DROVE", value: "0", muted: true },
      { label: "WORTH", value: "$0", muted: true, desktopOnly: true },
      { label: "YOUR INVOICE", value: "$0" },
      {
        label: "STAYED WITH YOU",
        note: true,
        // The board writes the desktop cell tight and the mobile line whole.
        value: (
          <>
            <span className="au-desktop-only">No invoice sent</span>
            <span className="au-mobile-only">No invoice was sent at all.</span>
          </>
        ),
      },
    ],
  },
];

/** The desktop column heads, in grid order. Decoration — see the markup. */
const COLUMNS = [
  "THE MONTH",
  "BOOKINGS WE DROVE",
  "WHAT THEY WERE WORTH",
  "YOUR INVOICE",
  "STAYED WITH YOU",
];

const PRICE_FAQS: { question: string; answer: string }[] = [
  {
    question: "How do you know a booking came from you?",
    answer:
      "A click we paid for, then a reservation on your own site inside thirty days. You can see every one of them, with the date and the click that led to it.",
  },
  {
    question: "What if a guest cancels?",
    answer:
      "It comes off the invoice. We are paid on stays, not on reservations.",
  },
  {
    question: "Can I stop?",
    answer:
      "Any month, by email, with no notice period. We keep running the ads until the end of the month we are in and then we stop.",
  },
];

/**
 * /pricing — one rate, and the arithmetic that follows from it.
 *
 * Four parts, in the board's order: the opener, the ink band that states the
 * rate and lists the fees that do not exist, four worked months, and the gray
 * closing band that pairs the Flagship offer with the questions the price
 * raises. There are no tiers to compare, so there is no plan ladder here and
 * nothing that could be mistaken for one.
 *
 * Static server component. Nothing on this page has state and nothing moves.
 */
export default function PricingPage() {
  return (
    <PageShell>
      <div className={styles.hero}>
        <PageHero
          label="PRICING"
          headline={
            <>
              There is one price.
              <br />
              You only pay it when a guest books.
            </>
          }
          lead="No plans, no tiers, no setup fee, and no invoice at all in a month where we drove nothing. This page is the whole of it."
        />
      </div>

      {/* The rate. The one inverted ground on the route, and the only place
          on it where a figure is allowed to be this large. */}
      <section className={styles.price}>
        <div className={`au-shell ${styles.priceGrid}`}>
          <div className={styles.priceMain}>
            <p className={`au-label ${styles.priceLabel}`}>AUTUMN TAKES</p>
            {/* Counts down from 100 — all of it — to the 13 Autumn actually
                takes. 100 is not a claim about anyone; it is the whole, which
                is the only honest place to start from on a page that has no
                competitor's number printed on it. The settled 13% is what the
                server renders and what a screen reader is read. */}
            <p className={`au-num ${styles.figure}`}>
              <CountTo from={100} to={13} suffix="%" duration={1100} />
            </p>
            <p className={styles.figureNote}>
              of the bookings we drive. Not of your total revenue — only of the
              reservations that came from work we did.
            </p>
          </div>

          <div className={styles.priceAside}>
            <p className={`au-label ${styles.asideLabel}`}>AND NOTHING ELSE</p>
            {/* Terms and their values: a description list, not a table —
                there is only ever one value per term. */}
            <dl>
              {FEES.map((fee, i) => (
                <div key={i} className={styles.fee}>
                  <dt className={styles.feeTerm}>{fee.term}</dt>
                  <dd className={styles.feeValue}>{fee.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Four worked months. Desktop rules them into columns; mobile lays each
          month down as its own card, because 342px cannot hold five. */}
      <section
        className="au-section"
        aria-labelledby="worked-months-title"
      >
        <div className="au-shell">
          <div className={styles.monthsHeader}>
            <p className={`au-label ${styles.monthsLabel}`}>
              <span className="au-desktop-only">
                {"WHAT THAT LOOKS LIKE "}
              </span>
              ON A REAL MONTH
            </p>
            <h2
              id="worked-months-title"
              className={`au-section-h2 ${styles.monthsHeadline}`}
            >
              Four months at
              <br />
              three different inns.
            </h2>
            <p className="au-lead">
              Including the one where we drove nothing, because that is the
              month worth showing you.
            </p>
          </div>

          {/* Column heads, desktop only. Every figure below carries its own
              label in the markup — hidden from sight at this width, never
              from a screen reader — so this row is decoration and repeating
              it would read each month twice. */}
          <div className={styles.tableHead} aria-hidden="true">
            {COLUMNS.map((column) => (
              <p key={column} className="au-label">
                {column}
              </p>
            ))}
          </div>

          <ul role="list" className={styles.rows}>
            {MONTHS.map((entry) => (
              <li
                key={entry.month}
                className={`${styles.row}${
                  entry.zero ? ` ${styles.rowZero}` : ""
                }`}
              >
                <h3 className={styles.monthName}>{entry.month}</h3>

                {entry.measures.map((measure) => (
                  <div
                    key={measure.label}
                    className={[
                      styles.measure,
                      measure.desktopOnly ? styles.measureDesktopOnly : null,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span
                      className={[
                        "au-label",
                        styles.measureLabel,
                        measure.note ? styles.srOnly : null,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {measure.label}
                    </span>
                    <span
                      className={[
                        measure.note ? styles.measureSentence : "au-num",
                        styles.measureValue,
                        measure.muted ? styles.measureMuted : null,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {measure.value}
                    </span>
                  </div>
                ))}
              </li>
            ))}
          </ul>

          <p className={`au-caption ${styles.footnote}`}>
            {
              'Rounded to the nearest dollar. "Bookings we drove" means a reservation on the inn\'s own site that came from a '
            }
            <span className="au-desktop-only">
              {"Google Ads, Google Maps or Google Hotel Ads "}
            </span>
            {
              "click we paid for. Reservations you would have got anyway are not counted and are not charged."
            }
          </p>
        </div>
      </section>

      {/* The close: the same rate applied to everything, beside the three
          questions the rate itself provokes. */}
      <section
        className={`au-ground-alt au-section ${styles.close}`}
        aria-labelledby="flagship-title"
      >
        <div className={`au-shell ${styles.closeGrid}`}>
          <div className={styles.flagship}>
            <p className={`au-label ${styles.flagshipLabel}`}>
              THE FLAGSHIP PROGRAM
            </p>
            <h2 id="flagship-title" className={styles.flagshipHeadline}>
              The same <span className="au-num">13%</span>,
              <br />
              for everything we do.
            </h2>
            <p className={styles.flagshipLead}>
              Search plus the booking engine, the website, the email, the rates
              and the reviews — handled together by the same small team, at the
              same rate. There are no fixed fees at all, and the ad spend is
              still ours.
            </p>
            <ButtonLink href={MAILTO} variant="primary" arrow>
              Ask Aaryan about Flagship
            </ButtonLink>
          </div>

          <div className={styles.faq}>
            <p className={`au-label ${styles.faqLabel}`}>
              THE THINGS PEOPLE ASK ABOUT THE PRICE
            </p>
            {/* Three answers, all of them already open. There is no disclosure
                here: the page's whole argument is that nothing is hidden. */}
            <ul role="list">
              {PRICE_FAQS.map((faq) => (
                <li key={faq.question} className={styles.faqRow}>
                  <h3 className={`au-lead ${styles.faqQuestion}`}>
                    {faq.question}
                  </h3>
                  <p className={`au-body ${styles.faqAnswer}`}>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
