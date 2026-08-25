"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { FOOTER_COLUMNS } from "@/lib/nav";
import { MAILTO, REPLY_EMAIL } from "@/lib/site";

import styles from "./SiteFooter.module.css";

/* Split at the "@" only so a narrow phone breaks the address where a reader
   would break it, instead of mid-domain. <wbr> contributes nothing to the
   selection, so copying the printed text still yields REPLY_EMAIL exactly. */
const AT = REPLY_EMAIL.indexOf("@");
const LOCAL_PART = REPLY_EMAIL.slice(0, AT + 1);
const DOMAIN_PART = REPLY_EMAIL.slice(AT + 1);

const CONFIRM_MS = 2000;

/* Printed once per session, for the one reader who opens the console on a
   page about email. The site has exactly one open role and this points at it.
   Module-level, so a client-side route change does not print it again. */
let noted = false;
function noteTheOpening() {
  if (noted || process.env.NODE_ENV === "test") return;
  noted = true;
  console.log(
    "%cWe are hiring one design engineer.%c\nThe role is at /careers/design-engineer. Aaryan reads those himself too.",
    "font-weight:600",
    "font-weight:400",
  );
}

/* Clipboard support is a browser fact, so it is read as an external store
   rather than synced into state: the server and the first client render
   both assume support, and a browser without it corrects itself on hydrate
   without a mismatch. */
const subscribeNever = () => () => {};
const readClipboardSupport = () =>
  typeof navigator.clipboard?.writeText === "function";
const assumeClipboardSupport = () => true;

/* Two sheets, one behind the other — the copy icon, drawn in the page's own
   stroke language (1.6, round caps and joins) rather than imported from an
   icon set with a different hand. */
function CopyIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      className={styles.copyIcon}
    >
      <rect
        x="5.9"
        y="2.2"
        width="7.9"
        height="9.6"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2.2 6.2v5.6a2 2 0 0 0 2 2h5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* The confirmation. Drawn rather than faded in — a check that arrives stroke
   first reads as something completing, which is what just happened. Same 1.6
   hairline, same round caps, so it is the same hand as every other mark. */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      className={styles.checkIcon}
    >
      <path
        d="M3.2 8.6l3.1 3.1 6.5-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * The exit. Ground-alt with a --au-rule hairline above it, exactly as both
 * boards draw it — the page's one inverted band is the price band, and
 * docs/DESIGN.md allows no second one.
 *
 * The address IS the copy control. Every action on this page is a `mailto:`,
 * and on a device with no mail client a mailto does nothing and says nothing
 * — so the address is printed at display size, stays selectable text, and
 * copying it is one press on the thing you were already reading.
 *
 * Client-only because of navigator.clipboard. Without the API the address
 * renders as plain text rather than as a control that cannot do anything;
 * either way it is on screen and selectable, which is the actual fallback.
 */
export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const canCopy = useSyncExternalStore(
    subscribeNever,
    readClipboardSupport,
    assumeClipboardSupport,
  );

  useEffect(() => {
    noteTheOpening();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(REPLY_EMAIL);
    } catch {
      // No clipboard permission or no API: stay inert. The address is printed.
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), CONFIRM_MS);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="au-shell">
        <div className={styles.reply}>
          <div className={styles.replyText}>
            <p className="au-label">REPLY TO A PERSON</p>

            <div className={styles.addressRow}>
              {canCopy ? (
                <button
                  type="button"
                  onClick={handleCopy}
                  className={styles.address}
                  data-copied={copied}
                  aria-label={`Copy the address ${REPLY_EMAIL}`}
                >
                  <span className={styles.addressText}>
                    {LOCAL_PART}
                    <wbr />
                    {DOMAIN_PART}
                  </span>
                  <span className={styles.glyph} data-copied={copied}>
                    <CopyIcon />
                    <CheckIcon />
                  </span>
                </button>
              ) : (
                <p className={styles.address}>
                  <span className={styles.addressText}>
                    {LOCAL_PART}
                    <wbr />
                    {DOMAIN_PART}
                  </span>
                </p>
              )}

              <p
                className={`au-caption ${styles.status}`}
                role="status"
                aria-live="polite"
              >
                {copied ? "Address copied" : ""}
              </p>
            </div>

            <p className={styles.reassurance}>
              He reads these himself, usually the same day. There is no form,
              and nobody will call you.
            </p>
          </div>

          <div className={styles.cta}>
            <ButtonLink href={MAILTO} variant="primary" arrow>
              Start the email
            </ButtonLink>
          </div>
        </div>

        {/* The sitemap. Every route the site has, so no page is reachable
            from the nav menu but orphaned down here. */}
        <nav aria-label="Site" className={styles.sitemap}>
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.label} className={styles.column}>
              <p className={`au-label ${styles.columnLabel}`}>{column.label}</p>
              <ul role="list" className={styles.columnLinks}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.sitemapLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bar}>
          <div className={styles.mark}>
            <Logo width={88} height={13} className={styles.logo} />
            <p className={`au-caption ${styles.place}`}>
              Autumn · New York, NY
            </p>
          </div>
          <p className={`au-caption ${styles.siteLine}`}>
            New York, NY · © 2026
          </p>
          <p className={`au-caption ${styles.copyright}`}>© 2026 Autumn</p>
        </div>
      </div>
    </footer>
  );
}
