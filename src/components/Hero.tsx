import { ButtonLink } from "./Button";
import { HeroScrub } from "./HeroScrub";
import { Photo } from "./Photo";
import { MAILTO } from "@/lib/site";
import styles from "./Hero.module.css";

const SURFACES = ["Google Ads", "Google Maps", "Google Hotel Ads"];

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      {/* The still is the hero. The video layers over it and only appears
          once it can play through, so this is what a reader gets with no
          JavaScript, with reduced motion, or on a metered connection. */}
      <Photo
        className={styles.photo}
        src="/hero/hero-poster.jpg"
        alt="A New England village of clapboard houses along the water, seen from above at the end of an October day"
        width={1920}
        height={1080}
        objectPosition="var(--hero-object-position)"
        sizes="100vw"
        priority
      />
      <HeroScrub heroId="top" />
      <div className={styles.scrimTop} aria-hidden="true" />
      <div className={styles.scrimBottom} aria-hidden="true" />

      <div className={`${styles.content} ${styles.inset}`}>
        <div className={styles.column}>
          <p className={`au-label ${styles.eyebrow}`}>
            For independent inns
            <span className="au-desktop-only"> and small hotels</span>
          </p>
          <h1 className={`au-hero-h1 ${styles.h1}`}>
            We buy the ads.
            <br />
            You pay when a guest books.
          </h1>
          <p className={`au-lead ${styles.lead}`}>
            Autumn runs Google Ads, Google Maps and Google Hotel Ads for
            independent inns. We cover the ad spend ourselves. You pay 13% of
            the bookings we drive — and nothing at all if we drive none.
          </p>
          <div id="hero-actions" className={styles.actions}>
            <ButtonLink href={MAILTO} variant="primary-on-ink" arrow>
              Reply to Aaryan
            </ButtonLink>
            <ButtonLink href="#what-we-do" variant="secondary-on-photo">
              See what we&rsquo;d actually do
            </ButtonLink>
          </div>
          <div className={styles.hairline} />
          <p className={styles.strip}>
            {SURFACES.map((surface, i) => (
              <span key={surface} className={styles.stripRun}>
                {i > 0 ? (
                  <span className={styles.stripSep} aria-hidden="true">
                    &times;
                  </span>
                ) : null}
                <span className={styles.stripItem}>{surface}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
