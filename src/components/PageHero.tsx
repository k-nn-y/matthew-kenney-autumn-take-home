import styles from "./PageHero.module.css";

/**
 * The page-level opener, shared by every route that has one. It is an <h1>,
 * once per route — the homepage's h1 lives in its hero and no other page has
 * one.
 *
 * Two layouts, one rhythm. The default puts the lead in a second column, top
 * aligned with the headline. `stacked` keeps the same spacing but runs one
 * column at a prose measure, which is what the long-form pages need — the
 * difference between them is the measure, never the vertical rhythm.
 */
export function PageHero({
  label,
  headline,
  lead,
  stacked = false,
  children,
}: {
  /** ReactNode, not string: some openers carry a date or a reading time. */
  label: React.ReactNode;
  headline: React.ReactNode;
  /** Optional: the role page opens straight into its terms. */
  lead?: React.ReactNode;
  stacked?: boolean;
  /** Anything the opener carries beneath the lead, in the left column. */
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`au-shell ${styles.hero}${stacked ? ` ${styles.stacked}` : ""}`}
    >
      <p className={`au-label ${styles.label}`}>{label}</p>
      <h1 className={`au-section-h2 ${styles.headline}`}>{headline}</h1>
      {lead ? <p className={`au-lead ${styles.lead}`}>{lead}</p> : null}
      {children ? <div className={styles.extra}>{children}</div> : null}
    </div>
  );
}
