import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { MAILTO } from "@/lib/site";
import styles from "./Flagship.module.css";

/**
 * §06 Flagship — one white card on the gray band: photograph left, copy right.
 * Desktop stands the three facts up as mini-columns divided by hairlines;
 * mobile lays them down as rows and drops the note under a full-width CTA.
 * The CTA is a mailto: this is an entry point, not an application. No motion.
 */
export function Flagship() {
  return (
    <section className="au-ground-alt au-section">
      <div className="au-shell">
        <div className={styles.card}>
          <Photo
            className={styles.photo}
            src="/images/shack-river.jpg"
            alt="The red West Cornwall covered bridge crossing the river, with a bench on the grass bank"
            width={1800}
            height={1200}
            objectPosition="var(--flagship-photo-pos)"
            sizes="(min-width: 1440px) 544px, (min-width: 900px) 38vw, calc(100vw - 48px)"
          />

          <div className={styles.copy}>
            <p className={`au-label ${styles.eyebrow}`}>THE FLAGSHIP PROGRAM</p>

            <h2 className={styles.headline}>
              <span className={styles.headlineLine}>If you would rather </span>
              we ran the whole thing.
            </h2>

            <p className={`au-lead ${styles.lead}`}>
              Search, plus any of the five, handled together by the same small
              team. There are no fixed fees at all. We take 13% of the bookings
              we drive and nothing else, and the ad spend is still ours.
            </p>

            <ul role="list" className={styles.facts}>
              <li className={styles.fact}>
                <span className={styles.figure}>None</span>
                <span className={`au-label ${styles.factLabel}`}>
                  FIXED FEES
                </span>
              </li>
              <li className={styles.fact}>
                <span className={`au-num ${styles.figure}`}>13%</span>
                <span className={`au-label ${styles.factLabel}`}>
                  OF BOOKINGS DRIVEN
                </span>
              </li>
              <li className={styles.fact}>
                <span className={styles.figure}>Ours</span>
                <span className={`au-label ${styles.factLabel}`}>
                  THE AD SPEND, STILL
                </span>
              </li>
            </ul>

            <div className={styles.cta}>
              <ButtonLink href={MAILTO} variant="primary" arrow>
                Ask Aaryan about Flagship
              </ButtonLink>
              <p className={`au-caption ${styles.note}`}>
                One email. There is no form and no application behind this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
