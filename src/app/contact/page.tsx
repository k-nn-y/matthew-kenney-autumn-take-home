import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { MAILTO, REPLY_EMAIL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Autumn — There is no form on this page",
  description:
    "Autumn is a small team. One of us reads every email that arrives, usually the same day. Nobody will call you, nobody will add you to a sequence, and there is no salesperson to be handed to.",
};

/**
 * /contact — the board draws two columns and no inputs. There is no form
 * anywhere on this site: the address is printed as selectable text, the one
 * control beside it is a mailto, and the right-hand column is the brief you
 * would have typed into fields. Static, no motion.
 */
const ASK: { title: string; body: string }[] = [
  {
    title: "The name of your property",
    body: "That is genuinely enough to start. We will look it up before we reply.",
  },
  {
    title: "How many rooms",
    body: "Below about six rooms the numbers usually do not work, and we would rather tell you that in the first reply than the third.",
  },
  {
    title: "The month that worries you",
    body: "Usually it is March or January. It helps to know which one you are trying to fill.",
  },
];

// The printed address breaks at its "@" and nowhere else. <wbr> inserts no
// character, so selecting the line still copies the exact address — and the
// domain never hard-breaks mid-word in the narrow column below about 1230px,
// where the display type is wider than its track.
const [ADDRESS_LOCAL, ADDRESS_DOMAIN] = REPLY_EMAIL.split("@");

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="CONTACT"
        headline={
          <>
            There is no form
            <br />
            on this page.
          </>
        }
        lead="Autumn is a small team. One of us reads every email that arrives, usually the same day. Nobody will call you, nobody will add you to a sequence, and there is no salesperson to be handed to."
      >
        {/* The hairline above the label is the board's only divider here. */}
        <section className={styles.reply} aria-labelledby="reply-to-a-person">
          <h2
            id="reply-to-a-person"
            className={`au-label ${styles.replyLabel}`}
          >
            REPLY TO A PERSON
          </h2>

          <p className={styles.address}>
            {ADDRESS_LOCAL}@<wbr />
            {ADDRESS_DOMAIN}
          </p>

          <div className={styles.action}>
            <ButtonLink href={MAILTO} variant="primary" arrow>
              Start the email
            </ButtonLink>
          </div>
        </section>
      </PageHero>

      <div className={`au-shell ${styles.page}`}>
        <section className={styles.brief} aria-labelledby="what-to-put-in-it">
          <h2 id="what-to-put-in-it" className={`au-label ${styles.briefLabel}`}>
            WHAT TO PUT IN IT
          </h2>

          <ul role="list" className={styles.rows}>
            {ASK.map((item) => (
              <li key={item.title} className={styles.row}>
                <h3 className={`au-lead ${styles.rowTitle}`}>{item.title}</h3>
                <p className="au-body">{item.body}</p>
              </li>
            ))}
          </ul>

          <p className={`au-caption ${styles.footnote}`}>
            Autumn · New York, NY. If you would rather write to somebody else
            here, say so and Aaryan will pass it along.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
