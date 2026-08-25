"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Arrow } from "./Arrow";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";
import { MORE_LINKS, PRIMARY_LINKS } from "@/lib/nav";
import { MAILTO } from "@/lib/site";
import styles from "./SiteHeader.module.css";

/** Hold the collapse briefly so a diagonal trip to the panel does not close it. */
const CLOSE_DELAY = 140;

/* useLayoutEffect on the client, useEffect on the server. The first chrome
   measurement has to happen before paint: landing on /#how-it-works puts the
   reader below the price band immediately, and a measurement taken after paint
   would show one frame of the bare nav before it corrected. */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      className={styles.chevron}
    >
      <path
        d="M5 8l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Two rules, the same stroke language as every other mark on the site. */
function MenuGlyph() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 6.4h8M4 10.4h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * One header for every route, fixed to the top.
 *
 * On the homepage it starts bare over the hero photograph and becomes the
 * floating frosted bar once the reader is past the price band — `switchAfter`
 * is the id of the sentinel that marks that line. Everywhere else it is the
 * bar from the first pixel.
 *
 * The More menu opens on hover AND on click, closes on Escape, on a pointer
 * down outside it, and on every route change. On a phone there is no room for
 * it, so the whole nav moves into a full-screen overlay behind the second
 * square control.
 */
export function SiteHeader({
  variant = "on-ground",
  switchAfter,
}: {
  variant?: "on-photo" | "on-ground";
  /** Element id whose top edge flips the bare state into the bar. */
  switchAfter?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const [stuck, setStuck] = useState(variant === "on-ground");
  /* Transitions stay off until after the first paint, so arriving already past
     the switch line snaps rather than animating. Scrolling across the line
     later still animates, which is the only time the change means anything. */
  const [settled, setSettled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();
  const overlayId = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  // The bare-to-bar switch. Measuring a sentinel rather than a scroll offset
  // means the line stays correct if the hero or the band ever changes height.
  // A scroll listener rather than an IntersectionObserver, because the
  // sentinel is a zero-height marker and a zero-area box never intersects.
  useIsomorphicLayoutEffect(() => {
    if (!switchAfter) return;
    const sentinel = document.getElementById(switchAfter);
    if (!sentinel) return;

    /* Measured synchronously on the scroll event, like every other
       scroll-driven thing on the site. Deferring to a frame callback means the
       chrome can be left in the wrong state for as long as frames are not
       arriving — and the wrong state here is a transparent nav sitting on a
       white page. */
    let last = 0;
    const measure = () => {
      const now = Date.now();
      if (now - last < 16) return;
      last = now;
      setStuck(sentinel.getBoundingClientRect().top <= 0);
    };

    setStuck(sentinel.getBoundingClientRect().top <= 0);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [switchAfter]);

  // One tick after the first paint, let the chrome animate again.
  useEffect(() => {
    const id = setTimeout(() => setSettled(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Rotating a phone to landscape can cross 900px with the overlay open: the
  // overlay stops being laid out but its scroll lock would survive, leaving a
  // page that cannot be scrolled and no control to release it.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const close = () => {
      if (desktop.matches) setOverlay(false);
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  // The overlay covers the page, so the page behind it must not scroll, and
  // Escape must always get you out.
  useEffect(() => {
    if (!overlay) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOverlay(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    overlayRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [overlay]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuRef.current?.querySelector("button")?.focus();
    };
    // pointerdown, not click: a drag that starts outside should close it too.
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open]);

  // Route change closes both. Adjusting state during render rather than in an
  // effect: React re-runs this component before committing, so neither menu is
  // ever painted over the page it just navigated to.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
    if (overlay) setOverlay(false);
  }

  const isCurrent = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  const bare = variant === "on-photo" && !stuck;

  return (
    <>
      <div
        className={`${styles.dock}${bare ? ` ${styles.flush}` : ""}`}
        data-settled={settled ? "true" : undefined}
      >
        <header className={`${styles.bar}${bare ? "" : ` ${styles.stuck}`}`}>
          <Link href="/" aria-label="Autumn — home" className={styles.logoLink}>
            <Logo width={100} height={15} />
          </Link>

          <div className={styles.group}>
            <nav aria-label="Primary" className={styles.links}>
              {PRIMARY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              <div
                ref={menuRef}
                className={`${styles.menu}${open ? ` ${styles.menuOpen}` : ""}`}
                onPointerEnter={() => {
                  cancelClose();
                  setOpen(true);
                }}
                onPointerLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={styles.menuTrigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpen((wasOpen) => !wasOpen)}
                >
                  More
                  <Chevron />
                </button>

                <div id={panelId} className={styles.panel} inert={!open}>
                  <ul role="list">
                    {MORE_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={styles.panelLink}
                          aria-current={isCurrent(link.href) ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>

            {/* Phone: the menu, then the CTA — which keeps its arrow and
                loses its label. Reading order matches the visual order, so the
                reply is the last thing under the thumb either way. */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Menu"
              aria-expanded={overlay}
              aria-controls={overlayId}
              className={`${styles.square} ${styles.squareQuiet}`}
              onClick={() => setOverlay((wasOpen) => !wasOpen)}
            >
              <MenuGlyph />
            </button>
            <a
              href={MAILTO}
              aria-label="Reply to Aaryan"
              className={`${styles.square} ${styles.squareSolid}`}
            >
              <Arrow size={18} />
            </a>

            <ButtonLink
              href={MAILTO}
              variant={bare ? "primary-on-ink" : "primary"}
              arrow
              arrowSize={14}
              className={styles.textCta}
            >
              Reply to Aaryan
            </ButtonLink>
          </div>
        </header>
      </div>

      {/* The phone menu: everything the desktop nav and its More panel hold,
          on one ground, as the site's own hairline rows. */}
      <div
        ref={overlayRef}
        id={overlayId}
        className={`${styles.overlay}${overlay ? ` ${styles.overlayOpen}` : ""}`}
        inert={!overlay}
      >
        <div className={styles.overlayBar}>
          <Link href="/" aria-label="Autumn — home" className={styles.logoLink}>
            <Logo width={100} height={15} />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            className={`${styles.square} ${styles.squareQuiet}`}
            onClick={() => {
              setOverlay(false);
              menuButtonRef.current?.focus();
            }}
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4.4 4.4l7.2 7.2M11.6 4.4l-7.2 7.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.overlayScroll}>
          <ul role="list" className={styles.overlayList}>
            {PRIMARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.overlayLink}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className={`au-label ${styles.overlayGroupLabel}`}>MORE</p>
          <ul role="list" className={styles.overlayList}>
            {MORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.overlayLink}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.overlayFoot}>
          <ButtonLink href={MAILTO} variant="primary" arrow block>
            Reply to Aaryan
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
