import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { Photo } from "@/components/Photo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Search — Top of Google, paid for by us.",
  description:
    "Google Ads, Google Maps and Google Hotel Ads, run for your inn by people who buy the clicks out of their own pocket.",
};

/**
 * The three Google surfaces, in the order a guest meets them. Each is opened
 * by a 1.5px sash-black rule — the same primitive §03 uses on the homepage,
 * because this is the same kind of claim: a short sequence with no ornament.
 */
const SURFACES: { label: string; title: string; body: string }[] = [
  {
    label: "GOOGLE ADS",
    title: "The search itself",
    body: '"inns near stowe vt with a fireplace" and the four hundred other ways people describe your inn without knowing its name. We write the ads and choose which searches are worth paying for.',
  },
  {
    label: "GOOGLE MAPS",
    title: "The pin on the map",
    body: "Hours, photographs, the road it is actually on, and the questions people leave that nobody has answered since 2019. Kept accurate, without you touching it.",
  },
  {
    label: "GOOGLE HOTEL ADS",
    title: "Your rate, beside theirs",
    body: "Where a guest compares prices, your own nightly rate appears next to the travel agents' — and it is the cheaper one, because nobody is taking a cut of it.",
  },
];

/**
 * /product/search — the template the other seven product pages are cut from.
 * Three frames and no more: the shared page opener, one full-bleed photograph,
 * and a single gray band that names the three surfaces. Entirely static; the
 * page has no control on it, so there is nothing to animate and no client
 * state to keep.
 */
export default function SearchPage() {
  return (
    <PageShell>
      {/* The board opens 56/56 mobile and 120/104 desktop; PageHero prints
          56/56 and 104/96, so the desktop remainder is added here rather than
          by editing a component five other routes share — the same wrapper
          /careers already uses for the same reason. */}
      <div className={styles.heroPad}>
        <PageHero
          label="WHAT WE DO · SEARCH"
          headline={
            <>
              Top of Google,
              <br />
              paid for by us.
            </>
          }
          lead="Google Ads, Google Maps and Google Hotel Ads, run for your inn by people who buy the clicks out of their own pocket."
        />
      </div>

      {/* Full-bleed band between the opener and the gray section. The board's
          own photograph was never exported, and docs/PRODUCT.md is explicit
          that an empty block where a photograph belongs is a bug rather than
          restraint — so this is the establishing shot of the kind of place
          these ads are bought for. */}
      <Photo
        className={styles.plate}
        src="/images/houses-water.jpg"
        alt="An inn among clapboard houses on the shore of a New England lake in October"
        width={1800}
        height={1350}
        objectPosition="50% 62%"
        sizes="100vw"
      />

      <section
        aria-labelledby="three-surfaces-title"
        className="au-ground-alt au-section"
      >
        <div className="au-shell">
          {/* Two parts, not the usual three: the board gives this section a
              label and a headline and lets the columns carry the argument. */}
          <div className={styles.header}>
            <p className={`au-label ${styles.headerLabel}`}>
              THREE PLACES A GUEST LOOKS
            </p>
            <h2
              id="three-surfaces-title"
              className={`au-section-h2 ${styles.headline}`}
            >
              She searches once.
              <br />
              You are in all three.
            </h2>
          </div>

          {/* Three places, not three steps — an unordered list. globals strips
              the markers, so the role has to be restated. */}
          <ul role="list" className={styles.surfaces}>
            {SURFACES.map((surface) => (
              <li key={surface.label} className={styles.surface}>
                <p className="au-label">{surface.label}</p>
                <h3 className={`au-sub ${styles.title}`}>{surface.title}</h3>
                <p className="au-body">{surface.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
