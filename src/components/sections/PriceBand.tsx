import styles from "./PriceBand.module.css";

/**
 * The page's only inverted band, sitting directly below the hero.
 * Three figures, hairline-separated on desktop and stacked on mobile.
 *
 * Direction of money is carried by ink strength plus words, never by hue:
 * the OTA column is recessive (--au-on-ink-muted) and says "leaves your
 * property"; the Autumn columns are full strength and say "stays with you".
 * No motion of any kind — the figures are static text.
 */
const COLUMNS = [
  {
    label: "AN ONLINE TRAVEL AGENT TAKES",
    figure: "15–25%",
    tabular: true,
    recessive: true,
    note: "of every booking they send you. That money leaves your property.",
  },
  {
    label: "AUTUMN TAKES",
    figure: "13%",
    tabular: true,
    recessive: false,
    note: "of the bookings we drive. The other 87% stays with you.",
  },
  {
    label: "THE ADS ARE PAID FOR BY",
    figure: "Us",
    tabular: false,
    recessive: false,
    note: "Every month, out of our own pocket, whether a guest books or not.",
  },
];

export function PriceBand() {
  return (
    <section className={styles.band}>
      <div className="au-shell">
        <p className={`au-label ${styles.lead}`}>WHAT A BOOKING COSTS YOU</p>

        <ul role="list" className={styles.columns}>
          {COLUMNS.map((col) => (
            <li
              key={col.label}
              className={`${styles.col}${
                col.recessive ? ` ${styles.recessive}` : ""
              }`}
            >
              <p className={`au-label ${styles.colLabel}`}>{col.label}</p>
              <p className={`${styles.figure}${col.tabular ? " au-num" : ""}`}>
                {col.figure}
              </p>
              <p className={`au-caption ${styles.colNote}`}>{col.note}</p>
            </li>
          ))}
        </ul>

        <div className={styles.close}>
          <p className={styles.closeLine}>
            If we drive no bookings, your invoice reads nothing. The ad money
            was ours, the work was ours, and 13% of nothing is nothing.
          </p>
          <ul role="list" className={`au-label ${styles.reassure}`}>
            <li>
              NO FIXED FEES
              <span className={styles.sep} aria-hidden="true">
                ·
              </span>
            </li>
            <li>NO AGENCY PREMIUM</li>
            <li>NO LONG-TERM CONTRACT</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
