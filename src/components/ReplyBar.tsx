"use client";

import { useEffect, useState } from "react";
import { MAILTO, REPLY_EMAIL } from "@/lib/site";
import styles from "./ReplyBar.module.css";

/**
 * Pins after the hero's own actions scroll out and retires when the footer
 * arrives, so the address is on screen for the whole middle of the page and
 * the two reply routes never compete.
 */
export function ReplyBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("hero-actions");
    const footer = document.querySelector("footer");
    if (!heroActions || !footer) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setShown(visible.size === 0);
      },
      { threshold: 0 },
    );

    observer.observe(heroActions);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.wrap}${shown ? ` ${styles.shown}` : ""}`}
      aria-hidden={!shown}
      inert={!shown}
    >
      <div className={styles.bar}>
        <span className={styles.identity}>
          <span className={styles.address}>{REPLY_EMAIL}</span>
          <span className={styles.note}>He reads these himself</span>
        </span>
        <a
          href={MAILTO}
          className={styles.cta}
          aria-label={`Reply to ${REPLY_EMAIL}`}
        >
          Reply
        </a>
      </div>
    </div>
  );
}
