import styles from "./PageShell.module.css";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/**
 * Every route except the homepage: the board's white nav bar, the page, the
 * shared footer. The homepage composes its own because its nav prints over
 * the hero photograph instead of sitting on a ground.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </>
  );
}
