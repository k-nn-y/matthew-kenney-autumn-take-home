import { SectionHeader } from "@/components/SectionHeader";
import styles from "./EverythingElse.module.css";

/**
 * §05 Everything else — white ground, no anchor id.
 *
 * One of the two inverted openers: the SectionHeader becomes the LEFT column
 * and the five service rows stack in the right column. On the board the left
 * column stretches to the height of the row stack and the lead paragraph pins
 * to the bottom of it — that is deliberate, and it is why the lead carries
 * `margin-top: auto` at >=900px.
 *
 * The lead copy is genuinely shorter on the mobile board, so both strings are
 * rendered and the inactive one is `display: none` (which also removes it from
 * the accessibility tree, so nothing is announced twice).
 *
 * No motion anywhere in this section. Static server component.
 */

const SERVICES: { title: string; body: string }[] = [
  {
    title: "A booking engine that looks like your inn",
    body: "Three clicks from a room to a confirmation, on your own domain, in your own colors.",
  },
  {
    title: "A website worth pointing the ads at",
    body: "There is no sense buying the click if the page it lands on was built in 2014.",
  },
  {
    title: "Email that sounds like you wrote it",
    body: "We read a year of your own writing first. Nothing goes out that you would not have sent.",
  },
  {
    title: "Rates that move with your season",
    body: "Leaf season is not March. You keep the final say on every night of the year.",
  },
  {
    title: "Reviews, answered",
    body: "Drafted the same day, in your voice, and never posted until a person has read it.",
  },
];

export function EverythingElse() {
  return (
    <section className={`au-section ${styles.section}`}>
      <div className={`au-shell ${styles.shell}`}>
        <SectionHeader
          stacked
          label="EVERYTHING ELSE"
          headline={
            <>
              Five other things.
              <br />
              Only if you want them.
            </>
          }
          lead={
            <>
              <span className={styles.leadWide}>
                Search is the whole offer, and it stands on its own. These five
                sit beside it. None of them is a condition of any other, and you
                can take one and leave four.
              </span>
              <span className={styles.leadNarrow}>
                Search is the whole offer, and it stands on its own. These five
                sit beside it. You can take one and leave four.
              </span>
            </>
          }
        />

        <ul role="list" className={styles.rows}>
          {SERVICES.map((service) => (
            <li key={service.title} className={styles.row}>
              {/* Decorative slate ring + dot. Slate is a non-text mark only,
                  and the rows carry no meaning in colour, so it is hidden. */}
              <span className={styles.marker} aria-hidden="true">
                <span className={styles.markerDot} />
              </span>
              <div className={styles.rowText}>
                <p className={styles.rowTitle}>{service.title}</p>
                <p className={`au-body ${styles.rowBody}`}>{service.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
