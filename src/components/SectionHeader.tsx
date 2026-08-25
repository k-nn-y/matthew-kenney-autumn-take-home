import styles from "./SectionHeader.module.css";

/**
 * The repeated three-part section opener: a bare letterspaced caps label,
 * a two-line display headline on the left, a lead paragraph on the right.
 * The label carries no rule mark and no section number — both were removed
 * as ornament (docs/DESIGN.md).
 *
 * `stacked` is the §05 / §07 inversion: the header becomes a left column
 * beside a right-hand row stack, so the page does not read as five
 * identical headers.
 */
export function SectionHeader({
  label,
  headline,
  lead,
  id,
  stacked = false,
}: {
  label: string;
  /** Line breaks are compositional — pass the lines, not a \n string. */
  headline: React.ReactNode;
  lead: React.ReactNode;
  id?: string;
  stacked?: boolean;
}) {
  return (
    <div className={stacked ? styles.stacked : styles.row}>
      <p className={`au-label ${styles.label}`}>{label}</p>
      <h2 id={id} className={`au-section-h2 ${styles.headline}`}>
        {headline}
      </h2>
      <p className={`au-lead ${styles.lead}`}>{lead}</p>
    </div>
  );
}
